const canvas = document.querySelector("canvas");

const c = canvas.getContext("2d");

canvas.width = 1067;
canvas.height = 579;

c.fillStyle = "white";
c.fillRect(0, 0, canvas.width, canvas.height);

const image = new Image();
image.src = "./map/town.png";

image.onload = () => {
  c.drawImage(image, 0, 0);
};
