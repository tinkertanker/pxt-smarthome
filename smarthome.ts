
/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */



/**
 * Custom blocks
 */
//% weight=10 color=#0fbc11 icon="\uf4c9"
namespace smarthomekit {
    
    /** 
    * TODO: get noise(dB)
    * @param noisepin describe parameter here, eg: AnalogPin.P4
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
