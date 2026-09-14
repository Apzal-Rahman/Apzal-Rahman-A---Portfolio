export interface ProjectVideo {
  id: string;
  title: string;
  fileName: string;
  category: string;
  workType: 'entire-script' | 'contributed';
  shortDescription: string;
  role: string;
  scopeNote: string;
  thumbnail: string;
  gradient: string;
  href: string;
  embedType: 'video' | 'concept' | 'promo';
  details: string;
  metrics?: string;
  youtubeId?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  fileName?: string;
  oneLineSummary: string;
  context: string;
  objective: string;
  theIdea: string;
  myContribution: string;
  contributionType: 'entire-script' | 'contributed';
  scopeNote: string;
  teamCollaboration: string;
  whatWasProduced: string;
  publicProof: string;
  whatILearned: string;
  youtubeId?: string;
}

export interface ExperienceItem {
  period: string;
  company: string;
  role: string;
  description: string;
  responsibilities: string[];
}

export interface WebsiteItem {
  id: string;
  name: string;
  domain: string;
  redirectUrl: string;
  roleLabel: string;
  tagline: string;
  themeColor: string;
  category: string;
  features: string[];
  image: string;
  clientLocation?: string;
  mockupType: 'logistics' | 'tech' | 'industrial' | 'corporate' | 'tourism' | 'travel' | 'architecture' | 'fashion';
}

export interface ProofPost {
  id: string;
  title: string;
  summary: string;
  category: string;
  date: string;
  likes: number;
  comments: number;
  shares: number;
  impressions?: number;
  entryNumber?: string;
  tags?: string[];
  link: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  category: string;
  year: string;
  skillsGained: string;
}

