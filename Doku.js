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
let text6 = loadImage("Texte/lastMile.png");
let text7 = loadImage("Texte/Mobilität.png");
let text8 = loadImage("Texte/Abstract.png");

//let gif = loadImage("Schienen.gif");

//Bilder
let umschlagslager = loadImage("Bilder/Umschlagslagervonoben.png");
let team = loadImage("Bilder/dasTeam.jpg");
let station1 =loadImage("Bilder/PaketstationAus.png");
let station2 = loadImage("Bilder/PaketstationAktiv.png");
let station3 = loadImage("Bilder/PaketstationFach.png");
let station4 =loadImage("Bilder/Paket.png");
let rad = loadImage("Bilder/Transportfahrrad.png");
let radhover = loadImage("Bilder/Transportfahrradhover.png");
let bag =loadImage("Bilder/Transporttasche.png");
let baghover =loadImage("Bilder/Transporttaschehover.png");



let count = 0;
let station = 0; 
let transport =0;
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
let abholung = new Background (hintergrundAbholung, 0,0,windowWidth,windowWidth*1.5);

let bkasten = new Background(buttonkasten,windowWidth/1.9,windowWidth/0.617,windowWidth/4.6,windowWidth/20);

//Texte
let einleitung = new Background(text1,windowWidth/9,windowWidth/13,windowWidth/4.465,windowWidth/6.4);
let problem = new Background(text2,windowWidth/9,windowWidth/1.4,windowWidth/2.954,windowWidth/6.4);
let einPaketBestellen = new Background(text3,windowWidth/4,windowWidth/0.8,windowWidth/2.06,windowWidth/2.4);
let Nachricht = new Background(text4,windowWidth/5.5,windowWidth/8,windowWidth/2.612,windowWidth/2.07);
let DieStation = new Background(text5,windowWidth/2.5,windowWidth/1.2,windowWidth/3.06,windowWidth/5.17);
let LastMile = new Background(text6,windowWidth/7,windowWidth/0.78,windowWidth/1.692,windowWidth/9.746);
let mobil = new Background(text7,windowWidth/7,windowWidth/4,windowWidth/1.67,windowWidth/6.91);
let abstract = new Background(text8,windowWidth/7,windowWidth/1.5,windowWidth/1.649,windowWidth/7.9);

//Bilder
let umschlagslagerbild = new Background(umschlagslager, windowWidth/9,windowWidth/13,windowWidth/4.465,windowWidth/6.4);
let dasTeam = new Background(team,windowWidth/9,windowWidth/3,windowWidth/4.27,windowWidth/6.4);
let stationAus = new Background(station1,windowWidth/7,windowWidth/1.2,windowWidth/4.8,windowWidth/4.8);
let stationAn = new Background(station2,windowWidth/7,windowWidth/1.2,windowWidth/4.8,windowWidth/4.8);
let stationFach = new Background(station3,windowWidth/7,windowWidth/1.2,windowWidth/4.8,windowWidth/4.8);
let dasPaket = new Background(station4,windowWidth/5.75,windowWidth/1.08,windowWidth/22.326,windowWidth/24);
let dasRad = new Background(rad,windowWidth/2.48,windowWidth/0.85,windowWidth/5.05,windowWidth/9.6);
let dasRadHover = new Background(radhover,windowWidth/2.48,windowWidth/0.85,windowWidth/5.05,windowWidth/9.6);
let Tasche = new Background(bag,windowWidth/4,windowWidth/0.9,windowWidth/10.67,windowWidth/6.4);
let Taschehover = new Background (baghover,windowWidth/4,windowWidth/0.9,windowWidth/10.10,windowWidth/6.4);
//let Schienen = new Background(gif,windowWidth/9,windowWidth/1,500,250)

