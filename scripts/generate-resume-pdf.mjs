import { jsPDF } from 'jspdf';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Standard A4 dimensions in pt (595.28 x 841.89)
const doc = new jsPDF({
  orientation: 'portrait',
  unit: 'pt',
  format: 'a4'
});

const pageWidth = doc.internal.pageSize.getWidth();
const pageHeight = doc.internal.pageSize.getHeight();
const margin = 40;
const contentWidth = pageWidth - (margin * 2);

let y = 45;

// Fonts
const FONT_SERIF = 'times';

// Helper for section headers
function renderSectionHeader(title) {
  y += 14;
  doc.setFont(FONT_SERIF, 'bold');
  doc.setFontSize(11);
  doc.setTextColor(0, 0, 0);
  doc.text(title.toUpperCase(), margin, y);
  
  y += 4;
  doc.setLineWidth(0.6);
  doc.setDrawColor(80, 80, 80);
  doc.line(margin, y, margin + contentWidth, y);
  y += 12;
}

// 1. NAME HEADER
doc.setFont(FONT_SERIF, 'bold');
doc.setFontSize(22);
doc.setTextColor(15, 15, 15);
doc.text('Apzal Rahman A', pageWidth / 2, y, { align: 'center' });
y += 16;

// 2. CONTACT LINKS
doc.setFont(FONT_SERIF, 'normal');
doc.setFontSize(9.5);
doc.setTextColor(30, 30, 30);

const contactText = '7358928968    |    Portfolio    |    LinkedIn: apzal-rahman    |    apzalrahman@gmail.com';
doc.text(contactText, pageWidth / 2, y, { align: 'center' });
y += 6;

// 3. CAREER OBJECTIVE
renderSectionHeader('Career Objective');
doc.setFont(FONT_SERIF, 'normal');
doc.setFontSize(9.5);
doc.setTextColor(35, 35, 35);
const objective = "A marketing professional blending creative storytelling with performance-driven execution — from scriptwriting and content development to running paid campaigns across Meta, Google, and YouTube that have generated millions of views and measurable leads. I combine content that connects with campaigns that convert, and I'm looking to grow as a Performance & Creative Marketing Strategist who can own both the story and the numbers behind it.";
const splitObjective = doc.splitTextToSize(objective, contentWidth);
doc.text(splitObjective, margin, y);
y += (splitObjective.length * 12.5) + 4;

// 4. EDUCATION
renderSectionHeader('Education');

// Nehru Arts
doc.setFont(FONT_SERIF, 'bold');
doc.setFontSize(10);
doc.setTextColor(20, 20, 20);
doc.text('Nehru Arts and Science College', margin, y);
doc.setFont(FONT_SERIF, 'bold');
doc.text('CGPA: 7.3/10.0', margin + contentWidth, y, { align: 'right' });
y += 12;

doc.setFont(FONT_SERIF, 'italic');
doc.setFontSize(9.5);
doc.setTextColor(50, 50, 50);
doc.text('Bachelor of Commerce in Computer Application', margin, y);
doc.setFont(FONT_SERIF, 'normal');
doc.text('Jun. 2021 – May. 2024', margin + contentWidth, y, { align: 'right' });
y += 14;

// School
doc.setFont(FONT_SERIF, 'bold');
doc.setFontSize(10);
doc.setTextColor(20, 20, 20);
doc.text('Rasakondalar Matric Hr Sec School', margin, y);
doc.setFont(FONT_SERIF, 'bold');
doc.text('Percentage: 78.9', margin + contentWidth, y, { align: 'right' });
y += 12;

doc.setFont(FONT_SERIF, 'italic');
doc.setFontSize(9.5);
doc.setTextColor(50, 50, 50);
doc.text('XII Std', margin, y);
doc.setFont(FONT_SERIF, 'normal');
doc.text('June. 2020 - April. 2021', margin + contentWidth, y, { align: 'right' });
y += 6;

// 5. EXPERIENCE
renderSectionHeader('Experience');

function renderExperience(role, dates, company, location, bullets) {
  doc.setFont(FONT_SERIF, 'bold');
  doc.setFontSize(10);
  doc.setTextColor(20, 20, 20);
  doc.text(role, margin, y);
  doc.setFont(FONT_SERIF, 'normal');
  doc.text(dates, margin + contentWidth, y, { align: 'right' });
  y += 12;

  doc.setFont(FONT_SERIF, 'italic');
  doc.setFontSize(9.5);
  doc.setTextColor(50, 50, 50);
  doc.text(company, margin, y);
  doc.setFont(FONT_SERIF, 'normal');
  doc.text(location, margin + contentWidth, y, { align: 'right' });
  y += 13;

  doc.setFont(FONT_SERIF, 'normal');
  doc.setFontSize(9);
  doc.setTextColor(35, 35, 35);
  bullets.forEach(bullet => {
    const bulletIndent = 12;
    doc.text('•', margin + 3, y);
    const splitBullet = doc.splitTextToSize(bullet, contentWidth - bulletIndent);
    doc.text(splitBullet, margin + bulletIndent, y);
    y += (splitBullet.length * 11.5) + 2.5;
  });
  y += 4;
}

