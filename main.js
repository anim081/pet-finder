// main.js

document.addEventListener("DOMContentLoaded", () => {
  const getStartedButton = document.getElementById("get-started-button");

  if (getStartedButton) {
    getStartedButton.addEventListener("click", () => {
      window.location.href = "findapet.html";
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const getStartedLink = document.getElementById("get-started-link");

  if (getStartedLink) {
    getStartedLink.addEventListener("click", () => {
      window.location.href = "findapet.html";
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const getPetLink = document.getElementById("findapetlink");

  if (getPetLink) {
    getPetLink.addEventListener("click", () => {
      window.location.href = "findapet.html";
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const getPetCalculator = document.getElementById("petcalculator");

  if (getPetCalculator) {
    getPetCalculator.addEventListener("click", () => {
      window.location.href = "petcalculator.html";
    });
  }
});
