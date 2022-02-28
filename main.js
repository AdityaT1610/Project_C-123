noseX = 0;
noseY = 0;

difference = 0;
right_wristX = 0;
left_wristX = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 500);
    canvas.position(560, 90);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet is Initialized!!!!!!!!!!!!!!!!!!!!!!!!!");
}

function draw()
{
    background('#333333');
    document.getElementById("square_sides").innerHTML = "width and height of a square will be ="+ difference + "px";
    fill('#098675');
    storke('#098675');
    square(noseX, noseY, difference);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX ="+ noseX + "noseY =" + noseY);
        left_wristX = results[0].pose.left_wrist.x;
        right_wristX = results[0].pose.right_wrist.x;
        difference = floor(left_wristX - right_wristX);
        console.log("left_wristX =" + left_wristX + "right_wristX =" + right_wristX + "difference =" + difference);
    }
}