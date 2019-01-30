var DjFile = ['dj_pics/djPic11.jpg','dj_pics/djPic11.jpg', 'dj_pics/djPic11.jpg', 'dj_pics/djPic1.jpg', 'dj_pics/djPic2.jpg','dj_pics/djPic3.jpg','dj_pics/djPic4.jpg','dj_pics/djPic5.jpg', 'dj_pics/djPic6.jpg', 'dj_pics/djPic10.jpg', 'dj_pics/djPic8.jpg', 'dj_pics/djPic9.jpg', 'dj_pics/djPic7.jpg', 'dj_pics/djPic11.jpg', 'dj_pics/djPic12.jpg'];
var gifFile = ['gifs/car.gif', 'gifs/phone.gif', 'gifs/slime.gif', 'gifs/swim.gif', 'gifs/iceGloves.png', 'gifs/dance.jpg', 'gifs/gloves.gif', 'gifs/math.gif', 'gifs/head.gif', 'gifs/sparklez.gif', 'gifs/spikes.png', 'gifs/rock2.gif', 'gifs/goo.gif', 'gifs/pillow.gif', 'gifs/what.png'];
var errors = [];
var images = [];
var randImageFile;
var numOfClicks = 0;
var currentImg = 0;
var randWidth;
var randHeight;
var djInfo;
var errorImg2;

var millisecond;

var soundPlaying = false;
var timeTrue = true;
var newTime;

var chainWidth = 22; 
var chainHeight = 543; 
var cuntiniWidth = 520; 
var cuntiniHeight = 469;
var djInfoWidth = 266; 
var djInfoHeight = 406; 
var secondErrorWidth = 239; 
var secondErrorHeight = 242;
var multiplier = 1;
var clickRate = 1;

var preDone;

function preload(){
    //djPic1 = loadImage('dj_pics/djPic1.jpg');	
	
	
	  if (windowWidth <1000){
    		var cuntiniRatio = cuntiniHeight/cuntiniWidth;
    
   		cuntiniWidth = windowWidth;
   		cuntiniHeight = cuntiniWidth * cuntiniRatio;
   		
   		djInfoWidth = djInfoWidth * 2.5; 
   		djInfoHeight = djInfoHeight * 2.5; 
   		secondErrorWidth = secondErrorWidth * 2.5; 
   		secondErrorHeight = secondErrorHeight * 2.5;
   		multiplier = 2;
		clickRate = 0.5;  
  	}
	
	var chainRatio = chainWidth/chainHeight;
	chainHeight = windowHeight;
	chainWidth = chainHeight * chainRatio; 
	
	var chain = createImg('gifs/chain_up.gif');
  	var chain2 = new imageCreate2(chain, windowWidth/2, 0, chainWidth, chainHeight);
  
  	var cuntini = createImg('gifs/CUNTINI7.gif');
  	var cuntini2 = new imageCreate2(cuntini, windowWidth/2 - cuntiniWidth/2 , windowHeight/2 - cuntiniHeight/2, cuntiniWidth, cuntiniHeight);
	
	
  }

function setup() {
  createCanvas(windowWidth, windowHeight);
	
	var djImg = createImg('gifs/Error1.png');
  	djInfo = new imageCreate2(djImg, -700, -700, djInfoWidth, djInfoHeight);
	preDone = true;

  sound = loadSound('assets/sound.m4a');
  
  //create list of Dj images
  for (var i=0; i<DjFile.length; i++){
    var createdImage = createImg(DjFile[i]);
    var newImg = new imageCreate(createdImage, -600, -600);
		images.push(newImg);
}
  //create gifs list
  for (var i=0; i<gifFile.length; i++){
    createdImage = createImg(gifFile[i]);
    newImg = new imageCreate(createdImage, -600, -600);
		images.push(newImg);
}
  //create error list for end animation
   for (i=0; i<10; i++){
    var errorImg = createImg('gifs/Error2.png');
    errorImg2 = new imageCreate2(errorImg, -600, -600, secondErrorWidth, secondErrorHeight);
    errors.push(errorImg2);
    
  }
}

function imageCreate(element, x, y) {
  element.position(x,y);
  this.changePos = function(randX, randY) {
  x = randX; //windowWidth * random(1);
  y = randY; //50;
    //windowWidth * random(1), windowHeight * random(1)
    element.position(x,y);
   }
}

function imageCreate2(element, x, y, inWidth, inHeight) {
  element.position(x,y);
  var imgWidth = inWidth;
  var imgHeight = inHeight;
  element.size(imgWidth, imgHeight);
  this.changePos = function(newX, newY) {
  x = newX; //windowWidth * random(1);
  y = newY; //50;
    //windowWidth * random(1), windowHeight * random(1)
    element.position(x,y);
   }
}


function mousePressed() {
  console.log('you clicked!');
  
if (preDone === true){
  numOfClicks += 1;
  randWidth = random(0, 0.7);
  randHeight = random(0, 0.7);
  currentImg +=1;
  
  
  if (currentImg== images.length){
    currentImg = 0;
  }
	
}
 }

function draw() {
  imageMode(CENTER);
  background('black');
  

	
  if (numOfClicks >= 1){
    djInfo.changePos(windowWidth/3, windowHeight/4);
    
  //   var currentError = 0;
  //     var errorX = windowWidth/4;
  //     var errorY = windowHeight/5;
      
  //     millisecond = millis();
      
  //     var timePassed = millisecond;
      
      
      
  //     if (timeTrue === true) {
  //       newTime = timePassed;
  //       timeTrue = false;
  //     }
      
  //     //newTime += 200;
  //     console.log(newTime);
  //     console.log(timePassed);
      
  //   for (i=0; i<10; i++){
  //     if (timePassed >= newTime){
        
  //     errors[currentError].changePos(errorX, errorY);
  //     currentError += 1;
  //     errorX += 20;
  //     errorY +=20;
      
  //     newTime += 400;
      
  //     }
  // }
  }
    
  else if (numOfClicks >= 3 ){
    //console.log('click = 1!');
    randX = windowWidth * randWidth;
    randY = windowHeight * randHeight;
    images[currentImg].changePos(randX, randY);

    
    
    if (soundPlaying === false){
    sound.play();
    soundPlaying = true;
    sound.setLoop(true);
  }
}

if (numOfClicks >= images.length )
 {
    var currentError = 0;
      var errorX = windowWidth/4;
      var errorY = windowHeight/5;
      
      millisecond = millis();
      
      var timePassed = millisecond;
      
      if (timeTrue === true) {
        var newTime = timePassed;
        timeTrue = false;
      }
      console.log(timePassed)
      
     for (i=0; i<10; i++){
      if (timePassed >= newTime){
        
      errors[currentError].changePos(errorX, errorY);
      currentError += 1;
      errorX += 20;
      errorY +=20;
      
      newTime += 400;
      
      }
  }
 }
  
}

function windowResized(){
        resizeCanvas(windowWidth, windowHeight);
        //bgVideo.size(windowHeight*2, 300);
      }
