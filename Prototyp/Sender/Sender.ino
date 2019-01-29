//RailMail Semesterprojekt P3 WS 2018/19 Prototyp v.1.0
//Ein Projekt von Jonathan Mader, Sylvia Rinke und Lilly Vullhorst

// Biblotheken
#include <RCSwitch.h>
#include <Servo.h>
Servo servo;
RCSwitch mySwitch = RCSwitch();

// Variablen
boolean abkuppeln = false;
boolean ankuppeln = false;

int angle = 10;
int taster = 7; //Das Wort „taster“ steht jetzt für den Wert 7.
int tasterstatus; //Das Wort „tasterstatus“ als Variable

int trainSensor = 5; // Deklaration des Sensor-Eingangspin
int trainPing; // Temporaere Variable
int stage = 0;

boolean restart = true;
boolean start = false;
boolean aPowerEnabled = false;
boolean bButtonPressed = false;
boolean aDirectionChange = false;
boolean GleisA = false;
boolean GleisB = false;

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
  pinMode(taster, INPUT_PULLUP); //Der Pin mit dem Taster (Pin 7) ist jetzt ein Eingang.

  pinMode(RELAY2, OUTPUT);
  pinMode(RELAY3, OUTPUT);
  pinMode(RELAY4, OUTPUT);
  digitalWrite(RELAY2, HIGH);
  digitalWrite(RELAY3, HIGH);
  digitalWrite(RELAY4, HIGH);


  pinMode(PIN_BUTTON, INPUT_PULLUP); 
  pinMode(PIN_BUTTON2, INPUT_PULLUP);

  servo.attach(4); //Servo an Pin 4
  servo.write(angle);

  pinMode (trainSensor, INPUT) ; // Initialisierung Sensorpin
  digitalWrite(trainSensor, HIGH); // Aktivierung interner Pull-Up Widerstand

}
void loop() // Loop
{ 
  /// Start mit Taster (Pin / PullUp)

    tasterstatus = digitalRead(taster); //Hier wird der Pin7 ausgelesen (Befehl:digitalRead). Das Ergebnis wird unter der Variable „tasterstatus“ mit dem Wert „HIGH“ für 5Volt oder „LOW“ für 0Volt gespeichert.
    trainPing = digitalRead (trainSensor) ; // Das gegenwärtige Signal am Sensor wird ausgelesen
  
 
    if (tasterstatus == LOW && restart == true)
    {
    Serial.print("Start");
    aPowerEnabled = true; 
    start = true;
    restart = false;
    }
    
    if(abkuppeln == true)
    {       Serial.print("Abkuppeln");
            mySwitch.send(5678, 24); // Der 433mhz Sender versendet die Dezimalzahl „5678“
            delay (50); // 50 Millisekunden Pause
            abkuppeln = false;
    }

    if(ankuppeln == true)
    {       Serial.print("Ankuppeln");
             mySwitch.send(1234, 24); // Der 433mhz Sender versendet die Dezimalzahl „1234“
             delay (50); // 50 Millisekunden Pause
             ankuppeln = false;
    }


     if (aPowerEnabled == true) {                                     
      digitalWrite(RELAY4, LOW);
                                               
    } else {
      digitalWrite(RELAY4, HIGH);
    }

    if (aDirectionChange == true) {
      digitalWrite(RELAY2, LOW);
      digitalWrite(RELAY3, LOW);
      
     } else {  
      digitalWrite(RELAY2, HIGH);
      digitalWrite(RELAY3, HIGH);
      
    }
    
    if (start == true){
        
        if (trainPing == LOW){
              delay (2000);
              abkuppeln = true;
              aPowerEnabled = false;
              stage = 2;
              
              }
              
         if (stage == 2){
            delay(5000);
            servo.write(121);
            
            stage = 3;    
          }
          
         if (stage == 3){
            
            delay(1000);
            
            //abkuppeln = false;   
        }
      }
    

   

    
    /// Servo
    if (GleisA == true){
    // scan from 0 to 180 degrees
    for(angle = 10; angle < 121; angle++)  
    {                                  
      servo.write(angle);               
      delay(15);                   
    }
    }

     if (GleisB == true){
    // scan back from 180 to 0 degrees
    for(angle = 121; angle > 10; angle--)    
    {                                
      servo.write(angle);           
      delay(15);       
    }
     }
} //Mit dieser Klammer wird der Loop-Teil geschlossen.
