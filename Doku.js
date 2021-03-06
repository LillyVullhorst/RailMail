/* jslint esversion: 6  */

//Hintergründe
let hintergrund = loadImage("Hintergrund/FahrplanDoku1.png");
let hintergrundMob = loadImage("Hintergrund/FahrplanDokuMobilität.png");
let hintergrundtech = loadImage("Hintergrund/FahrplanDokuTechnik.png");
let hintergrundKunde =loadImage("Hintergrund/FahrplanDokuKunden.png");
let hintergrundAbholung = loadImage("Hintergrund/Die Abholung.png");
let topBar= loadImage("Hintergrund/top.png");
let topMan = loadImage("Hintergrund/topbarManagement.png")
let topTech = loadImage("Hintergrund/topbarTech.png");
let topDesign = loadImage("Hintergrund/topbarDesign.png");
let topShadow = loadImage("Hintergrund/shadow.png");
let hintergrundPrototyp = loadImage("Hintergrund/Prototyp.png");

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

let text9 = loadImage("Texte/Hauptumschlagspunkt.png");
let text10 = loadImage("Texte/derWagon.png");
let text11 = loadImage("Texte/techStation.png");

let text12 = loadImage("Texte/derKunde.png");
let text13 = loadImage("Texte/derEndkunde.png");
let text14 = loadImage("Texte/Standort.png");
let text15 = loadImage("Texte/Standortbestimmung.png");

let text16 = loadImage("Texte/Namen.png");
let text17 = loadImage("Texte/Alleinstellungsmerkmal.png");
let text18 = loadImage("Texte/Marketingmaßnahmen.png");
let text19 = loadImage("Texte/Prototext.png");
let text20 = loadImage("Texte/Gegenmaßnahmen.png");
let text21 = loadImage("Texte/techStation2.png");

//let gif = loadImage("Schienen.gif");

//Bilder
let umschlagslager = loadImage("Bilder/Umschlagslagervonoben.png");
let team = loadImage("Bilder/dasTeam.jpg");
let railMail = loadImage("Bilder/Logo.png");
let station1 =loadImage("Bilder/PaketstationAus.png");
let station2 = loadImage("Bilder/PaketstationAktiv.png");
let station3 = loadImage("Bilder/PaketstationFach.png");
let station4 =loadImage("Bilder/Paket.png");
let rad = loadImage("Bilder/Transportfahrrad.png");
let radhover = loadImage("Bilder/Transportfahrradhover.png");
let bag =loadImage("Bilder/Transporttasche.png");
let baghover =loadImage("Bilder/Transporttaschehover.png");
let bedienfeld = loadImage("Bilder/Interface.png");

let train = loadImage("Bilder/Zug.png");
let belt = loadImage("Bilder/Fließbandsegmente.png");
let waggon = loadImage("Bilder/Wagonaußen.png");
let innerWaggon = loadImage("Bilder/obereWagenEbene.png");
let stationEbene = loadImage("Bilder/Paketstationoben.png");
let paketZug = loadImage("Bilder/Paket2.png");
let passenger = loadImage("Bilder/Mensch.png");
let beaconOn = loadImage("Bilder/BeaconAn.png");
let beaconOff = loadImage("Bilder/BeaconAus.png");

let map = loadImage("Bilder/Abdeckungskarte.png");





let count = 0;
let station = 0; 
let transport =0;
let pack = 0;
let lieferung = 0;
let theTrain = 0;
let feld =0;

//Aufklappen der Navigation 
let manY = 350;
var zugY = windowWidth/15;
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
let backtech = new Background(hintergrundtech, 0,0,windowWidth,windowWidth*4.23);
let backKunde = new Background(hintergrundKunde,0,0,windowWidth,windowWidth*3.95);
let abholung = new Background (hintergrundAbholung, 0,0,windowWidth,windowWidth*1.5);
let topNav = new Background(topBar,0,0,windowWidth,windowWidth/21.5);
let manNav = new Background(topMan,0,windowWidth/manY,windowWidth,windowWidth/21.5);
let techNav = new Background(topTech,0,windowWidth/100,windowWidth,windowWidth/21.5);
let designNav = new Background(topDesign,0,windowWidth/60,windowWidth,windowWidth/21.5);
let shadowNav = new Background(topShadow,0,windowWidth/16.5,windowWidth,windowWidth/21.5);
let backPrototyp = new Background(hintergrundPrototyp,0,0,windowWidth,windowWidth*2.966);

