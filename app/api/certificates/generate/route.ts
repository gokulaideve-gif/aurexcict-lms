import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { generateCertificatePDF } from '@/lib/certificate';
import { uploadToCloudinary } from '@/lib/cloudinary';

export async function POST(req: Request) {
  const { userId, workshopId, attendancePercent } = await req.json();
  
  // Fetch user and workshop data
  const { data: user } = await supabase.from('users').select('*').eq('id', userId).single();
  const { data: workshop } = await supabase.from('workshops').select('*').eq('id', workshopId).single();
  
  const certificateId = `CERT-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  const date = new Date().toISOString().split('T')[0];
  
  // Generate PDF
  const pdfBuffer = await generateCertificatePDF({
    participantName: user.name,
    workshopName: workshop.title,
    attendance: attendancePercent,
    certificateId,
    date
  });
  
  // Upload to Cloudinary
  const blob = new Blob([pdfBuffer], { type: 'application/pdf' });
  const file = new File([blob], `${certificateId}.pdf`, { type: 'application/pdf' });
  
  const result = await uploadToCloudinary(file, 'certificates');
  
  // Save to database
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
