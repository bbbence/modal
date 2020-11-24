"use strict";


let modal = document.getElementById("theModal");


let btn = document.getElementById("modalBtn");

let btn2 = document.getElementById("okBtn")

let btn3 = document.getElementById("cancelBtn")


let span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}

btn2.onclick = function() {
    modal.style.display = "none";
}

btn3.onclick = function() {
    modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}