/* jslint esversion: 6  */

//Hintergründe
let hintergrund = loadImage("Hintergrund/FahrplanDoku1.png");
let hintergrundMob = loadImage("Hintergrund/FahrplanDokuMobilität.png");
let hintergrundtech = loadImage("Hintergrund/FahrplanDokuTechnik.png");
let hintergrundKunde =loadImage("Hintergrund/FahrplanDokuKunden.png");

let buttonkasten = loadImage("ButtonHilfe.png");

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
//Hintergrund
let back1 = new Background(hintergrund, 0,0,windowWidth,windowWidth*2);
let backMob = new Background(hintergrundMob, 0,0,windowWidth,windowWidth*2);
let backtech = new Background(hintergrundtech, 0,0,windowWidth,windowWidth*3.25);
let backKunde = new Background(hintergrundKunde,0,0,windowWidth,windowWidth*2);

let bkasten = new Background(buttonkasten,windowWidth/1.1,windowWidth/1,windowWidth/15,windowWidth/15);

//Texte
let einleitung = new Background(text1,windowWidth/9,windowWidth/13,430,300);

//Button-Rechnungen
//x=je größer je näher ist die links , y = je größer je weiter ist die oben
function mouseClicked(){    
    //->Mobilität für uns            
    if ((count==0)&&(mouseX>windowWidth/1.17)&&(mouseX<windowWidth/1.17+windowWidth/15)&&(mouseY>windowWidth/6.15)&&(mouseY<windowWidth/6.15+windowWidth/15)){
        count =2; 
    }
    //Der Hauptumschagspunkt
    if ((count==0)&&(mouseX>windowWidth/20)&&(mouseX<windowWidth/20+windowWidth/15)&&(mouseY>windowWidth/0.6)&&(mouseY<windowWidth/0.6+windowWidth/15)){
        count =3; 
    }
    //Nachricht
    if ((count==0)&&(mouseX>windowWidth/6)&&(mouseX<windowWidth/6+windowWidth/15)&&(mouseY>windowWidth/0.53)&&(mouseY<windowWidth/0.53+windowWidth/15)){
        count =4; 
    }
    //Unser Kunde
    if ((count==0)&&(mouseX>windowWidth/1.28)&&(mouseX<windowWidth/1.28+windowWidth/15)&&(mouseY>windowWidth/1.14)&&(mouseY<windowWidth/1.14+windowWidth/15)){
        count =5; 
    }
    //Unser Endnutzer
    if ((count==0)&&(mouseX>windowWidth/1.1)&&(mouseX<windowWidth/1.1+windowWidth/15)&&(mouseY>windowWidth/1)&&(mouseY<windowWidth/1+windowWidth/15)){
        count =5; 
    }
}

function draw(){
    clear();
    if (count==0){
    back1.display();
    einleitung.display();
    //bkasten.display();
    }
    if (count==2){
    backMob.display();
    }
    if (count==3){
        backtech.display();
    }
    if (count==5){
        backKunde.display();
    }
    }