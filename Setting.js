const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════,[Make sure you put all values in "" , '']\\
global.owner = process.env.OWNER_NUMBER || '923466319114' ; // Add Your Number without +
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Maher-Zubair:SIGMA-MD@zubi.9g6b16y.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp" ; // put mongodb key here
global.port=5000  ;
global.audio = '' ; 
global.video = '' ;
global.blockJids = process.env.BLOCK_JID ||'120363169665426586@g.us' ;
global.allowJids = process.env.ALLOW_JID ||'120363169665426586@g.us' ;
global.email = 'HELP_SIGMA-MD@outlook.com' ; 
global.github = 'https://github.com/Maher-Zubair/SIGMA-MD' ;
global.location = 'Lahore Pakistan' ;
global.timezone  = process.env.TIME_ZONE || 'Asia/Karachi' //add correct timezone or leave it same , otherwise you get erros
global.gurl = 'https://www.youtube.com/@InnoxentTech?sub_confirmation=1' ; 
global.sudo =  process.env.SUDO || "923466319114" ; // Do not change it
global.devs = "923466319114"; //Dont change it From here
global.mztit = process.env.MZTIT ||"🅼♥︎❚❚♥︎🆉", // add your title here
global.Gname = process.env.GNAME ||"sɪɢᴍᴀ ᴹᴰ-sᴜᴘᴘᴏʀᴛ",
global.zyt = process.env.ZYT || 'https://www.youtube.com/@InnoxentTech?sub_confirmation=1',
global.waUrl = process.env.WAURL ||"https://chat.whatsapp.com/CmY0THcJCUYEGxLJulhcRV",
global.website = 'http://lnkiy.in/SIGMA-MD-WEB' ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/03e49e6e2057568db8926.jpg' ;
module.exports = {
  sessionName: process.env.SESSION_ID || 'SLG-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEtVK25jU2tTZTVKbHV1TWdjcmNkL25QYmE4UHlpRDFLbXpHM1RsdXlGWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUt1N01ucmNrRURjV0hHR1grdFZiaVFYVHp1cEc1bkJsMHlPNmNmU3FoTT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZQ2RJdENlQ3FTWW83cXA1WXp0eVBqcmM0cnRqcERIZ0lZTmJYb1pidTBzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCOXpaYy8yVkFHUEZIamZRT3c4QmhEVTVzZ0RlRzVlNk0zNXpZREZHRjBzPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1MMHY3VTRxMVBXM3dWeGhNS3JTa0RyQm80UWordXMrbjFpbmgvOWNHVU09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlN5cmhpYzIydzZGWTFNTW9QMTBtMWlMUVlMaVg3dnVicjNIcW5tK3hxazQ9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqcVNUeFNUUFhtM2lmVkRDaGNmTlBUMEVxbHBRRENkdUswNC9Kck14ekpXazR4SzFtNE1mTTRHZEhpYUx1NlozUGxDREwyTDBJTTBSVzZhYmhJZFdqdz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjgyLCJhZHZTZWNyZXRLZXkiOiJrTnJkc0dLS0dCL1dkK0xZUldxalRUbUJ1MGVCZ2J4U3lBeGM3cnRkeGhNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJXQ2lrb1VUSlJDbUtJakRMTDhRalV3IiwicGhvbmVJZCI6IjQxMWE2NTE3LTMwOTMtNGNkNS05NTE1LTVmYTUzNDIwYzhjYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqODFTMm1NUWtRUnNocEVzb3lNRUMzQUV3QjA9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9IYnU5cUNuQm0wVm5SWVd1MzhzSTc5bVpZQT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0luaGcvc0dFT0tPLzdRR0dCb2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im95Mm9CeGE5Zlp1VU43ZG45Y3pNTGxIL0RZWnZNWnhFSno0RGhuTHJjbVk9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ikt2V1ZpTG5teUg0a2pwZlMyTUdmMWc3aEJCdWFCVmxrUWxLRFhqb2g1YWc4RWM2SWpvaTRYYzJGaFIxZmx3dDBrWkFrb0o2WForTFppNWRuT0tCN0JBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI5WVdSOUZ3TlBwR2ZoZmdTNSsvcG54b21uRmFzSjQ4QmE2UW9Rb1hDZmw5Y1BmZ2lZSk1OSFgxNVFXLy9Md0ZaQjh4bnROSW9SM1RPaE9LNEFkOGlqUT09In0sIm1lIjp7ImlkIjoiMjM3NjIwODU3OTMwOjQyQHMud2hhdHNhcHAubmV0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNzYyMDg1NzkzMDo0MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhTXRxQWNXdlgyYmxEZTNaL1hNekM1Ui93MkdiekdjUkNjK0E0Wnk2M0ptIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxNzQ3MzAxfQ==',      //Put Your Session Id Here
  botname: process.env.BOT_NAME || 'sɪɢᴍᴀ ᴹᴰ',  // add the botname you want
  ownername:  process.env.OWNER_NAME || `ᴍᴀʜᴇʀ ᴢᴜʙᴀɪʀ`, // add your name
  author:  process.env.PACK_AUTHER || 'ᴍᴀʜᴇʀ ᴢᴜʙᴀɪʀ', 
  auto_read_status : process.env.AUTO_READ_STATUS || 'false', // if it true it automatically views status and send status in your inbox
  packname:  process.env.PACK_NAME || "sɪɢᴍᴀ ᴹᴰ" , 
  autoreaction: process.env.AUTO_REACTION || 'true', // if it true it will react to all messages
  antibadword : process.env.ANTI_BAD_WORD || 'nobadwordokey',
  alwaysonline: process.env.ALWAYS_ONLINE || 'true', // it will show always online, false it if you dont want
  antifake :   process.env.FAKE_COUNTRY_CODE ||'212',
  readmessage: process.env.READ_MESSAGE || 'true', // it will read all your messages, false it if you dont want
  HANDLERS: process.env.PREFIX || '.',
  warncount : process.env.WARN_COUNT || 2,
  disablepm: process.env.DISABLE_PM || "false", // if true it will disable your pm
  MsgsInLog:process.env.MSGS_IN_LOG ||'false',
  pmMsgsInLog:process.env.PM_MSGS_IN_LOGS ||'false',
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'true', 
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.BRANCH || 'remove',
  BRANCH: process.env.BRANCH || 'Main',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
  HEROKU_API_KEY: process.env.HEROKU_API_KEY,
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "34wcCGPoe3yaGtpiBZgx4SN7", // add your remove bg key if you have it
  caption :process.env.CAPTION || "\t*⤹★ᴘᴏᴡᴇʀᴇᴅ ʙʏ★⤸ sɪɢᴍᴀ ᴹᴰ* ",   //*『sᴜʙsᴄʀɪʙᴇ • ɪɴɴᴏxᴇɴᴛ ᴛᴇᴄʜ』https://www.youtube.com/@InnoxentTech,
  promote_demote_messages : process.env.PROMOTE_DEMOTE_MESSAGES || 'true' ,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY ||'' , // add your openai key if you have it
  VERSION: process.env.VERSION || '𝚅.𝟷.𝟸.𝟽',
  LANG: process.env.THEME|| 'SIGMA_MD',
  menu : process.env.MENU || '', // Not Available in current Version
  WORKTYPE: process.env.WORKTYPE || 'public' // if private only you can use your bot, if public everyone use your bot
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
