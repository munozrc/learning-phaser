const config = {
    width: 320*2,
    height: 180*2,
    parent: "container",
    type: Phaser.AUTO,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    physics: {
        default: "arcade",
        arcade: {
            gravity: {
                y: 500
            }
        }
    }
}

var game = new Phaser.Game(config)

function preload() {
    this.load.image("bird", "./assets/bird.png")
}

function create() {
    this.bird = this.physics.add.image(50, 100, "bird")
    this.bird.setScale(2)
    this.bird.flipX = false
    this.bird.setOrigin(0.5)
    // Physics
    this.bird.setCollideWorldBounds(true)
    this.bird.setBounce(0.3)
    //this.bird.setVelocity(50, 0)
    this.bird.setAcceleration(50,0)
}

function update() {

}