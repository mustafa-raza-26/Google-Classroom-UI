function show() {
    document.getElementById("forms").style.display = "block";
};

let display = document.getElementById("show")
let list = document.getElementById("list")
let class_name = document.getElementById("name")
let section = document.getElementById("section")
let subject = document.getElementById("subject")
let teacher = document.getElementById("teacher")

function create() {

    let cardData = {
        className: class_name.value,
        section: section.value,
        subject: subject.value,
        teacher: teacher.value
    };

    let storedData = JSON.parse(localStorage.getItem("cards")) || [];
    storedData.push(cardData);
    localStorage.setItem("cards", JSON.stringify(storedData));

    display.innerHTML +=`
            <div class="box">
            <img src="img/cardd" alt="" class="bgg">
            <div class="text">
            <h2>${class_name.value}</h2>
            <h5>${section.value}</h5>
            <h5>${subject.value}</h5>
            <h5>${teacher.value}</h5>
            </div>
            <footer>
            <hr>
            <span><img src="img/group.svg" alt="" class="bgg"></span>
            <span><img src="img/calender.svg" alt="" class="bgg"></span>
            <span><img src="img/dot.svg" alt="" class="bgg"></span>
            </footer>
        </div>`

    document.getElementById("forms").style.display = "none";

    list.innerHTML += `
        <div class="feature">
        <h5>${class_name.value}</h5>
        <h6>${section.value}</h6>
        </div>`

    class_name.value = "";
    section.value = "";
    subject.value = "";
    teacher.value = "";
};

window.onload = function () {
    let storedData = JSON.parse(localStorage.getItem("cards")) || [];

    storedData.forEach(cardData => {
        display.innerHTML +=`
            <div class="box">
            <img src="img/cardd" alt="" class="bgg">
            <div class="text">
            <h2>${cardData.className}</h2>
            <h5>${cardData.section}</h5>
            <h5>${cardData.subject}</h5>
            <h5>${cardData.teacher}</h5>
            </div>
            <footer>
            <hr>
            <span><img src="img/group.svg" alt="" class="bgg"></span>
            <span><img src="img/calender.svg" alt="" class="bgg"></span>
            <span><img src="img/dot.svg" alt="" class="bgg"></span>
            </footer>
        </div>`;

        list.innerHTML += `
        <div class="feature">
        <h5>${cardData.className}</h5>
        <h6>${cardData.section}</h6>
        </div>`;
    });
};

function cancel() {
    document.getElementById("forms").style.display = "none";
};
