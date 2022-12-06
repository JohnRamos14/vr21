document.querySelector("#addMeme").addEventListener("click", (e) => {
  e.preventDefault();
  createMeme();
  document.querySelector("#memeText").value = "";
  document.querySelector("#memeUrl").value = "";
});

function createMeme() {
  let memeText = document.querySelector("#memeText").value;
  let memeUrl = document.querySelector("#memeUrl").value;

  let memeObject = {
    text: memeText,
    url: memeUrl,
  };

  let memeDiv = document.createElement("div");
  memeDiv.classList.add("row");
  memeDiv.innerHTML = `
          <div id="memeImg">
            <p id="text-top">${memeObject.text}</p>
              <img src="${memeObject.url}" alt="..." id="meme-image"></img>
          </div>`;
  document.querySelector(".row").insertAdjacentElement("beforeend", memeDiv);
  console.log(memeObject);
  return { memeObject };
}