let bkasten = new Background(buttonkasten,windowWidth/1.12,windowWidth/1.2,windowWidth/15,windowWidth/15);

//Texte
let einleitung = new Background(text1,windowWidth/9,windowWidth/6.2,windowWidth/2.18,windowWidth/5.175);
let problem = new Background(text2,windowWidth/9,windowWidth/1.4,windowWidth/2.954,windowWidth/6.4);
let einPaketBestellen = new Background(text3,windowWidth/4,windowWidth/0.8,windowWidth/2.06,windowWidth/2.4);
let Nachricht = new Background(text4,windowWidth/4.98,windowWidth/6,windowWidth/2.612,windowWidth/2.07);
let DieStation = new Background(text5,windowWidth/2.5,windowWidth/1.283,windowWidth/2.97,windowWidth/3.76);
let LastMile = new Background(text6,windowWidth/7,windowWidth/0.78,windowWidth/1.692,windowWidth/9.746);
let mobil = new Background(text7,windowWidth/3.2,windowWidth/4,windowWidth/2.4,windowWidth/3.24);
let abstract = new Background(text8,windowWidth/3.2,windowWidth/1.32,windowWidth/2.49,windowWidth/6.9);

let umschlagspunkt = new Background(text9,windowWidth/3.45,windowWidth/5,windowWidth/2.93,windowWidth/2.8);
let wagonText = new Background (text10,windowWidth/4,windowWidth/0.78,windowWidth/2.9,windowWidth/2.43);
let innerStation = new Background(text11,windowWidth/3,windowWidth/0.435,windowWidth/1.64,windowWidth/2.94);
let innerStation2 = new Background(text21,windowWidth/3,windowWidth/0.337,windowWidth/1.68,windowWidth/18.64);
var derZug = new Background(train,windowWidth/15.5,zugY,windowWidth/30.5,windowWidth/4.03);


let customer = new Background(text12,windowWidth/5.2,windowWidth/3.5,windowWidth/1.4,windowWidth/2.75);
let endcustomer = new Background(text13,windowWidth/5.2,windowWidth/1.27,windowWidth/2.865,windowWidth/3.45);
let ort = new Background(text14,windowWidth/5.2,windowWidth/0.8,windowWidth/1.89,windowWidth/9.79);
var dieStandortbestimmung = new Background(text15,windowWidth/3,windowWidth/0.308,windowWidth/2.9,windowWidth/2.66);
let names =new Background(text16,windowWidth/9,windowWidth/2,windowWidth/4.25,windowWidth/22);
let merkmal = new Background(text17,windowWidth/5.2,windowWidth/0.515,windowWidth/2.96,windowWidth/5.53);
let marketing = new Background(text18,windowWidth/5.2,windowWidth/0.44,windowWidth/1.4,windowWidth/1.23);
let maßnahmen = new Background(text20,windowWidth/5.2,windowWidth/0.3,windowWidth/1.97,windowWidth/1.96);

