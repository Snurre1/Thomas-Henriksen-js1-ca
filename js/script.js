const container = document.querySelector(".container");
const url = "https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations";
const cors = "https://noroffcors.herokuapp.com/";
const corsFix = cors + url;

fetch(corsFix)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    createHTML(data);
  })
  .catch(function (error) {
    container.innerHTML = "an error has occured";
  });

function createHTML(results) {
  const aoe = results.civilizations;

  container.innerHTML = "";
  for (let i = 0; i < aoe.length; i++) {
    container.innerHTML += `<div><a href="details.html?id=${aoe[i].id}">
                              <h2>Name: ${aoe[i].name}</h2></a>
                              <p>Expansion: ${aoe[i].expansion}</p>
                              <p>Bonus: ${aoe[i].team_bonus}</p>
                           </div>`;
  }
}
