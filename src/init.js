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
                //y: 500
            }
        }
    }
}

var game = new Phaser.Game(config)

function preload() {
    this.load.image("bird", "./assets/bird.png")
}

function create() {
    this.bird = this.physics.add.image(100, 50, "bird")

    // this.input.keyboard.on("keydown_RIGHT", () => {
    //     this.bird.setAcceleration(100, 0)
    // })

    // this.input.keyboard.on("keyup_RIGHT", () => {
    //     this.bird.setAcceleration(0, 0)
    //     this.bird.setVelocity(0)
    // })

    //this.cursor = this.input.keyboard.createCursorKeys()

    this.right = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
    this.left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
}

function update() {
    //this.cursor.right.isDown
    if (this.right.isDown) {
        this.bird.x++
        this.bird.flipX = false
    } else if (this.left.isDown) {
        this.bird.x--
        this.bird.flipX = true
    }
}