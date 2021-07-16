// Your code will go here

// Open up your console - if everything loaded properly you should see the version number
// corresponding to the latest version of ml5 printed to the console and in the p5.js canvas.

let player;
let bg;
let pl;
let ob;
let obstacles = [];
let wordClassifire;
function preload() {
  bg = loadImage("1p.jpg");
  p1 = loadImage("sunny go.png");
  ob = loadImage("ne.jpg");

  let options = {
    probabilityThreshold: 0.8,
  };
  wordClassifire = ml5.soundClassifier("SpeechCommands18w", options);
}

function setup() {
  createCanvas(2500, 900);
  player = new Player();
  wordClassifire.classify(heardWord);
}

function heardWord(error, results) {
  let word = results[0].label;
  if (word === "up") {
    player.jump();
  }
  console.log(results[0].label, results[0].confidence);
}
function keyPressed() {
  if (key === " ") {
    player.jump();
  }
}

function draw() {
  if (random(1) < 0.015) {
    obstacles.push(new Obstacle());
  }

  background(bg);
  for (let obs of obstacles) {
    obs.show();
    obs.move();
    if (player.collided(obs) === true) {
      console.log("game over");
      stroke("red");
      textSize(80);
      text("GAME OVER!!", width / 4, height / 2);

      noLoop();
    }
  }

  player.show();
  player.move();
}