//Bilder
let umschlagslagerbild = new Background(umschlagslager, windowWidth/3.4,windowWidth/1.8,windowWidth/2.86,windowWidth/4.8);
let dasTeam = new Background(team,windowWidth/9,windowWidth/2.7,windowWidth/4.27,windowWidth/6.4);
let ourLogo = new Background(railMail,windowWidth/2.6,windowWidth/2.85,windowWidth/5.63,windowWidth/4.78);
let stationAus = new Background(station1,windowWidth/7,windowWidth/1.2,windowWidth/4.8,windowWidth/4.8);
let stationAn = new Background(station2,windowWidth/7,windowWidth/1.2,windowWidth/4.8,windowWidth/4.8);
let stationFach = new Background(station3,windowWidth/7,windowWidth/1.2,windowWidth/4.8,windowWidth/4.8);
let dasPaket = new Background(station4,windowWidth/5.75,windowWidth/1.08,windowWidth/22.326,windowWidth/24);
let dasRad = new Background(rad,windowWidth/2.48,windowWidth/0.85,windowWidth/5.05,windowWidth/9.6);
let dasRadHover = new Background(radhover,windowWidth/2.48,windowWidth/0.85,windowWidth/5.05,windowWidth/9.6);
let Tasche = new Background(bag,windowWidth/4,windowWidth/0.9,windowWidth/10.67,windowWidth/6.4);
let Taschehover = new Background (baghover,windowWidth/4,windowWidth/0.9,windowWidth/10.10,windowWidth/6.4);
let theInterface = new Background(bedienfeld,windowWidth/3.95,windowWidth/1.18,windowWidth/30,windowWidth/5.92);


let Fließband = new Background (belt,windowWidth/1.5,windowWidth/3.8,windowWidth/3.8,windowWidth/3.75);
let derWagon = new Background(waggon,windowWidth/3.2,windowWidth/0.96,windowWidth/2.3,windowWidth/3.3);
let wagonEbene = new Background(innerWaggon,windowWidth/5.2,windowWidth/0.57,windowWidth/2.3,windowWidth/4.26);
let inStation = new Background(stationEbene,windowWidth/3,windowWidth/0.38,windowWidth/1.86,windowWidth/3.575);
let paketLadung = new Background(paketZug,windowWidth/3.3,windowWidth/1.5,windowWidth/42.326,windowWidth/44);
let human = new Background(passenger,windowWidth/15.5,windowWidth/0.31,windowWidth/37.65,windowWidth/31.48);
let signal = new Background(beaconOn,windowWidth/4.3,windowWidth/0.303,windowWidth/28.24,windowWidth/3.78);
let noSignal = new Background(beaconOff,windowWidth/4.3,windowWidth/0.303,windowWidth/28.24,windowWidth/3.78);

let abdeckung = new Background(map,windowWidth/5.2,windowWidth/0.73,windowWidth/2.03,windowWidth/2.46);
//let Schienen = new Background(gif,windowWidth/9,windowWidth/1,500,250)

