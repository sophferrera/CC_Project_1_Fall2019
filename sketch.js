var reds = []; //array with different reds 
var yells = []; //array of shades of yellow
var circles = []; //array of Circle objects 
var cCount; //keeps track of how many cirlces are on the screen at one time 
var bCount; //keeps track of how many blinks have cycled through in the loop
var spinCount = 0; //keeps track of how many times the target has spun 
var y = 0; //height of top rect
var y2 = 800;
var xMove; //for spin func
var inc; //increments spin speed
var spinX = 0; //x location where target starts 
var spinXinc = 0.04; //exponential increment of the speed

function setup() {

	createCanvas(windowWidth, windowHeight);//creates a canvas as big as the window 
	
	background('#000000'); //black background 
	reds[0] = color('#FF1900'); //spot 0 in array is bright
	reds[1] = color('#9E1000'); //spot 1 in array is medium
	reds[2] = color ('#690A00'); //spot 2 in array is darker
	reds[3] = color('#380600'); //spot 3 in array is darkest
	
	yells[0] = color('#FFF701'); //bright yellow 
	yells[1] = color('#FFF435'); // middle yellow 
	yells[2] = color('#D1CA00'); //deeper yellow 
	yells[3] = color('#A19B00'); //deepest yellow
	}

function draw() {
	
	spin(); //spins around 
	if(spinCount > 2){ //if spinCount 
		if (frameCount % 10 == 0) { //if the frame /10 is zero, add another circle 
		noStroke();
		createCircle();
		for(var i = 0; i < circles.length; i++){ 	//in draw(), I want to make circles of varying opacity and shade appear and disappeat at random points on the screen
			circles[i].show(); //show the array of circles as the loop makes them appear 
		//	cCount += 1; //adds 1 to count every time a new circle is drawn
		}
	}
				// if(cCount == 25){ //if there are 25 circles on the screen at one time
				// blink(); //blink 
				// cCount = 0; //circle count is zero
				// bCount += 1; //blink count adds 1 
				// if(bCount == 10){ //if blink count is 10 
				// 	noLoop(); //stop the loop 
				//}
			//}
		}
}

function spin(){ 	
 	//the more time passes, the faster the circle seems to be moving from the center across the screen
	//spinning effect 
	for(var x = 0; x < 75; x++){ 
		background(0); //resetting background 
		target(); //draw a target 
		if(spinX > windowWidth){ //if the target is past width of the window 
			spinX = -500; //make the x -500 
			spinXinc = spinXinc * 1.5; //increment the speed by *1.5 
		if(spinXinc > 5){ //if the speed gets higher than 5 
			spinXinc = 0; //speed is zero 
			spinX = -100 //location of the target is off screen 
					}
				spinCount ++; //add one to the spin count 
				}
			}	
		}

function target(){
	noStroke();
	fill('#FF1900');
	ellipse(spinX, windowHeight/2, 60, 60);		
	fill('#FFF435');
	ellipse(spinX, windowHeight/2, 45, 45);
	fill('#FF1900');
	ellipse(spinX, windowHeight/2, 25, 25);
	fill('#FFF435');
	ellipse(spinX, windowHeight/2, 10, 10);
	spinX += spinXinc;
}

function createCircle() { //creates circles, does not display them 
	let aCircle = new Circles(reds[int(random(0,4))]);
	let bCircle = new Circles(yells[int(random(0,4))]);
	circles.push(aCircle);
	circles.push(bCircle);
	cCount += 1; //adds 1 to count every time a new circle is drawn
}


	/*
		function blink(){ //function that makes screen "blink" to clear up circles when cCount reaches 7
			noStroke();
			fill('#371500');
			if(frameCount % 2 == 0){
				for(var x = 0; x <= 2; x++){
					rect(0, y, windowWidth, y);
					y+= 5; 
					if( y > 400){
						background(0);
						for(var y = 0; y <= 3; y++){
						rect(0, y2, windowWidth, y2)
						y2 -= 7
					 }
				}
			}
		}
	}
		*/

//My adjective: dizzy 
				
				




class Circles{ //creates class 
	
	// constructor(c, xCirc, yCirc, /*size_,*/ alph){ //variables in class 
	// 	this.c = c_; //setting red equal to c
	// 	this.xCirc = xCirc_; //setting xC equal to xCirc
	// 	this.yCirc = yCirc_; //setting yC equal to yCirc 
	// 	this.alph = alph_; //setting fade to alph 
	// }
	
		constructor(c_){ //variables in class 
		this.c = c_; //setting red equal to c
		this.xCirc = random(0, windowWidth); //setting xC equal to xCirc
		this.yCirc = random(0, windowHeight); //setting yC equal to yCirc 
		this.size = int(random(30, 100));
		this.alph = int(random(0, 75)); //setting fade to alph
		this.c.setAlpha(this.alph); //this makes a lot more sense after last class 
	}


	
	 show(){ //function that makes the circles appear 
		fill(this.c);
		ellipse(this.xCirc, this.yCirc, this.size, this.size);
	 }

}


				
				



