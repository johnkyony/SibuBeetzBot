const Scene = require('telegraf/scenes/base')
const Markup = require('telegraf/markup')
const bookingSceneStepOne = new Scene('bookingSceneStepOne')
const Extra = require('telegraf/extra')

bookingSceneStepOne.enter((ctx) => {
    console.log('sceneone')
    return ctx.reply('Choose your option below or type cancel to quit ', Markup
    .keyboard([
      ['Today'],
      ['Tomorrow'],
      ['Next Week']
  
    ])
    .oneTime()
    .resize()
    .extra())
 
  
})

bookingSceneStepOne.hears('Today' , ctx => ctx.scene.enter('bookingSceneStepTwo'))
bookingSceneStepOne.hears('Tomorrow' , ctx => ctx.scene.enter('bookingSceneStepTwo'))
bookingSceneStepOne.hears('Next Week' , ctx => ctx.scene.enter('bookingSceneStepTwo'))


module.exports = bookingSceneStepOne 