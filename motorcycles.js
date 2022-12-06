retrieveMotorcycle = JSON.parse(localStorage.getItem("motorcycle")) || [];
window.onload = displayMotorcycle();

//event listener to add motorcycle
document.querySelector("#addMoto").addEventListener("click", (e) => {
  e.preventDefault();
  addMotorcycle();
  location.reload(true);
});

//confirm delete
document.querySelector("#confirmDelete").addEventListener("click", (e) => {
  e.preventDefault();
  alert("Motorcycle deleted successfully");
  location.reload(true);
});

//event listener to update motorcycle
document.querySelector("#updateSub").addEventListener("click", (e) => {
  e.preventDefault();

  let obj = {};

  let motorcycleMake = document.getElementById("updateMake").value;
  let motorcycleImage = document.getElementById("updateImage").value;
  let motorcycleDescription = document.getElementById("updateDesc").value;
  obj = {
    name: motorcycleMake,
    imageUrl: motorcycleImage,
    description: motorcycleDescription,
  };

  if (localStorage.getItem("motorcycle") === null) {
    retrieveMotorcycle = [];
  } else {
    retrieveMotorcycle = JSON.parse(localStorage.getItem("motorcycle"));
  }

  retrieveMotorcycle.push(obj);
  localStorage.setItem("motorcycle", JSON.stringify(retrieveMotorcycle));
  location.reload(true);
  return { obj };
});

function addMotorcycle() {
  let motorcycleObject = {};

  let motorcycleMake = document.getElementById("motoMake").value;
  let motorcycleImage = document.getElementById("motoImage").value;
  let motorcycleDescription = document.getElementById("motoDesc").value;
  motorcycleObject = {
    name: motorcycleMake,
    imageUrl: motorcycleImage,
    description: motorcycleDescription,
  };

  if (localStorage.getItem("motorcycle") === null) {
    retrieveMotorcycle = [];
  } else {
    retrieveMotorcycle = JSON.parse(localStorage.getItem("motorcycle"));
  }

  retrieveMotorcycle.push(motorcycleObject);
  localStorage.setItem("motorcycle", JSON.stringify(retrieveMotorcycle));
  console.log(motorcycleObject);

  return { motorcycleObject };
}

function displayMotorcycle() {
  retrieveMotorcycle.map((moto) => {
    let motoName = moto.name;
    let motoImage = moto.imageUrl;
    let motoDescription = moto.description;
    let motoDiv = document.createElement("div");
    motoDiv.classList.add("col-lg-3", "col-md-4", "col-sm-6");

    motoDiv.innerHTML = `
    <div class="card text-center">
    <img src="${motoImage}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${motoName}</h5>
      <p class="card-text">${motoDescription}</p>  
      <button class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModalLongUpdate"
            type="button" id="${motoName}">Update</button>
      <button
             type="button"
              class="btn btn-danger"
              data-bs-toggle="modal"
              data-bs-target="#exampleModalLongDelete"
             id="${motoName}"
                   >
             Delete
          </button>
    </div>
  </div>
    `;
    // event listener to delete target
    motoDiv.querySelector(".btn-danger").addEventListener("click", (e) => {
      let retrieveMotorcycle = JSON.parse(
        localStorage.getItem("motorcycle")
      ).filter((moto) => moto.name !== e.target.id);

      localStorage.setItem("motorcycle", JSON.stringify(retrieveMotorcycle));
    });
    // event listener to update target
    motoDiv.querySelector(".btn-secondary").addEventListener("click", (e) => {
      let targetId = e.target.id;
      let idToUpdate = retrieveMotorcycle.find(
        (moto) => moto.name === targetId
      );
      //target value populate form
      document.querySelector("#updateMake").value = idToUpdate.name;
      document.querySelector("#updateImage").value = idToUpdate.imageUrl;
      document.querySelector("#updateDesc").value = idToUpdate.description;
      let obj = {
        name: idToUpdate.name,
        imageUrl: idToUpdate.imageUrl,
        description: idToUpdate.description,
      };
      //filtering target to delete before update
      retrieveMotorcycle = JSON.parse(
        localStorage.getItem("motorcycle")
      ).filter((moto) => moto.name !== e.target.id);
      localStorage.setItem("motorcycle", JSON.stringify(retrieveMotorcycle));
      return { obj };
    });
    document.querySelector(".row").insertAdjacentElement("beforeend", motoDiv);
  });
}
