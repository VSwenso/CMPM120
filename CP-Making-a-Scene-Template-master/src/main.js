// Code Practice: Making a Scene
// Name: Tory Swenson
// Date: 1/17/23

"use strict"

let config = {
    type: Phaser.AUTO,
    render: {
        pixelArt: true
    },
    scene: [ MainMenu, Play ]
}

let game = new Phaser.Game(config)