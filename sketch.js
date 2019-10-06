
Project #1
by Sophia Ferrera
  
 

OpenProcessing

Sophia Ferrera
My Profile

My Feed

Edit Profile

Edit Membership

Sign Out

Sketches
Explore Sketches

Project #1
Sketch #4 Diamonds
Johnny & Sophia
View All

Classes
Explore Classes

Creative Coding FA 2019 Bennett
View All

Search
/ Recent s / Browse Allphysics game visualization particles color evolution circle lines
 Plus+ Priority Support Frequently Asked Questions FAQ Follow OpenProcessing on Twitter TwitterCredits Community Guidelines Terms of Service Privacy Policy

show
  
}
​
function draw() {
  
  // I want to make circles of varying opacity and shade appear and disappeat at random points on the screen
  big.show();
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
​
class Circles{ //creates class 
  
  constructors(c, xCirc, yCirc, size, alph){ //variables in class 
    this.red = c; //setting red equal to c
    this.xC = xCirc; //setting xC equal to xCirc
    this.yC = yCirc; //setting yC equal to yCirc 
    this.siz = size; //setting siz to size 
    this.fade = alph; //setting fade to alph 
  }
​
  
   show(randX, randY){ //function that makes the circles appear 
    noStroke(); //no stroke 
    //draws circle with random shade of red in a randon location 
    //clears circles after 7 are drawn
    
  }
​
   blink(){ //function that makes screen "blink" to clear up circles when cCount reaches 7
    color('#371500');
    noStroke();
    for(var x = 0; x <= windowHeight/2; x++){
      rect(0, y = 0, windowWidth, y = 0);
      y++;
      rect(0, u = displayHeight, windowWidth, u = displayHeight);
      u--;
      if((y == windowHeight/2) && (u == windowHeight/2)){
        rect(0, y2 = displayHeight/2, windowWidth, y2 = displayHeight/2);
        y--;
        rect(0, u2 = displayHeight/2, windowWidth, u2 = displayHeight/2);
        u++;
      }
    }
  }
}
Sketch
Files
Editor
Engine
Tutorial Mode (Beta) 🎉 Write step-by-step tutorials. Learn more
Show FrameAdds a white frame around the sketch.
Infinite Loop ProtectionPrevents loops that may freeze the sketch.
LibrariesShow All
p5.dom 
p5.sound 
+ Add custom library

