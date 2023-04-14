
var questions = [
    { 
        question: "Inside which HTML element do we put the JavaScript?", 
        answers: [
            { text: "<java>", correct: false },
            { text: "<script>" , correct: true },
            { text: "<jscript>", correct: false },
            { text: "<scrippy>", correct: false }
        ]
    },
    { 
        question: "Commonly used data types DO NOT include:", 
        answers: [
            { text: "strings", correct: false },
            { text: "booleans", correct: false },
            { text: "alerts", correct: true },
            { text: "numbers", correct: false }
        ]
    },
    { 
        question: "How do you create a function in JavaScript", 
        answers: [
            { text: "function myFunction()", correct: true },
            { text: "function = myFunction()", correct: false },
            { text: "function:myFunction()", correct: false },
            { text: "createMyFunction()", correct: false }
        ]
    },
    { 
        question: "What is the correct way to write a JavaScript array?", 
        answers: [
            { text: "var vegetable = (0:'kale', 1:'lettuce', 2:'spinach')", correct: false },
            { text: "var vegetable = ['kale', 'lettuce', 'spinach']", correct: true },
            { text: "var vegetable = (kale, lettuce, spinach)", correct: false },
            { text: "None of the above", correct: false }
        ]
    },
    { 
        question: "How do you round the number 102.456, to the nearest integer?",
        answers: [
            { text: "Math.random(102.456)", correct: false },
            { text: "Math.rnd(102.456)", correct: false },
            { text: "round(102.456)", correct: false },
            { text: "None of the above", correct: true }
        ]
    },
];