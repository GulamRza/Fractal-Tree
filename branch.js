function Branch(start,end){
  this.start = start;
  this.end = end;
  this.sw = sw;
  this.finished = true;
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  
  
  this.show = function(){
    var dir = p5.Vector.sub(this.end,this.start);
    var len = dir.mag();
    /*
    if(len > 5){
      stroke(150,75,0);
    }else{
      stroke(50,100,10);
    }
    */
  //  stroke(this.r,this.g,this.b);
    stroke(20);
    strokeWeight(this.sw);
    line(start.x,start.y,end.x,end.y);
  }
  
  this.branchA = function(){
    var dir = p5.Vector.sub(this.end,this.start);
    dir.rotate(random(0, PI / 6));
    dir.mult(random(0.6, 1));
    var newEnd = p5.Vector.add(this.end,dir);
    var b = new Branch(this.end,newEnd);
    return b;
  }
  
  this.branchB = function() {
    var dir = p5.Vector.sub(this.end,this.start);
    dir.rotate(random(-PI/6,0));
    dir.mult(random(0.6,1));
    var newEnd = p5.Vector.add(this.end,dir);
    var b = new Branch(this.end, newEnd);
    return b;
  }
  
  this.branchC = function() {
    var dir = p5.Vector.sub(this.end,this.start);
    dir.rotate(random(-PI/6,PI/6));
    dir.mult(random(0.6,1));
    var newEnd = p5.Vector.add(this.end,dir);
    var b = new Branch(this.end, newEnd);
    return b;
  }
  
}