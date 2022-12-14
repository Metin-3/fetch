
const btnAdd = document.querySelector("#btnAdd");
const modal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector("#modalCloseBtn");
const modalAddBtn = document.querySelector("#modalAddBtn");
const btnClose = document.querySelector(".btn-close");
const card = document.querySelector(".wrapper");
const cardDelete = document.querySelector(".btnDelete")

let valueName = document.querySelector("#name").value;
let valueSurname = document.querySelector("#username").value;
let valueGender = document.querySelector("#select").value;
let valueAge = document.querySelector("#age").value;
let valueTitle = document.querySelector("#title").value;

fetch(`http://localhost:3000/users/`)
    .then(response => response.json())
    .then(data => {

        data.forEach(user => {
            console.log(user);
            card.innerHTML += `
        <div class="card col-3">
            <div class="card-body">
                <h5 class="card-title">Name: ${user.name}</h5>
                <p class="card-text">Surname: ${user.surname}</p>
                <p class="card-text">Gender: ${user.gender}</p>
                <p class="card-text">Title:${user.title}</p>
                <p class="card-text">Story: ${user.age}</p>
                <button type="button" class="btn btn-danger btnDelete"><i class="fa-solid fa-trash-can"></i></button>
                <button type="button" class="btn btn-primary"><i class="fa-solid fa-circle-info"></i></button>
            </div>
        </div>
        `
        });
    });






btnAdd.addEventListener("click", () => {
    modal.style.display = "block";
});

modalCloseBtn.addEventListener("click", () => {
    modal.style.display = "none"
});

btnClose.addEventListener("click", () => {
    modal.style.display = "none";
});


modalAddBtn.addEventListener("click", () => {

    const obj = {
        "name": valueName,
        "surname": valueSurname,
        "age": valueAge,
        "title": valueTitle,
        "gender": valueGender
    };

    fetch(`http://localhost:3000/users/`, {

        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },

        method: 'POST',

        body: JSON.stringify(obj)
    })

        .then(function (res) { console.log(res) })
        .catch(function (res) { console.log(res) })
});
