let enemy1 = game.createSprite(randint(1, 4), randint(1, 4))
let spritee = game.createSprite(0, randint(1, 5))
basic.forever(function () {
    while (input.buttonIsPressed(Button.AB)) {
        spritee.move(1)
        basic.pause(250)
    }
    while (input.logoIsPressed()) {
        spritee.move(-1)
        basic.pause(250)
    }
    while (input.buttonIsPressed(Button.B)) {
        spritee.change(LedSpriteProperty.Y, 1)
        basic.pause(250)
    }
    while (input.buttonIsPressed(Button.A)) {
        spritee.change(LedSpriteProperty.Y, -1)
        basic.pause(250)
    }
    if (spritee.isTouching(enemy1)) {
        music.playTone(523, music.beat(BeatFraction.Whole))
        basic.showIcon(IconNames.Happy)
        basic.clearScreen()
        enemy1.delete()
        spritee.delete()
    }
})
