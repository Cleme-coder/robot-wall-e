let ledr = 0
let ledb = 0
let ledg = 0
PCA9685.reset(67)
basic.forever(function () {
    while (true) {
        for (let index = 0; index < 10; index++) {
            PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED5, ledr, 67)
            basic.pause(500)
            ledr += 10
        }
        for (let index = 0; index < 10; index++) {
            PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED5, ledr, 67)
            basic.pause(500)
            ledr += -10
        }
        for (let index = 0; index < 10; index++) {
            PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED6, ledb, 67)
            basic.pause(500)
            ledb += 10
        }
        for (let index = 0; index < 10; index++) {
            PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED6, ledb, 67)
            basic.pause(500)
            ledb += -10
        }
        for (let index = 0; index < 10; index++) {
            PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, ledg, 67)
            basic.pause(500)
            ledg += 10
        }
        for (let index = 0; index < 10; index++) {
            PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED7, ledg, 67)
            basic.pause(500)
            ledg += -10
        }
    }
})
