var data = {
    qnum:0,
    questions:[
        {
            title: "What letter comes after B?",
            answer: "c",
            bgcolor: "yellow",
            img: "http://placekitten.com/300/300"
        },
        {
            title: "What letter comes after B?",
            answer: "c",
            bgcolor: "yellow",
            img: "http://placekitten.com/300/300"
        },
        {
            title: "What letter comes after B?",
            answer: "c",
            bgcolor: "yellow",
            img: "http://placekitten.com/300/300"
        }
    ]
}

// var questions = [
//     "What letter comes after B?",
//     "Is 5 bigger than 4?",
//     "What is the colour of a banana?",
//     "What letter comes after C?",
//     "Is 3 bigger than 4?",
//     "What is the colour of an apple?"
// ];

// var answers = [
//     "c",
//     "yes",
//     "yellow",
//     "d",
//     "no",
//     "red"
// ]

function start() {
    document.querySelector("#question").innerText = data.questions[data.qnum].title;
    document.body.style.backgroundColor = data.questions[data.qnum].bgcolor;
    document.querySelector("#result").innerHTML = "<img src='"+data.questions[data.qnum].img+"' />";
}

function checkAnswer() {
    var myInp = document.querySelector("#answerBox").value;
    console.log(myInp);
    if (myInp === answers[qnum]) {
        document.querySelector("#result").innerHTML = "<h4>Correct!</h4>";
        qnum++;
        document.querySelector("#question").innerText = questions[qnum];
        // if (qnum === 1) {
        //     qnum = 2;
        //     document.querySelector("#question h1").innerText = "Is 5 bigger than 4?";
        //     answer = "yes";
        // } else if (qnum === 2) {
        //     qnum = 3;
        //     document.querySelector("#question h1").innerText = "What colour is a banana?";
        //     answer = "yellow";
        // }
    } else {
        document.querySelector("#result").innerHTML = "<h4>Wrong!</h4>";
    }
}

function nextQ() {
    data.qnum++;
    document.querySelector("#questions").innterText = data.questions[data.qnum].title;
    document.body.style.backgroundColor = data.questions[data.qnum].bgcolor;
    document.querySelector("#result").innterHTML = "<img src='"+data.questions[data.qnum].img+"' />"
}

start();