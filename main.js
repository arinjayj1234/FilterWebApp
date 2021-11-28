function preload(){
}

function setup(){
  canvas = createCanvas(640, 480);
  canvas.position(610, 250);
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();  
}

function draw(){
  image(video, 0, 0, 640, 480);
}

function takeSnapshot(){
}