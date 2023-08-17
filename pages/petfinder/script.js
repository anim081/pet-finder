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
      if (pet.photos.length > 0) {
        const petCard = document.createElement("div");
        petCard.className = "pet-card";

        let petInfoHtml = `
          <div class="pet-image">
            <img src="${pet.photos[0].medium}" alt="${pet.name}">
          </div>
          <div class="pet-info">
            <h2>${pet.name}</h2>
        `;

        if (pet.description) {
          petInfoHtml += `<p>${pet.description}</p>`;
        }

        if (pet.age) {
          petInfoHtml += `<p>Age: ${pet.age}</p>`;
        }

        if (pet.breeds.primary) {
          petInfoHtml += `<p>Breed: ${pet.breeds.primary}</p>`;
        }

        if (pet.status) {
          petInfoHtml += `<p>Status: ${pet.status}</p>`;
        }

        if (pet.size) {
          petInfoHtml += `<p>Size: ${pet.size}</p>`;
        }

        if (pet.tags && pet.tags.length > 0) {
          petInfoHtml += `<p>Tags: ${pet.tags.join(", ")}</p>`;
        }

        petInfoHtml += `<button class="adopt-button">Adopt Me</button></div>`;

        petCard.innerHTML = petInfoHtml;

        petListElement.appendChild(petCard);
      }
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
