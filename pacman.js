let x,y,dir;
let x1;
let y1;
let x2;
let y2;
let x3;
let y3;
let direction;
let move;
let canMovey;
let canMovex;
let canMoveLeft;
let canMoveRight;
let canMoveDown;
let gameOver;
let cherryPowers;
let canDrawCherry;
let ene1;
let ene2;
let ene3;
let ch;
let paccolor;
let img;
let changeSpeed;
let changeSpeed2;

function setUp() {
  x = 16;
  y = 16;
  dir = 60;
  move = true;
  canMovey = true;
  canMovex = true;
  canMoveLeft = false;
  canMoveRight = false;
  canMoveDown = false;
  cherryPowers = true;
  ene1 = true;
  ene2 = true;
  ene3 = true;
  ch = 422;
  x1 = 422.5;
  y1 = 422.5;
  x2 = 387.5;
  y2 = 422.5;
  x3 = 422.5;
  y3 = 387.5;
  canDrawCherry = true;
  gameOver = false;
  paccolor = "yellow";
  dotsDrawn = [];
  stopAdding = true;
  direction = "";
  img = new Image();
  img.src = "cherry.jpg";
  changeSpeed = false;
  changeSpeed2 = false;

  setTimeout(function(){
    changeSpeed = true;
  },20000)
  setTimeout(function(){
    changeSpeed2 = true;
  },45000)
}

  setInterval(function(){
    if (changeSpeed) {
      moveEnemies()
    }
  },80);

  setInterval(function(){
    if (changeSpeed2) {
      moveEnemies()
    }
  },80);

//Reset button
function reset(){
  setUp();
}

