let colorSample = null; // the color sample element
let answers = []; // array of answer elements
let correctColorCode = null; // color code of actual color sample
let score = 0; // number of correct answers
let total = 0; // total number of questions
let ten = 1;
let e = false
let ez = document.getElementById("easy");
// initialize page
window.onload = function() {
  colorSample = document.getElementById("colorSample");
  
  ez.addEventListener("click", function() {
     e = true;
    console.log("hi");
    answers.length = 2;
    });
    answers.push(document.getElementById("a"));
  answers.push(document.getElementById("b"));
  answers.push(document.getElementById("c"));
  answers.push(document.getElementById("d"));
  
  // add onlick events to all possible answers
  for (let i = 0; i < answers.length; i++) {
    answers[i].addEventListener("click", function() {
      markIt(this);
    });
    
  }
  // Load a new question
  loadNewQuestion();
};

// Load a new question
function loadNewQuestion() {
  //set color of colorsample
  let colorCode = getRandomHexCode();
  colorSample.innerHTML = "";
  colorSample.style.backgroundColor = colorCode;
  //pick a random location for correct answer
    let solution = Math.floor(Math.random() * 4);
  if(e == true){
    answers = 2;
    solution = Math.floor(Math.random() * 2);
  }
  for (let i = 0; i < answers.length; i++) {
    if (i == solution) {
      answers[i].innerHTML = colorCode;
    } else {
      answers[i].innerHTML = getRandomHexCode();
    }
  }

  //store correct answer to this question
  correctColorCode = colorCode;
  ten++;
} // loadNewQuestion




  // marks current question
function markIt(elem) {
  let gotItRight = false;
  total++;

  console.log("Comparing " + elem.innerHTML + " to " + correctColorCode);

  // record if it is correct
  if (elem.innerHTML == correctColorCode) {
    score++;
    gotItRight = true;
  }
  document.getElementById('score').innerHTML = score + " / " + 10;
  
  window.setTimeout(function(){
    if(gotItRight){
      colorSample.innerHTML = "Correct!";
    } else {
      colorSample.innerHTML = "Incorrect!";
    }
  }, 100);
  
window.setTimeout(function (){
    if(ten <= 10){
    loadNewQuestion(); 
    }else if(ten == 10){
    colorSample.innerHTML = "your score is " + score;
    }else{
      colorSample.innerHTML = "your final score is " + score + "/10";
      document.getElementById("as").style.display = "none";
    }
  }, 1300);
} // mark it


//create random hex code
function getRandomHexCode() {
  let result = []; // final code
  let hexRef = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f"
  ];

  result.push("#");

  for (let n = 0; n < 6; n++) {
    result.push(hexRef[Math.floor(Math.random() * 16)]);
  }

  return result.join(""); // #rrggbb
} // getRandomeHexCode

function reload(){
    window.location.reload();
} 
  

