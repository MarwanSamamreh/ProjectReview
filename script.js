const switchTheme = () => {
  const rootElem = document.documentElement;
  let dataTheme = rootElem.getAttribute("data-theme"),
    newTheme;

  newTheme = dataTheme === "light" ? "dark" : "light";
  rootElem.setAttribute("data-theme", newTheme);
};

document.querySelector("#darkBtn").addEventListener("click", switchTheme);

function showFav() {
  let x = document.getElementById("favBar");
  x.style.display = x.style.display === "none" ? "block " : "none";
}
