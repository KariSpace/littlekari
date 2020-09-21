let strip = neopixel.create(DigitalPin.P5, 18, NeoPixelMode.RGB);
let offset = 0;
basic.forever(function () {
  offset++;
  if(offset === 255) offset = 0;
  strip.clear();
  strip.showRainbow(offset, 255);
  strip.setBrightness(255);
  strip.rotate(offset);
});
basic.forever(function () {
  if (RobotCar_Keyestudio.Sonar.ping() < 10){
     RobotCar_Keyestudio.Motors.stop();
  } else {
      RobotCar_Keyestudio.Motors.move(__internal.__speedPicker(100));
  }
    
});
basic.forever(function () {
  
  RobotCar_Keyestudio.Leds.showRed();
  basic.showIcon(IconNames.Heart);
  basic.clearScreen();
  basic.showIcon(IconNames.SmallHeart);
  basic.clearScreen();
  basic.showString("Happy Birthday!");
  basic.clearScreen();
});
