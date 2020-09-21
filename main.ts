
basic.forever(function() {
    let strip = neopixel.create(DigitalPin.P5, 18, NeoPixelMode.RGB)
    RobotCar_Keyestudio.Motors.spin(__internal.__turnRatioPicker(100))
    strip.clear()
    strip.setBrightness(255)
    strip.rotate(16)
    RobotCar_Keyestudio.Motors.stop()
    RobotCar_Keyestudio.Leds.showRed()
    basic.showIcon(IconNames.Heart)
    basic.clearScreen()
    strip.showRainbow(1, 255)
    basic.pause(500)
    basic.showIcon(IconNames.SmallHeart)
    basic.clearScreen()
    basic.pause(500)
    basic.showString("Happy Birthday!");
    basic.clearScreen()
    basic.pause(500)
})

