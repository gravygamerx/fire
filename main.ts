controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    water = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . . 8 9 9 9 9 9 9 8 . . . . 
        . . . . 8 9 6 6 6 6 9 8 . . . . 
        . . . . 8 9 6 8 8 6 9 8 . . . . 
        . . . . 8 9 6 8 8 6 9 8 . . . . 
        . . . . 8 9 6 6 6 6 9 8 . . . . 
        . . . . 8 9 9 9 9 9 9 8 . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, extinguisher, 50, 0)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy()
    water.startEffect(effects.spray)
    fire.startEffect(effects.fire)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy()
})
let fire: Sprite = null
let water: Sprite = null
let extinguisher: Sprite = null
extinguisher = sprites.create(img`
    ....................
    ....................
    ......fffffff.......
    .1....fffffff.......
    ......fff...........
    ....22222222........
    ....22222222........
    ....11111111........
    ....11111111........
    ....22222222........
    ....22222222........
    ....11111111........
    ....11111111........
    ....22222222........
    ....22222222........
    ....22222222........
    ....................
    ....................
    ....................
    ....................
    `, SpriteKind.Player)
scene.setBackgroundColor(12)
extinguisher.setPosition(14, 59)
controller.moveSprite(extinguisher)
info.setLife(3)
game.onUpdateInterval(2000, function () {
    // on every 2 seconds create fire
    fire = sprites.create(img`
        . . . . . . 4 4 4 4 4 4 . . . . 
        . . . . 4 4 4 4 4 4 4 4 4 . . . 
        . . . 4 4 4 5 5 5 2 2 2 2 2 . . 
        . . . 4 5 5 5 5 5 2 2 2 2 4 4 . 
        . . . 4 5 5 5 5 5 2 2 2 2 4 4 . 
        . . . 4 5 5 5 5 2 2 2 2 2 4 4 . 
        . . . 4 5 5 5 5 5 2 2 2 2 4 2 4 
        . . . 4 5 5 5 5 5 2 2 2 2 2 2 4 
        . . . 4 4 5 5 5 5 2 2 2 2 2 4 . 
        . . . 4 4 4 4 4 4 4 4 4 4 4 . . 
        . . . . 4 4 4 4 4 4 4 4 4 . . . 
        . . . . . 4 4 4 4 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    fire.setPosition(160, randint(0, 120))
    fire.setVelocity(-50, 0)
})
