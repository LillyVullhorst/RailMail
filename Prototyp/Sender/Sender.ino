/*
  Sender
  RailMail Semesterprojekt P3 WS 2018/19 Prototyp v.1.5
  Ein Projekt von Jonathan Mader, Sylvia Rinke und Lilly Vullhorst

  Benötigte Geräte siehe Inventarliste
  
    Schaltplan:
   ----------------------------------------------------------------------------------------------------------
               Arduino      4 Channel     Servo     Servo      433Mhz      Button   LED1   LED2       Magnet
               UNO          Relay         Schiene   Ausgabe    Sendemodul  Start    Start  Nachricht  Sensor
               Pin          Pin           Pin       Pin        Pin         Pin      Pin    Pin        Pin
   ----------------------------------------------------------------------------------------------------------
               GND          GND           schwarz   schwarz    GND         A        -      -          GND
               5V           VCC           rot       rot        VCC                                    +V
               D10          INT2
               D11          INT3
               D12          INT4
               D4                         orange
               D3                                   orange
               D8                                              DATA
               D7                                                          B
               D6                                                                   +
               D2                                                                           +
               D5                                                                                     Signal
               

*/

// Biblotheken
#include <RCSwitch.h>
#include <Servo.h>
Servo servo; // Servo für Wechselschiene
Servo servo2; //Servo für Paketausgabe
RCSwitch mySwitch = RCSwitch();

int ledPin1 = 6;
int ledPin2 = 2;
int ledState = LOW;
unsigned long previousMillis = 0;
const long interval = 500;

int angle = 0;
int angle2 = 10;
int taster = 7; //Das Wort „taster“ steht jetzt für den Wert 7.
int tasterstatus; //Das Wort „tasterstatus“ als Variable

int trainSensor = 5; // Deklaration des Sensor-Eingangspin
int trainPing; // Temporaere Variable
int trainPingCount = 0;
int stage = 0;


// Variablen
boolean abkuppeln = false;
boolean ankuppeln = false;
boolean restart = true; // Startknopf ist freigegeben
boolean start = false; // Startsequenz deaktivieren
boolean aPowerEnabled = false;
boolean bButtonPressed = false;
boolean aDirectionChange = false;
boolean GleisA = false;
boolean GleisB = false;
boolean light = false;

// Pin Belegungen
#define PIN_BUTTON 6 
#define PIN_BUTTON2 5 

