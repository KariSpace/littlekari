let strip = neopixel.create(DigitalPin.P5, 18, NeoPixelMode.RGB);
strip.setBrightness(255);

const isBlocked = (): boolean => (RobotCar_Keyestudio.Sonar.ping() < 20 || RobotCar_Keyestudio.IrSensors.isRightBlocked() || RobotCar_Keyestudio.IrSensors.isLeftBlocked());

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
    if(isBlocked()){
         basic.clearScreen();
         basic.showIcon(IconNames.Angry);
         basic.pause(500);
         RobotCar_Keyestudio.Motors.move(__internal.__speedPicker(-100));
         if(RobotCar_Keyestudio.IrSensors.isRightBlocked()){
             RobotCar_Keyestudio.Motors.rightMotor(-100)
         }
         if(RobotCar_Keyestudio.IrSensors.isLeftBlocked()){
             RobotCar_Keyestudio.Motors.leftMotor(-100)
         }
         return
     } else {
         RobotCar_Keyestudio.Motors.move(__internal.__speedPicker(100));
     }
    
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
      basic.showString("Happy Birthday, Kari", 65);
      basic.clearScreen();
     } else {
        basic.clearScreen();
        basic.showIcon(IconNames.Angry);
        basic.pause(100);
        basic.showString("Let me free", 75);
     }
});
