import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { question, context } = await req.json();
  
  // Groq AI fallback
  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'llama-3.1-8b-instant',
      messages: [
        { role: 'system', content: 'You are a Tamil learning assistant. Answer in Tamil or English as appropriate.' },
        { role: 'user', content: `${context ? context + '\n\n' : ''}${question}` }
      ]
    })
  });
  
  const data = await response.json();
  
  return NextResponse.json({ 
    answer: data.choices?.[0]?.message?.content || 'Answer from Groq AI',
    source: 'groq-ai'
  });
}
