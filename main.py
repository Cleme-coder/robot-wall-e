ledr = 0
ledg = 0
ledb = 0
PCA9685.reset(67)

def on_forever():
    global ledr
    while True:
        for index in range(10):
            PCA9685.set_led_duty_cycle(PCA9685.LEDNum.LED5, ledr, 67)
            basic.pause(500)
            ledr += 10
        for index2 in range(10):
            PCA9685.set_led_duty_cycle(PCA9685.LEDNum.LED5, ledr, 67)
            basic.pause(500)
            ledr += -10
        for index3 in range(10):
            pass
basic.forever(on_forever)
