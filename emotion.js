let emotions = [
  { name: "Trust", value: 60, color: [100, 180, 255] },
  { name: "Fear", value: 30, color: [255, 80, 80] },
  { name: "Nostalgia", value: 50, color: [255, 200, 100] },
  { name: "Hope", value: 40, color:[120, 220, 160] }
];

function setup() {
  let canvas = createCanvas(700, 450);
  canvas.parent("p5-container");
}

function draw() {
  background(255);

  for (let i = 0; i < emotions.length; i++) {
    let barWidth = map(emotions[i].value, 0, 100, 100, 600);

    fill(emotions[i].color);
    noStroke();
    rect(50, 50 + i * 50, barWidth, 30, 10);

    fill(0);
    text(emotions[i].name, 50, 45 + i * 50);
  }
}

function mousePressed() {
  for (let i = 0; i < emotions.length; i++) {
    emotions[i].value = random(10, 100);
  }
}

function draw() {
  background(255);

  textSize(18);
  textAlign(LEFT, CENTER);

  for (let i = 0; i < emotions.length; i++) {
    let barWidth = map(emotions[i].value, 0, 100, 100, 600);

    fill(emotions[i].color);
    noStroke();
    rect(50, 80 + i * 80, barWidth, 45, 15);

    fill(0);
    text(emotions[i].name, 50, 55 + i * 80);
  }
}
