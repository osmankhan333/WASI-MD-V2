//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923424847957@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923424847957,923424847957";
global.owner = process.env.OWNER_NUMBER || "923424847957";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://wasimdscanner-68feefafb737.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUlIdWNEcDFRTkNoY29PaHVYWXJpSzF5eHRkdkZEa3M1czZMTVR5YzJGdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUNQL3Q3M2JQNndobW5aaWxreUoxZTJ3MzFkNWVObXlzbjJ4SHFGWldEUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtRHdIZVIrVENvTXhEaFM4Z1ZVRzdiNDk5VnZUc1lFeFBNY3NUNWw1OGw4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjV291S0ZXOERpNEJYL1VmTGp4M1ZudU9YQ3JYOUgrbHd5eHpuMTJNR0cwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNDSnZ3UElnV1VFcmx3VzF0UzhDV01Tc0FpK0pCUWo5ZTg5OFZVYWtQMkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZLakE5bE1oK25FUGFDNDJFbVphcGhFbjNOc1FnTEEwVElSN2Z3Q1dZM289In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUw2WWhMYnliLzA0MWo5azdWeUVjY0UvWUlaSkVNeFVqc0krQ0hDdnQyTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMnlwY0JxWmFlWHdDSEVuL2sra2pUYUtPNUUvUGtQUkZxdS9rY1BWNitUZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktFS3N2SGNNeEtTYTF3c29YdXo3V2Ntc0NMcFBEYzQ4QmNsTTRVd1REY0lCd3lIQzBVLzhOZUZackpjMFdyUVlRSkVNR0VTSERwbDRMQ05BbFM4eUJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NCwiYWR2U2VjcmV0S2V5IjoiYjRMNTV1ZkNRNTRHWDE5dHBuRVIrTjZsWlhXaHhhU3RPVWFwV2pSNkp2Yz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjM0MjQ4NDc5NTdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRDlENzJEQTlBMDdBQjYzNjc4M0JDQkI4NzAzQUM1RjgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxODM5Mzg1N30seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzNDI0ODQ3OTU3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjM2RjQzNTc0OTY5MDA1MTQwOURDMEMwNjc3Q0Q3REE1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTgzOTM4NTd9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzQyNDg0Nzk1N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIyOEJFRjdFNDRBMUUyQjFEODhENTYyQjJEODc2RERFMiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE4MzkzODYwfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjM0MjQ4NDc5NTdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQ0Y3MUE4QzUzMUJCRkUzOTVDOTAxNEM4MzI1NzI0Q0MifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxODM5Mzg2MH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiRGwwdW1jVWZUTktsLWw4TndBUUR0dyIsInBob25lSWQiOiIxNjY0M2MwZC0xZjM0LTQ2NDItOWUyNC1kMjBjNTA5MTNmZmEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTm51NXdrVytEZTl4b2NDRHprSWlybTVNUm9NPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRZQ1htdlhCb1pzaXdCL09RakI4MFNXaDFEZz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiIzRkxMRVgzSyIsIm1lIjp7ImlkIjoiOTIzNDI0ODQ3OTU3OjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiU2lsZW50IEtpbmcifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ051Vjkrb0VFUE8zc3JNR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjUxYnJDK2FsVXZvbVh0L3ZPSzZ5UnBCWGQyU24xNDRocTdpb01SVm1QeE09IiwiYWNjb3VudFNpZ25hdHVyZSI6IkRoMGNwV01SeEdRNnZFN2NrTkt1bkg1dHNqeDBBNnkrRnR4enNkOExIMkhhTERqMjFkS1M1U2F5MzdwNm5lOGo3N1lOSTlRL3RNVUh3Rm50cG9MeER3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJJc1NqcytjV2tJaUtSQ0lCZzFmTVhIT3ZORStwbGIzR3dLVmlDNDVuOTJ1YUtkdDNkV1hGcVhqcEprMXZ4NlhwK2lBREFWOHJQTFFtd1pqd0R0ZVJEZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzQyNDg0Nzk1NzoxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVkVzZ3dm1wVkw2Smw3Zjd6aXVza2FRVjNka3A5ZU9JYXU0cURFVlpqOFQifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTgzOTM4NTUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSWoxIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923424847957",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
