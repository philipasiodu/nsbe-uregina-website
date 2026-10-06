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
    name: "Mal Giesbrecht",
    program: "Sociology & Public Relations",
    image: "/media/executives/mal-giesbrecht.jpg",
    focus: "Manages chapter social channels, content planning, and online community engagement.",
  },
  {
    role: "Media Director",
    name: "Tijesunimi Afolabi",
    program: "Arts and Science",
    image: "/media/executives/tijesunimi.jpg",
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
  { src: "/media/gallery/interview-workshop/facilitators.jpeg", alt: "Two NSBE URegina workshop facilitators preparing to lead an interview skills session", title: "Interview Skills Workshop", category: "Professional Development" },
  { src: "/media/gallery/interview-workshop/presentation.jpeg", alt: "A facilitator presenting interview preparation guidance to NSBE URegina students", title: "Interview Skills Workshop", category: "Professional Development" },
  { src: "/media/gallery/interview-workshop/workshop-room.jpeg", alt: "Students participating in an NSBE URegina interview skills workshop", title: "Interview Skills Workshop", category: "Professional Development" },
  { src: "/media/gallery/interview-workshop/interview-practice.jpeg", alt: "Two participants practising an interview conversation during an NSBE URegina workshop", title: "Interview Skills Workshop", category: "Professional Development" },
  { src: "/media/gallery/interview-workshop/participants.jpeg", alt: "Students listening during an NSBE URegina professional development session", title: "Interview Skills Workshop", category: "Professional Development" },
  { src: "/media/gallery/interview-workshop/speaker-session.jpeg", alt: "An NSBE URegina facilitator leading a career-readiness presentation", title: "Career Readiness", category: "Career Development" },
  { src: "/media/gallery/interview-workshop/learning-session.jpeg", alt: "Students gathered for a collaborative professional learning session", title: "Learning Together", category: "Collaborative Learning" },
  { src: "/media/gallery/interview-workshop/mock-interview.jpeg", alt: "Two NSBE URegina members demonstrating a mock interview", title: "Practice in Action", category: "Career Development" },
  { src: "/media/gallery/interview-workshop/engaged-members.jpeg", alt: "Members listening closely during a chapter learning session", title: "Member Learning", category: "Collaborative Learning" },
  { src: "/media/gallery/campus-outreach/chapter-booth.jpeg", alt: "NSBE URegina representatives welcoming students at the chapter information booth", title: "Campus Outreach", category: "Community & Outreach" },
  { src: "/media/gallery/campus-outreach/student-conversation.jpeg", alt: "Chapter representatives speaking with a student at the NSBE URegina information booth", title: "Campus Outreach", category: "Community & Outreach" },
  { src: "/media/gallery/campus-outreach/welcome-table.jpeg", alt: "Students gathering around the NSBE URegina outreach table", title: "Campus Outreach", category: "Community & Outreach" },
  { src: "/media/gallery/campus-outreach/student-engagement.jpeg", alt: "Students taking part in an activity at the NSBE URegina campus booth", title: "Campus Outreach", category: "Community & Outreach" },
  { src: "/media/gallery/campus-outreach/chapter-representatives.jpeg", alt: "Two NSBE URegina chapter representatives standing beside the outreach display", title: "Campus Outreach", category: "Community & Outreach" },
  { src: "/media/gallery/campus-outreach/outreach-team.jpeg", alt: "NSBE URegina representatives standing behind the chapter information table", title: "Showing Up on Campus", category: "Chapter Visibility" },
  { src: "/media/gallery/campus-outreach/new-connections.jpeg", alt: "Students celebrating new connections beside the NSBE URegina display", title: "New Connections", category: "Student Engagement" },
  { src: "/media/gallery/campus-outreach/campus-community.jpeg", alt: "A group of students gathered beside the NSBE URegina outreach booth", title: "Campus Community", category: "Student Engagement" },
  { src: "/media/gallery/campus-outreach/chapter-visibility.jpeg", alt: "Students smiling with chapter materials in front of the NSBE URegina banner", title: "Chapter Visibility", category: "Chapter Visibility" },
];
