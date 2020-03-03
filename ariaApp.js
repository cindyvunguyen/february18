var qnum = 0;
var questions = [
    "What comes after A?",
    "Is 5 bigger than 4?",
    "What colour is a banana?",
    "What planet do we live on?"
];

var answers = [
    "B",
    "yes",
    "yellow",
    "earth"
];

function CheckAnswer(){
    var myInput = document.querySelector("#input").value
    console.log(myInput);
    if(myInput === answers[qnum]){
        document.querySelector("#result").innerHTML = "<h1>Correct!</h1>";

        qnum++;
        document.querySelector("#question")
        .innerText = questions[qnum];
   
    } else {
        document.querySelector("#result").innerHTML = "<h1>Wrong!</h1>";

}}