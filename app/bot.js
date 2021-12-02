const { Telegraf } = require("telegraf");
require("dotenv").config();

const bot = new Telegraf(process.env.TG_BOT_TOKEN);

exports.default = bot;
