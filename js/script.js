const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

// Question 1
const cat = {
  complain: isTheCatComplaining(),
};

function isTheCatComplaining() {
  console.log("Meow!");
}

// Question 2

const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

// Question 3

heading.style.fontSize = "2em";

// Question 4

heading.classList.add("subheading");

// Question 5

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";
}

// Question 6

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.background = "yellow";

// Question 7

function printListNames(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i].name);
  }
}

printListNames(cats);

// Question 8

const catContainer = document.querySelector(".cat-container");

function createCats(cats) {
  let html = "";

  for (let i = 0; i < cats.length; i++) {
    let age = "Age unknown";

    if (cats[i].age && cats[i].age > 0) {
      age = cats[i].age;
    }

    html += `<div class="cat">
              <h5 class="cat-heading">${cats[i].name}</h5>
              <p class="cat-age">Age: ${age}</p>
            </div>`;
  }

  return html;
}

const catHtml = createCats(cats);

catContainer.innerHTML = catHtml;
