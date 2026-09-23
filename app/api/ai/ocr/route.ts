import { NextResponse } from 'next/server';
import Tesseract from 'tesseract.js';

export async function POST(req: Request) {
  const { imageData } = await req.json();
  
  // Tesseract OCR for Tamil
  const { data: { text } } = await Tesseract.recognize(
    imageData,
    'tam',
    { logger: m => console.log(m) }
  );
  
  return NextResponse.json({ 
    detectedText: text,
    language: 'ta',
    confidence: 0.85
  });
}
