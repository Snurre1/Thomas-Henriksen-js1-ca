const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://api.imgflip.com/get_memes/" + id;
const cors = "https://noroffcors.herokuapp.com/";
const corsFix = cors + url;

async function meme() {
  try {
    const response = await fetch(corsFix);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    //container.innerHTML = "Something is wrong in the memeworld";
  }
}
meme();
