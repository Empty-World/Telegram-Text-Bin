const { Composer } = require("telegraf");
const { Markup } = require("telegraf");
const bin = require("../utils/bin").endpoint;

exports.onText = Composer.on("text", async (msg) => {
  let TEXT = msg.message.text;
  let key = await bin(TEXT);
  let RAW_URL = `https://www.toptal.com/developers/hastebin/raw/${key}`;
  let BIN_URL = `https://www.toptal.com/developers/hastebin/${key}`;
  await msg.reply(
    TEXT,
    Markup.inlineKeyboard([
      Markup.button.url("RAW URL 📝", RAW_URL),
      Markup.button.url("BIN URL 🗑", BIN_URL),
    ])
  );
});
