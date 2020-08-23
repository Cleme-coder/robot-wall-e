let val = 0
let strip = neopixel.create(DigitalPin.P5, 18, NeoPixelMode.RGB)
strip.clear()
basic.forever(function () {
    val = Math.map(pins.analogReadPin(AnalogPin.P1), 0, 1023, 0, 255)
    strip.showColor(neopixel.rgb(255 - val, 255 - val, 255 - val))
    basic.pause(100)
})
