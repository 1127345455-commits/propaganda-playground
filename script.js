// ==============================
// Poppy Speech Bubble System
// ==============================

// 气泡文案池（你可以随便加）
const poppyLines = [
  "Hi! I'm Poppy — your design partner!",
  "If you want people to feel safe, blue always helps.",
  "Strong fonts make messages feel more authoritative.",
  "Familiar symbols feel trustworthy… even when they shouldn’t.",
  "Design is never neutral.",
  "Good design makes people stop asking questions.",
  "People love what feels familiar.",
  "You're doing great! Critical thinking slightly decreased.",
  "Visual comfort can soften political complexity.",
  "Rounded shapes feel softer and more trustworthy.",
 "Simple slogans are easier to remember than complex ideas. ",
 "When something feels familiar, it feels true.",
 " Authority looks stronger when it feels calm and confident.",
 "Bright colors catch attention, even before people read anything.",
 " Repeating the same color builds familiarity over time.",
 "People trust colors they’ve seen before.",
  "Rounded fonts feel friendly and approachable.",
 "Bold fonts feel more confident. Thin fonts feel careful.",
 "Simple images reduce emotional resistance."
];

// 气泡相对 Poppy 的偏移方向（小范围）
const offsets = [
  "translateY(-120px)",       // 正上
  "translate(100px, -160px)",  // 右上
  "translateX(220px)",        // 右
  "translate(-100px, -160px)", // 左上
  "translateX(-220px)"        // 左
  
];

// DOM 元素
const poppy = document.getElementById("poppy");
const bubble = document.getElementById("bubble");

if (poppy && bubble) {

  poppy.addEventListener("click", () => {

    // 1️⃣ 先移除 show（确保每次都重新触发）
    bubble.classList.remove("show");

    // 2️⃣ 强制浏览器重绘（关键，不然会“点了没反应”）
    void bubble.offsetWidth;

    // 3️⃣ 随机文案
    const line =
      poppyLines[Math.floor(Math.random() * poppyLines.length)];
    bubble.textContent = line;

    // 4️⃣ 随机方向
    const offset =
      offsets[Math.floor(Math.random() * offsets.length)];

    // 5️⃣ 统一基准点 + 偏移
    bubble.style.transform = `translate(-50%, -50%) ${offset}`;

    // 6️⃣ 显示气泡
    bubble.classList.add("show");
  });

}