//Button-Rechnungen
//x=je größer je näher ist die links , y = je größer je weiter ist die oben
function mouseClicked(){    
    //->Mobilität für uns            
    if ((count==0)&&(mouseX>windowWidth/1.17)&&(mouseX<windowWidth/1.17+windowWidth/15)&&(mouseY>windowWidth/6.15)&&(mouseY<windowWidth/6.15+windowWidth/15)){
        count =2; 
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    //Der Hauptumschagspunkt
    if ((count==0)&&(mouseX>windowWidth/20)&&(mouseX<windowWidth/20+windowWidth/15)&&(mouseY>windowWidth/0.6)&&(mouseY<windowWidth/0.6+windowWidth/15)){
        count =3;
        createCanvas(windowWidth,windowWidth*3.25); 
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    //Nachricht Pfeil & Liefern lassen
    if ((count==0)&&(mouseX>windowWidth/6)&&(mouseX<windowWidth/6+windowWidth/15)&&(mouseY>windowWidth/0.53)&&(mouseY<windowWidth/0.53+windowWidth/15)){
        count =4; 
        createCanvas(windowWidth,windowWidth*1.5); 
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    //Nachricht mit Button
    if ((count==0)&&(mouseX>windowWidth/1.9)&&(mouseX<windowWidth/1.9+windowWidth/4.6)&&(mouseY>windowWidth/0.617)&&(mouseY<windowWidth/0.617+windowWidth/20)){
        count =4; 
        createCanvas(windowWidth,windowWidth*1.5); 
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    
    //Unsere Kunden
    if ((count==0)&&(mouseX>windowWidth/1.1)&&(mouseX<windowWidth/1.1+windowWidth/15)&&(mouseY>windowWidth/1)&&(mouseY<windowWidth/1+windowWidth/15)){
        count =5; 
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    //zurück zum Start (Mobilität für uns)
    if ((count==2)&&(mouseX>windowWidth/20)&&(mouseX<windowWidth/20+windowWidth/15)&&(mouseY>windowWidth/6)&&(mouseY<windowWidth/6+windowWidth/15)){
        count =0; 
        createCanvas(windowWidth,windowWidth*2);
    }
    //zurück zum Start (Der Hauptumschlagspunkt)
    if ((count==3)&&(mouseX>windowWidth/1.1)&&(mouseX<windowWidth/1.1+windowWidth/15)&&(mouseY>windowWidth/15)&&(mouseY<windowWidth/15+windowWidth/15)){
        count =0; 
        createCanvas(windowWidth,windowWidth*2);
    }
     //zurück zum Start (Die Abholung)
     if ((count==4)&&(mouseX>windowWidth/8)&&(mouseX<windowWidth/8+windowWidth/15)&&(mouseY>windowWidth/60)&&(mouseY<windowWidth/60+windowWidth/15)){
        count =0; 
        createCanvas(windowWidth,windowWidth*2);
    }
    //zurück zum Start (Der Kunde)
    if ((count==5)&&(mouseX>windowWidth/7)&&(mouseX<windowWidth/7+windowWidth/15)&&(mouseY>windowWidth/1.2)&&(mouseY<windowWidth/1.2+windowWidth/15)){
        count =0; 
        createCanvas(windowWidth,windowWidth*2);
    }
    //Paket erscheint
    if ((count==4)&&(mouseX>windowWidth/7)&&(mouseX<windowWidth/7+windowWidth/9.6)&&(mouseY>windowWidth/1.2)&&(mouseY<windowWidth/1.2+windowWidth/4.8)){
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
    mobil.display();
    abstract.display();
    }

    if (count==3){   //Der Hauptumschagspunkt
        backtech.display();
        umschlagslagerbild.display(); 
    }
    //Die Stationsinteraktion
    //Bildschirm aktiv
    if ((count==4)&&(mouseX>windowWidth/7+windowWidth/9.6)&&(mouseX<windowWidth/7+windowWidth/4.8)&&(mouseY>windowWidth/1.2)&&(mouseY<windowWidth/1.2+windowWidth/4.8)){
       
        station=1;
    }
    //Paketfach aktiv
    if ((count==4)&&(mouseX>windowWidth/7)&&(mouseX<windowWidth/7+windowWidth/9.6)&&(mouseY>windowWidth/1.2)&&(mouseY<windowWidth/1.2+windowWidth/4.8)){
        station=2;
    }
    
    //Alles inaktiv
    if ((count==4)&&((mouseX<windowWidth/7)||(mouseX>windowWidth/7+windowWidth/4.8)||(mouseY<windowWidth/1.2)||(mouseY>windowWidth/1.2+windowWidth/4.8))){
        station=0;
    }   
    //Rad beim hovern
    if ((count==4)&&(mouseX>windowWidth/2.48)&&(mouseX<windowWidth/2.48+windowWidth/5.05)&&(mouseY>windowWidth/0.85)&&(mouseY<windowWidth/0.85+windowWidth/9.6)){
        transport=1;
    }
    //Tasche beim hovern
    if ((count==4)&&(mouseX>windowWidth/4)&&(mouseX<windowWidth/4+windowWidth/10.6)&&(mouseY>windowWidth/0.9)&&(mouseY<windowWidth/0.9+windowWidth/6.4)){
        transport=2;
      } 
      if ((count==4)&&((mouseX<windowWidth/4)||(mouseX>windowWidth/4+windowWidth/3.43)||(mouseY<windowWidth/0.9)||(mouseY>windowWidth/0.9+windowWidth/6.4))){
        transport=0;
    } 

    if(count==4){
       
        
        abholung.display();
        Nachricht.display();
        stationAus.display();
        DieStation.display();
        dasRad.display();
        Tasche.display();
        LastMile.display();
      
        if (station==1){
            stationAn.display();
        }
        if (station==2){
            stationFach.display();
        } 
        if (transport==2){
            Taschehover.display();
        } 
        if (transport==1){
            dasRadHover.display();
        } 
        if (pack == 1){
            dasPaket.display();
        }
    }

    if (count==5){   //Unser Endnutzer//Unser Kunde
        backKunde.display(); 
    }
    console.log(windowWidth);
    

    }