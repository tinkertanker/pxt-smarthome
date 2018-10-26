
/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */



/**
 * Custom blocks
 */
//% weight=10 color=#0fbc11 icon="\uf015"
namespace smarthome {

    let Reference_VOLTAGE = 3100

    /**
    * TODO: get soil moisture(0~100)
    * @param soilmoisturepin describe parameter here, eg: AnalogPin.P1
    */
    //% blockId="readsoilmoisture" block="read soil moisture(0~100) at pin %soilhumiditypin"
    export function ReadSoilHumidity(soilmoisturepin: AnalogPin): number {
        let voltage = 0;
        let soilmoisture = 0;
        voltage = pins.map(
            pins.analogReadPin(soilmoisturepin),
            0,
            1023,
            0,
            100
        );
        soilmoisture = voltage;
        return soilmoisture;
    }

    /**
    * TODO: get TMP36 Temperature(℃)
    * @param temppin describe parameter here, eg: AnalogPin.P1
    */
    //% blockId="readtemp" block="read temperature(℃) at pin %temppin"

    export function ReadTemperature(temppin: AnalogPin): number {
        let voltage = 0;
        let Temperature = 0;
        voltage = pins.map(
            pins.analogReadPin(temppin),
            0,
            1023,
            0,
            Reference_VOLTAGE
        );
        Temperature = (voltage - 500) / 10;
        return Temperature;
    }



    /** 
    * TODO: get noise(dB)
    * @param noisepin describe parameter here, eg: AnalogPin.P1
    */
    //% blockId="readnoise" block="read noise(dB) at pin %noisepin"
    export function ReadNoise(noisepin: AnalogPin): number {
        let level = 0
        let voltage = 0
        let noise = 0
        let h = 0
        let l = 0
        let sumh = 0
        let suml = 0
        for (let i = 0; i < 1000; i++) {
            level = level + pins.analogReadPin(noisepin)
        }
        level = level / 1000
        for (let i = 0; i < 1000; i++) {
            voltage = pins.analogReadPin(noisepin)
            if (voltage >= level) {
                h += 1
                sumh = sumh + voltage
            } else {
                l += 1
                suml = suml + voltage
            }
        }
        if (h == 0) {
            sumh = level
        } else {
            sumh = sumh / h
        }
        if (l == 0) {
            suml = level
        } else {
            suml = suml / l
        }
        noise = sumh - suml
        if (noise <= 28) {
            noise = pins.map(
                noise,
                0,
                28,
                15,
                55
            )
        } else if (noise <= 70) {
            noise = pins.map(
                noise,
                28,
                70,
                55,
                64
            )
        } else if (noise <= 229) {
            noise = pins.map(
                noise,
                70,
                229,
                64,
                76
            )
        } else {
            noise = pins.map(
                noise,
                229,
                1023,
                76,
                120
            )
        }
        return noise;
    }




}
