import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export async function uploadToCloudinary(file: File, folder: string) {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'aurexcictlms_unsigned');
  formData.append('folder', `aurexcictlms/${folder}`);
  
  const response = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/auto/upload`, {
    method: 'POST',
    body: formData
  });
  
  return response.json();
}

export const cloudinaryFolders = {
  workshops: 'workshops',
  lessons: 'lessons',
  certificates: 'certificates',
  library: 'library',
  recordings: 'recordings',
  avatars: 'avatars'
};
