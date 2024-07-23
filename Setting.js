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
  sessionName: process.env.SESSION_ID || 'SLG-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0pQNFRUVUp5Wk15bXdLT1FwdmRsV1dsSGpoWVlaNXBsaDd0ZzNoZk5tVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZjhRQWpUeGNQUXVBM1ZqbmJ2SnprU21GRUV3cFk3UWNXMlkrb0lzTlpqMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwT3l1ZVVpV0t3eHU5SU9pS09odDVPcEVmaWUvYTRCMmIydDFZa1M2WDMwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFSFRVTHB4dDdPOXJvblc2Wk9XZkdyUzB5MCtucjVLei9URmZzY055NTNNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJFU2dlTStUTXRsSkh3Z3ZTTXBqY1ZNWFN5cVMyY3l6QUxyeTJNaW1lR1U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJhN0VUZ0d2ZjZzclpkcHJ0cFpHU3pZNXdFWC95dTVQemVyckZhd1VwUXc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMklaRVgrWDFIWlpyOVJvVHpKUmlwNDNjYUcrWE5YNGt3VjAyMWpaUWZVTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL052V3dTNnBKdDZOZ0pWTGFMSHRVYVA3dXNYaDlLdWphNSt0YzltamQyOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhzVk5HcUdueWFZVnZuaFh5aVprSHNUOFl2bHZpZGVNWjVmazFJK1BBMTMxVUYrMXl6T3BISzFuUkdtcEJXQzFRTTFNa3BqVXNRcDR3LzIvcm5oQWlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjYsImFkdlNlY3JldEtleSI6IlI5NVhmSzIrcVc5WEp4VzZVc3dGeDR2Q0NKNzZnU01la0lLQTFlMmd5TTA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkpMV0Zra3VzU2RtekFJbGpkY1Bsd0EiLCJwaG9uZUlkIjoiMWUxMjI1MmUtOTkxNS00ZWJiLWIzODUtZjVjYWMyZjE2OGRhIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJiTG5NaVhjOTdJYXdXTmtnbmI1aUVrMXM4ND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxRll3RktadjlPRi80VmV6Z1Q4MGQ5MitoS3M9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRFpMOENXTVQiLCJtZSI6eyJpZCI6IjIzNzYyMDg1NzkzMDo0MUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSW5oZy9zR0VPLzkvYlFHR0JrZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoib3kyb0J4YTlmWnVVTjdkbjljek1MbEgvRFladk1aeEVKejREaG5McmNtWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoicHFmUk9WQ3JGckxydUpKdXFaRW1NZXI1UnEyMkRESnBXMDRYT1Ztd0dKOVVQbkdoaEpXUzJYT3c4NjhtUzNLWEVWbk9LUlcxWjFkMVcyd0Fybi9BRHc9PSIsImRldmljZVNpZ25hdHVyZSI6IjJ2bFQ5NHlaN0JOdFZHQld6K096czljd0pQWUxhTDJtYldaNUFrbThuWUkxZm1VUkNWY1dEdHZKc1V4NnBlaTJST0FNcEswYUppbzNZWDF5dy93Y2lnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM3NjIwODU3OTMwOjQxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmFNdHFBY1d2WDJibERlM1ovWE16QzVSL3cyR2J6R2NSQ2MrQTRaeTYzSm0ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjE3Mjg3NjR9',      //Put Your Session Id Here
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
