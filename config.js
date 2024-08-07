const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2250704618563";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,2250704618563";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_11_08_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5LFxuICAgICAgICAwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDUzLFxuICAgICAgICAxODAsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDQyLFxuICAgICAgICAyOCxcbiAgICAgICAgMixcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzgsXG4gICAgICAgIDQ4LFxuICAgICAgICA3NixcbiAgICAgICAgMTU1LFxuICAgICAgICA0MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDk4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjIwLFxuICAgICAgICAyNixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDYyLFxuICAgICAgICAxODEsXG4gICAgICAgIDgyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTQsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjksXG4gICAgICAgIDgxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI1LFxuICAgICAgICA5OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTc1LFxuICAgICAgICA0MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjU0LFxuICAgICAgICAzLFxuICAgICAgICAyMTksXG4gICAgICAgIDg5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTMwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDkyLFxuICAgICAgICA1NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDUsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTcxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDExLFxuICAgICAgICA5MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODcsXG4gICAgICAgIDQyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgODksXG4gICAgICAgIDYsXG4gICAgICAgIDExLFxuICAgICAgICAyMTksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTA0LFxuICAgICAgICA3MixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTE3LFxuICAgICAgICA2MixcbiAgICAgICAgMTM2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQyLFxuICAgICAgICA2MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTc2LFxuICAgICAgICA2NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjEzLFxuICAgICAgICA2LFxuICAgICAgICA1MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDksXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTM1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJpMkY2Qk92MDNNUmFNNzhWTXVTa3NHaW42UEkyQjlqZm9rZURLRDBEUTlNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJEMW4tQmJhMlNuS0N2clU0MjhITFl3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjFiMzE2NmU3LWZlMjAtNDQ4YS1iMmY2LTM2MjQwMTA4YTEzZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNCxcbiAgICAgIDk0LFxuICAgICAgMTgwLFxuICAgICAgMjksXG4gICAgICAxNjgsXG4gICAgICAxNzcsXG4gICAgICAyNTEsXG4gICAgICAxNixcbiAgICAgIDMwLFxuICAgICAgMjMsXG4gICAgICA4NyxcbiAgICAgIDE4NSxcbiAgICAgIDIyMixcbiAgICAgIDIxLFxuICAgICAgMjgsXG4gICAgICA3OCxcbiAgICAgIDEyNixcbiAgICAgIDQ2LFxuICAgICAgMjMzLFxuICAgICAgMTM4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0OSxcbiAgICAgIDk0LFxuICAgICAgNzUsXG4gICAgICAyMTAsXG4gICAgICA2NixcbiAgICAgIDIzOSxcbiAgICAgIDU3LFxuICAgICAgMTY5LFxuICAgICAgMzksXG4gICAgICAyNDQsXG4gICAgICAxNDQsXG4gICAgICAxNTIsXG4gICAgICAyMTUsXG4gICAgICAyMjAsXG4gICAgICA4NyxcbiAgICAgIDIzLFxuICAgICAgMjM3LFxuICAgICAgOTksXG4gICAgICAyMzksXG4gICAgICA3OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJRN0dNQ0JTS1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjI1MDUwMDMzNzI1NjozMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlJhYmlvXCIsXG4gICAgXCJsaWRcIjogXCIyMjI3MjAyOTM4Nzk5OTg6MzJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTWZSNzhZSEVLMkl2N1VHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJZWmEzbmVWTyt3SjRadElhb1RoQjR2L2szRjRaTFpKRzlialluc0RUamhzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjBvcGRJVVR5SyszVUxHSFpwVkxZNGVQbTRaVldya3FIVTY4YTYxdkdaYTdHbVI1c2k5VTZvK3o4cFdDdGVnNVJiYnozOHZGSE44dnl0aWhkUVJ2bEJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkd1SUpENE92UlFhdWg2NVE2eTVPdkp2akgxZC9CTHJZckRUQ1ovMEN4Uk1mSzJvSkhtNVRpejhyZXU3aGxZY3BqdG1DNjVkb09sMjVLcGFyVmM3dmlnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyNTA1MDAzMzcyNTY6MzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI3OTUwNTgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOSzZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5LNi5qc29uIjogIntcImtleURhdGFcIjpcIm5YbS9UWTlTb3NjakNjSnBUNXpHck1VSGpoVmVoUnpCRVphSm5UY0x3Sms9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjAyNzY3Nzg5NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyNTI0MjE3Mzg2XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "*",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "『𝗧𝗠𝗣』—☀︎︎",
  ownername:process.env.OWNER_NAME|| "『𝗧𝗠𝗣』—͟͟͞͞𝗥𝗮𝗯𝗶𝗼➸⃝☀︎︎",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
