
const loc1_item1 = document.getElementById("tim");
const loc1_item2 = document.getElementById("timmy");
const loc1_item3 = document.getElementById("timothy");

const loc2_item1 = document.getElementById("noodle");
const loc2_item2 = document.getElementById("rice");
const loc2_item3 = document.getElementById("eggroll");

const loc3_item1 = document.getElementById("ccice");
const loc3_item2 = document.getElementById("milkshake");
const loc3_item3 = document.getElementById("hotdog");

const images = document.querySelectorAll("img");

for (let i = 0; i < images.length; i++) {
    const ele = images[i];
    ele.addEventListener("click", sizeImage);
}


loc1_item1.addEventListener("click", clickDesc1)
loc1_item2.addEventListener("click", clickDesc2)
loc1_item3.addEventListener("click", clickDesc3)

loc2_item1.addEventListener("click", clickDesc4)
loc2_item2.addEventListener("click", clickDesc5)
loc2_item3.addEventListener("click", clickDesc6)

loc3_item1.addEventListener("click", clickDesc7)
loc3_item2.addEventListener("click", clickDesc8)
loc3_item3.addEventListener("click", clickDesc9)


function clickDesc1(event) {
    const element = event.currentTarget;
    const el2 = document.getElementById("timclick")
    desc(el2);
}

function clickDesc2(event) {
    const element = event.currentTarget;
    const el2 = document.getElementById("timmyclick")
    desc(el2);
}

function clickDesc3(event) {
    const element = event.currentTarget;
    const el2 = document.getElementById("timothyclick")
    desc(el2);
}

function clickDesc4(event) {
    const element = event.currentTarget;
    const el2 = document.getElementById("noodleclick")
    desc(el2);
}

function clickDesc5(event) {
    const element = event.currentTarget;
    const el2 = document.getElementById("riceclick")
    desc(el2);
}

function clickDesc6(event) {
    const element = event.currentTarget;
    const el2 = document.getElementById("eggrollclick")
    desc(el2);
}

function clickDesc7(event) {
    const element = event.currentTarget;
    const el2 = document.getElementById("cciceclick");
    desc(el2);
}

function clickDesc8(event) {
    const element = event.currentTarget;
    const el2 = document.getElementById("milkshakeclick");
    desc(el2);
}

function clickDesc9(event) {
    const element = event.currentTarget;
    const el2 = document.getElementById("hotdogclick");
    desc(el2);
}

function desc(element) {
    if (element.classList.contains("clicked")) {
        element.classList.replace("clicked", "notclicked")
    } else {
        element.classList.replace("notclicked", "clicked")
    }
}

function sizeImage(event) {
    const img = event.currentTarget;

    img.style.height = "300px";
    img.style.width = "300px";

}