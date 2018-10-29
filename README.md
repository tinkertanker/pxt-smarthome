# Smarthome kit Package
This ElecFreaks smarthome kit package was developed by [ElecFreaks](https://www.elecfreaks.com/) with minor assistance from [Tinkercademy](https://tinkercademy.com/).


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

