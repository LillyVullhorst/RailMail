/* jslint esversion: 6  */

//Hintergründe
let hintergrund = loadImage("Hintergrund/FahrplanDoku1.png");
let hintergrundMob = loadImage("Hintergrund/FahrplanDokuMobilität.png");

//Bilder
let teamPic = loadImage("Bilder/dasTeam.jpg")
//Texte
let text1 = loadImage("Texte/Einleitung.png");

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
//Hintergründe
let back1 = new Background(hintergrund, 0,0,windowWidth,windowWidth*2);
let backMob = new Background(hintergrundMob, 0,0,windowWidth,windowWidth*2);

//Bilder
let pic1 = new Background(teamPic,windowWidth/7,windowWidth/3,430,290);
//Texte
let einleitung = new Background(text1,windowWidth/7,windowWidth/13,430,300);
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
    pic1.display();
    }
    if (count==2){
    backMob.display();
    }
    }