namespace SpriteKind {
    export const coin = SpriteKind.create()
    export const flower = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.melt)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    courent_levl += 1
    startlevel()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (skully_booo.vy == 0) {
        skully_booo.vy = -175
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.flower, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    bee = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    bee,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . f 1 1 1 f 1 1 1 f . . . 
        . . . . f 1 1 1 1 1 1 1 f . . . 
        . . . . . . 1 1 f 1 1 . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . f 5 5 5 f 5 5 5 f . . . 
        . . . . f f 5 5 f 5 5 f f . . . 
        . . . . f 5 5 5 f 5 5 5 f . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . f 5 5 5 f 5 5 5 f . . . 
        . . . . f f 5 5 f 5 5 f f . . . 
        . . . . f 5 5 5 f 5 5 5 f . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    bee.setPosition(skully_booo.x + 80, skully_booo.y - 80)
    bee.follow(skully_booo)
})
function startlevel () {
    if (courent_levl == 0) {
        tiles.setCurrentTilemap(tilemap`level1`)
    } else {
        tiles.setCurrentTilemap(tilemap`level2`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile7`)) {
        tiles.placeOnRandomTile(skully_booo, assets.tile`myTile7`)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    skully_booo.ay = 350
    scene.cameraFollowSprite(skully_booo)
    info.setLife(5)
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        sprites.destroy(value)
    }
    for (let value of sprites.allOfKind(SpriteKind.coin)) {
        sprites.destroy(value)
    }
    for (let value of sprites.allOfKind(SpriteKind.flower)) {
        sprites.destroy(value)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
        coin = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . . f 5 5 5 f 5 5 5 f . . . . 
            . . . f 5 5 5 f 5 5 5 f . . . . 
            . . . f 5 5 5 f 5 5 5 f . . . . 
            . . . f 5 5 5 f 5 5 5 f . . . . 
            . . . f 5 5 5 f 5 5 5 f . . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.coin)
        animation.runImageAnimation(
        coin,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . f 5 4 5 f 5 5 5 5 5 f . . . 
            . f 5 4 5 5 f 5 5 5 5 5 5 f . . 
            . f 5 4 5 5 f 5 5 5 5 5 5 f . . 
            . f 5 4 5 5 f f 5 5 5 5 5 f . . 
            . f 5 4 5 5 5 f 5 5 5 5 5 f . . 
            . f 5 4 5 5 5 f 5 5 5 5 5 f . . 
            . f 5 5 5 5 5 f 5 5 5 5 5 f . . 
            . f 5 5 5 4 5 f 5 5 5 5 5 f . . 
            . . f 5 5 5 5 5 5 5 5 5 f . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . f 5 5 5 5 5 f . . . . . 
            . . . f 5 4 5 f 5 5 5 f . . . . 
            . . f 5 4 5 5 f 5 5 5 5 f . . . 
            . . f 5 4 5 5 f 5 5 5 5 f . . . 
            . . f 5 4 5 5 f 5 5 5 5 f . . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . f 5 5 5 5 5 5 5 5 5 f . . . 
            . . f 5 5 5 4 5 5 5 5 5 f . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . . . f 5 5 5 5 5 f . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . . . f 5 5 5 5 5 f . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 5 5 5 5 f . . . . . 
            . . . . f 5 5 5 5 5 f . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 5 5 5 5 f . . . . . 
            . . . . f 5 5 5 5 5 f . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . . . f 5 5 5 5 5 f . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . f 5 5 5 5 5 f . . . . . 
            . . . f 5 4 5 f 5 5 5 f . . . . 
            . . f 5 4 5 5 f 5 5 5 5 f . . . 
            . . f 5 4 5 5 f 5 5 5 5 f . . . 
            . . f 5 4 5 5 f 5 5 5 5 f . . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . f 5 5 5 5 5 5 5 5 5 f . . . 
            . . f 5 5 5 4 5 5 5 5 5 f . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . . . f 5 5 5 5 5 f . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
        tiles.placeOnTile(coin, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile6`)) {
        flower = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . . 2 5 5 5 2 . . . . . . 
            . . . . . 2 5 5 5 2 . . . . . . 
            . . . . . 2 2 7 2 2 . . . . . . 
            . . . 7 7 . . 7 . . 7 7 7 . . . 
            . . . 7 7 7 . 7 . 7 7 7 7 . . . 
            . . . . 7 7 7 7 7 7 7 7 . . . . 
            . . . . . 7 7 7 7 7 7 . . . . . 
            . . . . . 7 7 7 7 7 . . . . . . 
            . . . . . . . 7 . . . . . . . . 
            `, SpriteKind.flower)
        tiles.placeOnTile(flower, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    if (skully_booo.y < otherSprite.y) {
        info.changeScoreBy(3)
    } else {
        info.changeLifeBy(-1)
    }
})
let flower: Sprite = null
let coin: Sprite = null
let bee: Sprite = null
let skully_booo: Sprite = null
let courent_levl = 0
scene.setBackgroundColor(9)
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999991119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999911111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999991111111111999999999999999999999999999999999999999999999999999999999999999999111119999999999999999999999999999999999999999999999999999999999999999999999999
    9999991111111111999999999999999999999999999999999999999999999999999999999991199999111119999999911111119999999999999999999999999999999999999999999999999999999999
    9999911111111111999999999999999999999999999999999999999999999999999999999911119991111111999911111111119999999999999999999999999999999999999999999999999999999999
    9999911111111119999999911999999999999999999999999999999999999999999999111111111911111111999111111111119999999999999999999999999999999999999999999999999999999999
    9999911111111111111111111999999999999999999999999999999999999999999911111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999
    9999911111111111111111111199999999999999999999999999999999999999999911111111111111111111111111111111111999999999999999999999999999999999999999999999999999999999
    9999991111111111111111111119999999999999999999999999999999999999999111111111111111111111111111111111111999999999999999999999999999999999999999999999999999999999
    9999991111111111111111111119999999999999999999999999999999999999999111111111111111111111111111111111111999999999999999999999999999999999999999999999999999999999
    9999999111111111111111111119999999999999999999999999999999999999991111111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999
    9999999991111111111111111119999999999999999999999999999999999999991111111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999
    9999999999911111999999999999999999999999999999999999999999999999991111111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111199999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111119999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999bbbb999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999bbcbbb9999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999bbbcbbbb99999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999bcbbbbbbbb999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999bccbbbbbcbbbbbbbbbbbb9999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999bcccbbbbbcccccccccccb9999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999bcccbbbbbcccccccccccbb999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999bccccbbbbbcccccccccccb999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999bbb999999999999999999999999999999999999bccccbbbbbbcccccccccccbb9999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999bb9bbbb99999999999999999999999999999999999bccccbbbbbbbcccccccccccb9999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999bbbbbbbccbbbbb99999999999999999999999999999999999bcccccbbbbbbbcccccccccccb999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999bcccccccbbbbbb99999999999999999999999999999999999bcccccbbbbbbbbccccccccccbb99999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999bcccccccbbbbbbb999999999999999999999999999999999999bccccbbbbbbbbcccccccccccb99999999999999
    999999999999999999999999999999999999999999999999999999999999999999999bbccccccbbbbbbbb999999999999999999999999999999999999bccccbbbbbbbbbcccccccccccb9999999999999
    9999999999999999999999999999999999999999999999999999999999999999999bbbccccccbbbbbbbbb999999999999999999999999999999999999bcccccbbbbbbbbcccccccccccbb999999999999
    999999999999999999999999999999999999999999999999999999999999999999bbcccccccbbbbbbbbcb999999999999999999999999999999999999bbccccbbbbbbbbbcccccccccccb999999999999
    99999999999999bbb99999999999999999999999999999999999999999999999bbbccccccbbbbbbbbbbcb9999999999999999999999999999999999999bccccbbbbbbbbbbccccccccccbb99999999999
    9999999999999bbbbb999999999999999999999999999999999999999999999bbcccccccbbbbbbbbbbbcb9999999999999999999999999999999999999bbcccbbbbbbbbbbcccccccccccbb9999999999
    99999999999b9bbbcb9999999999999999999999999999999999999999999bbbcccccccbbbbbbbbbbbccb99999999999999999999999999999999999999bccccbbbbbbbbbbcccccccccccb9999999999
    99999999999b9bbbcb999999999999999999999999999999999999999999bbcccccccccbbbbbbbbbbbccb99999999999999999999999999999999999999bccccbbbbbbbbbbbccccccccccbb999999999
    9999999999bbbbbbcbb9999999999999999999999999999999999999999bbccccccccbbbbbbbbbbbbbccbb9999999999999999999999999999999999999bbcccbbbbbbbbbbbcccccccccccbb99999999
    999999999bbcbbbbccb999999999999999999999999999999999999999bbcccccccbbbbbbbbbbbbbbbcccb99999999999999999999999999999999999999bbccbbbbbbbbbbbbcccccccccccbb9999999
    99999999bbccbbbbccbb999999999999999999999999999999999999bbccccccccbbbbbbbbbbbbbbbccccb99999999999999999999999999999999bb99999bccbbbbbbbbbbbbccccccccccccbb999999
    99999999bcccbbbbcccb99999999999999999999999999999999999bbcccccccbbbbbbbbbbbbbbbbbcccccb9999999999999999999999999999bbbb999999bbcbbbbbbbbbbbbbccccccccccccbb99999
    9999999bbcccbbbbcccb999999999999999999999999999999999bbbcccccccbbbbbbbbbbbbbbbbbbcccccb999999999999999999999999999bb.bbb999999bcbbbbbbbbbbbbbcccccccccccccbb9999
    999999bbcccbbbbbcccb99999999999999999999999999999999bbccccccccbbbbbbbbbbbbbbbbbbcccccccb9999999999999999999999999bbbbbcbb99999bcbbbbbbbbbbbbbccccccccccccccbb999
    999999bccccbbbbbbcccb9999999999999999999999999999999bccccccccbbbbbbbbbbbbbbbbbbbcccccccb999999999999999999999999bbbbbcccbb9999bbbbbbbbbbbbbbbcccccccccccccccbb99
    99999bbccccbbbbbbcccb999999999999999999999999999999bcccccccbbbbbbbbbbbbbbbbbbbbbccccccccb999999999999999999999bbbbbbbccccbb9999bbbbbbbbbbbbbbccccccccccccccccbb9
    99999bccccbbbbbbbcccb99999999999999999999999999999bcccccccbbbbbbbbbbbbbbbbbbbbbbccccccccbb999999999999999999bbbbbbbbccccccbbbb99bbbbbbbbbbbbbcccccccccccccccccbb
    9999bbccccbbbbbbbbcccb999999999999999999999999999bbccccccbbbbbbbbbbbbbbbbbbbbbbccccccccccbb99999999999999999bbbbbbbccccccccccbbbbbbbbbbbbbbbbccccccccccccccccccb
    999bbcccccbbbbbbbbcccb99999999999999999999999999bccccccbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccbb999999999999999bbbbbbbbcccccccccccccbbbbbbbbbbbbbccccccccccccccccccc
    99bbccccccbbbbbbbbbcccb999999999999999999999999bccccccbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccbb9999999999999bbbbbbbbccccccccccccccbbbbbbbbbbbbbcccccccccccccccccbb
    9bbccccccbbbbbbbbbbbccb99999999999999999999999bbccccccbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccbb999999999999bbbbbbbbccccccccccccccbbbbbbbbbbbbbccccccccccccccccbbb
    9bcccccccbbbbbbbbbbbccbb999999999999999999999bbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccbbb9999999b9bbbbbbbbbcccccccccccccccbbbbbbbbbbbbcccccccccccccccbbbb
    bbcccccccbbbbbbbbbbbbccbb99999999999999999999bccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccbbbb9bbbb9bbbbbbbbbcccccccccccccccbbbbbbbbbbbbccccccccccccccbbbbb
    bcccccccbbbbbbbbbbbbbcccb999999999999999999bbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbcccbbbbbbbbbbcccccccccccccccbbbbbbbbbbbbcccccccccccccbbbbbb
    bcccccccbbbbbbbbbbbbbbccbb9999999999999999bbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccbbbbbbbbbbbcccccccccccccccbbbbbbbbbbbbbccccccccccccbbbbbb
    bccccccbbbbbbbbbbbbbbbbcccb999999999999999bccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccbbbbbbbbbbbcccccccccccccccbbbbbbbbbbbbbcccccccccccbbbbbbb
    bccccccbbbbbbbbbbbbbbbbcccb9999999999999bbccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbccccccccccccccbbbbbbbbbbbbbbcccccccccccbbbbbbb
    bcccccbbbbbbbbbbbbbbbbbbcccb99999999999bbccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbccccccccccccccbbbbbbbbbbbbbbccccccccccbbbbbbbb
    bccccbbbbbbbbbbbbbbbbbbbbcccbb999999999bcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccbbbbbbbbbbbbbbbcccccccccccccbbbbbbbbbbbbbbccccccccccbbbbbbbb
    bccccbbbbbbbbbbbbbbbbbbbbccccb99999999bcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccbbbbbbbbbbbbbbbbbcccccccccccbbbbbbbbbbbbbbbcccccccccbbbbbbbbb
    bcccbbbbbbbbbbbbbbbbbbbbbbccccb999999bbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbcccccccccbbbbbbbbb
    bccbbbbbbbbbbbbbbbbbbbbbbbbcccbb9999bccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbbbccccccccbbbbbbbbbb
    bcbbbbbbbbbbbbbbbbbbbbbbbbbbcccb999bccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbccccccbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccb9bccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbcccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.bccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.bcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    `)
courent_levl = 1
skully_booo = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......fd1111111f.......
    ......fdd1111111df......
    ......fddd111111df......
    ......fdddddd111df......
    ......fbddddbfd1df......
    ......fcbbbdcfddbf......
    .......fcbb11111f.......
    ........fffff1b1f.......
    ........fb111cfbf.......
    ........ffb1b1ff........
    ......f.fffbfbf.........
    ......ffffffff..........
    .......fffff............
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
controller.moveSprite(skully_booo, 100, 0)
startlevel()
game.onUpdate(function () {
    skully_booo.setImage(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......fd1111111f.......
        ......fdd1111111df......
        ......fddd111111df......
        ......fdddddd111df......
        ......fbddddbfd1df......
        ......fcbbbdcfddbf......
        .......fcbb11111f.......
        ........fffff1b1f.......
        ........fb111cfbf.......
        ........ffb1b1ff........
        ......f.fffbfbf.........
        ......ffffffff..........
        .......fffff............
        ........................
        ........................
        ........................
        ........................
        `)
    if (skully_booo.vy < 0) {
        skully_booo.setImage(img`
            ........................
            ........................
            ........................
            ........................
            .........fffff..........
            .......ffb1111ff........
            ......fb1111111bf.......
            ......f111111111f.......
            .....ffff1111111df......
            ....fb111c1dd111df......
            ....ffb1b1fdcf11bf......
            .....ffbfbfb11111f......
            ......ffffcfdb1b1f......
            .......fcccfcfbfbf......
            ........ffffffffff......
            .........ffffff.........
            .........ffffff.........
            .....f..fffffff.........
            .....fffffffff..........
            ......fffffff...........
            ........................
            ........................
            ........................
            ........................
            `)
    } else if (skully_booo.vy > 0) {
        skully_booo.setImage(img`
            ........................
            ........................
            ........................
            ........................
            ..........fffff.........
            ........ff11111f........
            .......fb111111bf.......
            ......fbd1111111f.......
            ......fddd111111df......
            ......fdddd11111df......
            ......fddddddd11df......
            ......fddddddd111f......
            ......fddddddcf11f......
            .......fbdddb1111bf.....
            ........fffcfdb1b1f.....
            .......ffffffffbfbf.....
            ....ff.fffffffffff......
            .....ffffffff...........
            .....ffffffb1b1f........
            ......ffffffbfbf........
            ........................
            ........................
            ........................
            ........................
            `)
    } else {
    	
    }
    if (skully_booo.vx < 0) {
        skully_booo.image.flipX()
    }
})
