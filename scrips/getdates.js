const currentYear = document.querySelector(".currentyear");

let today = new Date();

currentYear.innerHTML = today.toDateString();