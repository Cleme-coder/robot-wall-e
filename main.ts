let RR = 0
let LL = 0
basic.forever(function () {
    RR = pins.digitalReadPin(DigitalPin.P12)
    LL = pins.digitalReadPin(DigitalPin.P13)
    if (LL == 1 && RR == 0) {
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            `)
    } else if (LL == 0 && RR == 1) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
    } else if (LL == 1 && RR == 1) {
        basic.showIcon(IconNames.SmallHeart)
    } else {
        basic.showIcon(IconNames.Heart)
    }
})
