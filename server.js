/*
    ============================================
    SAT PREP WEBSITE - SERVER
    ============================================
    Features:
    - Math and ELA subjects
    - 5 levels per subject (15 questions each)
    - Progress tracking (must pass to unlock next level)
    - 80% required to pass
*/

const express = require('express');
const session = require('express-session');
const bcrypt = require('bcryptjs');
const Database = require('better-sqlite3');
const path = require('path');

const app = express();
const db = new Database('satprep.db');

// ============================================
// CONFIGURATION
// ============================================
const PASS_PERCENTAGE = 80; // Must score 80% or higher to pass

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
    secret: 'your-secret-key-change-this-in-production',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 24 * 60 * 60 * 1000 }
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

// ============================================
// DATABASE TABLES
// ============================================

// Users table
db.exec(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
`);

// User progress table - tracks unlocked levels
db.exec(`
    CREATE TABLE IF NOT EXISTS user_progress (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        subject TEXT NOT NULL,
        current_level INTEGER DEFAULT 1,
        UNIQUE(user_id, subject),
        FOREIGN KEY (user_id) REFERENCES users(id)
    )
`);

// Quiz results table
db.exec(`
    CREATE TABLE IF NOT EXISTS quiz_results (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        subject TEXT NOT NULL,
        level INTEGER NOT NULL,
        score INTEGER NOT NULL,
        total_questions INTEGER NOT NULL,
        percentage INTEGER NOT NULL,
        passed INTEGER DEFAULT 0,
        wrong_answers TEXT,
        quiz_questions TEXT,
        test_name TEXT,
        completed_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id)
    )
`);

// Paused quizzes table - for save/resume functionality
db.exec(`
    CREATE TABLE IF NOT EXISTS paused_quizzes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        subject TEXT NOT NULL,
        level INTEGER NOT NULL,
        question_ids TEXT NOT NULL,
        current_question INTEGER NOT NULL,
        score INTEGER NOT NULL,
        wrong_answers TEXT,
        unanswered TEXT,
        time_remaining INTEGER NOT NULL,
        paused_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id)
    )
