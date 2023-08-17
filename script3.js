const calculateButton = document.getElementById("calculateButton");
const resultDiv = document.getElementById("result");
let petExpenses = parseFloat(document.getElementById("petExpenses").value);
let picture = document.getElementById("images");

calculateButton.addEventListener("click", () => {
  const petType = document.getElementById("petType").value;
  const petSize = document.getElementById("petSize").value;
  const petBreed = document.getElementById("petBreed").value;

  let petBudget = 0;

  // Adjust expenses based on pet type, size, and breed
  if (petType === "dog") {
    if (petSize === "small") {
      petBudget = 43;
    } else if (petSize === "medium") {
      petBudget = 56;
    } else if (petSize === "large") {
      petBudget = 87;
    }
  } else if (petType === "cat") {
    petBudget = 50;
  } else petType === "rabbit";
  {
    petBudget = 120;
  }

  if (petBreed == "Pug") {
    petExpenses = 62 || 221;
    petBudget = 0;
    picture.src = "images/Small-dog.png";
  } else if (petBreed == "Border Collie") {
    petExpenses = 77 || 233;
    petBudget = 0;
    picture.src = "images/Medium-dog.png";
  } else if (petBreed == "German Shepard") {
    petExpenses = 93 || 314;
    petBudget = 0;
    picture.src = "images/Large-dog.png";
  }

  // Calculate total budget
  const totalBudget = petExpenses + petBudget;

  resultDiv.textContent = `Total Monthly Budget Needed: $${totalBudget.toFixed(
    2
  )}`;
});