//Defines Pac-Man's path
setInterval(pacMoves,1);
function pacMoves() {
  if((x>=0 && x<=35) || (x>=135 && x<=170) || (x>=405 && x<=440) || ((x>=270 && x<=305)&&(y>=153 && y<=440))) {
    canMovey = true;
  } else {
    canMovey = false;
  }
  if(((x>=287 && x<=305)&&(y>=152 && y<=440))){
    canMoveDown = true;
  } else {
    canMoveDown = false;
  }
  if((y>=0 && y<=35) || (y>=135 && y<=170) || (y>=405 && y<=440) || ((x>=0 && x<=152)&&(y>=270 && y<=305)) || ((x>=290 && x<=440)&&(y>=270 && y<=305))) {
    canMovex = true;
  } else {
    canMovex = false;
  }
  if(((x>=0 && x<=160)&&(y>=270 && y<=305))) {
    canMoveLeft = true;
  } else {
    canMoveLeft = false;
  }
  if(((x>=287 && x<=440)&&(y>=270 && y<=305))) {
    canMoveRight = true;
  } else {
    canMoveRight = false;
  }
}

  //Event listeners for arrow keys
  addEventListener("keydown", function(){
    if (event.keyCode == 39) {  //right
      direction = "right";

    } if(event.keyCode == 37) { //left
        direction = "left";

    } if(event.keyCode == 40) { //down
        direction = "down";

    } if(event.keyCode == 38) { //up
        direction = "up";
    }
  })

  //Moves Pac-man
  let myInterval = setInterval(movePacMan,50)
  function movePacMan() {
    if (direction == "right" && (x < 440-18) && (canMovex||canMoveRight)) {
      x += 5;
      dir = 60;
      if(y>=0 && y<=35){
        y=17.5
      } else if(y>=135 && y<=170){
        y=152.5
      } else if(y>=405 && y<=440){
        y=422.5
      } else if((x>=0 && x<=153)&&(y>=270 && y<=305)){
        y=287.5
      } else if((x>=270 && x<=440)&&(y>=270 && y<=305)){
        y=287.5
      }

    } else if(direction == "left" && (x > 17) && (canMovex||canMoveLeft)) {
      x -= 5;
      dir = 330;
      if(y>=0 && y<=35){
        y=17.5
      } else if(y>=135 && y<=170){
        y=152.5
      } else if(y>=405 && y<=440){
        y=422.5
      } else if((x>=0 && x<=153)&&(y>=270 && y<=305)){
        y=287.5
      } else if((x>=270 && x<=440)&&(y>=270 && y<=305)){
        y=287.5
      }

    } else if(direction == "down" && (y < 440-19) && (canMovey||canMoveDown)) {
      y+= 5;
      dir = 200;
      if(x>=135 && x<=170) {
        x=152.5;
      } else if(x>=0 && x<=35) {
        x=17.5;
      } else if(x>=405 && x<=440){
        x=422.5;
      } else if((x>=270 && x<=305)&&(y>=135 && y<=440)) {
        x=287.5;
      }

    } else if(direction == "up" && (y > 17) && canMovey) {
      y -= 5;
      dir = -70;
      if(x>=135 && x<=170) {
        x=152.5;
      } else if(x>=0 && x<=35) {
        x=17.5;
      } else if(x>=405 && x<=440){
        x=422.5;
      } else if((x>=270 && x<=305)&&(y>=135 && y<=440)) {
        x=287.5;
      }

    }
  }

  //Moves enemies
  let myInterval2 = setInterval(moveEnemies,50)
  function moveEnemies() { //1 = red, 2 = blue, 3 = pink
     if(y1>152.5 && x1 == 422.5){
       y1-=3
     } if (x1>152.5 && y1 == 152.5) {
       x1-=3
     } if (y1<422.5 && x1 == 152.5) {
       y1+=3
     } if (y1==422.5 && x1>17.5) {
       x1-=3
     } if(x1==17.5 && y1>17.5) {
       y1-=3
     } if(x1<422.5 && y1==17.5) {
       x1+=3
     }

     if(x2>287.5 && y2==422.5) {
       x2-=3;
     } if(x2==285.5 && y2>152.5) {
       y2-=3
     } if(y2==152.5 && x2<422.5) {
       x2+=3
     } if(x2==423.5 && y2<422.5) {
       y2+=3
     }

     if (y3>17.5 && x3==422.5) {
       y3-=3;
     } if(y3==15.5 && x3>152.5) {
       x3-=3;
     } if(x3==152.5 && y3<152.5) {
       y3+=3
     } if(y3==153.5 && x3<422.5) {
       x3+=3
     }
  }

  //Detects if Pac-man encounters any enemy
  setInterval(function(){
    if(cherryPowers){
      if((x > (x1-23)) && (x < (x1+23)) && (y > (y1-23)) && (y < (y1+23))) {
        gameOver = true;
        dotsDrawn = []
      } if((x > (x2-23)) && (x < (x2+23)) && (y > (y2-23)) && (y < (y2+23))) {
        gameOver = true;
        dotsDrawn = []
      } if((x > (x3-23)) && (x < (x3+23)) && (y > (y3-23)) && (y < (y3+23))) {
        gameOver = true;
        dotsDrawn = []
      }
    }

    if(cherryPowers == false){
      if((x > (x1-20)) && (x < (x1+20)) && (y > (y1-20)) && (y < (y1+20))) {
        ene1 = false;
        x1 = -20;
        y1 = -20;
      } if((x > (x2-20)) && (x < (x2+20)) && (y > (y2-20)) && (y < (y2+20))) {
        ene2 = false;
        x2 = -20;
        y2 = -20;
      } if((x > (x3-20)) && (x < (x3+20)) && (y > (y3-20)) && (y < (y3+20))) {
        ene3 = false;
        x3 = -20;
        y3 = -20;
      }
    }

  },1)


  //Draws all elements
  let drawEverything = setInterval(function() {
    drawPac(x,y,dir);
    drawObstacles();
    drawDots();
    drawCherry(ch);
    drawEnemies(x1,y1,x2,y2,x3,y3);
  },1)


//changes location of cherry every 5 seconds
let ArrayCherry = [422,287,152];
let p = 0;
setInterval(function(){
  if(canDrawCherry) {
    ch = ArrayCherry[p++];
    p %= 3;
  }

},5000);

//Draws cherry
function drawCherry(ch){
  if(cherryPowers && canDrawCherry) {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

      ctx.drawImage(img , ch-16 , ch-17, 35, 30) ;
  }
}



