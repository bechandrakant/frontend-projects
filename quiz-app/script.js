const form = document.querySelector(".question-form");
const result = document.querySelector(".result");
const theme = document.querySelector(".theme");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const correctAnswers = ["B", "B", "B", "B"];

  const answers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

  let score = 0;

  answers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  })

  // Animating score
  let output = 0;
  const timer = setInterval(() => {
    result.querySelector("span").textContent = `${output}%`;
    if (output == score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
})

theme.addEventListener("change", e => {
  e.preventDefault();
  document.body.style.setProperty("--color-primary", e.target.value);
})