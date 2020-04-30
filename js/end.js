const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const MAX_HIGH_SCORE = 5;

finalScore.innerText = mostRecentScore;

var iq = parseInt(finalScore.innerText);

if (iq >= 0 && iq <= 40) {
  document.getElementById("iq").innerHTML = 'Bir Sonraki Sefere - Düşük IQ<br><div class="emoji  emoji-haha"><div class="emoji-face animation-haha"><div class="emoji-eyes"></div><div class="emoji-mouth"><div class="emoji-tongue"></div></div></div></div>';
}
if (iq > 40 && iq <= 70) {
  document.getElementById("iq").innerHTML = 'Ha Gayret - Orta IQ<br><div class="emoji emoji-badSmail"><div class="emoji-face"><div class="emoji-eyebrows"></div><div class="emoji-mouth"></div></div></div>';
}
if (iq > 70 && iq <= 1000) {
  document.getElementById("iq").innerHTML = 'Çok Başarılısın - Yüksek IQ<br><div class="emoji emoji-se"><div class="emoji-face"><div class="emoji-eyes"></div><div class="emoji-eyes" style="left: calc(50%)"></div><div class="emoji-mouth"><div class="emoji-tongue"></div></div></div></div>';
}

username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.value;
});

saveHighScore = e => {
  console.log("clicked the save button!");
  e.preventDefault();

  const score = {
    score: Math.floor(Math.random() * 100),
    name: username.value
  };

  highScores.push(score);
  highScores.sort((a, b) => b.score - a.score);
  highScores.splice(5);

  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.assign("index.html");
};
