import { jsPDF } from 'jspdf';
import { BIO_DATA } from '../data/portfolioData';

export async function downloadResumePDF() {
  const fileName = 'Apzal-Rahman-A-Resume.pdf';

  // 1. Primary approach: fetch the pre-compiled static PDF asset
  try {
    const res = await fetch(`/${fileName}`);
    if (res.ok) {
      const blob = await res.blob();
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
      return;
    }
  } catch (error) {
    console.warn('Static PDF fetch encountered error, using client generator:', error);
  }

  // 2. Client-side vector fallback using jsPDF
  try {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'pt',
      format: 'a4'
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 40;
    const contentWidth = pageWidth - (margin * 2);
    let y = 45;
    const FONT_SERIF = 'times';

    const renderSectionHeader = (title: string) => {
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
    };

    // Name Header
    doc.setFont(FONT_SERIF, 'bold');
    doc.setFontSize(22);
    doc.setTextColor(15, 15, 15);
    doc.text('Apzal Rahman A', pageWidth / 2, y, { align: 'center' });
    y += 16;

    // Contact Header
    doc.setFont(FONT_SERIF, 'normal');
    doc.setFontSize(9.5);
    doc.setTextColor(30, 30, 30);
    const contactText = `7358928968    |    Portfolio    |    LinkedIn: apzal-rahman    |    ${BIO_DATA.email}`;
    doc.text(contactText, pageWidth / 2, y, { align: 'center' });
    y += 6;

    // Career Objective
    renderSectionHeader('Career Objective');
    doc.setFont(FONT_SERIF, 'normal');
    doc.setFontSize(9.5);
    doc.setTextColor(35, 35, 35);
    const objective = "A marketing professional blending creative storytelling with performance-driven execution — from scriptwriting and content development to running paid campaigns across Meta, Google, and YouTube that have generated millions of views and measurable leads. I combine content that connects with campaigns that convert, and I'm looking to grow as a Performance & Creative Marketing Strategist who can own both the story and the numbers behind it.";
    const splitObjective = doc.splitTextToSize(objective, contentWidth);
    doc.text(splitObjective, margin, y);
    y += (splitObjective.length * 12.5) + 4;

    // Education
    renderSectionHeader('Education');
    doc.setFont(FONT_SERIF, 'bold');
    doc.setFontSize(10);
    doc.setTextColor(20, 20, 20);
    doc.text('Nehru Arts and Science College', margin, y);
    doc.text('CGPA: 7.3/10.0', margin + contentWidth, y, { align: 'right' });
    y += 12;

    doc.setFont(FONT_SERIF, 'italic');
    doc.setFontSize(9.5);
    doc.setTextColor(50, 50, 50);
    doc.text('Bachelor of Commerce in Computer Application', margin, y);
    doc.setFont(FONT_SERIF, 'normal');
    doc.text('Jun. 2021 – May. 2024', margin + contentWidth, y, { align: 'right' });
    y += 14;

    doc.setFont(FONT_SERIF, 'bold');
    doc.setFontSize(10);
    doc.setTextColor(20, 20, 20);
    doc.text('Rasakondalar Matric Hr Sec School', margin, y);
    doc.text('Percentage: 78.9', margin + contentWidth, y, { align: 'right' });
    y += 12;

    doc.setFont(FONT_SERIF, 'italic');
    doc.setFontSize(9.5);
    doc.setTextColor(50, 50, 50);
    doc.text('XII Std', margin, y);
    doc.setFont(FONT_SERIF, 'normal');
    doc.text('June. 2020 - April. 2021', margin + contentWidth, y, { align: 'right' });
    y += 6;

    // Experience
    renderSectionHeader('Experience');
    const experiences = [
      {
        role: 'Performance Marketer',
        dates: 'Dec. 2025 – Present',
        company: 'Heeds',
        location: 'Chennai, IN',
        bullets: [
          'Managed paid campaigns (Meta + Google/YouTube) for TMT manufacturing and healthcare clients, generated 5.39M Instagram views (99.7% reach to non-followers) and grew a YouTube channel by 5,200+ subscribers and 53,500 views within 11 days, while retaining unspent budget',
          'Drove a healthcare awareness campaign reaching 242,000+ people and 347,000+ impressions in a sensitive category, generating 39,771 video thruplays, 33 direct calls, and 35 qualified leads — all under budget',
          'Contributed to content writing, scriptwriting, dialogue, and promotional video production for movie-promotion and brand-marketing campaigns',
          'Supported the development of creative marketing ideas and paid-media creative planning for Meta and Google platforms',
          'Collaborated with creative and production teams on campaign concepts, from script to final promotional content'
        ]
      },
      {
        role: 'Digital Marketing Executive',
        dates: 'Apr. 2025 – Aug. 2025',
        company: 'Amber Creative and Digital Support',
        location: 'Coimbatore, IN',
        bullets: [
          'Built and optimized WordPress websites, E-Commerce & business sites',
          'Managed Amazon Seller Central and executed Sponsored Ads campaigns',
          'Planned and executed Meta Ads campaign that achieved 1.16x ROAS in the first week'
        ]
      },
      {
        role: 'Digital Marketer',
        dates: 'Jul. 2024 – Feb. 2025',
        company: 'Freelance',
        location: 'Remote',
        bullets: [
          'Delivered end-to-end marketing solutions across multiple clients (eCommerce, services, retail)',
          'Ran Google Ads, Meta Ads campaigns, generating high-quality leads',
          'Built and optimized WordPress & WooCommerce websites to improve client conversions'
        ]
      }
    ];

    experiences.forEach(exp => {
      doc.setFont(FONT_SERIF, 'bold');
      doc.setFontSize(10);
      doc.setTextColor(20, 20, 20);
      doc.text(exp.role, margin, y);
      doc.setFont(FONT_SERIF, 'normal');
      doc.text(exp.dates, margin + contentWidth, y, { align: 'right' });
      y += 12;

      doc.setFont(FONT_SERIF, 'italic');
      doc.setFontSize(9.5);
      doc.setTextColor(50, 50, 50);
      doc.text(exp.company, margin, y);
      doc.setFont(FONT_SERIF, 'normal');
      doc.text(exp.location, margin + contentWidth, y, { align: 'right' });
      y += 13;

      doc.setFont(FONT_SERIF, 'normal');
      doc.setFontSize(9);
      doc.setTextColor(35, 35, 35);
      exp.bullets.forEach(bullet => {
        const bulletIndent = 12;
        doc.text('•', margin + 3, y);
        const splitBullet = doc.splitTextToSize(bullet, contentWidth - bulletIndent);
        doc.text(splitBullet, margin + bulletIndent, y);
        y += (splitBullet.length * 11.5) + 2.5;
      });
      y += 4;
    });

    // Certifications
    renderSectionHeader('Certifications');
    const certs = [
      { title: 'The Trade Desk Edge Academy Certified: Data-Driven Planning  |  The Trade Desk', date: 'Aug. 2026' },
      { title: 'The Trade Desk Edge Academy – Marketing Essentials  |  The Trade Desk', date: 'Jul. 2026' },
      { title: 'Programmatic Masterclass  |  StackAdapt', date: 'May. 2026' }
    ];

    certs.forEach(cert => {
      doc.setFont(FONT_SERIF, 'bold');
      doc.setFontSize(9);
      doc.setTextColor(30, 30, 30);
      doc.text(cert.title, margin, y);
      doc.setFont(FONT_SERIF, 'normal');
      doc.text(cert.date, margin + contentWidth, y, { align: 'right' });
      y += 12;
    });

    // Skills
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

    doc.save(fileName);
  } catch (err) {
    console.error('Failed to generate PDF:', err);
    window.print();
  }
}