`);

// Add new columns if they don't exist (for existing databases)
const columnsToAdd = [
    { table: 'quiz_results', column: 'subject', type: 'TEXT' },
    { table: 'quiz_results', column: 'level', type: 'INTEGER' },
    { table: 'quiz_results', column: 'passed', type: 'INTEGER DEFAULT 0' },
    { table: 'quiz_results', column: 'quiz_questions', type: 'TEXT' },
    { table: 'quiz_results', column: 'test_name', type: 'TEXT' }
];

columnsToAdd.forEach(({ table, column, type }) => {
    try {
        db.exec(`ALTER TABLE ${table} ADD COLUMN ${column} ${type}`);
    } catch (e) { /* Column exists */ }
});

console.log('Database tables created successfully!');

// ============================================
// HELPER FUNCTIONS
// ============================================

function requireLogin(req, res, next) {
    if (req.session.userId) {
        next();
    } else {
        res.redirect('/login.html');
    }
}

// Initialize progress for a new user
function initializeUserProgress(userId) {
    const stmt = db.prepare(`
        INSERT OR IGNORE INTO user_progress (user_id, subject, current_level)
        VALUES (?, ?, 1)
    `);
    stmt.run(userId, 'math');
    stmt.run(userId, 'ela');
}

// Get user's current level for a subject
function getUserLevel(userId, subject) {
    const stmt = db.prepare(`
        SELECT current_level FROM user_progress
        WHERE user_id = ? AND subject = ?
    `);
    const result = stmt.get(userId, subject);
    return result ? result.current_level : 1;
}

// Unlock next level if passed
function checkAndUnlockLevel(userId, subject, level, percentage) {
    if (percentage >= PASS_PERCENTAGE) {
        const currentLevel = getUserLevel(userId, subject);
        if (level === currentLevel && level < 5) {
            const stmt = db.prepare(`
                UPDATE user_progress
                SET current_level = ?
                WHERE user_id = ? AND subject = ?
            `);
            stmt.run(level + 1, userId, subject);
            return true; // Level unlocked
        }
    }
    return false;
}

// Generate test name
function generateTestName(userId, subject, level) {
    const stmt = db.prepare(`
        SELECT COUNT(*) as count FROM quiz_results
        WHERE user_id = ? AND subject = ? AND level = ?
    `);
    const result = stmt.get(userId, subject, level);
    const attemptNumber = (result?.count || 0) + 1;

    const subjectName = subject === 'math' ? 'Math' : 'ELA';
    return `${subjectName} Level ${level} - Attempt ${attemptNumber}`;
}

// ============================================
// ROUTES
// ============================================

app.get('/', (req, res) => {
    if (req.session.userId) {
        res.redirect('/dashboard.html');
    } else {
        res.redirect('/login.html');
    }
});

// Register
app.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ success: false, message: 'All fields are required' });
        }

        if (password.length < 6) {
            return res.status(400).json({ success: false, message: 'Password must be at least 6 characters' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const stmt = db.prepare('INSERT INTO users (username, email, password) VALUES (?, ?, ?)');
        const result = stmt.run(username, email, hashedPassword);

        // Initialize progress for new user
        initializeUserProgress(result.lastInsertRowid);

        req.session.userId = result.lastInsertRowid;
        req.session.username = username;

        res.json({ success: true, message: 'Registration successful!' });

    } catch (error) {
        if (error.message.includes('UNIQUE constraint failed')) {
            res.status(400).json({ success: false, message: 'Username or email already exists' });
        } else {
            console.error('Registration error:', error);
            res.status(500).json({ success: false, message: 'Server error' });
        }
    }
});

// Login
app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const stmt = db.prepare('SELECT * FROM users WHERE username = ?');
        const user = stmt.get(username);

        if (!user) {
            return res.status(400).json({ success: false, message: 'User not found' });
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).json({ success: false, message: 'Incorrect password' });
        }

        // Initialize progress if not exists
        initializeUserProgress(user.id);

        req.session.userId = user.id;
        req.session.username = user.username;

        res.json({ success: true, message: 'Login successful!' });

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// Logout
app.post('/logout', (req, res) => {
    req.session.destroy(() => {
        res.json({ success: true });
    });
});

// Get current user
app.get('/api/user', (req, res) => {
    if (req.session.userId) {
        res.json({ loggedIn: true, username: req.session.username });
    } else {
        res.json({ loggedIn: false });
    }
});

// Get user progress (levels for both subjects)
app.get('/api/progress', requireLogin, (req, res) => {
    try {
        initializeUserProgress(req.session.userId);

        const mathLevel = getUserLevel(req.session.userId, 'math');
        const elaLevel = getUserLevel(req.session.userId, 'ela');

        // Get best scores for each level
        const getBestScores = (subject) => {
            const stmt = db.prepare(`
                SELECT level, MAX(percentage) as best_score,
                       MAX(CASE WHEN passed = 1 THEN 1 ELSE 0 END) as passed
                FROM quiz_results
                WHERE user_id = ? AND subject = ?
                GROUP BY level
            `);
            return stmt.all(req.session.userId, subject);
        };

        res.json({
            success: true,
            progress: {
                math: {
                    currentLevel: mathLevel,
                    levelScores: getBestScores('math')
                },
                ela: {
                    currentLevel: elaLevel,
                    levelScores: getBestScores('ela')
                }
            },
            passPercentage: PASS_PERCENTAGE
        });

    } catch (error) {
        console.error('Get progress error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// Save quiz result
app.post('/api/save-result', requireLogin, (req, res) => {
    try {
        const { subject, level, score, totalQuestions, percentage, wrongAnswers, quizQuestions } = req.body;

        const passed = percentage >= PASS_PERCENTAGE ? 1 : 0;
        const testName = generateTestName(req.session.userId, subject, level);

        // Check if this unlocks a new level
        const levelUnlocked = checkAndUnlockLevel(req.session.userId, subject, level, percentage);

        const stmt = db.prepare(`
            INSERT INTO quiz_results
            (user_id, subject, level, score, total_questions, percentage, passed, wrong_answers, quiz_questions, test_name)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `);

        const result = stmt.run(
            req.session.userId,
            subject,
            level,
            score,
            totalQuestions,
            percentage,
            passed,
            JSON.stringify(wrongAnswers),
            JSON.stringify(quizQuestions),
            testName
        );

        res.json({
            success: true,
            message: 'Result saved!',
            testName,
            resultId: result.lastInsertRowid,
            passed: passed === 1,
            levelUnlocked,
            passPercentage: PASS_PERCENTAGE
        });

    } catch (error) {
        console.error('Save result error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// Get quiz history
app.get('/api/results', requireLogin, (req, res) => {
    try {
        const { subject } = req.query;

        let query = `SELECT * FROM quiz_results WHERE user_id = ?`;
        const params = [req.session.userId];

        if (subject) {
            query += ` AND subject = ?`;
            params.push(subject);
        }

        query += ` ORDER BY completed_at DESC`;

        const stmt = db.prepare(query);
        const results = stmt.all(...params);

        results.forEach(result => {
            result.wrong_answers = JSON.parse(result.wrong_answers || '[]');
            result.quiz_questions = JSON.parse(result.quiz_questions || '[]');
        });

        res.json({ success: true, results });

    } catch (error) {
        console.error('Get results error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// Get single result for review
app.get('/api/result/:id', requireLogin, (req, res) => {
    try {
        const stmt = db.prepare(`
            SELECT * FROM quiz_results
            WHERE id = ? AND user_id = ?
        `);

        const result = stmt.get(req.params.id, req.session.userId);

        if (!result) {
            return res.status(404).json({ success: false, message: 'Result not found' });
        }

        result.wrong_answers = JSON.parse(result.wrong_answers || '[]');
        result.quiz_questions = JSON.parse(result.quiz_questions || '[]');

        res.json({ success: true, result });

    } catch (error) {
        console.error('Get result error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// Get statistics
app.get('/api/stats', requireLogin, (req, res) => {
    try {
        const { subject } = req.query;

        let query = `
            SELECT
                COUNT(*) as total_quizzes,
                AVG(percentage) as average_score,
                MAX(percentage) as best_score,
                SUM(score) as total_correct,
                SUM(total_questions) as total_questions
            FROM quiz_results
            WHERE user_id = ?
        `;
        const params = [req.session.userId];

        if (subject) {
            query += ` AND subject = ?`;
            params.push(subject);
        }

        const stmt = db.prepare(query);
        const stats = stmt.get(...params);

        res.json({
            success: true,
            stats: {
                totalQuizzes: stats.total_quizzes || 0,
                averageScore: Math.round(stats.average_score) || 0,
                bestScore: stats.best_score || 0,
                totalCorrect: stats.total_correct || 0,
                totalQuestions: stats.total_questions || 0
            }
        });

    } catch (error) {
        console.error('Get stats error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// ============================================
// PAUSED QUIZ ENDPOINTS
// ============================================

// Save/update paused quiz
app.post('/api/pause-quiz', requireLogin, (req, res) => {
    try {
        const { id, subject, level, questionIds, currentQuestion, score, wrongAnswers, unanswered, timeRemaining } = req.body;

        if (id) {
            // Update existing paused quiz
            const stmt = db.prepare(`
                UPDATE paused_quizzes
                SET current_question = ?, score = ?, wrong_answers = ?, unanswered = ?,
                    time_remaining = ?, paused_at = CURRENT_TIMESTAMP
                WHERE id = ? AND user_id = ?
            `);
            stmt.run(
                currentQuestion,
                score,
                JSON.stringify(wrongAnswers),
                JSON.stringify(unanswered),
                timeRemaining,
                id,
                req.session.userId
            );
            res.json({ success: true, id });
        } else {
            // Delete any existing paused quiz for same subject/level first
            const deleteStmt = db.prepare(`
                DELETE FROM paused_quizzes
                WHERE user_id = ? AND subject = ? AND level = ?
            `);
            deleteStmt.run(req.session.userId, subject, level);

            // Create new paused quiz
            const stmt = db.prepare(`
                INSERT INTO paused_quizzes
                (user_id, subject, level, question_ids, current_question, score, wrong_answers, unanswered, time_remaining)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
            `);
            const result = stmt.run(
                req.session.userId,
                subject,
                level,
                JSON.stringify(questionIds),
                currentQuestion,
                score,
                JSON.stringify(wrongAnswers),
                JSON.stringify(unanswered),
                timeRemaining
            );
            res.json({ success: true, id: result.lastInsertRowid });
        }
    } catch (error) {
        console.error('Pause quiz error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// Get paused quiz by ID
app.get('/api/paused-quiz/:id', requireLogin, (req, res) => {
    try {
        const stmt = db.prepare(`
            SELECT * FROM paused_quizzes
            WHERE id = ? AND user_id = ?
        `);
        const quiz = stmt.get(req.params.id, req.session.userId);

        if (!quiz) {
            return res.status(404).json({ success: false, message: 'Paused quiz not found' });
        }

        res.json({ success: true, quiz });
    } catch (error) {
        console.error('Get paused quiz error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// Get all paused quizzes for user
app.get('/api/paused-quizzes', requireLogin, (req, res) => {
    try {
        const stmt = db.prepare(`
            SELECT * FROM paused_quizzes
            WHERE user_id = ?
            ORDER BY paused_at DESC
        `);
        const quizzes = stmt.all(req.session.userId);

        res.json({ success: true, quizzes });
    } catch (error) {
        console.error('Get paused quizzes error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// Delete paused quiz
app.delete('/api/paused-quiz/:id', requireLogin, (req, res) => {
    try {
        const stmt = db.prepare(`
            DELETE FROM paused_quizzes
            WHERE id = ? AND user_id = ?
        `);
        stmt.run(req.params.id, req.session.userId);

        res.json({ success: true });
    } catch (error) {
        console.error('Delete paused quiz error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// ============================================
// START SERVER
// ============================================

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('');
    console.log('='.repeat(50));
    console.log('   SAT PREP SERVER IS RUNNING!');
    console.log('='.repeat(50));
    console.log('');
    console.log(`   Open your browser and go to:`);
    console.log(`   http://localhost:${PORT}`);
    console.log('');
    console.log('   Press Ctrl+C to stop the server');
    console.log('='.repeat(50));
});
