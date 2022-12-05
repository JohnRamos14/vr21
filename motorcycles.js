// let retrieveMotorcycle = [
//   //   {
//   //     id: 1,
//   //     name: "Ducati Panigale",
//   //     imageUrl:
//   //       "https://www.cycleworld.com/resizer/bAZ9cKubp7cwtd0ddGYSCIN0jl4=/200x0/filters:focal(990x871:1000x881)/cloudfront-us-east-1.images.arcpublishing.com/octane/2ZDIMDXLSJG7BEOXJDTB42FAA4.jpg",
//   //     description:
//   //       "With supporting text below as a natural lead-in to additional content.",
//   //   },
//   //     {
//   //       id: 2,
//   //       name: "BMW S1000 RR",
//   //       imageUrl:
//   //         "https://www.cycleworld.com/resizer/8YPhpKAM3o3nUTrD7uemcFxyJ54=/200x0/smart/cloudfront-us-east-1.images.arcpublishing.com/octane/4BVDKKZ34J3PFJEAVIV23LZRA4.jpg",
//   //       description:
//   //         "With supporting text below as a natural lead-in to additional content.",
//   //     },
//   //   {
//   //     id: 3,
//   //     name: "Aprilla RSV4",
//   //     imageUrl:
//   //       "https://www.cycleworld.com/resizer/cMhZ_eH23cz_i50AWpOC6MUzgx0=/200x0/filters:focal(979x714:989x724)/cloudfront-us-east-1.images.arcpublishing.com/octane/ROWZBW5G4VH2LLZOLO76LPAK2I.jpg",
//   //     description:
//   //       "With supporting text below as a natural lead-in to additional content.",
//   //   },
//   //   {
//   //     id: 4,
//   //     name: "Yamaha R1M",
//   //     imageUrl:
//   //       "https://www.motorcyclistonline.com/resizer/SPNy-vpl-MCPFRupRyF8MmocalQ=/200x0/smart/cloudfront-us-east-1.images.arcpublishing.com/octane/QGLFMQ42ZFGBHEOCSGTXSECWPY.jpg",
//   //     description:
//   //       "With supporting text below as a natural lead-in to additional content.",
//   //   },
//   //   {
//   //     id: 5,
//   //     name: "Kawasaki KLR650",
//   //     imageUrl:
//   //       "https://www.motorcyclistonline.com/resizer/N0xpZpZ0uaBIOcaGy6JGYvbkp88=/200x0/filters:focal(1094x857:1104x867)/cloudfront-us-east-1.images.arcpublishing.com/octane/FQPZ6BP5TFBDHJN5TMZAIVXCHA.jpg",
//   //     description:
//   //       "With supporting text below as a natural lead-in to additional content.",
//   //   },
//   //   {
//   //     id: 6,
//   //     name: "Indian FTR",
//   //     imageUrl:
//   //       "https://www.motorcyclistonline.com/resizer/MOreLgscX0hFCJiuJm-mYsShBd0=/200x0/filters:focal(448x343:458x353)/cloudfront-us-east-1.images.arcpublishing.com/octane/LJB22NUK3FDCJFK2XQQDXYRODU.jpg",
//   //     description:
//   //       "With supporting text below as a natural lead-in to additional content.",
//   //   },
//   //   {
//   //     id: 7,
//   //     name: "Norton Commando",
//   //     imageUrl:
//   //       "https://www.bikesrepublic.com/wp-content/uploads/2019/04/Norton-Brietling-Sport-1-696x522.jpg",
//   //     description:
//   //       "With supporting text below as a natural lead-in to additional content.",
//   //   },
// ];
let retrieveMotorcycle = JSON.parse(localStorage.getItem("motorcycle")) || [];
window.onload = displayMotorcycle();

//envent listeners
document.querySelector("#addMoto").addEventListener("click", (e) => {
  e.preventDefault();
  addMotorcycle();
  location.reload(true);
});

document.querySelector("#deleteMoto").addEventListener("click", (e) => {
  e.preventDefault();
  // testGetId();
  deleteMotorcycle();
  // location.reload(true);
});

