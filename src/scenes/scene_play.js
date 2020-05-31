import Pallete from '../gameObjects/pallete.js'

class Scene_play extends Phaser.Scene {

    constructor() {
        super({key: "Scene_play"})
    }

    create() {

        let center_width = this.sys.game.config.width/2
        let center_height = this.sys.game.config.height/2

        this.add.image(center_width, center_height,"separator")

        // Set Palletes
        // this.left = this.add.image(30, center_height, "left")
        this.left = new Pallete(this, 30, center_height, "left")

        // this.right = this.add.image(this.sys.game.config.width - 30 , center_height, "right")
        this.right = new Pallete(this, this.sys.game.config.width - 30, center_height, "right")

        // Set Ball
        this.physics.world.setBoundsCollision(false, false, true, true)
        this.ball = this.physics.add.image(center_width, center_height, "ball")
        this.ball.setCollideWorldBounds(true)
        this.ball.setBounce(1)
        this.ball.setVelocityX(-180)

        // Set Physics
        this.physics.add.collider(this.ball, this.left, this.hitPallete, null, this)
        this.physics.add.collider(this.ball, this.right, this.hitPallete, null, this)
    }

    hitPallete() {

    }

}

export default Scene_play