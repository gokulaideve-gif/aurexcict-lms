import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { text, target = 'en' } = await req.json();
  
  // Sarvam AI Translation
  const response = await fetch('https://api.sarvam.ai/v1/translate', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.SARVAM_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      input: text,
      source_language: 'ta',
      target_language: target,
      model: 'sarvam-m9-8k'
    })
  });
  
  const data = await response.json();
  
  return NextResponse.json({ 
    translatedText: data.translated_text || text,
    source: 'sarvam-ai'
  });
}
