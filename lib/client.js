/**

███████╗██╗      ██████╗       ███╗   ███╗██████╗ 
██╔════╝██║     ██╔════╝       ████╗ ████║██╔══██╗
███████╗██║     ██║  ███╗█████╗██╔████╔██║██║  ██║
╚════██║██║     ██║   ██║╚════╝██║╚██╔╝██║██║  ██║
███████║███████╗╚██████╔╝      ██║ ╚═╝ ██║██████╔╝
╚══════╝╚══════╝ ╚═════╝       ╚═╝     ╚═╝╚═════╝


**/

import dotenv from 'dotenv';
dotenv.config();
import { makeWASocket, fetchLatestBaileysVersion, useMultiFileAuthState, DisconnectReason } from '@whiskeysockets/baileys';
import fs from 'fs';
import path from 'path';
import axios from 'axios';
import pino from 'pino';
import config from '../config.cjs';
import express from 'express';

const app = express();
const port = 8080;
const sessionDir = path.join(__dirname, 'session');
const credsPath = path.join(sessionDir, 'creds.json');

if (!fs.existsSync(sessionDir)) {
    fs.mkdirSync(sessionDir, { recursive: true });
}

// Remplacez ces valeurs par vos informations
const OPENAI_API_KEY = process.env.OPENAI_API_KEY || '';
const BOT_NUMBER = process.env.BOT_NUMBER || '237693755398';
const BLOCKED_JID = process.env.BLOCKED_JID || '120363152768566533@g.us';
const MEDIA_LINK = process.env.MEDIA_LINK || 'https://telegra.ph/file/761e67b97396cda6cf5ff.jpg';

async function checkWhatsAppUpdate() {
    const response = await axios.get('https://web.whatsapp.com/check-update?version=1&platform=web');
    return response.data;
}

async function downloadSessionData() {
    if (!process.env.SESSION_ID) {
        console.error('Veuillez ajouter votre session à SESSION_ID env !!');
        process.exit(1);
    }
    const sessdata = process.env.SESSION_ID.split("SLG-MD~")[1];
    const url = `https://pastebin.com/raw/${sessdata}`;
    try {
        const response = await axios.get(url);
        await fs.promises.writeFile(credsPath, response.data);
        console.log("🔒 Session chargée avec succès !!");
    } catch (error) {
        console.error('Échec du téléchargement des données de session:', error);
        process.exit(1);
    }
}

if (!fs.existsSync(credsPath)) {
    await downloadSessionData();
}

const html = `
<!DOCTYPE html>
<html>
<head>
    <title>SLG-MD</title>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script>
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true
        });
      }, 500);
    </script>
    <style>
      @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");
      @font-face {
        font-family: "neo-sans";
        src: url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2");
        font-style: normal;
        font-weight: 700;
      }
      html {
        font-family: neo-sans;
        font-weight: 700;
        font-size: calc(62rem / 16);
      }
      body {
        background: white;
      }
      section {
        border-radius: 1em;
        padding: 1em;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
      }
    </style>
</head>
<body>
    <section>
        SLG MD CONNECTED ENJOY ❤️!
    </section>
</body>
</html>
`;

app.get("/", (req, res) => res.type('html').send(html));
app.listen(port, () => console.log(`Secktor Server listening on port http://localhost:${port}!`));

async function start() {
    const { state, saveCreds } = await useMultiFileAuthState(sessionDir);
    const { version } = await fetchLatestBaileysVersion();
    console.log(`🤖 Using WA v${version.join('.')}`);

    const socket = makeWASocket({
        version,
        logger: pino({ level: 'info' }),
        auth: state,
        printQRInTerminal: true,
    });

    socket.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect } = update;
        if (connection === 'close') {
            if (lastDisconnect.error.output.statusCode !== DisconnectReason.loggedOut) {
                console.log("🔄 Reconnexion...");
                start(); // Reconnect
            }
        } else if (connection === 'open') {
            console.log("😃 Connexion ouverte !");
            console.log("🚀 Bot est en marche...");
            console.log("🌐 Localhost fonctionne sur le port 8080");
        }
    });

    socket.ev.on('creds.update', saveCreds); // Save credentials when updated

    socket.ev.on('messages.upsert', async (m) => {
        const msg = m.messages[0];
        if (!msg.key.fromMe && msg.key.remoteJid !== BLOCKED_JID) {
            console.log(`📩 Message reçu: ${msg.message.conversation}`);
            await socket.sendMessage(msg.key.remoteJid, { text: 'Merci pour votre message!' });
        }
    });

    socket.ev.on('group-participants.update', async (update) => {
        const { id, participants, action } = update;
        if (id !== BLOCKED_JID) {
            participants.forEach(async (participant) => {
                if (action === 'add') {
                    await socket.sendMessage(id, { text: `👋 ${participant} a rejoint le groupe!` });
                    await socket.sendMessage(id, { image: { url: MEDIA_LINK }, caption: `Bienvenue ${participant}! 🎉` });
                } else if (action === 'remove') {
                    await socket.sendMessage(id, { text: `😢 ${participant} a quitté le groupe!` });
                    await socket.sendMessage(id, { image: { url: MEDIA_LINK }, caption: `Au revoir ${participant}!` });
                }
            });
        }
    });

    // Vérifiez les mises à jour de WhatsApp
    const updateInfo = await checkWhatsAppUpdate();
    console.log(`📦 Version actuelle de WhatsApp: ${updateInfo.currentVersion}`);

    // Autres événements à gérer...
}

start();






