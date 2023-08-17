let clientId = "N60AkvtdflqtXslaeeRmTqyrT02zY34dtBorSrMvbRKoe5GIJi";
let clientSecret = "xpr2BJ6kMaHmYDX8ExUtDwmPjocqiOKw8CjOPhLJ";
const url = "https://api.petfinder.com/v2/animals";
const petListElement = document.getElementById("results");
const searchForm = document.getElementById("search-form");

async function fetchAccessToken() {
  const response = await fetch(`https://api.petfinder.com/v2/oauth2/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
  });

  const data = await response.json();
  return data.access_token;
}
async function fetchAndDisplayPets(location, animalType) {
  try {
    const accessToken = await fetchAccessToken();
    const response = await fetch(
      `${url}?type=${animalType}&location=${location}&limit=10`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const data = await response.json();
    const pets = data.animals;
    console.log(pets);

    petListElement.innerHTML = "";

    pets.forEach((pet) => {
      const petCard = document.createElement("div");
      petCard.className = "pet-card";

      petCard.innerHTML = `
        <div class="pet-image">
          <img src="${
            pet.photos.length > 0 ? pet.photos[0].medium : ""
          }" alt="${pet.name}">
        </div>
        <div class="pet-info">
          <h2>${pet.name}</h2>
          ${pet.description ? `<p>${pet.description}</p>` : ""}
          <p>Type: ${pet.type}</p>
          <p>Status: ${pet.status}</p>
          <p>Size: ${pet.size}</p>
          <p>Tags: ${pet.tags.join(", ")}</p>
          <button class="adopt-button">Adopt Me</button>
        </div>
      `;

      petListElement.appendChild(petCard);
    });
  } catch (error) {
    console.error("Error fetching pets:", error);
  }
}
searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const locationInput = document.getElementById("location");
  const animalTypeInput = document.getElementById("animal-type");

  const location = locationInput.value;
  const animalType = animalTypeInput.value;

  fetchAndDisplayPets(location, animalType);
});
