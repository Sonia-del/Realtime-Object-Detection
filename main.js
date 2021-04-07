video = "";
status = "";

function setup() 
{
    canvas = createCanvas(640, 520);
    canvas.center();

}

function preload()
{
    video = createVideo("video.mp4");
    video.hide();
}

function draw()
{
    image(video, 0, 0, 640, 250);
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded!")
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}