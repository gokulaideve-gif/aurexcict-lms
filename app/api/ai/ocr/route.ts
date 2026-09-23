import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  const { imageData } = await req.json();
  
  let text = '';
  try {
    const { Tesseract } = await import('tesseract.js');
    const { data: { text: detectedText } } = await Tesseract.recognize(
      imageData,
      'tam',
      { logger: m => console.log(m) }
    );
    text = detectedText;
  } catch (error) {
    console.error('OCR Error:', error);
  }
  
  return NextResponse.json({ 
    detectedText: text,
    language: 'ta',
    confidence: 0.85
  });
}
