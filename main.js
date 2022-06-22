var distanceLeft = 0;
var distanceTop = 0;
var intervalId;
let btn = document.getElementById("btn");
function playGame() {
  btn.style.display = "none"
  intervalId = setInterval(() => {
    player.style.left = distanceLeft++ + "px";
    player.style.top = distanceTop++ + "px";
    if (distanceTop >= 310) {
      player.src = "explosion.gif";
      clearInterval(intervalId);
      alert("Game Over");
    }
  }, 30);
}
function getPlayerKey(e) {
  if (e.key == "ArrowUp") {
    player.style.top = distanceTop-- + "px";
  } else if (e.key == " ") {
    clearInterval(intervalId);
    btn.style.display = "block";
  }
}
setTimeout(() => {
  clearInterval(intervalId);
  distanceLeft = 0;
  distanceTop = 0;
  btn.style.display = "block";
  alert("time Over");
}, 60000);
