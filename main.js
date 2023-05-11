statuss="";

function setup(){
    canvas=createCanvas(580, 480);
    canvas.center;
    video=createCapture(VIDEO);
    video.size(580, 480);
    video.hide();
}

function preload(){
}

function draw(){
    image(video, 0, 0, 580, 480)
}

function start(){
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
    value=document.getElementById("input").text;
}

function modelLoaded(){
    console.log("Model is Loaded.");
    statuss="true";
}