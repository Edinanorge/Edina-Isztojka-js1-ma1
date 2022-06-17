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
for (i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";
}
// Question 6
// Question 7
// Question 8
