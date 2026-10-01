export const socialLinks = [
  { label: "Discord", href: "https://discord.gg/fSpF2wZqDc" },
  {
    label: "Instagram",
    href: "https://www.instagram.com/nsbeuregina?igsh=MXc5c3dlcGx3ZWdxOQ==",
  },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/nsbe-uregina/" },
];

export const chapterLinks = {
  email: "nsbeuregina@gmail.com",
  emailHref: "mailto:nsbeuregina@gmail.com",
  executiveApplication:
    "https://docs.google.com/forms/d/e/1FAIpQLScO5gEwyBOiJJwHnFny_fdo8nVEZkAOefbVONGghurtXFaFvQ/viewform",
  membershipApplication:
    "https://docs.google.com/forms/d/e/1FAIpQLScIXXGYmp4fluEB8RTMfPeXFnh_ppuvYuinD1Svw1oUxgjpuA/viewform",
};

export type Executive = {
  role: string;
  name?: string;
  program?: string;
  image?: string;
  focus?: string;
};

export const executives: Executive[] = [
  {
    role: "President",
    name: "Godwill",
    program: "Electrical/Electronics Engineering",
    image: "/media/executives/godwill.jpg",
    focus: "Presides over chapter meetings, represents NSBE URegina to URSA and NSBE National, and oversees the chapter strategic plan.",
  },
  {
    role: "Vice President, Finance",
    name: "Nathan",
    program: "Software Engineering",
    image: "/media/executives/nathan.jpg",
    focus: "Maintains the chapter's financial records, prepares the annual budget, and reports on chapter finances at the Annual General Meeting.",
  },
  {
    role: "Vice President, University Affairs",
    name: "Grace",
    program: "Energy Systems Engineering",
    image: "/media/executives/grace.jpg",
    focus: "Liaises with URSA and University of Regina departments while supporting student advocacy and campus relationships.",
  },
  {
    role: "Vice President, External",
    name: "Eric",
    program: "Data Science",
    image: "/media/executives/eric.jpg",
    focus: "Builds relationships with sponsors, industry partners, and the wider Black professional community.",
  },
  {
    role: "Vice President, Events and Communications",
    name: "Gianna",
    program: "Electrical/Electronics Engineering",
    image: "/media/executives/gianna.jpg",
    focus: "Plans and delivers chapter events while coordinating member communications and event outreach.",
  },
  {
    role: "Policy Director",
    name: "Damola",
    program: "Energy Systems Engineering",
    image: "/media/executives/damola.jpg",
    focus: "Tracks chapter compliance with URSA and NSBE National governance requirements and supports constitutional and policy review.",
  },
  {
    role: "Secretary",
    name: "Chayil",
    program: "Electrical/Electronics Engineering",
    image: "/media/executives/chayil.jpg",
    focus: "Records and distributes meeting minutes and maintains the chapter's official documents and records.",
  },
  {
    role: "Vice President, Technologies",
    name: "Philip",
    program: "Software Engineering",
    image: "/media/executives/philip.jpg",
    focus: "Oversees the chapter website, software, digital tools, and technology strategy while supporting technical initiatives.",
  },
  {
    role: "Faculty of Engineering Representative",
    name: "Damilola",
    program: "Energy Systems Engineering",
    image: "/media/executives/damilola.jpg",
    focus: "Represents engineering students and serves as a liaison with the Faculty of Engineering and Applied Science.",
  },
  {
    role: "Technical Director",
    name: "Fareed",
    program: "Electrical/Electronics Engineering",
    image: "/media/executives/fareed.jpg",
    focus: "Leads technical programming, workshops, skill-building initiatives, and chapter technology projects.",
  },
  {
    role: "Social Media Director",
    focus: "Manages chapter social channels, content planning, and online community engagement.",
  },
  {
    role: "Media Director",
    focus: "Coordinates event photography, video, visual storytelling, and the chapter media archive.",
  },
];

