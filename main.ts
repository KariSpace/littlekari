let strip = neopixel.create(DigitalPin.P5, 18, NeoPixelMode.RGB);
strip.setBrightness(255);
music.setVolume(255);

// const isBlocked = (): boolean => (RobotCar_Keyestudio.Sonar.ping() < 60 || RobotCar_Keyestudio.IrSensors.isRightBlocked() || RobotCar_Keyestudio.IrSensors.isLeftBlocked());
const isBlocked = (): boolean => (RobotCar_Keyestudio.Sonar.ping() < 60 );
// Led Loop
let offset = 0;
basic.forever(() => {
  if(isBlocked()){
      strip.setMatrixColor(0, 255, neopixel.colors(NeoPixelColors.Red));
      strip.show();
      RobotCar_Keyestudio.Leds.showRed();
  }else{
    offset++;
    if(offset === 255) offset = 0;
    strip.clear();
    strip.showRainbow(offset, 255);
    strip.rotate(offset);
    RobotCar_Keyestudio.Leds.showGreen();
  }
});


   
// Motor Loop
basic.forever(() => { 
    
    while(isBlocked()){
        //  RobotCar_Keyestudio.Motors.move(__internal.__speedPicker(-100));
         basic.pause(50);
         if(isBlocked()){
            
   
         RobotCar_Keyestudio.Motors.rightMotor(-300)
         RobotCar_Keyestudio.Motors.leftMotor(300)
         basic.pause(200)
         
         if(RobotCar_Keyestudio.IrSensors.isRightBlocked()){
             RobotCar_Keyestudio.Motors.rightMotor(-100)
         }
         if(RobotCar_Keyestudio.IrSensors.isLeftBlocked()){
             RobotCar_Keyestudio.Motors.leftMotor(-100)
         }
         }
         return
     } 
    //  else {
         RobotCar_Keyestudio.Motors.move(__internal.__speedPicker(100));
        //  RobotCar_Keyestudio.Motors.spin(__internal.__turnRatioPicker(100))

    //  }
    
});


// Screen Loop
basic.forever(() => {
    if(!isBlocked()){
      basic.clearScreen();
      basic.showIcon(IconNames.Heart);
      basic.clearScreen();
      basic.showIcon(IconNames.SmallHeart);
      basic.clearScreen();
      basic.showIcon(IconNames.Heart);
      basic.clearScreen();
      basic.showString("Kari", 65);
      basic.clearScreen();
     } else {
        basic.clearScreen();
        basic.showIcon(IconNames.Angry);
        basic.clearScreen();
        basic.showString(RobotCar_Keyestudio.Sonar.ping().toString(), 100);
        //music.ringTone(Note.C)


        // music.playTone(5100,55);       // "m"   (short)
        // music.playTone(394,130);       // "eee" (long)
        // music.playTone(384,35);        // "eee" (up a tiny bit on end)
        // music.playTone(5100,40); 
        // music.rest(30);    

        music.playTone(5100,110);       // "m" (short)
        music.playTone(394,340);       // "eee" (long)
        music.rest(60);               // wait a tiny bit
        for(let i=330; i<360; i+=2)  // vary "ooo" down
            music.playTone(i,30);
            music.playTone(5100, 80); 
        }

   
});
