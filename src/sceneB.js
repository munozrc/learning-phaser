class SceneB extends Phaser.Scene {

    constructor() {
        super({
            key: "SceneB",
            active: true
        })
    }

    preload() {

    }

    create() {
        let graphics = this.add.graphics()

        graphics.fillStyle(0xff3399, 1)

        graphics.fillRect(100, 200, 600, 300)
        graphics.fillRect(200, 100, 100, 100)

        this.add.text(220, 105, "B", { font: "96px Courier", fill: "#000000"})
    }

    update(time, delta) {

    }
}