export const SELECTED_WORK: ProjectVideo[] = [
  {
    id: 'naga-corporate',
    title: 'Naga Corporate Film',
    fileName: 'Naga Corporate.mp4',
    category: 'FULL SCRIPT (ENTIRE WORK)',
    workType: 'entire-script',
    youtubeId: 'PkVvDi8sMY0',
    shortDescription: 'Multi-decade food industry heritage, industrial milling capacity, and sustainability shaped into a corporate film.',
    role: 'Scriptwriter — Entire Script Written by Apzal',
    scopeNote: 'Scripting was my entire work (not the editing or any others)',
    thumbnail: 'https://img.youtube.com/vi/PkVvDi8sMY0/hqdefault.jpg',
    gradient: 'from-amber-950/80 via-neutral-900/90 to-[#070A10]',
    href: 'https://youtu.be/PkVvDi8sMY0',
    embedType: 'video',
    details: 'Authored the complete institutional narrative from scratch. Built the thematic spine covering Naga\'s heritage, advanced food processing units, and sustainability standards. Note: Apzal\'s role was exclusively the complete scripting; editing and post-production were executed by the production unit.',
    metrics: 'B2B stakeholder & corporate broadcast'
  },
  {
    id: 'lalithaa-tanjore-ai',
    title: 'Lalitha Tanjore AI Film',
    fileName: 'Lalitha Tajore aii.mp4',
    category: 'FULL SCRIPT (ENTIRE WORK)',
    workType: 'entire-script',
    youtubeId: 'UXsUDeTpxzY',
    shortDescription: 'Poetic cultural storytelling and temple goldsmithing heritage crafted for Tanjore showroom launch.',
    role: 'Scriptwriter — Entire Script Written by Apzal',
    scopeNote: 'Scripting was my entire work (not the editing or any others)',
    thumbnail: 'https://img.youtube.com/vi/UXsUDeTpxzY/hqdefault.jpg',
    gradient: 'from-amber-950/80 via-neutral-900/90 to-[#070A10]',
    href: 'https://youtu.be/UXsUDeTpxzY',
    embedType: 'video',
    details: 'Wrote the complete poetic narrative and voiceover script bridging Tanjore temple architecture, divine gold filigree, and generational craftsmanship. Note: The script was written entirely by Apzal; AI visual generation and editing were handled by the production team.',
    metrics: 'Showroom launch & high-ticket campaign'
  },
  {
    id: 'naga-infographic',
    title: 'Naga Infographic Video',
    fileName: 'Naga InfoGraphic.mp4',
    category: 'FULL SCRIPT (ENTIRE WORK)',
    workType: 'entire-script',
    youtubeId: '8JRo_wPG1KM',
    shortDescription: 'Structured business growth, distributor network volume, and supply chain telemetry translated into a crisp narrative.',
    role: 'Scriptwriter — Entire Script Written by Apzal',
    scopeNote: 'Scripting was my entire work (not the editing or any others)',
    thumbnail: 'https://img.youtube.com/vi/8JRo_wPG1KM/hqdefault.jpg',
    gradient: 'from-neutral-950/80 via-amber-950/70 to-[#070A10]',
    href: 'https://youtu.be/8JRo_wPG1KM',
    embedType: 'video',
    details: 'Formulated the structured voiceover narrative and visual synchronization cues to explain complex supply-chain metrics and retail distribution reach. Note: Scripting was written entirely by Apzal; motion graphics and editing were done by the animation studio.',
    metrics: 'Distributor & channel partner communication'
  },
  {
    id: 'naga-video',
    title: 'Naga Brand & Product Video',
    fileName: 'Naga Video.mp4',
    category: 'FULL SCRIPT (ENTIRE WORK)',
    workType: 'entire-script',
    youtubeId: 'tFG_QaK0OVw',
    shortDescription: 'Sensory culinary storytelling highlighting the "single-grain non-stick" product truth for home kitchens.',
    role: 'Scriptwriter — Entire Script Written by Apzal',
    scopeNote: 'Scripting was my entire work (not the editing or any others)',
    thumbnail: 'https://img.youtube.com/vi/tFG_QaK0OVw/hqdefault.jpg',
    gradient: 'from-amber-950/80 via-neutral-900/90 to-[#070A10]',
    href: 'https://youtu.be/tFG_QaK0OVw',
    embedType: 'video',
    details: 'Developed the complete script, visual cues, and consumer culinary dialogue highlighting the sensory contrast between clumped cooking and distinct, fluffy grains. Note: Scripting was written entirely by Apzal; culinary shoot and editing were handled by the production team.',
    metrics: 'Regional broadcast & digital commercial'
  },
  {
    id: 'the-court-promo',
    title: 'The Court — Promo 2',
    fileName: 'The court Promo 2 V5.mp4',
    category: 'CONTRIBUTED WITH TEAM',
    workType: 'contributed',
    youtubeId: '96TH_wQ7SKE',
    shortDescription: 'Psychological character conflict, courtroom verbal sparring, and on-screen Rajsekhar performance.',
    role: 'Contributed: Dialogue & On-Screen Performer (Rajsekhar)',
    scopeNote: 'Collaborative contribution with creative team & director',
    thumbnail: 'https://img.youtube.com/vi/96TH_wQ7SKE/hqdefault.jpg',
    gradient: 'from-amber-950/80 via-neutral-900/90 to-[#070A10]',
    href: 'https://youtu.be/96TH_wQ7SKE',
    embedType: 'promo',
    details: 'Contributed character dialogue beats with the team and performed the on-screen role of Rajsekhar, building moral ambiguity and intense legal drama prior to the courtroom climax.',
    metrics: 'Episodic promo & character teaser'
  },
  {
    id: 'the-court-mock-shoot',
    title: 'The Court — Promo 1 Mock',
    fileName: 'The Court Mock Shoot V2.mp4',
    category: 'CONTRIBUTED WITH TEAM',
    workType: 'contributed',
    youtubeId: 'Xip3lmY22Y0',
    shortDescription: 'Rehearsal blocking, dynamic confrontation pacing, and on-camera character testing.',
    role: 'Contributed: Mock Shoot Rehearsal & Dialogue Testing',
    scopeNote: 'Collaborative contribution with creative team & director',
    thumbnail: 'https://img.youtube.com/vi/Xip3lmY22Y0/hqdefault.jpg',
    gradient: 'from-neutral-950/80 via-amber-950/70 to-[#070A10]',
    href: 'https://youtu.be/Xip3lmY22Y0',
    embedType: 'promo',
    details: 'Participated in on-set mock shoots testing the spoken cadence of legal sparring, camera blocking, and physical delivery for the Rajsekhar character under directorial guidance.',
    metrics: 'Production test & rehearsal asset'
  },
  {
    id: 'jr-tmt-60sec',
    title: 'JR TMT — TVC Commercial',
    fileName: 'JR TMT 60 Sec.mp4',
    category: 'CONTRIBUTED WITH TEAM',
    workType: 'contributed',
    youtubeId: 'tqoE7LIyqXE',
    shortDescription: 'A comedic theft parody where burglars break into a construction site and fail against reinforced steel.',
    role: 'Contributed: Theft Parody Concept & Dialogue Support',
    scopeNote: 'Collaborative contribution with creative team & production unit',
    thumbnail: 'https://img.youtube.com/vi/tqoE7LIyqXE/hqdefault.jpg',
    gradient: 'from-amber-950/80 via-neutral-900/90 to-[#070A10]',
    href: 'https://youtu.be/tqoE7LIyqXE',
    embedType: 'video',
    details: 'Collaborated with the creative director and team on the comedic theft parody premise, writing humorous burglar dialogue beats to demonstrate high tensile strength without dry jargon.',
    metrics: 'Regional digital commercial'
  },
  {
    id: 'jr-ad-copy',
    title: 'JR TMT — LIK Trend Idea',
    fileName: 'Lik - Jr Ad-copy.mp4',
    category: 'FULL SCRIPT (ENTIRE WORK)',
    workType: 'entire-script',
    youtubeId: 'IJKUuFWw3JM',
    shortDescription: 'Entire concept and script for trending social format showcasing steel strength with humor and bite.',
    role: 'Scriptwriter — Entire Concept & Script Written by Apzal',
    scopeNote: 'Scripting was my entire work (not the editing or any others)',
    thumbnail: 'https://img.youtube.com/vi/IJKUuFWw3JM/hqdefault.jpg',
    gradient: 'from-amber-950/80 via-neutral-900/90 to-[#070A10]',
    href: 'https://youtube.com/shorts/IJKUuFWw3JM',
    embedType: 'video',
    details: 'Authored the entire trend concept and script for the LIK campaign cutdown from scratch. Structured a relatable, humorous scenario that effortlessly demonstrates high tensile strength. Note: Apzal wrote the entire script/concept; editing and production were handled by the production unit.',
    metrics: 'Viral social reel & trend campaign'
  },
  {
    id: 'thokku-chutney',
    title: 'Thokku Chutney — SGR 777 Concept',
    fileName: 'THOKKUCHUTNEY.mov',
    category: 'CONTRIBUTED WITH TEAM',
    workType: 'contributed',
    youtubeId: 'QufSBJGygBs',
    shortDescription: 'A dialogue-free visual idea using heist suspense and sound design for a sudden mouthwatering twist.',
    role: 'Contributed: Visual Suspense Hook & Pacing Ideas',
    scopeNote: 'Collaborative contribution with creative team',
    thumbnail: 'https://img.youtube.com/vi/QufSBJGygBs/hqdefault.jpg',
    gradient: 'from-rose-950/80 via-neutral-900/90 to-[#070A10]',
    href: 'https://youtu.be/QufSBJGygBs',
    embedType: 'concept',
    details: 'Collaborated with the creative team on the silent visual suspense treatment: building tension like a vault infiltration before humorously revealing a late-night kitchen raid for spicy Thokku.',
    metrics: 'Feed-stopping social concept'
  }
];

