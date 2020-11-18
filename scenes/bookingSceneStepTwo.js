const Scene = require('telegraf/scenes/base')
const Markup = require('telegraf/markup')
const bookingSceneStepTwo = new Scene('bookingSceneStepTwo')
const Extra = require('telegraf/extra')


bookingSceneStepTwo.enter((ctx) => {
    ctx.reply('please share your current location ' , Extra.markup((markup) => {
        return markup.resize()
        .keyboard([
          markup.locationRequestButton('Share your Location')
        ])
        .oneTime()
      }))
})

bookingSceneStepTwo.on('location' , (ctx) => {
    ctx.reply('Thank you for booking Sibu shall give you a call to confirm the booking')
    ctx.scene.enter('mainMenuScene')
})

bookingSceneStepTwo.hears('menu' , ctx => ctx.scene.enter('mainMenuScene'))
bookingSceneStepTwo.hears('Back' , ctx => ctx.scene.enter('mainMenuScene'))

module.exports = bookingSceneStepTwo