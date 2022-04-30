const clock = document.querySelector(".clock");

setInterval(() => {
  const date = new Date();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const html = `
    <span>${hour}</span> : 
    <span>${minutes}</span> : 
    <span>${seconds}</span> 
  `;

  clock.innerHTML = html;
}, 1000);