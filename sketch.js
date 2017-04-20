function setup() {
  createCanvas(205, 205)
  background(0)
}

var value = 0;
function draw() {
  
  {strokeWeight(10)
stroke(240, 230, 233)
 
line(5, 5, 5, 200)
line(5, 5, 200, 5)
line(200, 5, 200, 200)
line(5, 200, 200, 200)

  noStroke();
  resetMatrix()
  textSize(35);
  fill(0);
text("N E V E R", 15, 90);

  
textSize(38);
text("WE WILL", 32, 45);
fill(0);
  
  textSize(36);
text("GROW SO", 15, 140);
fill(0);

textSize(32);
text("OLD AGAIN", 15, 190);
fill(0);



 { noStroke();
  textSize(15);
  translate(width/25, height/30);
rotate(PI/2.0);
text("AND", 8, -8);
fill(0);}
textSize(10);
text("E V E R", 55, -175);
 
 resetMatrix()
 {translate(mouseX, mouseY);
  textSize(30);
  noStroke();
fill(random(0, 255), random(0, 255), random(0, 255));

  rect(0, 0, 20, 45)
  }
}


  
}