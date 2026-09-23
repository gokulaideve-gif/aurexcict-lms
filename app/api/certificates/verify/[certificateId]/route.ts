import { NextResponse } from 'next/server';
import { supabase } from '../../../../../lib/supabase';

export async function GET(
  req: Request,
  { params }: { params: { certificateId: string } }
) {
  const { certificateId } = params;
  
  const { data, error } = await supabase
    .from('certificates')
    .select(`
      *,
      users(name, email),
      workshops(title)
    `)
    .eq('certificate_id', certificateId)
    .single();
  
  if (error || !data) {
    return NextResponse.json({ valid: false }, { status: 404 });
  }
  
  return NextResponse.json({
    valid: true,
    certificate: {
      id: data.certificate_id,
      participant: data.users.name,
      workshop: data.workshops.title,
      attendance: data.attendance_percent,
      generatedAt: data.generated_at,
      pdfUrl: data.pdf_url
    }
  });
}
