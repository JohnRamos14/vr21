document.querySelector("#addMeme").addEventListener("click", (e) => {
  e.preventDefault();
  createMeme();
});

function createMeme() {
  let topText = document.querySelector("#memeTextTop").value;
  let memeUrl = document.querySelector("#memeUrl").value;
  let bottomText = document.querySelector("#memeTextBottom").value;

  let memeObject = {
    textTop: topText,
    url: memeUrl,
    textBottom: bottomText,
  };

  let memeDiv = document.createElement("div");
  memeDiv.classList.add("col-lg-3");
  memeDiv.innerHTML = `
          <div id="memeImg">
            <p id="text-top">${memeObject.textTop}</p>
              <img src="${memeObject.url}" alt="..." id="meme-image">
              <p id="text-bottom">${memeObject.textBottom}</p>
          </div>
          `;
  document.querySelector(".row").insertAdjacentElement("beforeend", memeDiv);
  console.log(memeObject);
  return { memeObject };
}
