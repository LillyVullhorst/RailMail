/* jslint esversion: 6  */

//Hintergründe
let hintergrund = loadImage("FahrplanDoku1.png");
let hintergrundMob = loadImage("FahrplanDokuMobilität.png");

//Texte
let text1 = loadImage("Einleitung.png");

let count = 0;


class Background{
    constructor(pic, X, Y, myWidth, myHeight){
        this.pic = pic;
        this.X=X;
        this.Y=Y;
        this.myWidth=myWidth;
        this.myHeight=myHeight;
    }
    display(){
        //
        image(this.pic,this.X,this.Y,this.myWidth,this.myHeight);
    }   
}

let back1 = new Background(hintergrund, 0,0,windowWidth,windowWidth*2);
let backMob = new Background(hintergrundMob, 0,0,windowWidth,windowWidth*2);

//Texte
let einleitung = new Background(text1,windowWidth/9,windowWidth/13,430,300);
//Button-Rechnungen
function mouseClicked(){
    if ((count==0)&&(mouseX>200)){
        count =2;
    }
}

function draw(){
    if (count==0){
    back1.display();
    einleitung.display();
    }
    if (count==2){
    backMob.display();
    }
    }