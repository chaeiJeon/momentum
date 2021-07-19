/*
const images=["dog.jpg", "dog2.jpg", "lovetriangle.jpg"];
const chosenImage=images[Math.floor(Math.random()*images.length)];
*/
const bgImage = document.createElement("img");
bgImage.classList.add("background");
bgImage.src="https://source.unsplash.com/random";
document.body.appendChild(bgImage);