export type ChapterEvent = {
  id: number;
  title: string;
  date: string;
  displayDate: string;
  time: string;
  location: string;
  category: "Community" | "Career" | "Academic" | "Networking";
  status: "Upcoming" | "Past";
  description: string;
  highlights?: string[];
  registrationUrl?: string;
  attendanceNote?: string;
};

export const chapterEvents: ChapterEvent[] = [
  {
    id: 1,
    title: "2026 Annual General Meeting & Chapter Kickoff",
    date: "2026-09-29",
    displayDate: "September 29, 2026",
    time: "6:00–8:30 PM",
    location: "ED 114 — University of Regina",
    category: "Community",
    status: "Upcoming",
    description: "Help launch chapter year two with community-building, chapter updates, member participation, elections, and a shared vision for NSBE URegina's 2026–27 year.",
    highlights: [
      "Registration, opening remarks, an icebreaker, food, and networking",
      "Year One review plus finance, university affairs, and external-opportunity updates",
      "Member motions and elections for First-Year Representative and Graphics Coordinator",
      "A member brainstorm on events, academic support, industry connections, and campus impact",
    ],
    attendanceNote: "No advance registration is listed. Doors open at 6:00 PM in ED 114.",
  },
];

export type Resource = {
  title: string;
  category: "Career" | "Academic" | "Scholarships" | "Wellness";
  description: string;
  format: string;
  href?: string;
};

export const resources: Resource[] = [
  { title: "NSBE Resume Checklist", category: "Career", description: "A concise checklist for building an internship-ready engineering resume.", format: "PDF placeholder" },
  { title: "Interview Preparation Guide", category: "Career", description: "Behavioural and technical interview prompts with preparation notes.", format: "PDF placeholder" },
  { title: "Internship Search Board", category: "Career", description: "A maintained collection of engineering and technology opportunities.", format: "Link placeholder" },
  { title: "Scholarship Directory", category: "Scholarships", description: "Awards and scholarships relevant to Black students in STEM.", format: "Spreadsheet placeholder" },
  { title: "Peer Tutoring Directory", category: "Academic", description: "Connect with members offering support across core engineering courses.", format: "Directory placeholder" },
  { title: "Study Planning Template", category: "Academic", description: "A weekly planning template for balancing labs, lectures, and projects.", format: "Template placeholder" },
  { title: "Campus Wellness Services", category: "Wellness", description: "Quick access to counselling, accessibility, and student support resources.", format: "Link placeholder" },
  { title: "NSBE National Resources", category: "Scholarships", description: "National programs, conferences, scholarships, and membership opportunities.", format: "Link placeholder", href: "https://www.nsbe.org/" },
];

export const faqs = [
  { question: "Who can join NSBE URegina?", answer: "Membership is open to any University of Regina student who supports NSBE's mission, without discrimination on any protected characteristic." },
  { question: "Do I need to be an engineering student?", answer: "No. NSBE URegina welcomes students across STEAM disciplines: science, technology, engineering, arts, and mathematics." },
  { question: "Is there a membership fee?", answer: "No. NSBE URegina chapter membership has no dues requirement." },
  { question: "How do I hear about upcoming events?", answer: "Join the chapter Discord and follow Instagram or LinkedIn. Event registration links will also appear on the Events page." },
];

export const galleryItems = [
  { src: "/media/events/fall-kickoff/mixer-1.jpg", alt: "NSBE URegina students posing together after a mixer", title: "Fall Kickoff & Mixer", category: "Community" },
  { src: "/media/events/fall-kickoff/mixer-2.jpg", alt: "Students completing activities during an NSBE URegina mixer", title: "Fall Kickoff & Mixer", category: "Community" },
  { src: "/media/events/fall-kickoff/mixer-3.jpg", alt: "Students sharing food and conversation at an NSBE URegina mixer", title: "Fall Kickoff & Mixer", category: "Community" },
];
