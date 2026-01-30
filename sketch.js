let emotions = [
  { name: "FEAR", value: 60, color: [220, 60, 60] },
  { name: "TRUST", value: 50, color: [80, 120, 255] },
  { name: "NOSTALGIA", value: 40, color: [120, 220, 160] },
  { name: "HOPE", value: 55, color: [120, 220, 160]}
];

function setup() {
  createCanvas(600, 400);
  textFont("Baloo 2");
}

function draw() {
  background(20);

  for (let i = 0; i < emotions.length; i++) {
    let e = emotions[i];

    // 数值
    e.value += random(-0.5, 0.5);
    e.value = constrain(e.value, 20, 100);

    drawEmotionBar(e, i);
  }
}

function drawEmotionBar(e, index) {
  let x = 100;
  let y = 80 + index * 70;
  let barWidth = map(e.value, 0, 100, 50, 350);

  // 背景
  noStroke();
  fill(50);
  rect(x, y, 350, 30, 10);

  // 情绪条
  fill(e.color[0], e.color[1], e.color[2]);
  rect(x, y, barWidth, 30, 10);

  // 文字
  fill(255);
  textSize(14);
  text(e.name + " : " + int(e.value), x, y - 8);
}