#define RELAY2  10
#define RELAY3  11
#define RELAY4  12

  void setup() // Setup.
  {
    Serial.begin(9600);
    mySwitch.enableTransmit(8);  // Der Sender wird an Pin 8 angeschlossen
    pinMode(taster, INPUT_PULLUP); // Der Pin mit dem Taster (Pin 7) ist jetzt ein Eingang.

    // Relais
    pinMode(RELAY2, OUTPUT);
    pinMode(RELAY3, OUTPUT);
    pinMode(RELAY4, OUTPUT);
    digitalWrite(RELAY2, HIGH);
    digitalWrite(RELAY3, HIGH);
    digitalWrite(RELAY4, HIGH);
    
    pinMode(PIN_BUTTON, INPUT_PULLUP); 
    pinMode(PIN_BUTTON2, INPUT_PULLUP);

    // Servos
    servo2.attach(3); //Servo an Pin 3
    servo2.write(angle2);
    servo.attach(4); //Servo an Pin 4
    servo.write(angle);

    // LEDs
    pinMode(ledPin1, OUTPUT);
    pinMode(ledPin2, OUTPUT);

    // Magnetsensor
    pinMode (trainSensor, INPUT) ; // Initialisierung Sensorpin
    digitalWrite(trainSensor, HIGH); // Aktivierung interner Pull-Up Widerstand
  
  }
  void loop() // Loop
  { 

      tasterstatus = digitalRead(taster); //Hier wird der Pin7 ausgelesen. Das Ergebnis unter der Variable „tasterstatus“
      trainPing = digitalRead (trainSensor) ; // Das Signal am Sensor wird ausgelesen
      unsigned long currentMillis = millis(); //Zeitzählung unabhängig von Delay
  
  
      /// Signalisierung Freigabe des Startbutton mit LED Signal
        if (restart == false){
          digitalWrite(ledPin1, LOW);
          }
    
        if (restart == true){
          digitalWrite(ledPin1, HIGH);
          digitalWrite(ledPin2, LOW);
          }
  
      /START/
      /// Starttaster wird gedrückt > Zug fährt an
        if (tasterstatus == LOW && restart == true)
        {
        Serial.println("Start");
        
        digitalWrite(RELAY4, LOW);
         
        start = true; //Startsequenz aktivieren
        restart = false; //Startknopf ist blockiert
        }
  
      /// Blinkendes Licht für Nachricht
      if (light == true){
        
                if (currentMillis - previousMillis >= interval) {
            // save the last time you blinked the LED
            previousMillis = currentMillis;
        
            // if the LED is off turn it on and vice-versa:
            if (ledState == LOW) {
              ledState = HIGH;
            } else {
              ledState = LOW;
            }
          }
            digitalWrite(ledPin2, ledState);
          }
       else{ 
            //sonst Licht aus
            digitalWrite(ledPin2, LOW);
           }
  
      /// Zugposition wird duch Sensor erkannt und gezählt
      if(trainPing == 0){
        delay(800);
        trainPingCount = trainPingCount+1;
        Serial.println(trainPingCount);
        } 
  
      //Zug wird erkannt > Stage 1
      if (start == true && trainPingCount == 1){
        
             //abkuppeln = true;
             stage = 1;      
  
      }
  
            //Stage1
            if (start == true && stage == 1 ){
        
                   trainPingCount = trainPingCount+1;
                   Serial.println("Stage1");
                   delay(1050);
                   
        
                   digitalWrite(RELAY4, HIGH); // Zug stoppt
  
                   //Sende 2x Signal zum Abkoppeln an den Wagon
                   Serial.println("Abkoppeln");
                    mySwitch.send(5678, 24); // Der 433mhz Sender versendet die Dezimalzahl „5678“
                   Serial.println("Abkoppeln");
                    mySwitch.send(5678, 24); // Der 433mhz Sender versendet die Dezimalzahl „5678“  
             
             stage = 2;           
        }
            //Stage2
            if (start == true && stage == 2 ){
              
                   Serial.println("Stage2");
                   delay(1500);
  
                   digitalWrite(RELAY4, LOW);
                   
                   delay(1000);
                   
                   servo.write(115);
           
                   abkuppeln = false;
                   stage = 3;           
        }
  
            //Stage3
            if (start == true && stage == 3){
                      
                  light = true; //Licht für benachrichtigung wird eingeschaltet
                  delay(1000);   
                  stage = 4;
                 } 
  
            //Stage4
            if (start == true && stage == 4){
            
                  Serial.println("Stage4");
                  
                  if(trainPingCount == 3) {
                    
                  servo2.write(115);
                  light = false;
                  stage = 5;
                  
                  } else {
                  Serial.println("Wait");
                  }  
              }
  
            //Stage5
            if (start == true && stage == 5){
      
                  Serial.println("Stage5");
                  
                  digitalWrite(ledPin2, LOW);
                  if(trainPingCount == 4) {
                    
                  stage = 6;
                  } else {
                  Serial.println("Wait");
                  }  
              }
  
            //Stage6
            if (start == true && stage == 6){
                  
                 Serial.println("Stage6");
                 
                 delay(1200);
                 servo2.write(10);
                 digitalWrite(RELAY4, HIGH);
                 
                 //Richtungswechsel
                 digitalWrite(RELAY2, LOW);
                 digitalWrite(RELAY3, LOW);
                 
                 delay(500);  
                 servo.write(0);
  
                       //Sende 2x Signal zum Ankuppeln an den Wagon
                       Serial.println("Ankuppeln");
                       mySwitch.send(1234, 24); // Der 433mhz Sender versendet die Dezimalzahl „1234“
                       Serial.println("Ankuppeln");
                       mySwitch.send(1234, 24); // Der 433mhz Sender versendet die Dezimalzahl „1234“
                 
                 delay(1000); 
                 digitalWrite(RELAY4, LOW);
                 
                 delay(800);
                 digitalWrite(RELAY4, HIGH);
                 
                 delay(1000);
                 //Richtungswechsel
                 digitalWrite(RELAY2, HIGH);
                 digitalWrite(RELAY3, HIGH);
                 
                 delay(1000);
                 digitalWrite(RELAY4, LOW);
                 
                 delay(4000);
                 digitalWrite(RELAY4, HIGH);
                  
                 stage = 7;  
            }
  
            //Stage7
            if (start == true && stage == 7){
            
                  Serial.println("Stage7");
                  delay(2000);
                  
                  restart = true; //Startknopf ist freigegeben
                  start = false;  //Startsequenz deaktivieren
                  trainPingCount = 0; //Rückstellung Zug Zähler
                  stage = 0; //Rückstellung Stages
              }
              /ENDE/
  
  
  
      
      //Sende Signal zum Abkoppeln an den Wagon
      if(abkuppeln == true)
      {       Serial.println("Abkoppeln");
              mySwitch.send(5678, 24); // Der 433mhz Sender versendet die Dezimalzahl „5678“
              //delay (50); // 50 Millisekunden Pause
              
      }
  
      //Sende Signal zum Ankuppeln an den Wagon
      if(ankuppeln == true)
      {       Serial.println("Ankuppeln");
               mySwitch.send(1234, 24); // Der 433mhz Sender versendet die Dezimalzahl „1234“
               //delay (50); // 50 Millisekunden Pause
               
      }
  
  
  } //Loop-Teil schließen
