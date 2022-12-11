const canvas = document.querySelector("canvas");

const c = canvas.getContext("2d");

canvas.width = 1067;
canvas.height = 579;

c.fillStyle = "white";
c.fillRect(0, 0, canvas.width, canvas.height);

const playerImage = new Image();
playerImage.src = "./img/playerDown (1).png";

const image = new Image();
image.src = "./map/town.png";

class Sprite {
  constructor({ position, velocity, image }) {
    this.position = position;
    this.image = image;
  }

  draw() {
    c.drawImage(this.image, this.position.x, this.position.y );
  }
}

const background = new Sprite({
  position: {
    x: -700,
    y: -110,
  },
  image: image,
});

const keys = {
  w: {
    pressed: false,
  },
  a: {
    pressed: false,
  },
  s: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
};

function animate() {
  window.requestAnimationFrame(animate);
  background.draw();
  c.drawImage(
    playerImage,
    0,
    0,
    playerImage.width / 4,
    playerImage.height,
    695,
    500,
    playerImage.width / 4,
    playerImage.height
  );
}

if(keys.w.pressed) {
  background.position.y = background.y + 3
}

animate();

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "w":
      keys.w.pressed = true;
      break;
    case "a":
      keys.a.pressed = true;
      break;
    case "s":
      keys.s.pressed = true;
      break;
    case "d":
      keys.d.pressed = true;
      break;
  }
});

window.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "w":
      keys.w.pressed = false;
      break;
    case "a":
      keys.a.pressed = false;
      break;
    case "s":
      keys.s.pressed = false;
      break;
    case "d":
      keys.d.pressed = false;
      break;
  }
});
