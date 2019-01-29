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

int angle = 0;
int taster = 7; //Das Wort „taster“ steht jetzt für den Wert 7.
int tasterstatus = 0; //Das Wort „tasterstatus“ als Variable

boolean aPowerEnabled = false;
boolean aButtonPressed = false;
boolean bButtonPressed = false;
boolean aDirectionChange = false;
boolean apositionRail = false;
boolean buttonsActive = true;
   
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



  pinMode(PIN_BUTTON, INPUT_PULLUP); 
  pinMode(PIN_BUTTON2, INPUT_PULLUP);

  servo.attach(4); //Servo an Pin 4
  servo.write(angle);

}
void loop() // Loop
{

 if(buttonsActive == true){
  ///RELAIS
  if (digitalRead(PIN_BUTTON) == LOW) {                             // Wenn der Taster aktuell gedrückt wird, ...
    aButtonPressed = true;                                          // merke dir, dass der Taster gedrückt wurde, ...
    delay(10);                                                      // und warte 10 Millisekunden bis die Kontakte des Tasters vollstÃ¤ndig geschlossen sind.
  }

  if (digitalRead(PIN_BUTTON2) == LOW) {                             // Wenn der Taster aktuell gedrückt wird, ...
    bButtonPressed = true;
    delay(10);                                                      // und warte 10 Millisekunden bis die Kontakte des Tasters vollstÃ¤ndig geschlossen sind.
  }

  if (digitalRead(PIN_BUTTON) == HIGH && aButtonPressed == true) {  // Wenn der Taster nicht gedrÃ¼ckt wird, aber zuvor gedrÃ¼ckt wurde ...
    aButtonPressed = false;                                         // vergesse, dass der Taster gedrÃ¼ckt wude.
    
    if (aPowerEnabled == true) {                                      // Wenn die LED gerade leuchtet ...
      digitalWrite(RELAY4, LOW);                                   // schalte die LED aus ...
      aPowerEnabled = false;                                          // und merke dir, dass die LED gerade nicht leuchtet,
    } else {                                                        // sonst ...
      digitalWrite(RELAY4, HIGH);                                    // schalte die LED ein ...
      aPowerEnabled = true;                                           // und merke dir, dass die LED gerade leuchtet.
    }
  }
  }

   if (digitalRead(PIN_BUTTON2) == HIGH && bButtonPressed == true) {  // Wenn der Taster nicht gedrückt wird, aber zuvor gedrückt wurde ...
    bButtonPressed = false;                                         // vergesse, dass der Taster gedrÃ¼ckt wude.
    
    if (aDirectionChange == true) {                                      // Wenn die LED gerade leuchtet ...
      digitalWrite(RELAY2, LOW);
      digitalWrite(RELAY3, LOW);
      aDirectionChange = false;                                          // und merke dir, dass die LED gerade nicht leuchtet,
    } else {                                                        // sonst ...
      digitalWrite(RELAY2, HIGH);
      digitalWrite(RELAY3, HIGH);
      aDirectionChange = true;                                           // und merke dir, dass die LED gerade leuchtet.
    }
  }
  
  /// Signal über Funkmodul, Steuerung des Elektromagneten

    tasterstatus=digitalRead(taster); //Hier wird der Pin7 ausgelesen (Befehl:digitalRead). Das Ergebnis wird unter der Variable „tasterstatus“ mit dem Wert „HIGH“ für 5Volt oder „LOW“ für 0Volt gespeichert.
    
    if (tasterstatus == LOW)
    {
    abkuppeln = true;
    
    }else
    { 
    ankuppeln = true;}
    
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
    
    /// Servo

    // scan from 0 to 180 degrees
    for(angle = 10; angle < 121; angle++)  
    {                                  
      servo.write(angle);               
      delay(15);                   
    } 
    // now scan back from 180 to 0 degrees
    for(angle = 121; angle > 10; angle--)    
    {                                
      servo.write(angle);           
      delay(15);       
    }
    
} //Mit dieser Klammer wird der Loop-Teil geschlossen.
