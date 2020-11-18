const Scene = require('telegraf/scenes/base')
const Markup = require('telegraf/markup')
const mainMenuScene = new Scene('mainMenuScene')
const Extra = require('telegraf/extra')

mainMenuScene.enter((ctx) => {
  return ctx.reply('Choose your option below or type cancel to quit ', Markup
  .keyboard([
    ['Book Now'],
    // ['Past Booking'],
    ['cancel']

  ])
  .oneTime()
  .resize()
  .extra())
})

mainMenuScene.hears('Book Now' , ctx =>  ctx.scene.enter('bookingSceneStepOne'))
mainMenuScene.hears('Past Session' , ctx => ctx.scene.enter('pastBookingScene'))
// mainMenuScene.hears('Panick Button' , ctx => ctx.scene.enter('panickButtonScene'))



module.exports = mainMenuScene