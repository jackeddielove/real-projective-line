function preload() {
  font = loadFont("cmuSerifRoman.ttf");
}

//////////////////////////////////////////////////////

let s = 0;
let myColors = [];





//////////////////////////////////////////////////////

function setup() {
  //set height windowHeight or to 90% of window height and set width to 4/3 of height for a 4:3 aspect ratio
  r = 4 / 3;
  // h = 0.9*windowHeight;
  h=windowHeight;
  createCanvas(r*h, h, WEBGL);
  //set width to windowWidth or to 90% of window width and set height to 3/4 of width for a 4:3 aspect ratio
  // r = 3/4;
  // w = 0.9*windowWidth;
  // w = windowWidth;
  // createCanvas(w, r * w, WEBGL);
  antipodeColors = [
  color('red'), 
  color('yellow'), 
  color('green'), 
  color('violet')
  ];
}

//////////////////////////////////////////////////////

function draw() {

  if (keyIsDown(RIGHT_ARROW)) {
    s = constrain(s + 0.01, 0, 1);
  }
  if (keyIsDown(LEFT_ARROW)) {
    s = constrain(s - 0.01, 0, 1);
  }


  // background('#EEEEEE');
  background('white');
  textFont(font);
  textSize(100);
  noFill();
  beginShape();
  for (let t = 0; t < TWO_PI; t += 0.01) {
  let X0 = Math.cos(t);
  let Y0 = Math.sin(t);
  let X1 = Math.pow(X0, 2) - Math.pow(Y0, 2);
  let Y1 = 2*X0*Y0;
  let Xs = (1-s)*X0 + s*X1
  let Ys = (1-s)*Y0 + s*Y1
  let x = map(Xs, -5, 5, -width/2, width/2);
  let y = map(Ys, -5, 5, width/2, -width/2);
  vertex(x, y);
  }
  endShape();

  ptColors = []
  for (let n = 0; n < 8; n++) {
    let X0 = Math.cos(n*Math.PI/4);
    let Y0 = Math.sin(n*Math.PI/4);
    let X1 = Math.pow(X0, 2) - Math.pow(Y0, 2);
    let Y1 = 2*X0*Y0;
    let Xs = (1-s)*X0 + s*X1
    let Ys = (1-s)*Y0 + s*Y1
    let x = map(Xs, -5, 5, -width/2, width/2);
    let y = map(Ys, -5, 5, width/2, -width/2);
    fill(antipodeColors[n%4]);
    ellipse(x, y, 20);
  }
}