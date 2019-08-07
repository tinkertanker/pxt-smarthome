basic.showIcon(IconNames.Heart)
basic.forever(function () {
    basic.showNumber(smarthome.ReadSoilHumidity(AnalogPin.P1))
    basic.showNumber(smarthome.ReadLightIntensity(AnalogPin.P2))
    basic.showNumber(smarthome.ReadTemperature(TMP36Type.TMP36_temperature_C, AnalogPin.P4))
    basic.showNumber(smarthome.ReadNoise(AnalogPin.P10))
})