// document.querySelector("#update").addEventListener("click", () => {
//   updateMotorcycle();
// });

function addMotorcycle() {
  let motorcycleMake = document.getElementById("motoMake").value;
  let motorcycleImage = document.getElementById("motoImage").value;
  let motorcycleDescription = document.getElementById("motoDesc").value;
  let motorcycleObject = {
    name: motorcycleMake,
    imageUrl: motorcycleImage,
    description: motorcycleDescription,
  };

  if (localStorage.getItem("motorcycle") === null) {
    retrieveMotorcycle = [];
  } else {
    retrieveMotorcycle = JSON.parse(localStorage.getItem("motorcycle"));
  }
  localStorage.setItem("motorcycle", JSON.stringify(retrieveMotorcycle));
  retrieveMotorcycle.push(motorcycleObject);
  localStorage.setItem("motorcycle", JSON.stringify(retrieveMotorcycle));
  console.log(motorcycleObject);
  return { motorcycleObject };
}

function displayMotorcycle() {
  let retrieveMotorcycle = JSON.parse(localStorage.getItem("motorcycle")) || [];
  for (let i = 0; i < retrieveMotorcycle.length; i++) {
    let moto = retrieveMotorcycle[i];
    let motoName = moto.name;
    let motoImage = moto.imageUrl;
    let motoDescription = moto.description;
    let motoDiv = document.createElement("div");
    motoDiv.classList.add("col-md-3");
    motoDiv.innerHTML = `
    <div class="card text-center">
    <img src="${motoImage}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${motoName}</h5>
      <p class="card-text">${motoDescription}</p>
      <button class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModalLongUpdate"
            type="button" id="update">Update</button>
      <button
             type="button"
             class="btn btn-danger"
         data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
             id=${motoName}
                   >
             Delete
          </button>
    </div>
  </div>
    `;
    document.querySelector(".row").appendChild(motoDiv);
  }
}

  // deleteMotorcycle(getId);
//   let card = document.createElement("div");
//   card.classList.add("col-md-3");
//   card.innerHTML = `
// <div class="card text-center">
//       <div class="card-body">
//         <h5 class="card-title" id=${motorcycle.name}>${motorcycle.name}</h5>
//         <img id="imageUpdateMoto" src="${motorcycle.imageUrl}" alt="motoImg"/>
//         <p class="card-text" id="descUpdateMoto">
//           ${motorcycle.description}
//         </p>
//         <button class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModalLongUpdate"
//       type="button" id="update">Update</button>
//         <button
//           type="button"
//           class="btn btn-danger"
//           data-bs-toggle="modal"
//           data-bs-target="#staticBackdrop"
//           id=${motorcycle.name}

//         >
//           Delete
//         </button>
//       </div>
//     </div>
//     `;
//   document.querySelector(".row").appendChild(card);

// function testGetId() {
//   let getId = document.querySelector(".btn-danger").id;
//   console.log(getId);
// }

// delete motorcycle
 
function updateMotorcycle(data) {
  let motorcycle = JSON.parse(localStorage.getItem("motorcycle"));
  document.getElementById("updateNameMoto").value = motorcycle[0].name;
  document.getElementById("imageUpdateMoto").value = motorcycle[0].imageUrl;
  document.getElementById("descUpdateMoto").value = motorcycle[0].description;
  let motorcycleObject = {
    name: motorcycle[0].name,
    imageUrl: motorcycle[0].imageUrl,
    description: motorcycle[0].description,
  };

  console.log(motorcycleObject);
  return { motorcycleObject };
}

// how to target the id of the button that was clicked
function deleteMotorcycle() {
  let getId = document.querySelector(".btn-danger").id;
  console.log(getId);
  let motorcycle = JSON.parse(localStorage.getItem("motorcycle"));
  for (let i = 0; i < motorcycle.length; i++) {
    if (motorcycle[i].name === getId) {
      motorcycle.splice(i, 1);
    }
  }
  localStorage.setItem("motorcycle", JSON.stringify(motorcycle));
  location.reload(true);
}
