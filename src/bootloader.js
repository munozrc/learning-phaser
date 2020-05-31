class Bootloader extends Phaser.Scene {
    constructor() {
        super({
            key: "Bootloader"
        })
    }

    preload() {
        console.log("init Bootloader")
    }
}

export default Bootloader