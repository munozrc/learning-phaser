class SceneA extends Phaser.Scene {

    constructor() {
        super({
            key: "SceneA"
        })
    }

    preload() {

    }

    create() {
        let graphics = this.add.graphics()

        graphics.fillStyle(0xff3300, 1)

        graphics.fillRect(100, 200, 600, 300)
        graphics.fillRect(100, 100, 100, 100)

        this.add.text(120, 105, "A", { font: "96px Courier", fill: "#000000"})
    
        this.scene.add("SceneC", new SceneC)
        this.scene.start("SceneC")
    }

    update(time, delta) {

    }
}