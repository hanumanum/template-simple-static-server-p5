var img1, img2;
var i = 0;

function setup() {
    var cnv = createCanvas(1000, 800);
    angleMode(DEGREES);
}


function preload(){
    img1 = loadImage("images/cat.png");
    img2 = loadImage("images/home.png");
    
}

function draw() {
    translate(500, 400);
    
    
    img1.resize(100,0);
    img2.resize(100,0);

    clear();

    rect(0, 0, 20, 20);
    for(var n = 0; n < 360*2; n+=20){
        push();
        rotate(n);
        image(img1, n, 0);
        pop();
    
    }

    push();
    rotate(2.7/PI);    
    image(img2, 100, 100);
    pop();

    
    
}