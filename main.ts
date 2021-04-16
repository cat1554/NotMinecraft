namespace SpriteKind {
    export const outline = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(mySprite.tileKindAt(TileDirection.Bottom, assets.tile`transparency16`))) {
        mySprite.vy = -60
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    textSprite = textsprite.create("「NOT MINECRAFT」", 15, 1)
    textSprite.setPosition(mySprite.x - 0, mySprite.y - 48)
    textSprite = textsprite.create("By cat1554", 15, 1)
    textSprite.setPosition(mySprite.x - 0, mySprite.y - 36)
    textSprite = textsprite.create("cat1554, 2021", 15, 1)
    textSprite.setPosition(mySprite.x - 0, mySprite.y - 24)
    textSprite = textsprite.create("MORE AT:", 15, 1)
    textSprite.setPosition(mySprite.x - 0, mySprite.y + 24)
    textSprite = textsprite.create("totallylegitwebsite.online", 15, 1)
    textSprite.setPosition(mySprite.x - 0, mySprite.y + 36)
    textSprite = textsprite.create("/game.html", 15, 1)
    textSprite.setPosition(mySprite.x - 0, mySprite.y + 48)
    info.changeLifeBy(-1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(mySprite2.tileKindAt(TileDirection.Center, assets.tile`mizu`))) {
        tiles.setTileAt(tiles.getTileLocation(Math.round(mySprite2.x / 16) - 1, Math.round(mySprite2.y / 16) - 1), assets.tile`mizu`)
        tiles.setWallAt(tiles.getTileLocation(Math.round(mySprite2.x / 16) - 1, Math.round(mySprite2.y / 16) - 1), false)
    } else {
        tiles.setTileAt(tiles.getTileLocation(Math.round(mySprite2.x / 16) - 1, Math.round(mySprite2.y / 16) - 1), assets.tile`d`)
        tiles.setWallAt(tiles.getTileLocation(Math.round(mySprite2.x / 16) - 1, Math.round(mySprite2.y / 16) - 1), true)
    }
})
info.onLifeZero(function () {
    if (before == 0) {
        color.startFade(color.originalPalette, color.GrayScale, 500)
        before = 1
    }
    textSprite = textsprite.create("F")
    textSprite.setOutline(1, 2)
    textSprite.setPosition(mySprite.x - 0, mySprite.y - 32)
    textSprite = textsprite.create("Exist again", 15, 1)
    textSprite.setPosition(mySprite.x - 0, mySprite.y + 24)
    textSprite = textsprite.create("   Don't   ", 15, 1)
    textSprite.setPosition(mySprite.x - 0, mySprite.y + 48)
})
let textSprite: TextSprite = null
let before = 0
let mySprite2: Sprite = null
let mySprite: Sprite = null
let i = 0
let list: tiles.Location[] = []
let facingDir = 1
scene.setBackgroundColor(9)
info.setLife(20)
info.setScore(20)
tiles.setTilemap(tilemap`level1`)
if (false) {
    list = tiles.getTilesByType(assets.tile`s`)
    i = 1
    for (let index = 0; index < list.length; index++) {
        tiles.setWallAt(list[i], true)
        i += 1
    }
    list = tiles.getTilesByType(assets.tile`d`)
    i = 1
    for (let index = 0; index < list.length; index++) {
        tiles.setWallAt(list[i], true)
        i += 1
    }
    list = tiles.getTilesByType(assets.tile`g`)
    i = 1
    for (let index = 0; index < list.length; index++) {
        tiles.setWallAt(list[i], true)
        i += 1
    }
    list = tiles.getTilesByType(assets.tile`transparency16`)
    i = 1
    for (let index = 0; index < list.length; index++) {
        tiles.setWallAt(list[i], false)
        i += 1
    }
} else {
	
}
mySprite = sprites.create(assets.tile`char_r`, SpriteKind.Player)
mySprite2 = sprites.create(assets.tile`outline`, SpriteKind.outline)
scene.cameraFollowSprite(mySprite)
before = 0
animation.runImageAnimation(
mySprite2,
assets.animation`outlinePulse`,
200,
true
)
game.onUpdateInterval(50, function () {
    mySprite.vy += 5
    if (controller.left.isPressed()) {
        mySprite.vx = -80
        facingDir = -1
    } else if (controller.right.isPressed()) {
        mySprite.vx = 80
        facingDir = 1
    } else if (controller.down.isPressed()) {
        facingDir = 0
    } else {
        mySprite.vx = 0
    }
    if (facingDir == 1) {
        mySprite2.setPosition(Math.round((mySprite.x + 10) / 16) * 16 + 8, Math.round((mySprite.y - 10) / 16) * 16 + 8)
        mySprite.setImage(assets.tile`char_r`)
    } else if (facingDir == -1) {
        mySprite2.setPosition(Math.round((mySprite.x - 10) / 16) * 16 - 8, Math.round((mySprite.y - 10) / 16) * 16 + 8)
        mySprite.setImage(assets.tile`char_l`)
    } else if (facingDir == 0) {
        mySprite2.setPosition(Math.round((mySprite.x - 10) / 16) * 16 + 8, Math.round((mySprite.y - 10) / 16) * 16 + 24)
    }
})