export const CAPABILITIES = [
  {
    id: 'performance-marketing',
    title: 'PERFORMANCE MARKETING',
    description: 'Data-driven paid media execution focusing on ROAS, acquisition funnels, audience testing, and conversion optimization.',
    iconName: 'Target'
  },
  {
    id: 'creative-strategy',
    title: 'CREATIVE STRATEGY',
    description: 'Transforming product truths and business goals into cohesive narrative hooks that stop scrolling and provoke action.',
    iconName: 'Lightbulb'
  },
  {
    id: 'scriptwriting',
    title: 'SCRIPTWRITING',
    description: 'Crafting brand films, video commercials, animated explainers, and corporate narratives with clear narrative arcs.',
    iconName: 'PenTool'
  },
  {
    id: 'dialogue',
    title: 'DIALOGUE',
    description: 'Writing naturalistic, punchy conversational beats and character-driven interactions tailored for screen impact.',
    iconName: 'MessageSquare'
  },
  {
    id: 'product-storytelling',
    title: 'PRODUCT STORYTELLING',
    description: 'Distilling complex functional benefits into authentic human stories that make products memorable.',
    iconName: 'BookOpen'
  },
  {
    id: 'web-and-wordpress',
    title: 'WORDPRESS & WEB PRESENCE',
    description: 'CMS management, responsive web structuring, content architecture, and conversion-focused web presence.',
    iconName: 'Globe'
  },
  {
    id: 'analytics-and-reporting',
    title: 'ANALYTICS AND REPORTING',
    description: 'Campaign telemetry, tracking tags, GA4 attribution, metric dashboards, and actionable weekly post-mortems.',
    iconName: 'BarChart3'
  },
  {
    id: 'video-collaboration',
    title: 'VIDEO COLLABORATION',
    description: 'Seamless cross-discipline teamwork with directors, cinematographers, animators, sound designers, and editors.',
    iconName: 'Film'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'lalithaa-jewellery',
    title: 'LALITHAA JEWELLERY — TANJORE AI FILM',
    fileName: 'Lalitha Tajore aii.mp4',
    oneLineSummary: 'a Tanjore heritage-led opening film',
    context: 'Opening of a new showroom chapter requiring an emotional tribute to Tanjore heritage goldsmithing.',
    objective: 'Establish emotional cultural authority by spotlighting ancestral jewelry craftsmanship rather than just retail pricing.',
    theIdea: 'A visual celebration moving between ancient temple stone carvings, temple dancers, and the delicate goldsmithing that mirrors sacred art.',
    myContribution: 'Scriptwriter — Entire Script Written by Apzal. Wrote the entire poetic narrative, spoken rhythm, and cultural heritage script. Note: Scripting was my entire work; editing and AI post-production were executed by the production team.',
    contributionType: 'entire-script',
    scopeNote: 'Scripting was my entire work (not the editing or any others)',
    teamCollaboration: 'Worked alongside cultural consultants and client leadership; production and visual generation executed by the video team.',
    whatWasProduced: 'Cinematic brand opening film for showroom digital displays and launch campaign.',
    publicProof: 'Featured on showroom launch screens and brand video assets.',
    whatILearned: 'High-ticket traditional luxury purchases are driven by ancestral pride, tactile authenticity, and sacred cultural respect.'
  },
  {
    id: 'naga-corporate-and-infographic',
    title: 'NAGA CORPORATE & INFOGRAPHIC',
    fileName: 'Naga Corporate.mp4 & Naga InfoGraphic.mp4',
    oneLineSummary: 'heritage, milling infrastructure, and supply chain telemetry',
    context: 'Major regional food milling powerhouse requiring institutional storytelling for corporate stakeholders and nationwide distribution partners.',
    objective: 'Craft authoritative B2B institutional scripts translating multi-decade lineage, massive milling capacity, and distributor reach into memorable narratives.',
    theIdea: 'Two distinct films: a high-trust corporate film on legacy and green milling, paired with a dynamic infographic film charting logistics and channel reach.',
    myContribution: 'Scriptwriter — Entire Scripts Written by Apzal. Developed the comprehensive scripts for both the corporate institutional film and the distributor infographic film. Note: Scripting was my entire work; animation and video editing were handled by the production unit.',
    contributionType: 'entire-script',
    scopeNote: 'Scripting was my entire work (not the editing or any others)',
    teamCollaboration: 'Collaborated with corporate leadership for operational accuracy; visual animation and editing handled by the studio team.',
    whatWasProduced: 'Corporate brand film and structured distributor infographic video.',
    publicProof: 'Utilized across investor relations, distributor summits, and brand showcases.',
    whatILearned: 'Corporate scripts succeed when cold business statistics are grounded in human trust, reliability, and generational integrity.'
  },
  {
    id: 'naga-sooji',
    title: 'NAGA SOOJI & BRAND VIDEO',
    fileName: 'Naga Video.mp4',
    oneLineSummary: 'a product demo built from process and product truth',
    context: 'Staple flour and semolina category where packaged items are frequently assumed to be identical commodities.',
    objective: 'Visually demonstrate the non-sticky, distinct grain separation that home cooks demand in authentic upma preparation.',
    theIdea: 'A macro culinary demo combining precision wheat sorting, pristine milling, and steam rising from freshly cooked, non-clumping grains.',
    myContribution: 'Scriptwriter — Entire Script Written by Apzal. Wrote the complete culinary narrative, storyboard pacing cues, and the "single-grain non-stick" product truth script. Note: Scripting was my entire work; cooking demo filming and editing were handled by the production crew.',
    contributionType: 'entire-script',
    scopeNote: 'Scripting was my entire work (not the editing or any others)',
    teamCollaboration: 'Partnered with the food styling unit, macro lens videographer, and brand manager.',
    whatWasProduced: 'Digital product film and television commercial spot.',
    publicProof: 'Broadcasted across regional food media and digital campaigns.',
    whatILearned: 'Product demonstrations succeed when they zero in on the single sensory frustration the consumer encounters in the kitchen.'
  },
  {
    id: 'jr-tmt',
    title: 'JR TMT (60 SEC & AD-COPY)',
    fileName: 'JR TMT 60 Sec.mp4 & Lik - Jr Ad-copy.mp4',
    oneLineSummary: 'a theft parody built around steel strength',
    context: 'South Indian regional construction and TMT steel bar market where all brands claimed identical technical certifications.',
    objective: 'Create an unskippable video ad highlighting high tensile strength and security without boring industrial jargon.',
    theIdea: 'A comedic theft parody where professional burglars plan an elaborate midnight break-in, only to have their hydraulic cutters fail comically against JR TMT reinforced bars.',
    myContribution: 'Contributed with Team. Collaborated on the theft parody concept, scripted the burglar dialogue beats, and drafted the broadcast ad copy.',
    contributionType: 'contributed',
    scopeNote: 'Collaborative contribution with creative team',
    teamCollaboration: 'Collaborated with the creative director, production crew, and stunt coordinator to ensure physical comedy matched the safety requirements.',
    whatWasProduced: '45-second commercial film, 15-second YouTube bumpers, and regional social cutdowns.',
    publicProof: 'Screened across regional channels and client digital social assets.',
    whatILearned: 'Humor and unexpected genre twists in industrial B2B/B2C categories drastically elevate recall over technical spec sheets.'
  },
  {
    id: 'the-court',
    title: 'THE COURT (PROMO & MOCK SHOOT)',
    fileName: 'The court Promo 2 V5.mp4 & The Court Mock Shoot V2.mp4',
    oneLineSummary: 'character conflict, dialogue and performance',
    context: 'Entertainment legal drama seeking an intense, provocative teaser trailer to drive streaming viewership.',
    objective: 'Build suspense and moral ambiguity through raw verbal sparring between opposing counsels.',
    theIdea: 'A rapid-fire dialogue battle where ethical lines blur, shot with intense close-ups and heavy ambient tension.',
    myContribution: 'Contributed with Team. Contributed character dialogue with the writing team and performed the on-screen role of Rajsekhar across mock shoots and the teaser promo.',
    contributionType: 'contributed',
    scopeNote: 'Collaborative contribution with creative team',
    teamCollaboration: 'Acted opposite lead performers under directorial guidance, collaborating with dialogue coaches and audio recordists.',
    whatWasProduced: 'Official promotional teaser trailer and character promo video.',
    publicProof: 'Released across promotional digital channels and streaming previews.',
    whatILearned: 'Performing on camera sharpens written dialogue: you immediately feel which words breathe naturally and which feel artificial.'
  },
  {
    id: 'thokku-chutney',
    title: 'THOKKU CHUTNEY',
    fileName: 'THOKKUCHUTNEY.mov',
    oneLineSummary: 'a dialogue-free visual reveal',
    context: 'Traditional spicy South Indian condiment facing fast-scrolling mobile feeds where audio is frequently muted.',
    objective: 'Generate instant mouthwatering desire within 2 seconds without relying on spoken dialogue or voiceover.',
    theIdea: 'A high-suspense, dark procedural setup mimicking a vault heist that humorously turns out to be someone sneaking into the kitchen for spicy Thokku.',
    myContribution: 'Contributed with Team. Contributed the dialogue-free comedic suspense hook, visual framing ideas, and dynamic sound cues with the team.',
    contributionType: 'contributed',
    scopeNote: 'Collaborative contribution with creative team',
    teamCollaboration: 'Collaborated with the editor, sound designer, and tabletop food lighting crew.',
    whatWasProduced: '15-second punchy digital reel and social video ad.',
    publicProof: 'Shared across social video campaigns.',
    whatILearned: 'Silent visual comedy combined with crisp foley sound design can cross language boundaries effortlessly.'
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: 'DEC 2025 — PRESENT',
    company: 'HEEDS AD TECH SOLUTIONS',
    role: 'Performance Marketer',
    description: 'Contribute to performance ad tech initiatives, collaborate on multi-channel campaign architectures, support programmatic growth strategies, review analytics funnels, and develop creative testing frameworks.',
    responsibilities: [
      'Contribute to programmatic and digital acquisition experiments across channels',
      'Collaborate with creative design and copy teams to ideate high-converting ad variations',
      'Support campaign reporting, CPA tracking, and conversion funnel optimization',
      'Review audience segmentation logic and participate in strategy ideation sessions'
    ]
  },
  {
    period: 'APR 2025 — AUG 2025',
    company: 'AMBER CREATIVE & DIGITAL SUPPORT',
    role: 'Digital Marketing Executive',
    description: 'Managed paid acquisition across Meta & Google Ads, assisted in client creative briefings, optimized landing pages, and generated performance telemetry.',
    responsibilities: [
      'Set up and monitored paid social and search campaigns for regional business clients',
      'Wrote compelling ad copy variants and creative briefs for video editors',
      'Conducted A/B tests on landing pages to decrease bounce rates and increase lead capture',
      'Synthesized monthly client performance reports with clear actionable recommendations'
    ]
  },
  {
    period: 'AUG 2024 — FEB 2025',
    company: 'FREELANCE DIGITAL MARKETING',
    role: 'Freelancer',
    description: 'Provided end-to-end digital growth, WordPress website structuring, copy development, and performance marketing for independent enterprises.',
    responsibilities: [
      'Supported local businesses in launching responsive WordPress websites and optimizing local search SEO',
      'Managed ad budgets with rigorous focus on high-intent lead generation',
      'Drafted commercial scripts, promotional video concepts, and social content calendars'
    ]
  },
  {
    period: 'JAN 2022 — JAN 2023',
    company: 'AMAZON',
    role: 'Fulfillment Center Associate',
    description: 'Executed high-speed inventory processing, quality assurance, fulfillment metrics, and standard operating procedures.',
    responsibilities: [
      'Maintained peak fulfillment accuracy under stringent operational timeframes',
      'Followed strict inventory safety protocols and continuous process improvement routines',
      'Developed deep operational discipline and appreciation for high-throughput supply chains'
    ]
  }
];

