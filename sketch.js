const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg="sunrise1.png" ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
if(backgroundImg)
background(backgroundImg)

    Engine.update(engine);
    fill("black")
textSize(30)
if(hour>=12){
text("time"+hour%12+"pm",50,100)
}
else if(hour==0){
text("time:12am",100,100)
}
else{
text("time"+hour%12+"am",50,100)
}
    // write code to display time in correct format here


}

async function getBackgroundImg(){
var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
var responsej=await response.json()
var datetime=responsej.datetime
hour=datetime.slice(11,13)
if(hour>=04&&hour<=06){
debugger
bg="sunrise1.png"
}
else if(hour>=06&&hour<=08){
    debugger
    bg="sunrise2.png"
    }
 else if(hour>=08&&hour<=11){
        debugger
        bg="sunrise3.png"
        }
else if(hour>=11&&hour<=13){
            debugger
            bg="sunrise4.png"
            }
 else{
debugger
bg="sunrise5.png"
}
backgroungimg=loadImage(bg)
}
