const config = {
    width: 800,
    height: 600,
    parent: "container",
    type: Phaser.AUTO,
    pixelArt: true,
    backgroundColor: "#222",
    scene: {
        preload,
        create
    }
}

new Phaser.Game(config)


function preload() {
    // this.load.spritesheet('evil_tomato', './assets/evil_tomato.png', { frameWidth: 16, frameHeight: 25})
    this.load.atlas('tomato_atlas', './assets/evil_tomato.png', './assets/evil_tomato.json')
    this.load.json('evil_tomato_anim', './assets/evil_tomato_anim.json')
}

function create() {
    this.tomato = this.add.sprite(125, 150,'tomato_atlas').setScale(4)
    this.dataAnim = this.cache.json.get('evil_tomato_anim')

    // this.anims.create({
    //     key: 'tomato_walk',
    //     frames: this.anims.generateFrameNumbers('evil_tomato', {
    //         //frames: [1, 2, 3, 4, 5, 6, 7, 8]
    //         start: 1,
    //         end: 8
    //     }),
    //     repeat: -1,
    //     frameRate: 10
    // })

    // this.anims.create({
    //     key: 'tomato_walk',
    //     frames: this.anims.generateFrameNames('evil_tomato', {
    //         //frames: [1, 2, 3, 4, 5, 6, 7, 8]
    //         prefix: 'evil_tomato_',
    //         suffix: '.png',
    //         start: 1,
    //         end: 8
    //     }),
    //     repeat: -1,
    //     frameRate: 10
    // })

    this.anims.fromJSON(this.dataAnim)

    this.tomato.anims.play('tomato_atlas_walk')
}
