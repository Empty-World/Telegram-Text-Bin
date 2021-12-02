const bot = require("../bot").default;
const onText = require("./tgText").onText;
const { Composer } = require("telegraf");

exports.plugins = async () => {
  bot.use(Composer.privateChat(onText));
};