let dots = [17.5,152.5,422.5];
let dotsDrawn = [];
//Draws dots and manages Array of objects
function drawDots() {
  if (stopAdding) {
    for (var i = 0; i < dots.length; i++) {
      for (var j = 17.5; j < 440; j+=40) {
          let b = new Ball(j,dots[i],"orange");
          dotsDrawn.push(b);
      }
    }
      for (var j = 52.5; j < 140; j+=35) {
        let b = new Ball(j,287,"orange");
          dotsDrawn.push(b);
      }

      for (var j = 322.5; j < 400; j+=35) {
        let b = new Ball(j,287,"orange");
          dotsDrawn.push(b);
      }

    for (var i = 0; i < dots.length; i++) {
      for (var j = 45; j <= 115; j+=35) {
         let c = new Ball(dots[i],j,"orange")
          dotsDrawn.push(c);
       }
     }

     for (var i = 0; i < dots.length; i++) {
       for (var j = 185; j <= 400; j+=35) {
         let c = new Ball(dots[i],j,"orange")
         dotsDrawn.push(c);
       }
     }
       for (var j = 185; j <= 400; j+=35) {
         let c = new Ball(287,j,"orange")
         dotsDrawn.push(c);
       }
  }

stopAdding = false;

    //draws objects from array
    for (var i = 0; i < dotsDrawn.length; i++) {
      let f = new Ball(dotsDrawn[i].x,dotsDrawn[i].y,dotsDrawn[i].color);
      f.draw();
    }

    //Empy array item if pac-man moves over a dot
    for (var i = 0; i < dotsDrawn.length; i++) {
      if(((x > (dotsDrawn[i].x-10))&&(x < (dotsDrawn[i].x + 10)) && ((y > dotsDrawn[i].y-10)&&(y < dotsDrawn[i].y+10)))) {
        dotsDrawn[i] = 0;
      }

      //Checks if pac-man eats a cherry
      if(x > (ch-20) && x < (ch+20) && y > (ch-20) && y < (ch+20)) {
        cherryPowers = false;
        canDrawCherry = false;
        ch = -50;
        let flashcolors = setInterval(function(){
          let green = Math.floor(Math.random() * 255);
          let red = Math.floor(Math.random() * 255);
          let blue = Math.floor(Math.random() * 255);
          paccolor = "rgb("+red+","+green+","+blue+")";
        },100)

        setTimeout(function(){
          cherryPowers = true;
          clearInterval(flashcolors);
          paccolor = "yellow";
        },6000)
      }
    }

    //Stops game if all dots are gone
    if(dotsDrawn.every(checkArray)) {
      if(gameOver){
        stopGame("Game Over!!!")
      } else {
        stopGame("You Win!!!")
      }

    }
    function checkArray(value) {
      return value == 0;
    }
}

//Stops game if all dots are gone or if caught by enemy
function stopGame(message) {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, 500, 500);
  ctx.font = "50px Comic Sans MS";
  ctx.fillStyle = "red";
  ctx.textAlign = "center";
  ctx.fillText(message, canvas.width/2, canvas.height/2);
  x1 = -20;
  y1 = -20;
  x2 = -20;
  y2 = -20;
  x3 = -20;
  y3 = -20;
  canDrawCherry = false;
}

//Balls oject constructor
function Ball(x,y,color){
    this.x = x;
    this.y = y;
    this.color = color;
    this.draw = function(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(this.x,this.y,4,0,2*Math.PI)
    ctx.fill();
  }
}

