
var hr , min, sc ;



function setup() {
  createCanvas(720, 400);
  noStroke();
}

function draw() {
  background(0);
  
  let d = map(mouseX, 0, width, 40, 300);
  fill(255, d, 0);
  ellipse(width/2, height/2, d, d);
  

    hr = hour()
    scAngle = map(hr%12 , 0 , 12 , 0, 360);
    angleMode(DEGREES); // Change the mode to DEGREES
    let a = atan2(mouseY - height / 2, mouseX - width / 2);
    translate(width / 2, height / 2);
    push();
    rotate(scAngle);
    stroke(255,0,0);
    strokeWeight(7)
    line(0,0,100,0) // Larger rectangle is rotating in degrees
    pop();

    mn = minute()
    scAngle = map(mn , 0 , 60 , 0, 360);
    angleMode(DEGREES); // Change the mode to DEGREES
    let a = atan2(mouseY - height / 2, mouseX - width / 2);
    translate(width / 2, height / 2);
    push();
    rotate(scAngle);
    stroke(255,0,0);
    strokeWeight(7)
    line(0,0,100,0) // Larger rectangle is rotating in degrees
    pop();

    sc = second()
    scAngle = map(sc , 0 , 60 , 0, 360);
    angleMode(DEGREES); // Change the mode to DEGREES
    let a = atan2(mouseY - height / 2, mouseX - width / 2);
    translate(width / 2, height / 2);
    push();
    rotate(scAngle);
    stroke(255,0,0);
    strokeWeight(7)
    line(0,0,100,0) // Larger rectangle is rotating in degrees
    pop();
  
  drawSprites();
  }