// Write a question with 4 answers
// Use dom manipulation to get questions on our screen
// Create a function to see if our answer is correct
// make button to go to next question

const questions = [
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
        question: "Who was the NFL's leading passer for 2021 season?",
        answer1: "Tom Brady",
        answer2: "Matthew Stafford",
        answer3: "Aaron Rodgers",
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
        question: "What Receiver has ammassed the most receiving yards in the history of the league? ",
        answer1: "Larry Fitzgerald",
        answer2: "Randy Moss",
        answer3: "Jerry Rice",
        answer4: "Terrell Owens",
        correctAnswer: "Jerry Rice (22,895 yards)",

    },
    {
        question: "Lastly, which 'All Time Great' has 7 Super Bowl rings and more than 80,000 position yards in their career?",
        answer1: "Jerry Rice",
        answer2: "Tom Brady",
        answer3: "Joe Montana",
        answer4: "Peyton Manning",
        correctAnswer: "Tom Brady",

    },

];
 
    // let correct = true;
    // let incorrect = false;

    let scoreBoard = document.getElementById("score")
    let question = document.getElementById("question")
    let answer1 = document.getElementById("answer1")
    let answer2 = document.getElementById("answer2")
    let answer3 = document.getElementById("answer3")
    let answer4 = document.getElementById("answer4")
    

    let score = 0;

    let scoreCorrect = document.querySelector(".scorePoints")

    let answerCorrect = document.querySelector("#buttons")

    let questionCount = 0;
    
    let i = 0;
    let nextButton = document.getElementById("next")

    const nextQuestion = () => {
        i++;
        question.innerText = questions[i].question
        answer1.innerText = questions[i].answer1
        answer2.innerText = questions[i].answer2
        answer3.innerText = questions[i].answer3
        answer4.innerText = questions[i].answer4
    }
   
     nextButton.addEventListener("click", nextQuestion)

    // function correctAnswer () {

    //   if (correctAnswer == questions.innerText) {

    //     alert("You are correct")
    //   }

    // }
    //  answerCorrect.addEventListener("click", (correctAnswer) => {
    //     if(correctAnswer.target.innerText == questions[questionCount].correctAnswer) {
    //         score += 7;
    //         scoreCorrect.innerText = score;
    //         questionCount++;
    //     }

    // })
    //  let checkAnswer = (e) => {

    // //  answer1.addEventListener('Click', (e) => {
    // //     if(e.target.id === answer1) {
    // //         alert(correct);
    // //     } else {
    // //         alert(incorrect);
    // //     }
    // // // }) e.target.value

    // answer2.addEventListener('Click', (e) => {
    //     if(e.target.id === answer2) {
    //         alert(correct);
    //     } else {
    //         alert(incorrect);
    //     }
    // })

    // .addEventListener("click", nextQuestion)
    answerCorrect.addEventListener("click", () => {
            if(questions[0].question === question.innerText) {
                document.getElementById(questions[0].correctAnswer)

                answer1.innerText = "1918"
                answer2.innerText = "1920"
                answer3.innerText = "1936"
                answer4.innerText = "1944"
            }
            if(questions[1].question === question.innerText) {
                document.getElementById(questions[1].correctAnswer)
                answer1.innerText = "32"
                answer2.innerText = "28"
                answer3.innerText = "24"
                answer4.innerText = "34"
            }
            if(questions[2].question === question.innerText) {
                document.getElementById(questions[2].correctAnswer)
                answer1.innerText = "4"
                answer2.innerText = "9"
                answer3.innerText = "10"
                answer4.innerText = "23"
            }
            
            // if(questions[3] == question.innerText) {
            //     answer1.innerText = "Green Bay Packers"
            //     answer2.innerText = "Kansas City Chiefs"
            //     answer3.innerText = "New York Giants"
            //     answer4.innerText = "Dallas Cowboys"
            // }
            // if(questions[4] == question.innerText) {
            //     answer1.innerText = "Patrick Mahomes"
            //     answer2.innerText = "Aaron Donald"
            //     answer3.innerText = "Cooper Kupp"
            //     answer4.innerText = "Aaron Rodgers"
            // }
            // if(questions[5] == question.innerText) {
            //     answer1.innerText = "Tom Brady"
            //     answer2.innerText = "Matthew Stafford"
            //     answer3.innerText = "Aaron Rodgers"
            //     answer4.innerText = "Patrick Mahomes"
            // }
            // if(questions[6] == question.innerText) {
            //     answer1.innerText = "Kyle Pitts"
            //     answer2.innerText = "Jaylen Waddle"
            //     answer3.innerText = "Ja'Marr Chase"
            //     answer4.innerText = "Najee Harris"
            // }
            // if(questions[7] == question.innerText) {
            //     answer1.innerText = "Las Vegas Raiders"
            //     answer2.innerText = "Pittsburgh Steelers"
            //     answer3.innerText = "New England Patriots"
            //     answer4.innerText = "Indianapolis Colts"
            // }
            // if(questions[8] == question.innerText) {
            //     answer1.innerText = "Larry Fitzgerald"
            //     answer2.innerText = "Randy Moss"
            //     answer3.innerText = "Jerry Rice"
            //     answer4.innerText = "Terrell Owens"
            // }
            // if(questions[9] == question.innerText) {
            //     answer1.innerText = "Jerry Rice"
            //     answer2.innerText = "Tom Brady"
            //     answer3.innerText = "Joe Montana"
            //     answer4.innerText = "Peyton Manning"
            // }}
   
    //     }

            // if() {
            //     correctAnswer == question.innerText;

            // } if(){

            // }



        // answer1.addEventListener('Click', () => {
        //     if(questions[0] === "1920") {
        //         correct = true; 
            
        //     } else {
        //         incorrect;
        //     }
        
        // })

        // answer2.addEventListener('Click', () => {
        //     if(questions[1] === "32") {
        //         correct = true; 
            
        //     } else {
        //         incorrect;
        //     }
        
        // })
    // each button is going to call a function
    // this function is going to check if the button we hit is the correct answer or not
    // if the button we click == our correct answer then we will get points 
        })
