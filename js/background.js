const images=["dog.jpg", "dog2.jpg", "lovetriangle.jpg"];
const chosenImage=images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");
bgImage.src=`img/${chosenImage}`;
document.body.appendChild(bgImage);