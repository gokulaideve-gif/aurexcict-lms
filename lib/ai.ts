export async function askSarvamAI(question: string, context?: string) {
  const response = await fetch('/api/ai/sarvam', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ question, context })
  });
  return response.json();
}

export async function translateTamil(text: string, target: 'en' | 'ta' = 'en') {
  const response = await fetch('/api/ai/translate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text, target })
  });
  return response.json();
}

export async function scanTamilOCR(imageData: string) {
  const response = await fetch('/api/ai/ocr', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ imageData })
  });
  return response.json();
}
