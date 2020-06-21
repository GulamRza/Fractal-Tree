var tree = [];
var sw;

function setup() {
  createCanvas(displayWidth , displayHeight*0.8);
  frameRate(10);
  var s = createVector(width / 2, height);
  var e = createVector(width / 2, height - 70);
  sw = 13;

  var root = new Branch(s, e);
  tree[0] = root;
  //makeTree();
}

function mousePressed(){
  if(mouseX > 4*width/5 && mouseY > 4*height/5){
  tree = [];
  var s = createVector(width / 2, height);
  var e = createVector(width / 2, height - 70);
  sw = 13;

  var root = new Branch(s, e);
  tree[0] = root;
  }
}


function makeTree() {
  for (var n = 0; n<7; n++) {
    sw *= 0.8;
    for (var i = tree.length - 1; i >= 0; i--) {
      if (!tree[i].finished) {
        if(random() <= 0.8){
          tree.push(tree[i].branchA());
        }
        if(random() <= 0.8){
          tree.push(tree[i].branchB());
        }
        if(random() <= 0.8){
          tree.push(tree[i].branchC());
        }
      }
      tree[i].finished = true;
    }
    
  }
}



function draw() {
  background(200);
  if(sw > 2){
    sw *= 0.8;
    for (var i = tree.length - 1; i >= 0; i--) {
      if (tree[i].finished) {
        if(random() <= 1){
          tree.push(tree[i].branchA());
        }
        if(random() <= 1){
          tree.push(tree[i].branchB());
        }
        //if(random() <= 0.5){
         // tree.push(tree[i].branchC());
        //}
      }
      tree[i].finished = false;
    }
  }


  for (branch of tree) {
    branch.show();
    
    if(branch.finished && sw < 2){
      fill(20,200,50,150);
      noStroke();
      ellipseMode(CENTER);
      ellipse(branch.end.x,branch.end.y,10,10);
    }
    
  }
}