const https = require('https');

const BOT_TOKEN = '8620772905:AAE3ZEFsLcc4Z4Y_EG0ZAHFN5va3AQkaH_s';
const CHAT_ID = 'Artem_lidorub'; // username or chat id

function sendMessage() {
  const postData = JSON.stringify({
    chat_id: CHAT_ID,
    text: 'Привет! Бот работает!'
  });

  const options = {
    hostname: 'api.telegram.org',
    port: 443,
    path: `/bot${BOT_TOKEN}/sendMessage`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(postData)
    }
  };

  const req = https.request(options, (res) => {
    let data = '';
    res.on('data', (chunk) => data += chunk);
    res.on('end', () => {
      console.log('Response:', data);
    });
  });

  req.on('error', (e) => {
    console.error('Error:', e.message);
  });

  req.write(postData);
  req.end();
}

sendMessage();
