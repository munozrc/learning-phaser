import SceneA from './sceneA.js'
import SceneB from './sceneB.js'

const config = {
    width: 1000,
    height: 650,
    parent: "container",
    type: Phaser.AUTO,
    backgroundColor: "#392542",
    scene: [SceneA, SceneB]
}

new Phaser.Game(config)

