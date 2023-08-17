// main.js

document.addEventListener("DOMContentLoaded", () => {
  const getStartedButton = document.getElementById("get-started-button");

  if (getStartedButton) {
    getStartedButton.addEventListener("click", () => {
      // Redirect to the petfinder.html page
      window.location.href = "/pages/petfinder/findapet.html";
    });
  }
});
