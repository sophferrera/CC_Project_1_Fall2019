var big; //bigger circles
var med; //medium circles
var small; //smaller circles 
var bright, med, dark, darkest; //different ranges of red for circles 
var reds = []; //array with different reds in it 



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
