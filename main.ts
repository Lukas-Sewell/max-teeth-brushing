input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    images.iconImage(IconNames.Yes).showImage(0)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
images.iconImage(IconNames.No).showImage(0)
let secondsSinceMidnight = 65700
basic.forever(function () {
    images.iconImage(IconNames.Yes).showImage(0)
    basic.pause(100)
    led.setBrightness(237)
    basic.pause(100)
    led.setBrightness(184)
    basic.pause(100)
    led.setBrightness(152)
    basic.pause(100)
    led.setBrightness(104)
    basic.pause(100)
    led.setBrightness(73)
    basic.pause(100)
    led.setBrightness(37)
    basic.pause(100)
    led.setBrightness(6)
    basic.pause(100)
    led.setBrightness(37)
    basic.pause(100)
    led.setBrightness(73)
    basic.pause(100)
    led.setBrightness(104)
    basic.pause(100)
    led.setBrightness(152)
    basic.pause(100)
    led.setBrightness(184)
    basic.pause(100)
    led.setBrightness(237)
})
// SAD FACE RESET
basic.forever(function () {
    if (secondsSinceMidnight == 86400) {
        images.iconImage(IconNames.No).showImage(0)
    }
})
// CLOCK
basic.forever(function () {
    basic.pause(1000)
    secondsSinceMidnight += 1
    if (secondsSinceMidnight == 86400) {
        secondsSinceMidnight = 0
    }
})
