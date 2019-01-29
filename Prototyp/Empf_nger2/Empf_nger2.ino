#include <RCSwitch.h>
int Magnet=12;
boolean abkoppeln = false;


RCSwitch mySwitch = RCSwitch();

void setup() 
{
  Serial.begin(9600);
  mySwitch.enableReceive(0);  // Empfänger ist an Interrupt-Pin "0" - Das ist am UNO der Pin2
  pinMode(Magnet, OUTPUT); //Der Pin mit der LED (Pin13) ist jetzt ein Ausgang.
}

void loop() {
  if (mySwitch.available()) // Wenn ein Code Empfangen wird...
  {
  int value = mySwitch.getReceivedValue(); // Empfangene Daten werden unter der Variable "value" gespeichert.
  if (value == 0) // Wenn die Empfangenen Daten "0" sind, wird "Unbekannter Code" angezeigt.
    {
      Serial.println("Unbekannter Code");
    } 
    
    else // Wenn der Empfangene Code brauchbar ist, wird er hier an den Serial Monitor gesendet.
    {
      Serial.print("Empfangen: ");
      Serial.println( value );
        if (value == 5678)   //Verarbeitung: Wenn der Arduino die Zahl "5678" empfängt, dann... 
        {   //Programmabschnitt des IF-Befehls öffnen.
        abkoppeln = true;
        } 
        if (value == 1234) 
        {
        abkoppeln = false;  


        
        }
       
    }
    mySwitch.resetAvailable(); 
  }



if (abkoppeln == true){
                digitalWrite(Magnet, LOW);
                }
              else {
                digitalWrite(Magnet, HIGH); 
                }
 
  }
