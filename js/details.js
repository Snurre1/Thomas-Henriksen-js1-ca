const container = document.querySelector(".container");
const nameTag = document.querySelector("title");
const queryString = document.location.search;

const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = "https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/";
const cors = "https://noroffcors.herokuapp.com/";
const corsFix = cors + url + id;

async function aoe() {
  try {
    const response = await fetch(corsFix);

    const result = await response.json();

    nameTag.innerHTML = `${result.name}`;

    container.innerHTML = "";

    container.innerHTML = `<div>
                            <h2>Name: ${result.name}</h2>
                            <p>Civilization-bonus: ${result.civilization_bonus}</p>
                            <p>army-type: ${result.army_type}</p>
                            <p>ID: ${result.id}</p>
                        </div>`;
  } catch (error) {
    container.innerHTML = `<div><p>something went wrong here</p></div>`;
  }
}
aoe();
