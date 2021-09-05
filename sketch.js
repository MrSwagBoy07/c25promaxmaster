var drops=[]
var angle= Math.random(1,3);
var r,g,b

function setup(){
    var canvas = createCanvas(800,400);
   for(var i=0 ; i<500 ; i++){
       drops[i]= new Rain(random(0,400),random(-100,-500));
   }
}

function draw(){
  frameRate(24)
  if(frameCount%30===0){
   r=Math.round(Math.random()*255);
   g=Math.round(Math.random()*255);
   b=Math.round(Math.random()*255);

  }
  background(r,g,b)
  for(var i =0 ; i<drops.length;i++){
    drops[i].fall()
    drops[i].display()
  }
}

