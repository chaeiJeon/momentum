/*
const images=["dog.jpg", "dog2.jpg", "lovetriangle.jpg"];
const chosenImage=images[Math.floor(Math.random()*images.length)];
*/
const bgImage = document.createElement("img");
bgImage.classList.add("background");
bgImage.src="https://source.unsplash.com/category/nature/1600x900";

document.body.appendChild(bgImage);