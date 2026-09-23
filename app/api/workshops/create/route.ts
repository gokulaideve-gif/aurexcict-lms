import { NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabase';
import { uploadToCloudinary } from '../../../lib/cloudinary';

export async function POST(req: Request) {
  const { title, description, organizerId, thumbnail } = await req.json();
  
  let thumbnailUrl = null;
  if (thumbnail) {
    const result = await uploadToCloudinary(thumbnail, 'workshops');
    thumbnailUrl = result.secure_url;
  }
  
  const { data, error } = await supabase
    .from('workshops')
    .insert({
      title,
      description,
      organizer_id: organizerId,
      thumbnail_url: thumbnailUrl,
      status: 'draft'
    })
    .select()
    .single();
  
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
  
  return NextResponse.json({ workshop: data });
}
