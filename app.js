function show() {
    document.getElementById("forms").style.display = "block";
}

let display = document.getElementById("show")
let class_name = document.getElementById("name")
let subject = document.getElementById("subject")
let teacher = document.getElementById("teacher")

function create() {

    display.innerHTML +=`
            <div class="box">
            <img src="img/card_img.jpg" alt="" class="bgg">
            <div class="text">
            <h2>${class_name.value}</h2>
            <h5>${subject.value}</h5>
            <h5>${teacher.value}</h5>
            </div>
        </div>`
        class_name.value = "";
        subject.value = "";
        teacher.value = "";

    document.getElementById("forms").style.display = "none";
}

function cancel() {
    document.getElementById("forms").style.display = "none";
}   