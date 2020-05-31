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
    
        // Set Controllers
        // Right Pallete
        this.cursor = this.input.keyboard.createCursorKeys();
    
        // Left Pallete
        this.cursor_up = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
        this.cursor_down = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
    }

    update() {
        if (this.ball.x < 0 || this.ball.x > this.sys.game.config.width) {
            this.ball.setPosition(this.sys.game.config.width/2, this.sys.game.config.height/2)
        }

        // Update Pallete Controllers 
        // Right Pallete
        if (this.cursor.down.isDown) {
            this.right.body.setVelocityY(350)
        } else if (this.cursor.up.isDown){
            this.right.body.setVelocityY(-350)
        } else {
            this.right.body.setVelocityY(0)
        }
        // Left Pallete
        if (this.cursor_down.isDown) {
            this.left.body.setVelocityY(350)
        } else if (this.cursor_up.isDown){
            this.left.body.setVelocityY(-350)
        } else {
            this.left.body.setVelocityY(0)
        }
    }

    hitPallete() {
        this.ball.setVelocityY(Phaser.Math.Between(-120, 120))
    }

}

export default Scene_play