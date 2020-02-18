var answer = "C";
var qnum = 1;

function checkAnswer() {
    var myInp = document.querySelector("#answerBox").value;
    console.log(myInp);
    if (myInp === answer) {
        document.querySelector("#result").innerHTML = "<h4>Correct!</h4>";
        document.querySelector("#question h1").innerText = "Is 5 bigger than 4?";
        answer = "yes";
    } else {
        document.querySelector("#result").innerHTML = "<h4>Wrong!</h4>";
    }
}