renderExperience(
  'Performance Marketer',
  'Dec. 2025 – Present',
  'Heeds',
  'Chennai, IN',
  [
    'Managed paid campaigns (Meta + Google/YouTube) for TMT manufacturing and healthcare clients, generated 5.39M Instagram views (99.7% reach to non-followers) and grew a YouTube channel by 5,200+ subscribers and 53,500 views within 11 days, while retaining unspent budget',
    'Drove a healthcare awareness campaign reaching 242,000+ people and 347,000+ impressions in a sensitive category, generating 39,771 video thruplays, 33 direct calls, and 35 qualified leads — all under budget',
    'Contributed to content writing, scriptwriting, dialogue, and promotional video production for movie-promotion and brand-marketing campaigns',
    'Supported the development of creative marketing ideas and paid-media creative planning for Meta and Google platforms',
    'Collaborated with creative and production teams on campaign concepts, from script to final promotional content'
  ]
);

renderExperience(
  'Digital Marketing Executive',
  'Apr. 2025 – Aug. 2025',
  'Amber Creative and Digital Support',
  'Coimbatore, IN',
  [
    'Built and optimized WordPress websites, E-Commerce & business sites',
    'Managed Amazon Seller Central and executed Sponsored Ads campaigns',
    'Planned and executed Meta Ads campaign that achieved 1.16x ROAS in the first week'
  ]
);

renderExperience(
  'Digital Marketer',
  'Jul. 2024 – Feb. 2025',
  'Freelance',
  'Remote',
  [
    'Delivered end-to-end marketing solutions across multiple clients (eCommerce, services, retail)',
    'Ran Google Ads, Meta Ads campaigns, generating high-quality leads',
    'Built and optimized WordPress & WooCommerce websites to improve client conversions'
  ]
);

// 6. CERTIFICATIONS
renderSectionHeader('Certifications');

function renderCert(title, date) {
  doc.setFont(FONT_SERIF, 'bold');
  doc.setFontSize(9);
  doc.setTextColor(30, 30, 30);
  doc.text(title, margin, y);
  doc.setFont(FONT_SERIF, 'normal');
  doc.text(date, margin + contentWidth, y, { align: 'right' });
  y += 12;
}

renderCert('The Trade Desk Edge Academy Certified: Data-Driven Planning  |  The Trade Desk', 'Aug. 2026');
renderCert('The Trade Desk Edge Academy – Marketing Essentials  |  The Trade Desk', 'Jul. 2026');
renderCert('Programmatic Masterclass  |  StackAdapt', 'May. 2026');

// 7. SKILLS
renderSectionHeader('Skills');
doc.setFontSize(8.8);
doc.setTextColor(35, 35, 35);

const skills = [
  { label: 'Tools', desc: 'WordPress, WooCommerce, Excel, SEO..' },
  { label: 'Content & Creative', desc: 'Scriptwriting, Content Writing, Promotional Video Concepting, Dialogue Writing..' },
  { label: 'Campaign & Coordination', desc: 'Influencer Marketing Coordination, Content Calendar Management, Cross-team Collaboration (Creative/Production)..' },
  { label: 'Marketing Platforms', desc: 'Meta Business Suite, Google Ads, Meta Ads, YouTube Ads, Amazon Sponsored Ads..' },
  { label: 'Problem-Solving', desc: 'Ad Account Troubleshooting & Escalation, Client Communication..' }
];

skills.forEach(s => {
  doc.setFont(FONT_SERIF, 'bold');
  const labelText = `${s.label}: `;
  doc.text(labelText, margin, y);
  const labelWidth = doc.getTextWidth(labelText);
  
  doc.setFont(FONT_SERIF, 'normal');
  const splitDesc = doc.splitTextToSize(s.desc, contentWidth - labelWidth);
  doc.text(splitDesc[0], margin + labelWidth, y);
  
  if (splitDesc.length > 1) {
    for (let i = 1; i < splitDesc.length; i++) {
      y += 10.5;
      doc.text(splitDesc[i], margin + 15, y);
    }
  }
  y += 11.5;
});

// Output file
const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const outputPath1 = path.join(publicDir, 'Apzal-Rahman-A-Resume.pdf');
const outputPath2 = path.join(publicDir, 'Apzal-Rahman-Resume.pdf');

const buffer = Buffer.from(doc.output('arraybuffer'));
fs.writeFileSync(outputPath1, buffer);
fs.writeFileSync(outputPath2, buffer);

console.log(`Successfully generated resume PDF at: ${outputPath1} (${buffer.length} bytes)`);
