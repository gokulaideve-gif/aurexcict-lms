export const cloudinaryFolders = {
  workshops: 'workshops',
  lessons: 'lessons',
  certificates: 'certificates',
  library: 'library',
  recordings: 'recordings',
  avatars: 'avatars'
};

export async function uploadToCloudinary(file: File | Buffer | string, folder: string) {
  const formData = new FormData();
  
  if (typeof file === 'string') {
    const response = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`, {
      method: 'POST',
      body: JSON.stringify({
        file,
        upload_preset: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || 'aurexcictlms_unsigned',
        folder: `aurexcictlms/${folder}`
      })
    });
    return response.json();
  }
  
  const blob = new Blob([file as BlobPart]);
  const filePart = new File([blob], `${folder}.pdf`, { type: 'application/pdf' });
  formData.append('file', filePart);
  
  formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || 'aurexcictlms_unsigned');
  formData.append('folder', `aurexcictlms/${folder}`);
  
  const response = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/auto/upload`, {
    method: 'POST',
    body: formData
  });
  
  return response.json();
}