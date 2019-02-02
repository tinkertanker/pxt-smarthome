# Smart Home kit Package
This ELECFREAKS Smart Home kit package was developed by [ELECFREAKS](https://www.elecfreaks.com/) with minor assistance from [Tinkercademy](https://tinkercademy.com/).

# Smart Home Kit introduction
Smarthome Kit is a product about smart home project base on micro:bit which is developed by ELECFREAKS.      
We selected executed components commonly used at home as TMP36 temperature sensor, sound sensor, crash sensor, servo, motor. You can build scene like windowsill, wardrobe and fish tank, create yourself smart sweet home and programming to intelligently driving them using micro:bit.     
Smarthome Kit is what makes life more practical and playing with it is what makes life more interesting.  

# Hardware list
- 1 x [sensor:bit](https://www.elecfreaks.com/estore/elecfreaks-sensor-bit-for-micro-bit.html)
- 1 x [Octopus Crash Sensor](https://www.elecfreaks.com/estore/octopus-crash-sensor-brick.html)
- 1 x [Octopus TMP36 Temperature Sensor](https://www.elecfreaks.com/estore/octopus-temperature-sensor-brick-tmp36-analog-for-arduino-micro-bit.html)
- 1 x [Octopus Analog Photocell Brick](https://www.elecfreaks.com/estore/octopus-analog-photocell-brick-obphotocell.html)
- 1 x [Octopus Analog Noise Sound Sensor](https://www.elecfreaks.com/estore/octopus-analog-noise-sound-sensor-detection-module.html)
- 1 x [Octopus Soil Moisture Sensor](https://www.elecfreaks.com/estore/octopus-soil-moisture-sensor-brick.html)
- 1 x [Octopus Single RGB Rainbow LED](https://www.elecfreaks.com/estore/octopus-single-rgb-rainbow-led.html)  
- 1 x [Octopus Motor Brick](https://www.elecfreaks.com/estore/octopus-motor-brick.html)
- 1 x [IIC OLED Module](https://www.elecfreaks.com/estore/iic-oled.html)
- 1 x [1 Channel Relay 3V Relay Module](https://www.elecfreaks.com/estore/1-channel-relay-3v-relay-module-for-micro-bit.html)
- 1 x [3V vertical water pump](https://www.elecfreaks.com/estore/3v-vertical-water-pump.html)
- 1 x [EF92A micro:servo](https://www.elecfreaks.com/estore/ef92a-micro-servo-180-degrees-analog-servo-for-micro-bit.html)
- 1 x [Battery Box](https://www.elecfreaks.com/estore/exclusive-crystal-battery-box-2-x-aaa-batteries-for-micro-bit.html)

## Code Example
```JavaScript
basic.forever(function () {
    basic.showString("noise:")
    basic.showNumber(smarthome.ReadNoise(AnalogPin.P1))
    basic.showString("temperature:")
    basic.showNumber(smarthome.ReadTemperature(TMP36Type.TMP36_temperature_C, AnalogPin.P2))
})


```

## License
MIT

## Supported targets
for PXT/microbit (The metadata above is needed for package search.)

