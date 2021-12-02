const bot = require("../bot").default;
const { Composer } = require("telegraf");
const onStart = require("./command").onStart


exports.command = async () =>{
    bot.use(Composer.privateChat(onStart))
}