//Draws enemies
function drawEnemies(x1,y1,x2,y2,x3,y3){
  let canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");

  //enemy 1
  if(ene1){
    ctx.save()
    ctx.translate(x1,y1)
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(0, 0, 15, 3.1, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 0;
    ctx.strokeRect(-14,0,28,15)
    ctx.fillRect(-14,0,29,15);
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(-5, -5, 4, 0, 2 * Math.PI);
    ctx.arc(+5, -5, 4, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.arc(-5, -4, 2, 0, 2 * Math.PI);
    ctx.arc(+5, -4, 2, 0, 2 * Math.PI);
    ctx.fill();
    ctx.restore()
  }

  if(ene2) {
    //enemy 2
    ctx.save()
    ctx.translate(x2,y2)
    ctx.fillStyle = "cyan";
    ctx.beginPath();
    ctx.arc(0, 0, 15, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.strokeStyle = "cyan";
    ctx.lineWidth = 0;
    ctx.strokeRect(-14,0,28,15)
    ctx.fillRect(-14,0,29,15);
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(-5, -5, 4, 0, 2 * Math.PI);
    ctx.arc(+5, -5, 4, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.arc(-5, -4, 2, 0, 2 * Math.PI);
    ctx.arc(+5, -4, 2, 0, 2 * Math.PI);
    ctx.fill();
    ctx.restore()
  }

  if(ene3) {
    //enemy 3
    ctx.save()
    ctx.translate(x3,y3)
    ctx.fillStyle = "#ff00ff";
    ctx.beginPath();
    ctx.arc(0, 0, 15, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.strokeStyle = "#ff00ff";
    ctx.lineWidth = 0;
    ctx.strokeRect(-14,0,28,15)
    ctx.fillRect(-14,0,29,15);
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(-5, -5, 4, 0, 2 * Math.PI);
    ctx.arc(+5, -5, 4, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.arc(-5, -4, 2, 0, 2 * Math.PI);
    ctx.arc(+5, -4, 2, 0, 2 * Math.PI);
    ctx.fill();
    ctx.restore()
  }

}

  //Draws Pac-Man
function drawPac(x,y,dir) {
  let canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, 500, 500)

  ctx.save()
  ctx.translate(x,y)
  ctx.rotate(dir*Math.PI/270)


  if(move) {
    if (dir == 330) {
      ctx.fillStyle = paccolor;
      ctx.beginPath();
      ctx.arc(0, 0, 15, 0, 1 * Math.PI);
      ctx.fill();

      ctx.fillStyle = paccolor;
      ctx.beginPath();
      ctx.arc(0, 0, 15, 1.5, 1.5 * Math.PI);
      ctx.fill();

      ctx.fillStyle = "black";
      ctx.beginPath();
      ctx.arc(5, 5, 2, 0, 2 * Math.PI);
      ctx.fill();

    } else {
    ctx.fillStyle = paccolor;
    ctx.beginPath();
    ctx.arc(0, 0, 15, 0, 1 * Math.PI);
    ctx.fill();

    ctx.fillStyle = paccolor;
    ctx.beginPath();
    ctx.arc(0, 0, 15, 1.5, 1.5 * Math.PI);
    ctx.fill();

    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(-5, -5, 2, 0, 2 * Math.PI);
    ctx.fill();
    }

  } else if (!move) {
    if(dir == 330) {
      ctx.fillStyle = paccolor;
      ctx.beginPath();
      ctx.arc(0, 0, 15, 0, 2 * Math.PI);
      ctx.fill();

      ctx.fillStyle = "black";
      ctx.beginPath();
      ctx.arc(5, 5, 2, 0, 2 * Math.PI);
      ctx.fill();
    } else {
    ctx.fillStyle = paccolor;
    ctx.beginPath();
    ctx.arc(0, 0, 15, 0, 2 * Math.PI);
    ctx.fill();

    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(-5, -5, 2, 0, 2 * Math.PI);
    ctx.fill();
    }
  }
  ctx.restore()
}

//Switch to move Pac-Man's mouth
let pacMovement = setInterval(function() {
  if(move) {
    move = false;
  } else {
    if(!move) {
      move = true;
    }
  }
},100)

//Draws obstacles
let obstaclesArray = [];
obstaclesArray[0] = [35,35,100,100]
obstaclesArray[1] = [35,170,100,100]
obstaclesArray[2] = [35,305,100,100]
obstaclesArray[3] = [170,35,235,100]
obstaclesArray[4] = [170,170,100,235]
obstaclesArray[5] = [305,170,100,100]
obstaclesArray[6] = [305,305,100,100]

function drawObstacles() {
  let canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  ctx.save()
  ctx.strokeStyle = "blue";
  ctx.lineWidth = 2;

  for (var i = 0; i < obstaclesArray.length; i++) {
    ctx.strokeRect(obstaclesArray[i][0], obstaclesArray[i][1], obstaclesArray[i][2], obstaclesArray[i][3]);
  }
  ctx.restore()

}
