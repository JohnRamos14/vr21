
let motorcycles = [
  //   {
  //     id: 1,
  //     name: "Ducati Panigale",
  //     imageUrl:
  //       "https://www.cycleworld.com/resizer/bAZ9cKubp7cwtd0ddGYSCIN0jl4=/200x0/filters:focal(990x871:1000x881)/cloudfront-us-east-1.images.arcpublishing.com/octane/2ZDIMDXLSJG7BEOXJDTB42FAA4.jpg",
  //     description:
  //       "With supporting text below as a natural lead-in to additional content.",
  //   },
  //     {
  //       id: 2,
  //       name: "BMW S1000 RR",
  //       imageUrl:
  //         "https://www.cycleworld.com/resizer/8YPhpKAM3o3nUTrD7uemcFxyJ54=/200x0/smart/cloudfront-us-east-1.images.arcpublishing.com/octane/4BVDKKZ34J3PFJEAVIV23LZRA4.jpg",
  //       description:
  //         "With supporting text below as a natural lead-in to additional content.",
  //     },
  //   {
  //     id: 3,
  //     name: "Aprilla RSV4",
  //     imageUrl:
  //       "https://www.cycleworld.com/resizer/cMhZ_eH23cz_i50AWpOC6MUzgx0=/200x0/filters:focal(979x714:989x724)/cloudfront-us-east-1.images.arcpublishing.com/octane/ROWZBW5G4VH2LLZOLO76LPAK2I.jpg",
  //     description:
  //       "With supporting text below as a natural lead-in to additional content.",
  //   },
  //   {
  //     id: 4,
  //     name: "Yamaha R1M",
  //     imageUrl:
  //       "https://www.motorcyclistonline.com/resizer/SPNy-vpl-MCPFRupRyF8MmocalQ=/200x0/smart/cloudfront-us-east-1.images.arcpublishing.com/octane/QGLFMQ42ZFGBHEOCSGTXSECWPY.jpg",
  //     description:
  //       "With supporting text below as a natural lead-in to additional content.",
  //   },
  //   {
  //     id: 5,
  //     name: "Kawasaki KLR650",
  //     imageUrl:
  //       "https://www.motorcyclistonline.com/resizer/N0xpZpZ0uaBIOcaGy6JGYvbkp88=/200x0/filters:focal(1094x857:1104x867)/cloudfront-us-east-1.images.arcpublishing.com/octane/FQPZ6BP5TFBDHJN5TMZAIVXCHA.jpg",
  //     description:
  //       "With supporting text below as a natural lead-in to additional content.",
  //   },
  //   {
  //     id: 6,
  //     name: "Indian FTR",
  //     imageUrl:
  //       "https://www.motorcyclistonline.com/resizer/MOreLgscX0hFCJiuJm-mYsShBd0=/200x0/filters:focal(448x343:458x353)/cloudfront-us-east-1.images.arcpublishing.com/octane/LJB22NUK3FDCJFK2XQQDXYRODU.jpg",
  //     description:
  //       "With supporting text below as a natural lead-in to additional content.",
  //   },
  //   {
  //     id: 7,
  //     name: "Norton Commando",
  //     imageUrl:
  //       "https://www.bikesrepublic.com/wp-content/uploads/2019/04/Norton-Brietling-Sport-1-696x522.jpg",
  //     description:
  //       "With supporting text below as a natural lead-in to additional content.",
  //   },
];

document.querySelector("#addMoto").addEventListener("click", () => {
  console.log("clicked");
  addMotorcycle();
});

document.querySelector("#deleteMoto").addEventListener("click", () => {
  deleteItem();
});

function addMotorcycle() {
  let motorcycleMake = document.getElementById("motoMake").value;
  let motorcycleImage = document.getElementById("motoImage").value;
  let motorcycleDescription = document.getElementById("motoDesc").value;
  let motorcycleObject = {
    id: motorcycles.length + 1,
    name: motorcycleMake,
    imageUrl: motorcycleImage,
    description: motorcycleDescription,
  };

  if(localStorage.getItem("motorcycle") === null){
    motorcycles = [];
  }else{
    motorcycles = JSON.parse(localStorage.getItem("motorcycle"));
  }

  localStorage.setItem("motorcycle", JSON.stringify(motorcycles));
  motorcycles.push(motorcycleObject);
  localStorage.setItem("motorcycle", JSON.stringify(motorcycles));
  console.log(motorcycleObject);
  return { motorcycleObject };

}

window.onload = displayMotorcycle();

function displayMotorcycle() {
       
  motorcycles.map((motorcycle) => {
    let card = document.createElement("div");
    card.classList.add("col-md-3");
    card.innerHTML = `
  <div class="card text-center">
        <div class="card-body">
          <h5 class="card-title" id="nameMoto">${motorcycle.name}</h5>
          <img src="${motorcycle.imageUrl}" alt="motoImg" />
          <p class="card-text">
            ${motorcycle.description}
          </p>
          <button type="button" class="btn btn-secondary">Update</button>
          <button
            type="button"
            class="btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Delete
          </button>
          <input type="hidden" id="id" value="${motorcycle.id}" />
        </div>
      </div>
      `;
    document.querySelector(".row").appendChild(card);
  });
}



let retrieveMotorcycle = JSON.parse(localStorage.getItem("motorcycle")) || [];
let motorcycleList = retrieveMotorcycle.map((motorcycle) => {
  let card = document.createElement("div");
  card.classList.add("col-md-3");
  card.innerHTML = `
  <div class="card text-center">
        <div class="card-body">
          <h5 class="card-title">${motorcycle.name}</h5>
          <img src="${motorcycle.imageUrl}" alt="motoImg" />
          <p class="card-text">
            ${motorcycle.description}
          </p>
          <button type="button" class="btn btn-secondary">Update</button>
          <button
            type="button"
            class="btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Delete
          </button>
          <input type="hidden" id="id" value="${motorcycle.id}"
        </div>
      </div>
      `;
  document.querySelector(".row").appendChild(card);
});

// delete item from local storage
// function deleteItem() {
//   let retrieveMotorcycle = JSON.parse(localStorage.getItem("motorcycle"));
//   let deleteItem = document.getElementById('nameMoto').value;
//   let filteredMotorcycle = retrieveMotorcycle.filter(
//     (motorcycle) => motorcycle.name !== deleteItem
//   );
//   localStorage.setItem("motorcycle", JSON.stringify(filteredMotorcycle));
//   displayMotorcycle();
// }