export const SKILLS_LIST: string[] = [
  'GOOGLE ADS',
  'META ADS',
  'WORDPRESS',
  'GOOGLE ANALYTICS',
  'MARKETING ANALYTICS',
  'PROGRAMMATIC ADVERTISING',
  'GROWTH MARKETING',
  'PAID MEDIA',
  'CONTENT STRATEGY',
  'VIDEO COLLABORATION',
  'HTML',
  'CSS',
  'SCRIPTWRITING'
];

export const LINKEDIN_POSTS: ProofPost[] = [
  {
    id: 'entry-07-on-set',
    entryNumber: 'Entry 07',
    title: 'One Week. One Lesson. One Experience. — Entry 07',
    summary: 'I went from staring at ad dashboards to standing on a studio set. Lighting is everything: watching one shift in light completely change the mood of the shot hit different. Direction is a skill — telling someone where to look, how to hold their posture. BTS is where the magic actually happens.',
    category: 'On-Set Production & Scripting',
    date: '3w ago',
    likes: 3,
    comments: 0,
    shares: 0,
    impressions: 81,
    tags: ['#BehindTheScenes', '#OnSet', '#ContentCreation', '#ScriptWriting', '#VideoProduction'],
    link: 'https://www.linkedin.com/in/apzal-rahman/recent-activity/all/'
  },
  {
    id: 'entry-06-zoho-social',
    entryNumber: 'Entry 06',
    title: 'One Week. One Lesson. One Experience. — Entry 06',
    summary: 'I scheduled a post and got my account suspended on X. Here is what happened: multiple requests lined up for the same time slot triggered a spam flag. Explained legitimate scheduling through official API and got it restored. What impressed me: Zoho Social reporting and hashtag analytics across all channels in one dashboard.',
    category: 'Social Media Management & Analytics',
    date: '1mo ago',
    likes: 3,
    comments: 0,
    shares: 0,
    impressions: 142,
    tags: ['#ZohoSocial', '#MarTech', '#ContentOperations', '#SocialAnalytics'],
    link: 'https://www.linkedin.com/in/apzal-rahman/recent-activity/all/'
  },
  {
    id: 'entry-05-selldo-crm',
    entryNumber: 'Entry 05',
    title: 'One Week. One Lesson. One Experience. — Entry 05',
    summary: 'When SellDo CRM, GA4, and GTM decided to gang up on me. Duplicate trigger issues, GTM-GA4 capturing, and SellDo stubbornly empty. Found that SellDo needed an SSID parameter directly in the UTM link. Next morning leads started flowing. Lesson: sometimes the fix works before you understand why — debug, adapt, bring reinforcements.',
    category: 'Attribution & Tracking Architecture',
    date: '2mo ago',
    likes: 6,
    comments: 0,
    shares: 0,
    impressions: 83,
    tags: ['#Analytics', '#GTM', '#GA4', '#CRM', '#MarTech', '#ProblemSolving'],
    link: 'https://www.linkedin.com/in/apzal-rahman/recent-activity/all/'
  },
  {
    id: 'entry-04-magnific-ai',
    entryNumber: 'Entry 04',
    title: 'One Week. One Lesson. One Experience. — Entry 04',
    summary: 'We were making an AI Ad for a client. Script was ready with Creative Director Vishnu Priya. Used Magnific AI: running multiple models simultaneously with the same prompt to compare outputs side-by-side. Then video generation (720p single-image vs 1080p start+end frames). Quality checking frame by frame is where real work lives.',
    category: 'AI Ad Production & Direction',
    date: '2mo ago',
    likes: 7,
    comments: 0,
    shares: 0,
    impressions: 163,
    tags: ['#MagnificAI', '#Freepik', '#AIVideo', '#CreativeDirection', '#ScriptWriting'],
    link: 'https://www.linkedin.com/in/apzal-rahman/recent-activity/all/'
  },
  {
    id: 'entry-03-fmcg-influencer',
    entryNumber: 'Entry 03',
    title: 'One Week. One Lesson. One Experience. — Entry 03',
    summary: 'We ran an influencer marketing campaign for an FMCG brand. Successful, but last-minute chaos. Operations Head Sarath Sir gave us a masterclass: 1. Always build a buffer into deadlines. 2. Send videos to the client one by one. 3. All videos ready BEFORE the first upload date. 4. Treat influencers like a timeline. Success despite bad process is still bad process.',
    category: 'Influencer Campaign Operations',
    date: '2mo ago',
    likes: 8,
    comments: 1,
    shares: 0,
    impressions: 142,
    tags: ['#InfluencerMarketing', '#ProcessDiscipline', '#CampaignManagement', '#FMCG'],
    link: 'https://www.linkedin.com/in/apzal-rahman/recent-activity/all/'
  },
  {
    id: 'scriptwriting-truth',
    entryNumber: 'Editorial',
    title: 'Scriptwriting is fun. Scriptwriting is frustrating. And I wouldn\'t trade it for anything.',
    summary: 'A few months ago I was purely a performance marketer. Numbers. CTR. ROAS. Optimize. Repeat. Then I started writing scripts. The draft cycle is a journey: Draft 1 -> Draft 2 -> Final -> Final v1 -> Final v2 -> FINAL FINAL. When the AI video comes to life, there is no feeling like it. Data shows what works; a great script makes people feel something.',
    category: 'Creative Evolution & Storytelling',
    date: '3mo ago',
    likes: 5,
    comments: 0,
    shares: 0,
    impressions: 156,
    tags: ['#ScriptWriting', '#PerformanceMarketing', '#Storytelling', '#CreativeJourney'],
    link: 'https://www.linkedin.com/in/apzal-rahman/recent-activity/all/'
  },
  {
    id: 'hotstar-the-court',
    entryNumber: 'Hotstar Promo',
    title: 'The Court Promo for Hotstar — Concept, Script & Performance',
    summary: 'One of the projects I\'m especially proud of: an initial promo idea and script for Hotstar series THE COURT. Something that started as a concept and was brought to life with our amazing team at Heeds. Got to work with senior actors, contribute character dialogue, and perform the Rajsekhar role on screen.',
    category: 'Hotstar Promo / Creative Case',
    date: 'Recent',
    likes: 11,
    comments: 1,
    shares: 1,
    impressions: 180,
    tags: ['#Hotstar', '#Promo', '#ScriptWriting', '#Ideation', '#CreativeJourney', '#Teamwork'],
    link: 'https://www.linkedin.com/in/apzal-rahman/recent-activity/all/'
  },
  {
    id: 'stackadapt-programmatic',
    entryNumber: 'DSP Learning',
    title: 'I opened StackAdapt for the first time and thought I was in the wrong place.',
    summary: 'DSP, RTB, PMP, CPM, CPCV, CPA... Diving into programmatic advertising architectures, real-time bidding algorithms, audience graph targeting, and multi-channel programmatic display.',
    category: 'Programmatic Advertising & DSP',
    date: 'Recent',
    likes: 5,
    comments: 0,
    shares: 0,
    impressions: 140,
    tags: ['#StackAdapt', '#Programmatic', '#DSP', '#AdTech', '#RealTimeBidding'],
    link: 'https://www.linkedin.com/in/apzal-rahman/recent-activity/all/'
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'google-digital',
    title: 'GOOGLE DIGITAL MARKETING',
    issuer: 'Google Digital Academy',
    category: 'Paid Search, Display & Analytics',
    year: 'Certified',
    skillsGained: 'Search Ads, Smart Bidding, Measurement & Attribution'
  },
  {
    id: 'trade-desk',
    title: 'THE TRADE DESK',
    issuer: 'The Trade Desk Edge Academy',
    category: 'Programmatic Trading & DSP',
    year: 'Certified',
    skillsGained: 'Audience Targeting, Real-Time Bidding, Inventory Quality'
  },
  {
    id: 'stackadapt',
    title: 'STACKADAPT',
    issuer: 'StackAdapt Academy',
    category: 'Programmatic & Native Advertising',
    year: 'Certified',
    skillsGained: 'Multi-Channel Programmatic, Native Placements, Retargeting'
  },
  {
    id: 'data-analytics',
    title: 'DATA ANALYTICS',
    issuer: 'Marketing Measurement Institute',
    category: 'Attribution & Performance Funnels',
    year: 'Certified',
    skillsGained: 'Cohort Retention, LTV/CAC Analysis, GA4 Event Schemas'
  }
];

