const { Composer } = require("telegraf");

exports.onStart = Composer.command("start", async (msg) => {
  msg.reply("Hello!");
});
