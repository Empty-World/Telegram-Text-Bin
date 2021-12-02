const bot = require("./app/bot").default;
const command = require("./app/commands").command;
const onText = require("./app/plugins").plugins;

(async () => {
  await onText();
  await command();
  await bot.launch().catch((error) => console.log(error));
})();