export const WEBSITES: WebsiteItem[] = [
  {
    id: 'diamond-packers',
    name: 'Diamond Packers & Movers',
    domain: 'diamondpackers.in',
    redirectUrl: 'https://diamondpackers.in/',
    roleLabel: 'Digital Presence & Lead Conversion Architecture',
    tagline: 'Leading Packers & Movers in Coimbatore • Fast, Safe & Secure Relocation',
    themeColor: '#1E3A8A',
    category: 'Logistics & Relocation',
    image: '/assets/websites/diamond-packers.jpg',
    clientLocation: 'Coimbatore, Tamil Nadu',
    features: ['Callback Lead Funnel ("Need Expert Home Movers?")', 'Household & Industrial Transit Calculators', '5+ Years Established Service Trust', 'Route Tracking & Safety Assurance'],
    mockupType: 'logistics'
  },
  {
    id: 'pico-computers',
    name: 'Pico Computers',
    domain: 'picocomputers.in',
    redirectUrl: 'https://www.picocomputers.in/',
    roleLabel: 'Website Project & Catalog Support',
    tagline: 'Computer Repair, High-Performance Gaming Rigs & Hardware Services',
    themeColor: '#047857',
    category: 'Tech & Hardware',
    image: '/assets/websites/pico-computers.jpg',
    clientLocation: 'Podanur Main Road, Coimbatore',
    features: ['Computer & Laptop Repair Service Desk', 'Gaming Rig Configurator & GPU Inventory', 'Component Matrix (SSD, Motherboards, Cooling)', 'Quick WhatsApp & Phone Helpline (+91 8428949396)'],
    mockupType: 'tech'
  },
  {
    id: 'rahman-steels',
    name: 'Rahman Steels Erode',
    domain: 'rahmansteelserode.com',
    redirectUrl: 'https://rahmansteelserode.com/',
    roleLabel: 'Bakeware E-Commerce & Catalog Architecture',
    tagline: 'Aluminium Baking Moulds, Cake Tins, Pastry Accessories & Kitchenware',
    themeColor: '#B45309',
    category: 'Bakeware E-Commerce',
    image: '/assets/websites/rahman-steels.jpg',
    clientLocation: 'Erode, Tamil Nadu',
    features: ['Aluminium Baking Moulds & Tins Catalog', 'Cash on Delivery (COD) Pan-India Integration', 'Decorating Tools, Cookie & Pastry Tins', '15-Day Return Guarantee & ₹49 Delivery'],
    mockupType: 'industrial'
  },
  {
    id: 'raham-group',
    name: 'Raham Group',
    domain: 'rahamgroup.com',
    redirectUrl: 'https://rahamgroup.com/',
    roleLabel: 'Authentic Food E-Commerce & Web Architecture',
    tagline: 'Taste of Coimbatore • Authentic South Indian Snacks, Pure Spices & Dry Fruits',
    themeColor: '#6B21A8',
    category: 'Food & Gourmet Spices',
    image: '/assets/websites/raham-group.jpg',
    clientLocation: 'Coimbatore, Tamil Nadu',
    features: ['Traditional Healthy Snacks & Murukku Store', 'Pure Spices, Blends & Seasonings Catalog', 'Premium Cashews & Dry Fruits Storefront', 'Welcome Offer 10% Off & Free Shipping Over ₹999'],
    mockupType: 'corporate'
  },
  {
    id: 'kani-tours',
    name: 'Kani Tours & Travels',
    domain: 'kanitours.com',
    redirectUrl: 'https://kanitours.com/',
    roleLabel: 'Sri Lanka Tourism Portal & Itinerary Flow',
    tagline: 'Discover Sri Lanka • Wildlife Leopard Safaris, Authentic Tastes & Local Vibes',
    themeColor: '#0E7490',
    category: 'Tourism & Holidays',
    image: '/assets/websites/kani-tours.jpg',
    clientLocation: 'Sri Lanka (International)',
    features: ['Wildlife Safari & Heritage Tour Packages', 'Popular Sri Lankan Destination Guides', 'Instant Booking & Inquiry Flow (+94702768807)', 'Curated Cultural & Culinary Itineraries'],
    mockupType: 'tourism'
  },
  {
    id: 'kaanakinav-travels',
    name: 'Kaanakinav Tour and Travels',
    domain: 'kaanakinavtravels.com',
    redirectUrl: 'https://kaanakinavtravels.com/',
    roleLabel: 'Ooty Tourist Fleet & Booking Flow Support',
    tagline: 'Tempo Traveller, Innova, Swift, Glanza & Hill Station Taxi Service in Ooty',
    themeColor: '#831843',
    category: 'Cab & Fleet Rentals',
    image: '/assets/websites/kaanakinav-travels.jpg',
    clientLocation: 'Ooty & Nilgiris, Tamil Nadu',
    features: ['Ooty Hill Station Fleet Showcase (Innova, Tempo, Swift)', 'Direct One-Tap Phone Contact & Instant Booking', 'Airport, Station & Sightseeing Transfers', 'Transparent Tariff Structure by Kilometer'],
    mockupType: 'travel'
  },
  {
    id: '30x40-design-studio',
    name: '30x40 Design Studio',
    domain: '30x40designstudio.com',
    redirectUrl: 'https://30x40designstudio.com/',
    roleLabel: 'Architectural Portfolio & Visual Showcase',
    tagline: 'Innovative Architectural Designs, Bespoke Luxury Villas & Modern Living Spaces',
    themeColor: '#374151',
    category: 'Architecture & Design',
    image: '/assets/websites/30x40-design-studio.jpg',
    clientLocation: 'Architecture & Planning Studio',
    features: ['Full-Bleed Modern Villa & Pool Visual Showcase', 'Consultation & Hiring Quote Funnel (+91 88386 56279)', 'Residential Architecture Portfolio Gallery', 'Partner Trust Roster & Project Inquiries'],
    mockupType: 'architecture'
  },
  {
    id: 'twylla',
    name: 'Twylla',
    domain: 'twylla.co',
    redirectUrl: 'https://twylla.co/',
    roleLabel: 'Luxury Couture E-Commerce & Brand Support',
    tagline: 'Designed Around Her Rhythm • Poetry Tailored Handcrafted Festive & Ethnic Wear',
    themeColor: '#7A2248',
    category: 'Fashion & E-Commerce',
    image: '/assets/websites/twylla.jpg',
    clientLocation: 'Luxury Slow Fashion Brand',
    features: ['Bespoke Handcrafted Kurti & Silk Catalog', 'Editorial High-Fashion Lookbook Experience', 'Curated Festive & Heritage Collections', 'Size Guide, Custom Fit & Frictionless Cart Flow'],
    mockupType: 'fashion'
  }
];

export const BIO_DATA = {
  name: 'APZAL RAHMAN',
  title: 'PERFORMANCE MARKETER / CREATIVE STRATEGIST',
  positioning: 'Performance Marketer with a Creative Edge',
  headline: 'I turn product truths and business problems into stories people remember.',
  subtitle: 'Paid media, creative strategy, scriptwriting and digital growth.',
  whatIDoHeading: 'WHAT I DO',
  whatIDoSubhead: 'I connect audience thinking, business goals and memorable ideas.',
  teamStatement: 'Creative work developed with the support of my team.',
  roleTrustStatement: 'MY ROLE IS CLEARLY IDENTIFIED ON EVERY PROJECT.',
  contactHeadline: "LET'S BUILD SOMETHING PEOPLE REMEMBER.",
  footerLine: 'PERFORMANCE MARKETING WITH A CREATIVE EDGE.',
  email: 'apzalrahman@gmail.com',
  linkedInUrl: 'https://www.linkedin.com/in/apzal-rahman/',
  gitHubUrl: 'https://github.com/apzal-rahman',
  driveFolderUrl: 'https://drive.google.com/drive/folders/1MwVH-thKBf10g9onRp7_pN1CacNQC5X3'
};
