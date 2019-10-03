var big; //bigger circles
var med; //medium circles
var small; //smaller circles 
var bright, med, dark, darkest; //different ranges of red for circles 
var reds = []; //array with different reds in it 
var count; //keeps track of how many cirlces are on the screen at one time 
var y = 0; //height of top rect
var u = windowHeight; //height of bottom rect 



function setup() {
	bright = color('#FF1900'); //setting bright color
	med = color('#9E1000'); //setting medium color
	dark = color ('#690A00'); //setting darker color 
	darkest = color('#380600'); //setting darkst color 
	createCanvas(windowWidth, windowHeight); //creates a canvas as big as the window 
	
	background('#000000'); //black background 
	reds[0] = bright; //spot 0 in array is bright
	reds[1] = med; //spot 1 in array is medium
	reds[2] = dark; //spot 2 in array is darker
	reds[3] = darkest; //spot 3 in array is darkest 
	
	big = new Circles(); //new object called big 
	med = new Circles(); //new object called med 
	small = new Circles(); //new object called small 
	
}

function draw() {
	
	// I want to make circles of varying opacity and shade appear and disappeat at random points on the screen
	count += 1;
	if(count == 7){
		blink();
		count = 0;
	}
}

class Circles{ //creates class 
	
	constructors(c, xCirc, yCirc, size, alph){ //variables in class 
		this.red = c; //setting red equal to c
		this.xC = xCirc; //setting xC equal to xCirc
		this.yC = yCirc; //setting yC equal to yCirc 
		this.siz = size; //setting siz to size 
		this.fade = alph; //setting fade to alph 
	}
}
	
	function show(randX, randY){ //function that makes the circles appear 
		noStroke(); //no stroke 
		
}

function blink(){ //function that makes screen "blink" to clear up circles when count reaches 7
	for(var x = 0; x < windowHeight/2; x++){
		rect(0, y, windowWidth, y);
		y++;
		rect(0, u, windowWidth, u);
		u--;
	}
	
}