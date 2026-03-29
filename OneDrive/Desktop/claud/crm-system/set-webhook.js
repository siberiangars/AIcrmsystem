const https = require('https');

const BOT_TOKEN = '8620772905:AAE3ZEFsLcc4Z4Y_EG0ZAHFN5va3AQkaH_s';
const WEBHOOK_URL = 'https://genetics-positioning-calls-far.trycloudflare.com/api/telegram/webhook';

function setWebhook() {
  const url = `/bot${BOT_TOKEN}/setWebhook?url=${encodeURIComponent(WEBHOOK_URL)}`;
  
  https.get(`https://api.telegram.org${url}`, (res) => {
    let data = '';
    res.on('data', (chunk) => data += chunk);
    res.on('end', () => {
      console.log('Response:', data);
    });
  }).on('error', (err) => {
    console.error('Error:', err.message);
  });
}

setWebhook();
