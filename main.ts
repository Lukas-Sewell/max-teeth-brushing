input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    images.iconImage(IconNames.Yes).showImage(0)
})
input.onButtonPressed(Button.B, function () {
    seconds = seconds + 3600
    basic.showNumber(Math.round(seconds / 3600))
    images.iconImage(IconNames.No).showImage(0)
})
let seconds = 0
images.iconImage(IconNames.No).showImage(0)
seconds = 0
let endOfDay = 86400
// SAD FACE RESET
basic.forever(function () {
    if (seconds == endOfDay) {
        images.iconImage(IconNames.No).showImage(0)
    }
})
basic.forever(function () {
    for (let index = 0; index <= 255; index++) {
        led.setBrightness(index)
        basic.pause(1)
    }
    for (let index2 = 255; index2 > 0; index2--) {
        led.setBrightness(index2)
        basic.pause(1)
    }
})
// CLOCK
basic.forever(function () {
    basic.pause(1000)
    seconds += 1
    if (seconds > endOfDay) {
        seconds = 0
    }
})
