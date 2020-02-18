var data = { 
    qnum = 0,
    questions: [
        {
            title: 'What comes after 20?',
            answer:"21",
            bgcolor: "yellow",
        },
        {
            title: "Is 8 bigger than 7.5?",
            answer:"yes",
            bgcolor: "blue",
        },
        {
            title: "what is the color of a banana?",
            answer:"yellow",
            bgcolor: "green",
        }
    ]
}

function start(){
    document.querySelector("#questionBox span").innerHTML = data.questions[data.qnum].title;
    document.body.style.backgroundcolor = data.questions[data.qnum].bgcolor;
}

function checkAnswer() {
    var myInp = document.querySelector("#inputBox").value;
    console.log(myInp);
    if (myInp === data.answers[data.qnum].answer) {
        document.querySelector("#AnswerFeedback").innerHTML = "<h4>Correct!</h4>";
    //     if(qnum == 1){
    //     qnum = 2;
    //     document.querySelector("#questionBox span").innerText = "Is 5 bigger than 4?";
    //     answer = "yes";
    //     }
    //     else if(qnum = 2){
    //     document.querySelector("#questionBox span").innerText = "what is the color of a banana?";
    //     answer = "yellow";
    //     }
    } else {
        //innerText is like inneHTML but it shows whatever you type, so you can't declare <h1> etc
        document.querySelector("#AnswerFeedback").innerHTML = "<h4>Wrong!</h4>";
    }
}

function nextQ(){
    data.qnum++;document.querySelector
    document.querySelector("#questionBox span").innerText = data.questions[data.qnum];
    document.body.style.backgroundcolor = data.questions[data.qnum].bgcolor;
}

start();