let sprite = game.createSprite(0, randint(1, 5))
let enemy = game.createSprite(randint(1, 4), randint(1, 4))
basic.forever(function () {
    while (input.buttonIsPressed(Button.AB)) {
        sprite.move(1)
        basic.pause(200)
    }
    while (input.logoIsPressed()) {
        sprite.move(-1)
        basic.pause(200)
    }
    while (input.buttonIsPressed(Button.A)) {
        sprite.change(LedSpriteProperty.Y, -1)
        basic.pause(200)
    }
    while (input.buttonIsPressed(Button.B)) {
        sprite.change(LedSpriteProperty.Y, 1)
        basic.pause(200)
    }
    if (sprite.isTouching(enemy)) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.showIcon(IconNames.Happy)
        basic.clearScreen()
        sprite.delete()
        enemy.delete()
    }
})
