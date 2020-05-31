class Scene_play extends Phaser.Scene {

    constructor() {
        super({key: "Scene_play"})
    }

    create() {

        let center_width = this.sys.game.config.width/2
        let center_height = this.sys.game.config.height/2

        this.add.image(center_width, center_height,"separator")

        this.left = this.add.image(30, center_height, "left")
        this.right = this.add.image(this.sys.game.config.width - 30 , center_height, "right")
    
        this.ball = this.physics.add.image(center_width, center_height, "ball")

        // this.ball.setVelocityX(-180)
    }

}

export default Scene_play