/* FUNCTIONS MODULE ASSIGNMENT
Demonstrating knowledge of functions with parameters and return values using the myCanvas
*/

// *** Don't forget to add your graphics and random libraries! ***

// Canvas setup
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 1000;
cnv.height = 700;
let cloud = document.getElementById("cloud-image");
let lion = document.getElementById("lion-image");
let lion2 = document.getElementById("lion-image2");
let lion3 = document.getElementById("lion-image3");
let lionTrees = document.getElementById("lion-trees");
let Birds = document.getElementById("birds-image");
let dangerZone = document.getElementById("danger-zone");
let lionSleeping = document.getElementById("lion-sleeping");
let lionSleeping2 = document.getElementById("lion-sleeping2");
let lionSleeping3 = document.getElementById("lion-sleeping3");

// Do not add/remove code from this section:
// ***************************************************
// Global Vars
let mouseX;
let mouseY;

// mouse movement listener
cnv.addEventListener("mousemove", mousemoveHandler);

// Math Helper Functions
function mousemoveHandler(event) {
  let rect = cnv.getBoundingClientRect();
  mouseX = event.clientX - rect.left;
  mouseY = event.clientY - rect.top;
  console.log("X: " + mouseX + "  Y: " + mouseY);
}
// ***************************************************

// Set background
let Day = document.getElementById("day").addEventListener("click", changeDay);
function changeDay() {
  ctx.fillStyle = "lightblue";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // Sun
  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.arc(140, 90, 40, 0, 2 * Math.PI);
  ctx.fill();

  // Clouds
  clouds(cloud, 130, 20, 200, 200);
  clouds(cloud, 70, 60, 200, 200);
  clouds(cloud, 270, 10, 200, 200);
  clouds(cloud, 340, 40, 200, 200);
  clouds(cloud, 220, 70, 200, 200);
  clouds(cloud, 580, 20, 200, 200);
  clouds(cloud, 640, 70, 200, 200);
  clouds(cloud, 700, 30, 200, 200);
  clouds(cloud, 780, 70, 200, 200);

  // Grass
  ctx.fillStyle = "lightgreen";
  ctx.fillRect(0, 400, 1000, 300);
  ctx.lineWidth = 2;

  // Lion
  Lion(lion, 100, 430, 200, 150);
  Lion(lion, 20, 350, 200, 150);
  Lion(lion, 180, 350, 200, 150);
  Lion(lion2, 200, 490, 200, 180);
  Lion(lion2, 370, 490, 200, 180);
  Lion(lion3, 700, 400, 200, 150);
  Lion(lion3, 740, 540, 200, 150);

  // Trees
  Trees(lionTrees, 200, 230, 200, 230);
  Trees(lionTrees, 70, 230, 200, 230);
  Trees(lionTrees, 700, 230, 200, 230);
  Trees(lionTrees, 830, 230, 200, 230);

  // Birds
  ctx.drawImage(Birds, 380, 60, 270, 250);

  // Danger zone
  ctx.drawImage(dangerZone, 430, 280, 150, 150);

  // Helper functions
  function clouds(cloud, x, y, w, h) {
    ctx.drawImage(cloud, x, y, w, h);
  }

  function Trees(lionTrees, x, y, w, h) {
    ctx.drawImage(lionTrees, x, y, w, h);
  }

  function Lion(lion, x, y, w, h) {
    ctx.drawImage(lion, x, y, w, h);
  }
}

// User interaction (Night)
let Night = document
  .getElementById("night")
  .addEventListener("click", changeNight);
function changeNight() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // Moon
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.arc(140, 90, 40, 0, 5 * Math.PI);
  ctx.fill();

  // Grass
  ctx.fillStyle = "darkgreen";
  ctx.fillRect(0, 400, 1000, 300);
  ctx.lineWidth = 2;

  // Trees
  Trees(lionTrees, 200, 230, 200, 230);
  Trees(lionTrees, 70, 230, 200, 230);
  Trees(lionTrees, 700, 230, 200, 230);
  Trees(lionTrees, 830, 230, 200, 230);

  // Danger zone
  ctx.drawImage(dangerZone, 430, 280, 150, 150);

  // Lions sleeping
  LionAsleep(lionSleeping, 100, 400, 200, 150);
  LionAsleep(lionSleeping, 20, 550, 200, 150);
  LionAsleep(lionSleeping, 180, 500, 200, 150);
  LionAsleep(lionSleeping, 200, 490, 200, 180);
  LionAsleep(lionSleeping3, 600, 490, 200, 180);
  LionAsleep(lionSleeping3, 700, 400, 200, 150);
  LionAsleep(lionSleeping3, 740, 540, 200, 150);

  // Helper functions
  function clouds(cloud, x, y, w, h) {
    ctx.drawImage(cloud, x, y, w, h);
  }

  function Trees(lionTrees, x, y, w, h) {
    ctx.drawImage(lionTrees, x, y, w, h);
  }

  function Lion(lion, x, y, w, h) {
    ctx.drawImage(lion, x, y, w, h);
  }

  function LionAsleep(lionSleeping, x, y, w, h) {
    ctx.drawImage(lionSleeping, x, y, w, h);
  }
}