//var derZug = document.getElementById("Z"); 
//Button-Rechnungen
//x=je größer je näher ist die links , y = je größer je weiter ist die oben
function mouseClicked(){    
    //->Mobilität für uns  (      
    if ((count==0)&&(mouseX>windowWidth/1.13)&&(mouseX<windowWidth/1.13+windowWidth/15)&&(mouseY>windowWidth/4.7)&&(mouseY<windowWidth/4.7+windowWidth/15)){
        count =2; 
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    //Der Hauptumschagspunkt
    if ((count==0)&&(mouseX>windowWidth/20)&&(mouseX<windowWidth/20+windowWidth/15)&&(mouseY>windowWidth/0.6)&&(mouseY<windowWidth/0.6+windowWidth/15)){
        count =3;
        createCanvas(windowWidth,windowWidth*4.23); 
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
        createCanvas(windowWidth,windowWidth*3.95); 
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    //zurück zum Start (Mobilität für uns)
    if ((count==2)&&(mouseX>windowWidth/20)&&(mouseX<windowWidth/20+windowWidth/15)&&(mouseY>windowWidth/6)&&(mouseY<windowWidth/6+windowWidth/15)){
        count =0; 
        createCanvas(windowWidth,windowWidth*2);
    }
    //zurück zum Start (Der Hauptumschlagspunkt)
    if ((count==3)&&(mouseX>windowWidth/1.15)&&(mouseX<windowWidth/1.15+windowWidth/15)&&(mouseY>windowWidth/15)&&(mouseY<windowWidth/15+windowWidth/15)){
        count =0; 
        lieferung=0;
        createCanvas(windowWidth,windowWidth*2);
    }
     //zurück zum Start (Die Abholung)
     if ((count==4)&&(mouseX>windowWidth/8)&&(mouseX<windowWidth/8+windowWidth/15)&&(mouseY>windowWidth/16)&&(mouseY<windowWidth/16+windowWidth/15)){
        count =0; 
        createCanvas(windowWidth,windowWidth*2);
    }
    //zurück zum Start (Der Kunde)
    if ((count==5)&&(mouseX>windowWidth/25)&&(mouseX<windowWidth/25+windowWidth/15)&&(mouseY>windowWidth/7)&&(mouseY<windowWidth/7+windowWidth/15)){
        count =0; 
        createCanvas(windowWidth,windowWidth*2);
    }

    //Link Hauptumschlagspunkt->Management(buttonkasten,windowWidth/1.12,windowWidth/1.2,windowWidth/15,windowWidth/15);
    if ((count==3)&&(mouseX>windowWidth/1.12)&&(mouseX<windowWidth/1.12+windowWidth/15)&&(mouseY>windowWidth/1.2)&&(mouseY<windowWidth/1.2+windowWidth/15)){
        count =5; 
        createCanvas(windowWidth,windowWidth*3.95);
        document.body.scrollTop = windowWidth/0.85;
        document.documentElement.scrollTop = windowWidth/0.85;
    }
    //Link Hauptumschlagspunkt->die Abholung 
    if ((count==3)&&(mouseX>windowWidth/1.13)&&(mouseX<windowWidth/1.13+windowWidth/15)&&(mouseY>windowWidth/0.46)&&(mouseY<windowWidth/0.46+windowWidth/15)){
        count =4; 
        createCanvas(windowWidth,windowWidth*1.5);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    //Link Hauptumschlagspunkt->Protoyp
    if ((count==3)&&(mouseX>windowWidth/4.5)&&(mouseX<windowWidth/4.5+windowWidth/15)&&(mouseY>windowWidth/0.256)&&(mouseY<windowWidth/0.256+windowWidth/15)){
        count =6; 
        createCanvas(windowWidth,windowWidth*2.966);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    //Link Die Abholung-> Prototyp 
    if ((count==4)&&(mouseX>windowWidth/1.28)&&(mouseX<windowWidth/1.28+windowWidth/15)&&(mouseY>windowWidth/0.72)&&(mouseY<windowWidth/0.72+windowWidth/15)){
        count =6; 
        createCanvas(windowWidth,windowWidth*2.966);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    //Link Management->Prototyp
    if ((count==5)&&(mouseX>windowWidth/1.18)&&(mouseX<windowWidth/1.18+windowWidth/15)&&(mouseY>windowWidth/0.263)&&(mouseY<windowWidth/0.263+windowWidth/15)){
        count =6; 
        createCanvas(windowWidth,windowWidth*2.966);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    //Link Prototyp -> Start 
    if ((count==6)&&(mouseX>windowWidth/10)&&(mouseX<windowWidth/15+windowWidth/10)&&(mouseY>windowWidth/10)&&(mouseY<windowWidth/10+windowWidth/15)){
        count =0; 
        createCanvas(windowWidth,windowWidth*2);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    //Link  Abholung->Standortbestimmung
    if ((count==4)&&(mouseX>windowWidth/1.12)&&(mouseX<windowWidth/1.12+windowWidth/15)&&(mouseY>windowWidth/3.8)&&(mouseY<windowWidth/3.8+windowWidth/15)){
        count =3;
        createCanvas(windowWidth,windowWidth*4.23); 
        document.body.scrollTop = windowWidth/0.339;
        document.documentElement.scrollTop = windowWidth/0.339;
    }
    //Paket erscheint
    if ((count==4)&&(mouseX>windowWidth/7)&&(mouseX<windowWidth/7+windowWidth/9.6)&&(mouseY>windowWidth/1.2)&&(mouseY<windowWidth/1.2+windowWidth/4.8)){
        station=2;
        pack=1;
    }
    //Interface 
    if ((count==4)&&(mouseX>windowWidth/7+windowWidth/9.6)&&(mouseX<windowWidth/7+windowWidth/4.8)&&(mouseY>windowWidth/1.2)&&(mouseY<windowWidth/1.2+windowWidth/4.8)){
        feld=1;
        station=1;
    }
}
let zOffset= jQuery("nav").offset().top;
jQuery(document).ready(function(){

//alert(zOffset);
jQuery(window).scroll(function(){
    scrollPos = jQuery(window).scrollTop();
    
});

});



function draw(){
    clear();
   
    
    if((mouseX>0)&&(mouseX<windowWidth)&&(mouseY>windowWidth/350)&&(mouseY<windowWidth/100)){
        manY=manY-100;
        manNav.display();
    }
  
 
    if (count==0){  //Einleitung
    back1.display();
    einleitung.display();
    problem.display();
    //Schienen.display();
    dasTeam.display();
    ourLogo.display()
    names.display();
    einPaketBestellen.display();
   
   
    }

    if (count==2){   //Mobilität für uns
    backMob.display();
    mobil.display();
    abstract.display();
   
    }

    if (count==3){   //Der Hauptumschagspunkt

        backtech.display();
        umschlagslagerbild.display(); 
        umschlagspunkt.display();
        Fließband.display();
        derWagon.display();
        wagonText.display();
        wagonEbene.display()
        innerStation.display();
        innerStation2.display();
        inStation.display();
        //bkasten.display();
        
        
        
        noSignal.display();
        
       

       if ((paketLadung.X >= windowWidth/1.28)&&(paketLadung.Y==windowWidth/0.375)){
        lieferung=1;
        }
        if (human.X>=windowWidth/4.3){
            signal.display();
            dieStandortbestimmung.display();
        }
        if (scrollPos >= zOffset){
            derZug.display();
            //Zug fährt aus dem Bild
            if (scrollPos >= windowWidth/0.27){
                derZug.Y = derZug.Y+10;
                theTrain=1;
             }
            //Der Zug fährt beim Scrollen
            if ((scrollPos<windowWidth/0.27)&&(theTrain==0)){
            derZug.Y=scrollPos+50;
            
           
            }
            
            //Paket Ein-und Ausladen
            if (scrollPos >= windowWidth/3){
            paketLadung.display();
                if ((paketLadung.X>=windowWidth/13.4303)&&(scrollPos <= windowWidth/0.4)&&(lieferung==0)){
                paketLadung.X=paketLadung.X-10;
                }
                if ((scrollPos >= windowWidth/1.5)&&(scrollPos <= windowWidth/0.4)&&(lieferung==0)){  
                paketLadung.Y=scrollPos+70;
                }    
            } 
            if ((scrollPos >= windowWidth/0.4)&&(paketLadung.X<= windowWidth/1.28)&&(lieferung==0)){
                paketLadung.X = paketLadung.X +10;
                paketLadung.Y=windowWidth/0.375;
            }

            //Standortbestimmung
            if (scrollPos >= windowWidth/0.339){
                human.display();
                if (human.X<=windowWidth/4.3){
                    human.X=human.X+10;
                }
            }
            
        }

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
        if (feld==1){
            theInterface.display();
        }
    }

    if (count==5){   //Unser Endnutzer//Unser Kunde
        backKunde.display(); 
        customer.display();
        endcustomer.display();
        abdeckung.display();
        ort.display();
        merkmal.display();
        marketing.display();
        maßnahmen.display();
        

    }
    if (count==6){
        backPrototyp.display();
        
    }
    console.log(lieferung);
     //Navigation
     shadowNav.display();
    designNav.display();
    techNav.display();
    manNav.display();
    topNav.display();


    }
    