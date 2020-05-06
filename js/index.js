// Your code goes here
// VARIABLES

// IMG VARIABLES
let img = document.querySelectorAll("img");
let busPic = img[0];

// A Variables

let a = document.querySelectorAll("a");
let a1 = a[0];
let a2 = a[0];
let a3 = a[0];
let a4 = a[0];

// H Variables

let h1 = document.querySelector("h1");

let h2 = document.querySelectorAll("h2");

let h2_1 = h2[0];
let h2_2 = h2[1];

// section variables
let button = document.querySelectorAll(".btn");
let button1 = button[0];

let destination = document.querySelector(".destination");

// FUNCTIONS

Reload = function (e) {
    return e.preventDefault();
};

bodyColorRed = function () {
    document.body.style.backgroundColor = "red";
};

bodyColorBlue = function () {
    document.body.style.backgroundColor = "blue";
};

bodyColorBlue1 = function (e) {
    document.body.style.backgroundColor = "blue";
    e.stopPropagation();
};

bodyColorYellow = function () {
    document.body.style.backgroundColor = "yellow";
};

bodyColorPurple = function () {
    document.body.style.backgroundColor = "purple";
};

bodyColorOrange = function () {
    document.body.style.backgroundColor = "orange";
};

bodyColorGreen = function () {
    document.body.style.backgroundColor = "green";
};

bodyColorPink = function () {
    document.body.style.backgroundColor = "pink";
};

bodyColorGrey = function () {
    document.body.style.backgroundColor = "grey";
};

bodyColorBrown = function () {
    document.body.style.backgroundColor = "brown";
};

escKey = function (event) {
    if (event.key === "Escape") {
        document.body.style.backgroundColor = "white";
    }
};

// EVENTS

busPic.addEventListener("click", bodyColorRed);

document.addEventListener("keydown", escKey);

busPic.addEventListener("wheel", bodyColorBlue);

busPic.addEventListener("dblclick", bodyColorGreen);

busPic.addEventListener("mouseenter", bodyColorOrange);

busPic.addEventListener("mouseleave", bodyColorYellow);

h1.addEventListener("mouseover", bodyColorPurple);

h2_1.addEventListener("copy", bodyColorPink);

document.addEventListener("scroll", bodyColorGrey);

destination.addEventListener("click", bodyColorOrange);

button1.addEventListener("click", bodyColorBlue1);

a1.addEventListener("load", Reload);
a2.addEventListener("load", Reload);
a3.addEventListener("load", Reload);
a4.addEventListener("load", Reload);
