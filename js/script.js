const container = document.querySelector(".container");
const url = "https://api.imgflip.com/get_memes";

async function meme() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    const results = result.data.memes;
    console.log(results);

    container.innerHTML = "";

    results.forEach(function (json) {
      container.innerHTML += `<a href="details.html?id=${json.id}">
                                <h2>Name: ${json.name}</h2>
                                <p>Box-count: ${json.box_count}</p>
                                <div><img src="${json.url}"</img></div>
                            </a>`;
    });
  } catch (error) {
    container.innerHTML = "Something is wrong in the memeworld";
  }
}
meme();
