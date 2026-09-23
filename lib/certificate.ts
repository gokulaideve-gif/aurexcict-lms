import jsPDF from 'jspdf';
import QRCode from 'qrcode';

export async function generateCertificatePDF(data: {
  participantName: string;
  workshopName: string;
  attendance: number;
  certificateId: string;
  date: string;
}) {
  const doc = new jsPDF('landscape', 'mm', 'a4');
  
  doc.setFontSize(24);
  doc.text('Certificate of Completion', 148, 50, { align: 'center' });
  
  doc.setFontSize(16);
  doc.text('This is awarded to', 148, 80, { align: 'center' });
  
  doc.setFontSize(28);
  doc.text(data.participantName, 148, 100, { align: 'center' });
  
  doc.setFontSize(14);
  doc.text(`For completing ${data.workshopName}`, 148, 120, { align: 'center' });
  doc.text(`with ${data.attendance}% attendance`, 148, 135, { align: 'center' });
  
  const qrDataURL = await QRCode.toDataURL(`https://aurexcictlms.in/verify/${data.certificateId}`);
  doc.addImage(qrDataURL, 'PNG', 20, 100, 50, 50);
  
  doc.setFontSize(10);
  doc.text(`Certificate ID: ${data.certificateId}`, 148, 170, { align: 'center' });
  doc.text(`Date: ${data.date}`, 148, 180, { align: 'center' });
  
  return doc.output('arraybuffer');
}
