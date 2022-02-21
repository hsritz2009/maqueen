input.onSound(DetectedSound.Loud, function () {
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    enciende = !(enciende)
    if (enciende) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 170)
    } else {
        basic.showIcon(IconNames.Ghost)
        maqueen.motorStop(maqueen.Motors.All)
    }
})
let enciende = false
basic.showString("hola gente")
input.setSoundThreshold(SoundThreshold.Loud, 190)
basic.forever(function () {
    music.playMelody("B D A F A E G C ", 120)
})
