import { NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabase';
import { generateCertificatePDF } from '../../../lib/certificate';
import { uploadToCloudinary } from '../../../lib/cloudinary';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  const { userId, workshopId, attendancePercent } = await req.json();
  
  const { data: user } = await supabase.from('users').select('*').eq('id', userId).single();
  const { data: workshop } = await supabase.from('workshops').select('*').eq('id', workshopId).single();
  
  const certificateId = `CERT-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
  const date = new Date().toISOString().split('T')[0];
  
  const pdfBuffer = await generateCertificatePDF({
    participantName: user?.name || 'Unknown',
    workshopName: workshop?.title || 'Unknown Workshop',
    attendance: attendancePercent,
    certificateId,
    date
  });
  
  const result = await uploadToCloudinary(Buffer.from(pdfBuffer), 'certificates');
  
  await supabase.from('certificates').insert({
    user_id: userId,
    workshop_id: workshopId,
    attendance_percent: attendancePercent,
    certificate_id: certificateId,
    pdf_url: result.secure_url,
    status: 'generated'
  });
  
  return NextResponse.json({ certificateId, pdfUrl: result.secure_url });
}
