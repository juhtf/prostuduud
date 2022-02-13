img=" ";
status=" ";
object=[];

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="status:Detecting Objects";
}

function preload(){
    img=loadImage('cushion.jfif');
}

function draw(){
    image(img,0,0,640,420);
    if(status !=" "){
        for(i=0; i<object.length;i++){
            document.getElementById("status").innerHTML="Status=Object Detected";
            fill('#FF0000');

            percent= Math.floor(object[i].confidence * 100);
            text(object[i].label + " " + percent + "%",object[i].x,object[i].y);
            noFill();
            stroke('#FF0000');
            rect(object[i].x,object[i].y,object[i].height,object[i].width);
        }
            
    }
}

function back(){
    window.location="index.html"
}

function modelLoaded(){
    console.log("Model Loaded!!!");
    status=true;
    objectDetector.detect(img,gotResults);
    }
    
    function gotResults(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    object=results;
    }