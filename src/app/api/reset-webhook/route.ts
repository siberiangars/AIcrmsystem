import { NextResponse } from "next/server";

export async function POST() {
  const BOT_TOKEN = '8620772905:AAE3ZEFsLcc4Z4Y_EG0ZAHFN5va3AQkaH_s';
  const WEBHOOK_URL = 'https://genetics-positioning-calls-far.trycloudflare.com/api/telegram/webhook';

  try {
    // Delete existing webhook first
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/deleteWebhook`, {
      method: 'POST'
    });
    
    // Set new webhook
    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/setWebhook`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: WEBHOOK_URL })
    });
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
