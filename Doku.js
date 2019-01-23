/* jslint esversion: 6  */

//Hintergründe
let hintergrund = loadImage("Hintergrund/FahrplanDoku1.png");
let hintergrundMob = loadImage("Hintergrund/FahrplanDokuMobilität.png");
let hintergrundtech = loadImage("Hintergrund/FahrplanDokuTechnik.png");
let hintergrundKunde =loadImage("Hintergrund/FahrplanDokuKunden.png");
let hintergrundAbholung = loadImage("Hintergrund/Die Abholung.png");

let buttonkasten = loadImage("ButtonHilfe.png");

//Texte
let text1 = loadImage("Texte/Einleitung.png");
let text2 = loadImage("Texte/Problem.png");
let text3 = loadImage("Texte/EinPaketbestellen.png");
let text4 = loadImage("Texte/nachricht.png");
let text5 = loadImage("Texte/dieStation.png");

//let gif = loadImage("Schienen.gif");

//Bilder
let umschlagslager = loadImage("Bilder/Umschlagslagervonoben.png");
let team = loadImage("Bilder/dasTeam.jpg");
let station1 =loadImage("Bilder/PaketstationAus.png");
let station2 = loadImage("Bilder/PaketstationAktiv.png");
let station3 = loadImage("Bilder/PaketstationFach.png");
let station4 =loadImage("Bilder/Paket.png");



let count = 0;
let station = 0; 
let pack = 0;
/* 
var gif = new GIF({
    workers: 2,
    quality: 10
  });
  
  // add a image element
  gif.addFrame(imageElement);
  
  gif.on('Schienen.gif', function(blob) {
    window.open(URL.createObjectURL(blob));
  }); */
  
 // gif.render();

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
let backKunde = new Background(hintergrundKunde,0,0,windowWidth,windowWidth*3.25);
let abholung = new Background (hintergrundAbholung, 0,0,windowWidth,windowWidth*2);

let bkasten = new Background(buttonkasten,windowWidth/1.74,windowWidth/0.6,windowWidth/4.6,windowWidth/20);

//Texte
let einleitung = new Background(text1,windowWidth/9,windowWidth/13,430,300);
let problem = new Background(text2,windowWidth/9,windowWidth/1.4,650,300);
let einPaketBestellen = new Background(text3,windowWidth/4,windowWidth/0.8,930,800);
let Nachricht = new Background(text4,windowWidth/5.5,windowWidth/8,735,928);
let DieStation = new Background(text5,windowWidth/2.5,windowWidth/1.2,627,371);

//Bilder
let umschlagslagerbild = new Background(umschlagslager, windowWidth/9,windowWidth/13,430,300);
let dasTeam = new Background(team,windowWidth/9,windowWidth/3,450,300);
let stationAus = new Background(station1,windowWidth/7,windowWidth/1.2,400,400);
let stationAn = new Background(station2,windowWidth/7,windowWidth/1.2,400,400);
let stationFach = new Background(station3,windowWidth/7,windowWidth/1.2,400,400);
let dasPaket = new Background(station4,windowWidth/5.61,windowWidth/1.07,86,80);
//let Schienen = new Background(gif,windowWidth/9,windowWidth/1,500,250)

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
        createCanvas(windowWidth,windowWidth*3.25); 
    }
    //Nachricht Pfeil & Liefern lassen
    if ((count==0)&&(mouseX>windowWidth/6)&&(mouseX<windowWidth/6+windowWidth/15)&&(mouseY>windowWidth/0.53)&&(mouseY<windowWidth/0.53+windowWidth/15)){
        count =4; 
    }
    if ((count==0)&&(mouseX>windowWidth/1.74)&&(mouseX<windowWidth/1.74+windowWidth/4.6)&&(mouseY>windowWidth/0.6)&&(mouseY<windowWidth/0.6+windowWidth/20)){
        count =4; 
    }
    
    //Unsere Kunden
    if ((count==0)&&(mouseX>windowWidth/1.1)&&(mouseX<windowWidth/1.1+windowWidth/15)&&(mouseY>windowWidth/1)&&(mouseY<windowWidth/1+windowWidth/15)){
        count =5; 
    }
    //zurück zum Start (Mobilität für uns)
    if ((count==2)&&(mouseX>windowWidth/20)&&(mouseX<windowWidth/20+windowWidth/15)&&(mouseY>windowWidth/6)&&(mouseY<windowWidth/6+windowWidth/15)){
        count =0; 
    }
    //zurück zum Start (Der Hauptumschlagspunkt)
    if ((count==3)&&(mouseX>windowWidth/1.1)&&(mouseX<windowWidth/1.1+windowWidth/15)&&(mouseY>windowWidth/15)&&(mouseY<windowWidth/15+windowWidth/15)){
        count =0; 
    }
     //zurück zum Start (Die Abholung)
     if ((count==4)&&(mouseX>windowWidth/8)&&(mouseX<windowWidth/8+windowWidth/15)&&(mouseY>windowWidth/60)&&(mouseY<windowWidth/60+windowWidth/15)){
        count =0; 
    }
    //zurück zum Start (Der Kunde)
    if ((count==5)&&(mouseX>windowWidth/7)&&(mouseX<windowWidth/7+windowWidth/15)&&(mouseY>windowWidth/1.2)&&(mouseY<windowWidth/1.2+windowWidth/15)){
        count =0; 
    }
    //Paket erscheint
    if ((count==4)&&(mouseX>windowWidth/7)&&(mouseX<windowWidth/7+200)&&(mouseY>windowWidth/1.2)&&(mouseY<windowWidth/1.2+400)){
        station=2;
        pack=1;
    }
}

     


function draw(){
    clear();
   
  
 
    if (count==0){  //Einleitung
    back1.display();
    einleitung.display();
    problem.display();
    //Schienen.display();
    dasTeam.display();
    einPaketBestellen.display();
    bkasten.display();
   
    }

    if (count==2){   //Mobilität für uns
    backMob.display();
    }

    if (count==3){   //Der Hauptumschagspunkt
        backtech.display();
        umschlagslagerbild.display(); 
    }
    //Die Stationsinteraktion
    //Bildschirm aktiv
    if ((count==4)&&(mouseX>windowWidth/7+200)&&(mouseX<windowWidth/7+400)&&(mouseY>windowWidth/1.2)&&(mouseY<windowWidth/1.2+400)){
       
        station=1;
    }
    //Paketfach aktiv
    if ((count==4)&&(mouseX>windowWidth/7)&&(mouseX<windowWidth/7+200)&&(mouseY>windowWidth/1.2)&&(mouseY<windowWidth/1.2+400)){
      
        station=2;
    }
    //Alles inaktiv
    if ((count==4)&&((mouseX<windowWidth/7)||(mouseX>windowWidth/7+400)||(mouseY<windowWidth/1.2)||(mouseY>windowWidth/1.2+400))){
       
        station=0;
    }   

    if(count==4){
       
        
        abholung.display();
        Nachricht.display();
        stationAus.display();
        DieStation.display();
   
      
        if (station==1){
            stationAn.display();
        }
        if (station==2){
            stationFach.display();
        } 
        if (pack == 1){
            dasPaket.display();
        }
    }

    if (count==5){   //Unser Endnutzer//Unser Kunde
        backKunde.display(); 
    }
    console.log(count);
    

    }