import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  const { imageData } = await req.json();
  
  let text = '';
  try {
    const TesseractModule = await import('tesseract.js');
    const Tesseract = TesseractModule.default || TesseractModule;
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
