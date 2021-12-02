const axios = require("axios").default;

async function doSomething(text) {
  const endpoint = "https://www.toptal.com/developers/hastebin/documents";
  const resp = await (await axios.post(endpoint, text)).data;
  let key = resp.key;
  return key;
}


module.exports.endpoint = doSomething