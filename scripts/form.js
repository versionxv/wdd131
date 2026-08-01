const today = new Date();

const currentYear = today.getFullYear();

document.getElementById('currentyear').textContent = currentYear

document.getElementById('lastmodified').textContent = document.lastModified;

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

function createSelectOptions() {
    const selectElement = document.querySelector(".product");

    products.forEach(product => {
        let option = document.createElement("option");
        option.setAttribute("value", product.id); 
        option.textContent = product.name; 

        selectElement.appendChild(option);
    })
}

createSelectOptions();

const form = document.getElementById('newform');
form.addEventListener('submit', function(event) {event.preventDefault();
    let count = localStorage.getItem('formCompletionCount');
    count = count ? parseInt(count, 10) : 0;
    count += 1;
    localStorage.setItem('formCompletionCount', count);

    console.log(`Form completed ${count} times.`);
})