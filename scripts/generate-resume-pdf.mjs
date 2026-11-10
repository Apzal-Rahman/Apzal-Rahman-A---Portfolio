import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Check for authentic uploaded official PDF
const uploadedPdfPaths = [
  path.join(publicDir, 'assets/aistudio/Apzal_Rahman_A_c3f74c71.pdf'),
  path.join(publicDir, 'Apzal_Rahman_A.pdf'),
  path.join(publicDir, 'Apzal-Rahman-A-Resume.pdf')
];

let sourcePdfPath = null;
for (const p of uploadedPdfPaths) {
  if (fs.existsSync(p) && fs.statSync(p).size > 20000) {
    sourcePdfPath = p;
    break;
  }
}

const targetFiles = [
  path.join(publicDir, 'Apzal-Rahman-A-Resume.pdf'),
  path.join(publicDir, 'Apzal-Rahman-Resume.pdf'),
  path.join(publicDir, 'Apzal_Rahman_A.pdf')
];

if (sourcePdfPath) {
  console.log(`Using authentic uploaded PDF from: ${sourcePdfPath}`);
  for (const target of targetFiles) {
    if (sourcePdfPath !== target) {
      fs.copyFileSync(sourcePdfPath, target);
    }
  }
  console.log('Successfully synced official PDF resume to public destinations.');
} else {
  console.log('No external PDF found, generating fallback via jsPDF...');
}
