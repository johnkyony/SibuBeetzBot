const Telegraf = require('telegraf')
const axios = require('axios')
const telegramTypings = require("telegram-typings")

const Markup = require("telegraf/markup")
const session = require('telegraf/session')
const Stage = require('telegraf/stage')
const scene = require('telegraf/scenes/base')

const { leave } = Stage

const mainRegistrationScene = require('./scenes/mainRegistrationScene')
const mainMenuScene = require('./scenes/mainMenuScene')
const bookingSceneStepOne = require('./scenes/bookingSceneStepOne')
const bookingSceneStepTwo = require('./scenes/bookingSceneStepTwo')
const pastBookingScene = require('./scenes/pastBookingScene')
const sendMessageScene = require('./scenes/sendMessageScene')

const bot = new Telegraf("1401781294:AAHqEtKbzOKPBV3fs9Ei-otj_lZXFhvSzrI")

//create scene manager 
const stage = new Stage()
stage.command('cancel' , leave())

//scene registration 
stage.register(mainRegistrationScene)
stage.register(mainMenuScene)
stage.register(bookingSceneStepOne)
stage.register(bookingSceneStepTwo)
// stage.register(pastBookingScene)
// stage.register(sendMessageScene)

bot.use(session())
bot.use(stage.middleware())

//initiating the bot
bot.start(function(ctx) {
    ctx.reply("Hi I am sibuBeetz boot \n type 'Hi' or 'Hello' to get started or 'Cancel' to quit")

})

bot.hears([/hello(there)?/i , /hey(there)?/i , /hi(there)?/i] , function(ctx) {
    ctx.reply("Hey there \t " + ctx.update.message.chat.first_name)
    ctx.scene.enter('mainRegistrationScene')
} )


bot.startPolling()