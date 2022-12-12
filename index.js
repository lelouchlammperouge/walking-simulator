const canvas = document.querySelector("canvas");

const c = canvas.getContext("2d");

canvas.width = 1485;
canvas.height = 720;

const collisionsMap = [];
for (let i = 0; i < collisions.length; i += 70) {
  collisionsMap.push(collisions.slice(i, 70 + i));
}

class Boundary {
  static width = 45;
  static height = 45;
  constructor({ position }) {
    this.position = this.position;
    this.width = 45;
    this.height = 45;
  }
  draw() {
    c.fillStyle = "red";
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

const Boundaries = [];

collisionsMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === 100)
      Boundaries.push(
        new Boundary({
          position: {
            x: j * Boundary.width,
            y: i * Boundary.height,
          },
        })
      );
  });
});

console.log(Boundaries);

const image = new Image();
image.src = "./map/town.png";

const playerImage = new Image();
playerImage.src = "./img/playerDown (1).png";

class Sprite {
  constructor({ position, velocity, image }) {
    this.position = position;
    this.image = image;
  }

  draw() {
    c.drawImage(this.image, this.position.x, this.position.y);
  }
}

const background = new Sprite({
  position: {
    x: -700,
    y: -111,
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
    canvas.width / 2.1,
    canvas.height / 1.44,
    playerImage.width / 4,
    playerImage.height
  );
  if (keys.w.pressed) background.position.y += 4.5;
  else if (keys.a.pressed) background.position.x += 4.5;
  else if (keys.s.pressed) background.position.y -= 4.5;
  else if (keys.d.pressed) background.position.x -= 4.5;

  Boundaries.forEach((boundary) => {
    boundary.draw();
  });
}

animate();

let lastKey = "";
window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "w":
      keys.w.pressed = true;
      lastKey = "w";
      break;
    case "a":
      keys.a.pressed = true;
      lastKey = "a";
      break;
    case "s":
      keys.s.pressed = true;
      lastKey = "s";
      break;
    case "d":
      keys.d.pressed = true;
      lastKey = "d";
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
  }
});
