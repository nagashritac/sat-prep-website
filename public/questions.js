/*
    ============================================
    SAT PREP - QUESTION BANK
    ============================================
    - Math: 5 levels × 15 questions = 75 questions
    - ELA: 5 levels × 15 questions = 75 questions
    - Each level progressively harder
    - All questions are UNIQUE (no repeats)
*/

const QUESTIONS = {
    // ============================================
    // MATH QUESTIONS
    // ============================================
    math: {
        // LEVEL 1: Basic Arithmetic & Simple Equations
        1: [
            { id: "m1-1", question: "What is 15 + 27?", answers: ["32", "42", "52", "41"], correct: 1, explanation: "15 + 27 = 42" },
            { id: "m1-2", question: "What is 84 - 39?", answers: ["45", "55", "35", "65"], correct: 0, explanation: "84 - 39 = 45" },
            { id: "m1-3", question: "What is 7 × 8?", answers: ["54", "56", "64", "48"], correct: 1, explanation: "7 × 8 = 56" },
            { id: "m1-4", question: "What is 72 ÷ 9?", answers: ["6", "7", "8", "9"], correct: 2, explanation: "72 ÷ 9 = 8" },
            { id: "m1-5", question: "If x + 5 = 12, what is x?", answers: ["5", "6", "7", "8"], correct: 2, explanation: "x = 12 - 5 = 7" },
            { id: "m1-6", question: "If 3x = 18, what is x?", answers: ["3", "5", "6", "9"], correct: 2, explanation: "x = 18 ÷ 3 = 6" },
            { id: "m1-7", question: "What is 25% of 80?", answers: ["15", "20", "25", "40"], correct: 1, explanation: "25% of 80 = 0.25 × 80 = 20" },
            { id: "m1-8", question: "What is 1/2 + 1/4?", answers: ["1/6", "2/6", "3/4", "2/4"], correct: 2, explanation: "1/2 = 2/4, so 2/4 + 1/4 = 3/4" },
            { id: "m1-9", question: "Round 347 to the nearest hundred.", answers: ["300", "340", "350", "400"], correct: 0, explanation: "347 is closer to 300 than 400" },
            { id: "m1-10", question: "What is the value of 5²?", answers: ["10", "15", "20", "25"], correct: 3, explanation: "5² = 5 × 5 = 25" },
            { id: "m1-11", question: "If y - 8 = 15, what is y?", answers: ["7", "17", "23", "27"], correct: 2, explanation: "y = 15 + 8 = 23" },
            { id: "m1-12", question: "What is 0.5 × 100?", answers: ["5", "50", "500", "0.5"], correct: 1, explanation: "0.5 × 100 = 50" },
            { id: "m1-13", question: "How many minutes are in 2 hours?", answers: ["60", "100", "120", "180"], correct: 2, explanation: "2 × 60 = 120 minutes" },
            { id: "m1-14", question: "What is the perimeter of a square with side 5?", answers: ["10", "15", "20", "25"], correct: 2, explanation: "Perimeter = 4 × 5 = 20" },
            { id: "m1-15", question: "If 2x = 14, what is x + 3?", answers: ["7", "10", "14", "17"], correct: 1, explanation: "x = 7, so x + 3 = 10" }
        ],

        // LEVEL 2: Percentages, Basic Geometry, Simple Word Problems
        2: [
            { id: "m2-1", question: "A shirt costs $40. With a 20% discount, what's the sale price?", answers: ["$8", "$20", "$32", "$38"], correct: 2, explanation: "20% of $40 = $8. Sale price = $40 - $8 = $32" },
            { id: "m2-2", question: "What is the area of a rectangle with length 8 and width 5?", answers: ["13", "26", "40", "80"], correct: 2, explanation: "Area = 8 × 5 = 40" },
            { id: "m2-3", question: "If a triangle has a base of 10 and height of 6, what is its area?", answers: ["16", "30", "60", "80"], correct: 1, explanation: "Area = (1/2) × 10 × 6 = 30" },
            { id: "m2-4", question: "A pizza is cut into 8 slices. If you eat 3 slices, what fraction remains?", answers: ["3/8", "5/8", "3/5", "5/3"], correct: 1, explanation: "8 - 3 = 5 slices remain, so 5/8" },
            { id: "m2-5", question: "What is 15% of 200?", answers: ["15", "30", "45", "75"], correct: 1, explanation: "15% of 200 = 0.15 × 200 = 30" },
            { id: "m2-6", question: "If 5 apples cost $3.00, how much do 8 apples cost?", answers: ["$4.00", "$4.50", "$4.80", "$5.00"], correct: 2, explanation: "Each apple = $0.60. 8 × $0.60 = $4.80" },
            { id: "m2-7", question: "A circle has a diameter of 10. What is its radius?", answers: ["2.5", "5", "10", "20"], correct: 1, explanation: "Radius = Diameter ÷ 2 = 10 ÷ 2 = 5" },
            { id: "m2-8", question: "What is 3/5 as a percentage?", answers: ["35%", "53%", "60%", "65%"], correct: 2, explanation: "3/5 = 0.6 = 60%" },
            { id: "m2-9", question: "If x/4 = 7, what is x?", answers: ["11", "21", "28", "35"], correct: 2, explanation: "x = 7 × 4 = 28" },
            { id: "m2-10", question: "A car travels 150 miles in 3 hours. What is its speed?", answers: ["45 mph", "50 mph", "53 mph", "60 mph"], correct: 1, explanation: "Speed = 150 ÷ 3 = 50 mph" },
            { id: "m2-11", question: "What is the supplement of a 65° angle?", answers: ["25°", "65°", "115°", "125°"], correct: 2, explanation: "Supplementary angles sum to 180°. 180 - 65 = 115°" },
            { id: "m2-12", question: "Simplify: 2(x + 4)", answers: ["2x + 4", "2x + 6", "2x + 8", "x + 8"], correct: 2, explanation: "2(x + 4) = 2x + 8" },
            { id: "m2-13", question: "If a bag has 4 red and 6 blue marbles, what's the probability of picking red?", answers: ["2/5", "3/5", "4/6", "6/10"], correct: 0, explanation: "P(red) = 4/10 = 2/5" },
            { id: "m2-14", question: "What is the mean of 10, 15, 20, 25, 30?", answers: ["15", "20", "25", "100"], correct: 1, explanation: "Mean = (10+15+20+25+30)/5 = 100/5 = 20" },
            { id: "m2-15", question: "Convert 0.75 to a fraction in lowest terms.", answers: ["3/4", "7/5", "75/100", "15/20"], correct: 0, explanation: "0.75 = 75/100 = 3/4" }
        ],

        // LEVEL 3: Linear Equations, Functions, Intermediate Geometry
        3: [
            { id: "m3-1", question: "Solve: 3x + 7 = 22", answers: ["3", "5", "7", "15"], correct: 1, explanation: "3x = 15, x = 5" },
            { id: "m3-2", question: "If f(x) = 2x + 3, what is f(5)?", answers: ["8", "10", "13", "15"], correct: 2, explanation: "f(5) = 2(5) + 3 = 10 + 3 = 13" },
            { id: "m3-3", question: "What is the slope of the line y = 4x - 7?", answers: ["-7", "-4", "4", "7"], correct: 2, explanation: "In y = mx + b, m is the slope. Here m = 4" },
            { id: "m3-4", question: "Solve: 2(x - 3) = 10", answers: ["4", "5", "8", "10"], correct: 2, explanation: "2x - 6 = 10, 2x = 16, x = 8" },
            { id: "m3-5", question: "What is the y-intercept of y = -3x + 9?", answers: ["-9", "-3", "3", "9"], correct: 3, explanation: "In y = mx + b, b is the y-intercept. Here b = 9" },
            { id: "m3-6", question: "If g(x) = x² - 1, what is g(4)?", answers: ["7", "15", "16", "17"], correct: 1, explanation: "g(4) = 4² - 1 = 16 - 1 = 15" },
            { id: "m3-7", question: "A triangle has angles 50° and 70°. What is the third angle?", answers: ["50°", "60°", "70°", "120°"], correct: 1, explanation: "180 - 50 - 70 = 60°" },
            { id: "m3-8", question: "Simplify: 5x + 3 - 2x + 7", answers: ["3x + 10", "7x + 10", "3x - 4", "7x - 4"], correct: 0, explanation: "5x - 2x = 3x, 3 + 7 = 10, so 3x + 10" },
            { id: "m3-9", question: "What is √144?", answers: ["11", "12", "13", "14"], correct: 1, explanation: "√144 = 12 because 12 × 12 = 144" },
            { id: "m3-10", question: "If the area of a square is 81, what is the side length?", answers: ["7", "8", "9", "10"], correct: 2, explanation: "Side = √81 = 9" },
            { id: "m3-11", question: "Solve: 4x - 5 = 2x + 9", answers: ["2", "7", "14", "18"], correct: 1, explanation: "4x - 2x = 9 + 5, 2x = 14, x = 7" },
            { id: "m3-12", question: "What is the slope between points (1, 2) and (3, 8)?", answers: ["2", "3", "4", "6"], correct: 1, explanation: "Slope = (8-2)/(3-1) = 6/2 = 3" },
            { id: "m3-13", question: "A price increased from $80 to $100. What is the percent increase?", answers: ["20%", "25%", "80%", "125%"], correct: 1, explanation: "Increase = 20. Percent = 20/80 × 100 = 25%" },
            { id: "m3-14", question: "If 2x + 3y = 12 and y = 2, what is x?", answers: ["2", "3", "4", "6"], correct: 1, explanation: "2x + 6 = 12, 2x = 6, x = 3" },
            { id: "m3-15", question: "What is 2³ × 2²?", answers: ["8", "16", "32", "64"], correct: 2, explanation: "2³ × 2² = 2^(3+2) = 2⁵ = 32" }
        ],

        // LEVEL 4: Systems of Equations, Quadratics, Advanced Geometry
        4: [
            { id: "m4-1", question: "Solve: x + y = 10 and x - y = 4. What is x?", answers: ["3", "5", "7", "10"], correct: 2, explanation: "Adding: 2x = 14, x = 7" },
            { id: "m4-2", question: "Factor: x² - 9", answers: ["(x-3)(x-3)", "(x+3)(x+3)", "(x-3)(x+3)", "(x-9)(x+1)"], correct: 2, explanation: "Difference of squares: x² - 9 = (x-3)(x+3)" },
            { id: "m4-3", question: "What are the solutions to x² = 25?", answers: ["5 only", "-5 only", "5 and -5", "25"], correct: 2, explanation: "x² = 25 means x = ±5" },
            { id: "m4-4", question: "If f(x) = x² - 4x, what is f(3)?", answers: ["-3", "-1", "3", "21"], correct: 0, explanation: "f(3) = 9 - 12 = -3" },
            { id: "m4-5", question: "Solve: 3x + 2y = 13 and x = 3. What is y?", answers: ["1", "2", "3", "4"], correct: 1, explanation: "9 + 2y = 13, 2y = 4, y = 2" },
            { id: "m4-6", question: "What is the vertex of y = (x - 2)² + 3?", answers: ["(2, 3)", "(-2, 3)", "(2, -3)", "(3, 2)"], correct: 0, explanation: "Vertex form y = (x-h)² + k has vertex (h, k) = (2, 3)" },
            { id: "m4-7", question: "Simplify: √50", answers: ["5√2", "2√5", "10√5", "25√2"], correct: 0, explanation: "√50 = √(25×2) = 5√2" },
            { id: "m4-8", question: "In a right triangle with legs 6 and 8, what is the hypotenuse?", answers: ["7", "10", "12", "14"], correct: 1, explanation: "c² = 6² + 8² = 36 + 64 = 100, c = 10" },
            { id: "m4-9", question: "What is the discriminant of x² + 4x + 4?", answers: ["-16", "0", "8", "16"], correct: 1, explanation: "b² - 4ac = 16 - 16 = 0" },
            { id: "m4-10", question: "Solve: x² - 5x + 6 = 0", answers: ["x = 1, 6", "x = 2, 3", "x = -2, -3", "x = -1, 6"], correct: 1, explanation: "Factors to (x-2)(x-3) = 0, so x = 2 or 3" },
            { id: "m4-11", question: "If log₁₀(x) = 2, what is x?", answers: ["2", "10", "20", "100"], correct: 3, explanation: "log₁₀(x) = 2 means 10² = x = 100" },
            { id: "m4-12", question: "What is the area of a circle with radius 5? (Use π ≈ 3.14)", answers: ["15.7", "31.4", "78.5", "157"], correct: 2, explanation: "Area = πr² = 3.14 × 25 = 78.5" },
            { id: "m4-13", question: "Simplify: (x³)(x⁴)", answers: ["x⁷", "x¹²", "2x⁷", "x¹²"], correct: 0, explanation: "x³ × x⁴ = x^(3+4) = x⁷" },
            { id: "m4-14", question: "What is the midpoint between (2, 4) and (8, 10)?", answers: ["(3, 5)", "(5, 7)", "(6, 14)", "(10, 14)"], correct: 1, explanation: "Midpoint = ((2+8)/2, (4+10)/2) = (5, 7)" },
            { id: "m4-15", question: "If sin(θ) = 0.5, what is θ? (in degrees)", answers: ["30°", "45°", "60°", "90°"], correct: 0, explanation: "sin(30°) = 0.5" }
        ],

        // LEVEL 5: Advanced Algebra, Complex Word Problems, SAT-Hard
        5: [
            { id: "m5-1", question: "If f(x) = 3x² - 2x + 1, what is f(-2)?", answers: ["9", "13", "17", "21"], correct: 2, explanation: "f(-2) = 3(4) - 2(-2) + 1 = 12 + 4 + 1 = 17" },
            { id: "m5-2", question: "Solve: |2x - 5| = 9", answers: ["x = 2, 7", "x = -2, 7", "x = 2, -7", "x = -2, -7"], correct: 1, explanation: "2x - 5 = 9 → x = 7; 2x - 5 = -9 → x = -2" },
            { id: "m5-3", question: "A population doubles every 5 years. If it starts at 100, what is it after 15 years?", answers: ["300", "400", "600", "800"], correct: 3, explanation: "After 15 years (3 doublings): 100 → 200 → 400 → 800" },
            { id: "m5-4", question: "What is the sum of the roots of x² - 7x + 12 = 0?", answers: ["3", "4", "7", "12"], correct: 2, explanation: "Sum of roots = -b/a = 7" },
            { id: "m5-5", question: "If 3^x = 81, what is x?", answers: ["2", "3", "4", "5"], correct: 2, explanation: "81 = 3⁴, so x = 4" },
            { id: "m5-6", question: "A 15-foot ladder leans against a wall. If the base is 9 feet from the wall, how high does it reach?", answers: ["6 ft", "10 ft", "12 ft", "18 ft"], correct: 2, explanation: "h² + 9² = 15², h² = 225 - 81 = 144, h = 12" },
            { id: "m5-7", question: "Simplify: (2x - 3)(x + 4)", answers: ["2x² + x - 12", "2x² + 5x - 12", "2x² - 5x - 12", "2x² + 11x - 12"], correct: 1, explanation: "2x² + 8x - 3x - 12 = 2x² + 5x - 12" },
            { id: "m5-8", question: "If the function f(x) = x² is shifted right 3 units, what is the new function?", answers: ["f(x) = x² + 3", "f(x) = x² - 3", "f(x) = (x+3)²", "f(x) = (x-3)²"], correct: 3, explanation: "Shifting right 3 units: f(x) = (x-3)²" },
            { id: "m5-9", question: "What is the product of the roots of 2x² - 5x + 3 = 0?", answers: ["3/2", "5/2", "-3/2", "-5/2"], correct: 0, explanation: "Product of roots = c/a = 3/2" },
            { id: "m5-10", question: "A train leaves at 60 mph. Another leaves 1 hour later at 80 mph. When do they meet?", answers: ["2 hours", "3 hours", "4 hours", "5 hours"], correct: 2, explanation: "60t = 80(t-1), 60t = 80t - 80, 20t = 80, t = 4 hours" },
            { id: "m5-11", question: "What is cos(60°)?", answers: ["0", "1/2", "√2/2", "√3/2"], correct: 1, explanation: "cos(60°) = 1/2" },
            { id: "m5-12", question: "Solve: 2^(x+1) = 32", answers: ["3", "4", "5", "6"], correct: 1, explanation: "32 = 2⁵, so x + 1 = 5, x = 4" },
            { id: "m5-13", question: "The ratio of boys to girls is 3:5. If there are 40 students, how many are boys?", answers: ["12", "15", "18", "25"], correct: 1, explanation: "Boys = (3/8) × 40 = 15" },
            { id: "m5-14", question: "What is the range of f(x) = x² + 1?", answers: ["All real numbers", "y ≥ 0", "y ≥ 1", "y > 1"], correct: 2, explanation: "x² ≥ 0, so x² + 1 ≥ 1. Range is y ≥ 1" },
            { id: "m5-15", question: "If log₂(x) + log₂(4) = 5, what is x?", answers: ["4", "8", "16", "32"], correct: 1, explanation: "log₂(4x) = 5, 4x = 32, x = 8" }
        ]
    },

    // ============================================
    // ELA QUESTIONS
    // ============================================
    ela: {
        // LEVEL 1: Basic Vocabulary & Grammar
        1: [
            { id: "e1-1", question: "Choose the correct word: The dog wagged ___ tail happily.", answers: ["its", "it's", "their", "there"], correct: 0, explanation: "'Its' is the possessive form. 'It's' means 'it is'." },
            { id: "e1-2", question: "Which word is a synonym for 'happy'?", answers: ["sad", "joyful", "angry", "tired"], correct: 1, explanation: "'Joyful' means feeling or expressing great happiness." },
            { id: "e1-3", question: "Choose the correct word: ___ going to the store later.", answers: ["Their", "There", "They're", "Theyre"], correct: 2, explanation: "'They're' is a contraction of 'they are'." },
            { id: "e1-4", question: "Which sentence is correct?", answers: ["The cats is sleeping.", "The cat are sleeping.", "The cats are sleeping.", "The cat were sleeping."], correct: 2, explanation: "Plural subject 'cats' needs plural verb 'are'." },
            { id: "e1-5", question: "What is the antonym of 'begin'?", answers: ["start", "end", "continue", "pause"], correct: 1, explanation: "'End' is the opposite of 'begin'." },
            { id: "e1-6", question: "Which word is spelled correctly?", answers: ["recieve", "beleive", "achieve", "decieve"], correct: 2, explanation: "'Achieve' follows the 'i before e except after c' rule correctly." },
            { id: "e1-7", question: "Choose the correct word: She did ___ than expected on the test.", answers: ["good", "better", "best", "well"], correct: 1, explanation: "'Better' is the comparative form used for comparison." },
            { id: "e1-8", question: "What does 'abundant' mean?", answers: ["scarce", "plentiful", "tiny", "rare"], correct: 1, explanation: "'Abundant' means existing in large quantities; plentiful." },
            { id: "e1-9", question: "Which sentence uses a comma correctly?", answers: ["I like apples, oranges and bananas.", "I like, apples oranges and bananas.", "I like apples oranges, and bananas.", "I like apples, oranges, and bananas."], correct: 3, explanation: "Commas separate items in a list, including before 'and' (Oxford comma)." },
            { id: "e1-10", question: "What is the plural of 'child'?", answers: ["childs", "childes", "children", "childrens"], correct: 2, explanation: "'Children' is the irregular plural of 'child'." },
            { id: "e1-11", question: "Choose the correct word: The book is ___ the table.", answers: ["in", "on", "at", "to"], correct: 1, explanation: "'On' indicates position on a surface." },
            { id: "e1-12", question: "Which word means 'very tired'?", answers: ["energetic", "exhausted", "excited", "eager"], correct: 1, explanation: "'Exhausted' means completely tired out." },
            { id: "e1-13", question: "What is the past tense of 'run'?", answers: ["runned", "ran", "runed", "running"], correct: 1, explanation: "'Ran' is the irregular past tense of 'run'." },
            { id: "e1-14", question: "Which sentence is a question?", answers: ["She went home", "Did she go home", "She went home.", "She is going home"], correct: 1, explanation: "Questions typically start with question words or auxiliary verbs." },
            { id: "e1-15", question: "What does 'brief' mean?", answers: ["long", "short", "wide", "narrow"], correct: 1, explanation: "'Brief' means lasting only a short time; short." }
        ],

        // LEVEL 2: Sentence Structure & Context Clues
        2: [
            { id: "e2-1", question: "The scientist was METICULOUS in her research, checking every detail carefully. What does 'meticulous' mean?", answers: ["careless", "thorough", "quick", "lazy"], correct: 1, explanation: "Context clue: 'checking every detail carefully' suggests thoroughness." },
            { id: "e2-2", question: "Which sentence has correct subject-verb agreement?", answers: ["The team are playing well.", "The team is playing well.", "The teams is playing well.", "The team be playing well."], correct: 1, explanation: "'Team' is a collective noun treated as singular in American English." },
            { id: "e2-3", question: "Choose the sentence with parallel structure:", answers: ["She likes swimming, to run, and biking.", "She likes swimming, running, and biking.", "She likes to swim, running, and biking.", "She likes swimming, runs, and to bike."], correct: 1, explanation: "Parallel structure uses the same grammatical form for all items." },
            { id: "e2-4", question: "The MUNDANE tasks of daily life bored him. What does 'mundane' mean?", answers: ["exciting", "ordinary", "difficult", "interesting"], correct: 1, explanation: "Context clue: 'bored him' suggests something ordinary or routine." },
            { id: "e2-5", question: "Which is a compound sentence?", answers: ["Running quickly.", "She ran to the store.", "She ran to the store, and he stayed home.", "Although she ran to the store."], correct: 2, explanation: "A compound sentence has two independent clauses joined by a conjunction." },
            { id: "e2-6", question: "The ENIGMATIC stranger spoke in riddles. What does 'enigmatic' mean?", answers: ["friendly", "mysterious", "talkative", "simple"], correct: 1, explanation: "Context clue: 'spoke in riddles' suggests mystery." },
            { id: "e2-7", question: "Which sentence uses the semicolon correctly?", answers: ["I went to the store; bought milk.", "I went to the store; I bought milk.", "I went; to the store I bought milk.", "I; went to the store and bought milk."], correct: 1, explanation: "Semicolons connect two related independent clauses." },
            { id: "e2-8", question: "Her ELOQUENT speech moved the audience to tears. What does 'eloquent' mean?", answers: ["boring", "quiet", "persuasive and fluent", "short"], correct: 2, explanation: "Context clue: 'moved the audience' suggests powerful, fluent speaking." },
            { id: "e2-9", question: "Which is a complex sentence?", answers: ["She ran.", "She ran and jumped.", "When she ran, he followed.", "She ran. He followed."], correct: 2, explanation: "A complex sentence has an independent and dependent clause." },
            { id: "e2-10", question: "The NOVICE player made many mistakes. What does 'novice' mean?", answers: ["expert", "beginner", "professional", "talented"], correct: 1, explanation: "Context clue: 'made many mistakes' suggests inexperience." },
            { id: "e2-11", question: "Choose the correct pronoun: Neither of the boys brought ___ homework.", answers: ["their", "his", "its", "them"], correct: 1, explanation: "'Neither' is singular and refers to boys, so use 'his'." },
            { id: "e2-12", question: "The judge remained IMPARTIAL during the trial. What does 'impartial' mean?", answers: ["biased", "angry", "fair and unbiased", "confused"], correct: 2, explanation: "A judge should be fair and not favor either side." },
            { id: "e2-13", question: "Which sentence has a dangling modifier?", answers: ["Walking to school, I saw a bird.", "Walking to school, the bird sang.", "I saw a bird walking to school.", "The bird sang as I walked."], correct: 1, explanation: "The bird wasn't walking to school; the modifier dangles." },
            { id: "e2-14", question: "The FRUGAL shopper always looked for deals. What does 'frugal' mean?", answers: ["wasteful", "economical", "wealthy", "careless"], correct: 1, explanation: "Context clue: 'looked for deals' suggests being careful with money." },
            { id: "e2-15", question: "Which transition shows contrast?", answers: ["furthermore", "however", "additionally", "therefore"], correct: 1, explanation: "'However' introduces a contrasting idea." }
        ],

        // LEVEL 3: Reading Comprehension & Inference
        3: [
            { id: "e3-1", question: "Read: 'Maria slammed the door and threw her backpack on the floor.' How does Maria likely feel?", answers: ["happy", "calm", "angry", "tired"], correct: 2, explanation: "Slamming and throwing indicate frustration or anger." },
            { id: "e3-2", question: "The author uses the phrase 'a sea of faces' to describe the crowd. This is an example of:", answers: ["simile", "metaphor", "personification", "hyperbole"], correct: 1, explanation: "A metaphor compares without using 'like' or 'as'." },
            { id: "e3-3", question: "Which sentence contains a simile?", answers: ["The wind howled.", "Her smile was sunshine.", "He ran like the wind.", "Time flies."], correct: 2, explanation: "A simile uses 'like' or 'as' to compare." },
            { id: "e3-4", question: "'The old house groaned in the wind.' This is an example of:", answers: ["simile", "metaphor", "personification", "alliteration"], correct: 2, explanation: "Personification gives human qualities to non-human things." },
            { id: "e3-5", question: "In a persuasive essay, the author's main goal is to:", answers: ["entertain readers", "inform readers", "convince readers", "confuse readers"], correct: 2, explanation: "Persuasive writing aims to convince the reader of a viewpoint." },
            { id: "e3-6", question: "Read: 'Tom checked his watch for the tenth time and tapped his foot.' Tom is probably feeling:", answers: ["relaxed", "impatient", "sad", "confused"], correct: 1, explanation: "Repeatedly checking the time and tapping suggest impatience." },
            { id: "e3-7", question: "'Peter Piper picked a peck of pickled peppers.' This is an example of:", answers: ["metaphor", "simile", "alliteration", "onomatopoeia"], correct: 2, explanation: "Alliteration is the repetition of initial consonant sounds." },
            { id: "e3-8", question: "The main idea of a paragraph is:", answers: ["the first sentence", "a supporting detail", "the central point", "the last sentence"], correct: 2, explanation: "The main idea is the central point the paragraph makes." },
            { id: "e3-9", question: "A reliable source for a research paper would be:", answers: ["a random blog", "a peer-reviewed journal", "a social media post", "an anonymous website"], correct: 1, explanation: "Peer-reviewed journals are verified by experts." },
            { id: "e3-10", question: "Read: 'Despite the rain, the game continued.' The word 'despite' suggests:", answers: ["because of", "in addition to", "in contrast to", "as a result of"], correct: 2, explanation: "'Despite' indicates something happened contrary to expectations." },
            { id: "e3-11", question: "Which is an example of a fact?", answers: ["Pizza is delicious.", "Water freezes at 32°F.", "Blue is the best color.", "Summer is the best season."], correct: 1, explanation: "Facts can be proven; opinions are personal views." },
            { id: "e3-12", question: "The tone of a piece of writing refers to:", answers: ["the topic discussed", "the author's attitude", "the number of words", "the paragraph length"], correct: 1, explanation: "Tone reflects the author's attitude toward the subject." },
            { id: "e3-13", question: "Read: 'Sarah had butterflies in her stomach before the performance.' This means Sarah felt:", answers: ["hungry", "sick", "nervous", "angry"], correct: 2, explanation: "'Butterflies in stomach' is an idiom meaning nervousness." },
            { id: "e3-14", question: "A thesis statement typically appears:", answers: ["at the end of the essay", "in the introduction", "in every paragraph", "only in conclusions"], correct: 1, explanation: "The thesis statement introduces the main argument in the introduction." },
            { id: "e3-15", question: "'Buzz,' 'hiss,' and 'bang' are examples of:", answers: ["metaphor", "alliteration", "onomatopoeia", "hyperbole"], correct: 2, explanation: "Onomatopoeia words imitate the sounds they describe." }
        ],

        // LEVEL 4: Advanced Analysis & Rhetoric
        4: [
            { id: "e4-1", question: "An author includes statistics in an argument to:", answers: ["entertain the reader", "provide emotional appeal", "add credible evidence", "confuse the reader"], correct: 2, explanation: "Statistics provide factual, credible support for arguments." },
            { id: "e4-2", question: "Ethos in persuasive writing appeals to:", answers: ["emotion", "logic", "credibility", "humor"], correct: 2, explanation: "Ethos establishes the author's credibility and trustworthiness." },
            { id: "e4-3", question: "Pathos in persuasive writing appeals to:", answers: ["emotion", "logic", "credibility", "facts"], correct: 0, explanation: "Pathos appeals to the reader's emotions." },
            { id: "e4-4", question: "Logos in persuasive writing appeals to:", answers: ["emotion", "logic", "credibility", "tradition"], correct: 1, explanation: "Logos uses logic and reasoning to persuade." },
            { id: "e4-5", question: "A counterargument in an essay:", answers: ["weakens the author's position", "acknowledges opposing views", "should be avoided", "is the main point"], correct: 1, explanation: "Addressing counterarguments strengthens the essay by showing awareness." },
            { id: "e4-6", question: "The phrase 'the world will little note, nor long remember' uses:", answers: ["alliteration", "parallelism", "hyperbole", "irony"], correct: 1, explanation: "Parallelism uses similar grammatical structures for effect." },
            { id: "e4-7", question: "Situational irony occurs when:", answers: ["words mean the opposite", "the audience knows more", "the outcome is unexpected", "characters speak ironically"], correct: 2, explanation: "Situational irony is when events turn out differently than expected." },
            { id: "e4-8", question: "A red herring in an argument is:", answers: ["a strong point", "an irrelevant distraction", "solid evidence", "a logical conclusion"], correct: 1, explanation: "A red herring distracts from the main issue." },
            { id: "e4-9", question: "Which is an example of an ad hominem fallacy?", answers: ["The evidence clearly shows...", "You can't trust him because he's young.", "Research indicates that...", "Experts agree that..."], correct: 1, explanation: "Ad hominem attacks the person, not the argument." },
            { id: "e4-10", question: "The author's purpose can be to inform, persuade, or:", answers: ["confuse", "entertain", "bore", "mislead"], correct: 1, explanation: "The three main purposes are: inform, persuade, entertain." },
            { id: "e4-11", question: "A straw man fallacy involves:", answers: ["using statistics", "misrepresenting someone's argument", "citing experts", "providing examples"], correct: 1, explanation: "A straw man misrepresents an argument to make it easier to attack." },
            { id: "e4-12", question: "Verbal irony is when:", answers: ["events are unexpected", "the audience knows more", "words convey the opposite meaning", "actions contradict words"], correct: 2, explanation: "Verbal irony says one thing but means another." },
            { id: "e4-13", question: "An anecdote in an essay serves to:", answers: ["provide data", "illustrate a point with a story", "list facts", "define terms"], correct: 1, explanation: "Anecdotes are brief stories that illustrate a point." },
            { id: "e4-14", question: "Which shows cause and effect?", answers: ["although", "however", "consequently", "furthermore"], correct: 2, explanation: "'Consequently' shows that one thing resulted from another." },
            { id: "e4-15", question: "Dramatic irony occurs when:", answers: ["words mean the opposite", "the audience knows more than characters", "events are unexpected", "humor is used"], correct: 1, explanation: "Dramatic irony is when the audience knows something characters don't." }
        ],

        // LEVEL 5: SAT-Level Reading & Writing
        5: [
            { id: "e5-1", question: "The author's use of short, choppy sentences creates a sense of:", answers: ["calmness", "urgency", "boredom", "confusion"], correct: 1, explanation: "Short sentences create tension, urgency, or emphasis." },
            { id: "e5-2", question: "Which best describes the author's tone if they write 'This so-called solution is laughable'?", answers: ["admiring", "neutral", "sarcastic", "joyful"], correct: 2, explanation: "'So-called' and 'laughable' indicate sarcasm and criticism." },
            { id: "e5-3", question: "A synthesis essay requires the writer to:", answers: ["summarize one source", "combine ideas from multiple sources", "write a personal narrative", "avoid using sources"], correct: 1, explanation: "Synthesis combines information from multiple sources." },
            { id: "e5-4", question: "The UBIQUITOUS presence of smartphones has changed society. 'Ubiquitous' means:", answers: ["rare", "expensive", "everywhere", "dangerous"], correct: 2, explanation: "'Ubiquitous' means present, appearing, or found everywhere." },
            { id: "e5-5", question: "An author uses an extended metaphor to:", answers: ["confuse readers", "develop a comparison throughout the text", "list facts", "provide statistics"], correct: 1, explanation: "Extended metaphors develop a comparison throughout a text." },
            { id: "e5-6", question: "The PARADIGM shift in scientific thinking revolutionized the field. 'Paradigm' means:", answers: ["minor", "model or pattern", "problem", "solution"], correct: 1, explanation: "A paradigm is a typical example or pattern of something." },
            { id: "e5-7", question: "Which sentence demonstrates concision?", answers: ["Due to the fact that it was raining, we stayed inside.", "Because it was raining, we stayed inside.", "It was raining outside, so because of that, we stayed inside.", "We stayed inside due to the rain that was falling."], correct: 1, explanation: "Concision uses the fewest words to express an idea clearly." },
            { id: "e5-8", question: "The politician's RHETORIC swayed the voters. 'Rhetoric' refers to:", answers: ["honesty", "persuasive language", "lies", "statistics"], correct: 1, explanation: "Rhetoric is the art of effective or persuasive speaking or writing." },
            { id: "e5-9", question: "An author who acknowledges limitations of their argument demonstrates:", answers: ["weakness", "intellectual honesty", "confusion", "poor writing"], correct: 1, explanation: "Acknowledging limitations shows fairness and strengthens credibility." },
            { id: "e5-10", question: "The EPHEMERAL nature of fame was the essay's theme. 'Ephemeral' means:", answers: ["lasting forever", "short-lived", "important", "widespread"], correct: 1, explanation: "'Ephemeral' means lasting for a very short time." },
            { id: "e5-11", question: "Which revision improves clarity? Original: 'The book was read by her.'", answers: ["Her read the book.", "She read the book.", "The book she read.", "Read the book she did."], correct: 1, explanation: "Active voice ('She read') is clearer than passive voice." },
            { id: "e5-12", question: "The author's COGENT argument convinced even the skeptics. 'Cogent' means:", answers: ["weak", "confusing", "clear and convincing", "long"], correct: 2, explanation: "'Cogent' means clear, logical, and convincing." },
            { id: "e5-13", question: "A non sequitur is a logical fallacy where:", answers: ["the conclusion doesn't follow from the premises", "personal attacks are used", "emotions override logic", "experts are cited incorrectly"], correct: 0, explanation: "Non sequitur means the conclusion doesn't logically follow." },
            { id: "e5-14", question: "The critic's SCATHING review hurt ticket sales. 'Scathing' means:", answers: ["positive", "neutral", "harshly critical", "brief"], correct: 2, explanation: "'Scathing' means severely critical." },
            { id: "e5-15", question: "Which shows the strongest evidence in an argument?", answers: ["I think this is true.", "Many people believe this.", "According to a 2023 study by Harvard researchers...", "Everyone knows this."], correct: 2, explanation: "Citing specific, credible research provides the strongest evidence." }
        ]
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = QUESTIONS;
}
