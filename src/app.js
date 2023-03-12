const btnMenu = document.getElementById("btn-menu");
const menu = document.getElementById("menu");
const title = document.getElementById("title");
const overlayLoad = document.getElementById("overlay-load");

if (!btnMenu || !menu) throw new Error("Can't menu or button menu");

btnMenu.addEventListener("click", () => {
  menu.classList.toggle("active");
  btnMenu.classList.toggle("active");
});

window.addEventListener("load", () => {
  // menu.classList.remove("slide-left-fade");
});

//Animation title

if (!title) throw new Error("Can't access to title");

let i = -1;
const charsSpan = Array.from(title.children, (child) => {
  const text = child.textContent.split("").map((char) => {
    i++;
    return `<span style="animation-delay: ${i * 100}ms">${char}</span>`;
  });
  return text;
});

title.innerHTML = "";
charsSpan.forEach((span) => {
  const div = `<div>${span.join("")}</div>`;

  title.insertAdjacentHTML("beforeend", div);
});
