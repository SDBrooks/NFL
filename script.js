// Write a question with 4 answers
// Use dom manipulation to get questions on our screen
// Create a function to see if our answer is correct
// make button to go to next question


let questions = [
    {
        question: "What year was the National Football League founded?",
        answer1: "1918",
        answer2: "1920",
        answer3: "1936",
        answer4: "1944",
        correctAnswer: "1920",
    
    },

    {
        question: "How many teams are in the NFL?",
        answer1: "32",
        answer2: "28",
        answer3: "24",
        answer4: "34",
        correctAnswer: "32",
    
    },

    {
        question: "Out of the 32 teams in the NFL, how many have never made a Super Bowl appearance?",
        answer1: "4",
        answer2: "9",
        answer3: "10",
        answer4: "23",
        correctAnswer: "4",
    
    }, 

    {
        question: "The NFL houses one of the most valuable franchises in the world of sports, valued well over $5B. Which franchise is it?",
        answer1: "Green Bay Packers",
        answer2: "Kansas City Chiefs",
        answer3: "New York Giants",
        answer4: "Dallas Cowboys",
        correctAnswer: "Dallas Cowboys",

    },

    {
        question: "Which player won the 2021 MVP Award?",
        answer1: "Patrick Mahomes",
        answer2: "Aaron Donald",
        answer3: "Cooper Kupp",
        answer4: "Aaron Rodgers",
        correctAnswer: "Aaron Rodgers",

    },

    {
        question: "Who was the NFL's leading rusher for the 2021 season?",
        answer1: "Nick Chubb",
        answer2: "Jonathan Taylor",
        answer3: "Joe Mixon",
        answer4: "Najee Harris",
        correctAnswer: "Jonathan Taylor (1,811 yards)",

    },


    {
        question: "Who was the NFL's leading passer for 2021 season?",
        answer1: "Tom Brady",
        answer2: "Matthew Stafford",
        answer3: "Justin Herbert",
        answer4: "Patrick Mahomes",
        correctAnswer: "Tom Brady (5,316 yards)",

    },

    {
        question: "Which Player won the Pepsi 2021 Rookie of the Year Award?",
        answer1: "Kyle Pitts",
        answer2: "Jaylen Waddle",
        answer3: "Ja'Marr Chase",
        answer4: "Najee Harris",
        correctAnswer: "Ja'Marr Chase",

    },

    {
        question: "What team has the most Super Bowl appearances?",
        answer1: "Las Vegas Raiders",
        answer2: "Pittsburgh Steelers",
        answer3: "New England Patriots",
        answer4: "Indianapolis Colts",
        correctAnswer: "New England Patriots",

    },
    {
        question: "What Receiver has ammassed  receiving yards in the history of the league? ",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
        correctAnswer: "",

    },
    {
        question: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
        correctAnswer: "",

    },

    {
        question: "Lastly, which 'All Time Great' has 7 Super Bowl rings and more than 80,000 position yards in their career?",
        answer1: "Jerry Rice",
        answer2: "Tom Brady",
        answer3: "Joe Montana",
        answer4: "Peyton Manning",
        correctAnswer: "Tom Brady",

    },



]

    let question = document.getElementById("question")
    let answer1 = document.getElementById("answer1")
    let answer2 = document.getElementById("answer2")
    let answer3 = document.getElementById("answer3")
    let answer4 = document.getElementById("answer4")
    let answer5 = document.getElementById("answer5")
    let answer6 = document.getElementById("answer6")
    let answer7 = document.getElementById("answer7")
    let answer8 = document.getElementById("answer8")
    let answer9 = document.getElementById("answer9")
    let answer10 = document.getElementById("answer10")
    let answer11 = document.getElementById("answer11")
    let answer12 = document.getElementById("answer12")
    
    
    let nextButton = document.getElementById("next")
    let i = 0;
    question.innerText = questions[i].question
    answer1.innerText = questions[i].answer1
    answer2.innerText = questions[i].answer2
    answer3.innerText = questions[i].answer3
    answer4.innerText = questions[i].answer4
    answer5.innerText = questions[i].answer5
    answer6.innerText = questions[i].answer6
    answer7.innerText = questions[i].answer7
    answer8.innerText = questions[i].answer8
    answer9.innerText = questions[i].answer9
    answer10.innerText = questions[i].answer10
    answer11.innerText = questions[i].answer11
    answer12.innerText = questions[i].answer12

    nextButton.addEventListener("click", () => {i++})
