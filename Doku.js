/* jslint esversion: 6  */

//Hintergründe
let hintergrund = loadImage("FahrplanDoku1.png");
let hintergrundMob = loadImage("FahrplanDokuMobilität.png");
let hintergrundtech = loadImage("FahrplanDokuTechnik.png");

let buttonkasten = loadImage("ButtonHilfe.png");

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
let backtech = new Background(hintergrundtech, 0,0,windowWidth,windowWidth*2);

let bkasten = new Background(buttonkasten, mouseX>windowWidth/3)&&(mouseX<windowWidth/3+windowWidth/15)&&(mouseY>windowWidth/4)&&(mouseY<windowWidth/4+windowWidth/15);

//Texte
let einleitung = new Background(text1,windowWidth/9,windowWidth/13,430,300);

//Button-Rechnungen
function mouseClicked(){                //x=je größer je näher ist die links , y = je größer je weiter ist die oben
    if ((count==0)&&(mouseX>windowWidth/1.17)&&(mouseX<windowWidth/1.17+windowWidth/15)&&(mouseY>windowWidth/6.15)&&(mouseY<windowWidth/6.15+windowWidth/15)){
        count =2; 
    }
    if ((count==0)&&(mouseX>windowWidth/3)&&(mouseX<windowWidth/3+windowWidth/15)&&(mouseY>windowWidth/2)&&(mouseY<windowWidth/2+windowWidth/15)){
        count =3; 
    }
}

function draw(){
    if (count==0){
    back1.display();
    einleitung.display();
    bkasten.display();
    }
    if (count==2){
    backMob.display();
    }
    if (count==3){
        backtech.display();
    }
    }