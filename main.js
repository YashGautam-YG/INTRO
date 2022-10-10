function preload(){

}

function setup(){
  canvas=createCanvas(640,480);
  canvas.position(110,250);
  video=createCapture(VIDEO);
  video.hide();
  tint_color="";

} 

function draw(){
    image(video,0,0,640,480);
    circle(100, 100,100);
    rect(70, 140, 55, 217);
    circle(500, 400,100);
    rect(470, 140, 60, 217);
    circle(500, 100,100);
    rect(140, 75, 315, 55);
    circle(100, 400,100);
    rect(140, 375, 315, 55);
    tint(tint_color);

}
function take_snapshot(){
    save('student_name.png')

}
 function filter_tint(){
    tint_color=document.getElementById("colourname").value;

}