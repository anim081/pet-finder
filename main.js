// main.js

document.addEventListener("DOMContentLoaded", () => {
  const getStartedButton = document.getElementById("get-started-button");

  if (getStartedButton) {
    getStartedButton.addEventListener("click", () => {
      window.location.href = "pages/petfinder/findapet.html";
    });
  }
});
