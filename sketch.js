var bright, med, dark, darkest; //different ranges of red for circles 
var reds = []; //array with different reds 
var sizes = []; //array with different sizes
var circles = [];
var cCount; //keeps track of how many cirlces are on the screen at one time 
var bCount; //keeps track of how many blinks have cycled through in the loop
var y; //height of top rect
var y2; // = displayHeight/2; //open blinked eye 
var u; // = displayHeight; //height of bottom rect 
var u2; // = displayHeight/2; //open blinked eye 
var xMove; //for spin func
var inc; //increments spin speed



function setup() {
	/*bright = color('#FF1900'); //setting bright color
	med = color('#9E1000'); //setting medium color
	dark = color ('#690A00'); //setting darker color 
	darkest = color('#380600'); //setting darkst color */
	
	createCanvas(windowWidth, windowHeight);//creates a canvas as big as the window 
	
	background('#000000'); //black background 
	reds[0] = bright = color('#FF1900'); //spot 0 in array is bright
	reds[1] = med = color('#9E1000'); //spot 1 in array is medium
	reds[2] = dark = color ('#690A00'); //spot 2 in array is darker
	reds[3] = darkest = color('#380600'); //spot 3 in array is darkest 
	
	for(var x = 0; x < 8, x++){
			new Circles() = circles[x];
}



function draw() {
	spin();
	//if the circle reaches max speed, stop spin and go to draw()
	//in draw(), I want to make circles of varying opacity and shade appear and disappeat at random points on the screen
	
	
}

function spin(){ 
	//one red ellipse seems stationary in the center of the display
	//the more time passes, the faster the circle seems to be moving from the center across the screen
	background();
	noStroke();
	fill('#FF1900');
	for(var x = 0; x < 100; x++){
		ellipse(xMove = displayWidth/2, displayHeight/2, 30, 30);
		xMove += (inc = 0.1);
		inc += 0.1;
		if(xMove > displayWidth){
			xMove = 0;
		}
	}
}

 class Circles{ //creates class 
	
	constructors(c_, xCirc_, yCirc_, /*size_,*/ alph_){ //variables in class 
		this.c = c_; //setting red equal to c
		this.xCirc = xCirc_; //setting xC equal to xCirc
		this.yCirc = yCirc_; //setting yC equal to yCirc 
		this.aplh = alph_; //setting fade to alph 
	}

	
	 show(){ //function that makes the circles appear 
		//let randCirc = new Circle(/*random red from array, random(0, width), random (0, height), alpha(random)*/);
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
