var small, medi, bigger, biggest; //circle sizes
var bright, med, dark, darkest; //different ranges of red for circles 
var reds = []; //array with different reds 
var sizes = []; //array with different sizes
var cCount; //keeps track of how many cirlces are on the screen at one time 
var bCount; //keeps track of how many blinks have cycled through in the loop
var y; //height of top rect
var y2; // = displayHeight/2; //open blinked eye 
var u; // = displayHeight; //height of bottom rect 
var u2; // = displayHeight/2; //open blinked eye 



function setup() {
  /*bright = color('#FF1900'); //setting bright color
  med = color('#9E1000'); //setting medium color
  dark = color ('#690A00'); //setting darker color 
  darkest = color('#380600'); //setting darkst color */
  
  createCanvas(windowWidth, windowHeight); //creates a canvas as big as the window 
  
  background('#000000'); //black background 
  reds[0] = bright = color('#FF1900'); //spot 0 in array is bright
  reds[1] = med = color('#9E1000'); //spot 1 in array is medium
  reds[2] = dark = color ('#690A00'); //spot 2 in array is darker
  reds[3] = darkest = color('#380600'); //spot 3 in array is darkest 
  
  sizes[0] = small;
  sizes[1] = medi;
  sizes [2] = bigger;
  sizes[3] = biggest; 
  
  circles1 = new Circles(0, random(10), random(10), 10, 10); //new object called big  
}


function spin(){ 
  //one red ellipse seems stationary in the center of the display
  //the more time passes, the faster the circle seems to be moving from the center across the screen
  background();
  noStroke();
  fill('#FF1900');
  for(var x = 0; x < 100; x++){
    ellipse(displayWidth/2, displayHeight/2, 30, 30);
    
    
  }
}


function draw() {
  spin();
  //if the circle reaches max speed, stop spin and go to draw()
  //in draw(), I want to make circles of varying opacity and shade appear and disappeat at random points on the screen
  
  cCount += 1; //adds 1 to count every time a new circle is drawn
  if(cCount == 7){ //if there are 7 circles on the screen at one time
    blink(); //blink 
    cCount = 0; //circle count is zero
    bCount += 1; //blink count adds 1 
    if(bCount == 10){ //if blink count is 10 
      noLoop(); //stop the loop 
    }
  }
}

class Circles{ //creates class 
  
  constructors(c, xCirc, yCirc, size, alph){ //variables in class 
    this.red = c; //setting red equal to c
    this.xC = xCirc; //setting xC equal to xCirc
    this.yC = yCirc; //setting yC equal to yCirc 
  //  this.siz = size; //setting siz to size 
    this.fade = alph; //setting fade to alph 
  }

  
   show(randX, randY){ //function that makes the circles appear 
    noStroke(); //no stroke 
    fill(get.reds[random]);
    for(var x = 0; x < 8; x++)
      ellipse(this.xC, this.yC, random(10), random(10), fade);
    //draws circle with random shade of red in a randon location 
    
    
  }

   blink(){ //function that makes screen "blink" to clear up circles when cCount reaches 7
    color('#371500');
    noStroke();
    for(var x = 0; x <= displayHeight/2; x++){
      rect(0, y = 0, displayWidth, y = 0);
      y++;
      rect(0, u = displayHeight, displayWidth, u = displayHeight);
      u--;
      if((y == windowHeight/2) && (u == windowHeight/2)){
        rect(0, y2 = displayHeight/2, displayWidth, y2 = displayHeight/2);
        y--;
        rect(0, u2 = displayHeight/2, displayWidth, u2 = displayHeight/2);
        u++;
      }
    }
  }
}