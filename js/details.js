const container = document.querySelector(".container");

const queryString = document.location.search;
console.log(queryString);
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = "https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/1";
const cors = "https://noroffcors.herokuapp.com/";
const corsFix = cors + url;

async function aoe() {
  const response = await fetch(corsFix);
  const result = await response.json();
  console.log(result);

  container.innerHTML = `<div>
                            <h2>Name: ${result.name}</h2>
                            <p>Civilization-bonus: ${result.civilization_bonus}</p>
                            <p>army-type: ${result.army_type}</p>
                            <p>ID: ${result.id}</p>
                        </div>`;
}

aoe();
