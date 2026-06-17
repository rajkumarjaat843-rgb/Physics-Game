const questions = [
  {
    q: "Mass = 10kg, Velocity = 5m/s. Find Momentum",
    type: "formula",
    options: ["F=ma", "p=mv", "V=IR"],
    answer: "p=mv",
    explain: "Momentum = mass × velocity = 10 × 5 = 50"
  },
  {
    q: "Force ka formula kya hai?",
    type: "concept",
    options: ["F=ma", "p=mv", "PE=mgh"],
    answer: "F=ma",
    explain: "Force mass ko accelerate karta hai"
  },
  {
    q: "Unit of Force?",
    type: "unit",
    options: ["Joule", "Newton", "Watt"],
    answer: "Newton",
    explain: "Force ki SI unit Newton hoti hai"
  }
];

let i = 0;
let score = 0;
let weak = {};

function startTest(){
  i = 0;
  score = 0;
  loadQ();
}

function loadQ(){
  let q = questions[i];

  let html = `<h3>${q.q}</h3>`;

  q.options.forEach(o=>{
    html += `<button onclick="check('${o}','${q.answer}','${q.type}')">${o}</button>`;
  });

  document.getElementById("box").innerHTML = html;
}

function check(ans, correct, type){
  if(ans === correct){
    score++;
    alert("✔ Correct\n" + questions[i].explain);
  } else {
    alert("❌ Wrong\nCorrect: " + correct + "\n" + questions[i].explain);

    weak[type] = (weak[type] || 0) + 1;
  }

  i++;

  if(i < questions.length){
    loadQ();
  } else {
    document.getElementById("box").innerHTML =
    `<h2>Test Complete</h2><h3>Score: ${score}/${questions.length}</h3>`;
  }
}

function showStats(){
  alert("Weak Areas:\n" + JSON.stringify(weak, null, 2));
}
