import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { question, context } = await req.json();
  
  // Sarvam AI integration
  const response = await fetch('https://api.sarvam.ai/v1/chat', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.SARVAM_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'sarvam-m9-8k',
      messages: [{ role: 'user', content: question }],
      context
    })
  });
  
  const data = await response.json();
  return NextResponse.json({ answer: data.choices?.[0]?.message?.content || 'Answer from Sarvam AI' });
}
