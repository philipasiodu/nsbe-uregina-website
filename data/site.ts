export const socialLinks = [
  { label: "Discord", href: "https://discord.gg/fSpF2wZqDc" },
  {
    label: "Instagram",
    href: "https://www.instagram.com/nsbeuregina?igsh=MXc5c3dlcGx3ZWdxOQ==",
  },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/nsbe-uregina/" },
];

export const executives = [
  { role: "President", name: "Godwill", program: "Electrical/Electronics Engineering", image: "/media/executives/godwill.jpg" },
  { role: "Vice President, Finance", name: "Nathan", program: "Software Engineering", image: "/media/executives/nathan.jpg" },
  { role: "Vice President, University Affairs", name: "Grace", program: "Energy Systems Engineering", image: "/media/executives/grace.jpg" },
  { role: "Vice President, External", name: "Eric", program: "Data Science", image: "/media/executives/eric.jpg" },
  { role: "Vice President, Events", name: "Gianna", program: "Electrical/Electronics Engineering", image: "/media/executives/gianna.jpg" },
  { role: "Vice President, Marketing", name: "Rugie", program: "Electrical/Electronics Engineering", image: "/media/executives/rugie.jpg" },
  { role: "Policy Director", name: "Damola", program: "Energy Systems Engineering", image: "/media/executives/damola.jpg" },
  { role: "Sponsorship Director", name: "Prisca", program: "Electrical/Electronics Engineering", image: "/media/executives/prisca.jpg" },
  { role: "Secretary", name: "Chayil", program: "Electrical/Electronics Engineering", image: "/media/executives/chayil.jpg" },
  { role: "Technical Director", name: "Philip", program: "Software Engineering", image: "/media/executives/philip.jpg" },
  { role: "Faculty of Nursing Representative", name: "David", program: "Nursing", image: "/media/executives/david.jpg" },
  { role: "Faculty of Engineering Representative", name: "Damilola", program: "Energy Systems Engineering", image: "/media/executives/damilola.jpg" },
  { role: "First-Year Representative", name: "Fareed", program: "Electrical/Electronics Engineering", image: "/media/executives/fareed.jpg" },
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
  registrationUrl?: string;
};

export const chapterEvents: ChapterEvent[] = [
  {
    id: 1,
    title: "Fall Kickoff & Mixer",
    date: "2026-08-12",
    displayDate: "August 12, 2026",
    time: "5:30 PM",
    location: "EDC Atrium — University of Regina",
    category: "Community",
    status: "Upcoming",
    description: "Meet the chapter, connect with students, and learn what NSBE URegina has planned for the year.",
  },
  {
    id: 2,
    title: "Resume & Career Workshop",
    date: "2026-09-05",
    displayDate: "September 5, 2026",
    time: "6:00 PM",
    location: "Room to be confirmed",
    category: "Career",
    status: "Upcoming",
    description: "A practical resume review and interview preparation session with industry volunteers.",
  },
  {
    id: 3,
    title: "Industry Night",
    date: "2026-09-20",
    displayDate: "September 20, 2026",
    time: "6:30 PM",
    location: "Location to be confirmed",
    category: "Networking",
    status: "Upcoming",
    description: "Connect with engineering employers and hear candid career advice from Black professionals.",
  },
  {
    id: 4,
    title: "Midterm Study Hall",
    date: "2026-10-08",
    displayDate: "October 8, 2026",
    time: "4:00 PM",
    location: "Room to be confirmed",
    category: "Academic",
    status: "Upcoming",
    description: "A focused peer study session with snacks, course support, and quiet work zones.",
  },
  {
    id: 5,
    title: "Black History Month Panel",
    date: "2026-02-18",
    displayDate: "February 18, 2026",
    time: "6:00 PM",
    location: "University of Regina",
    category: "Community",
    status: "Past",
    description: "Students and professionals discussed representation, leadership, and the future of engineering.",
  },
  {
    id: 6,
    title: "Technical Interview Lab",
    date: "2026-03-12",
    displayDate: "March 12, 2026",
    time: "5:30 PM",
    location: "University of Regina",
    category: "Career",
    status: "Past",
    description: "Members practiced technical and behavioural interview questions in small groups.",
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
  { question: "Who can join NSBE URegina?", answer: "Membership is open to University of Regina students who support NSBE's mission. Students from every background and discipline are welcome." },
  { question: "Do I need to be an engineering student?", answer: "No. Although our programming centres engineering and technology, students from related disciplines and allies are encouraged to participate." },
  { question: "Is there a membership fee?", answer: "Chapter and national fee details still need to be confirmed. This section will be updated before public launch." },
  { question: "How do I hear about upcoming events?", answer: "Join the chapter Discord and follow Instagram or LinkedIn. Event registration links will also appear on the Events page." },
];

export const galleryItems = [
  { src: "/media/events/fall-kickoff/mixer-1.jpg", alt: "NSBE URegina students posing together after a mixer", title: "Fall Kickoff & Mixer", category: "Community" },
  { src: "/media/events/fall-kickoff/mixer-2.jpg", alt: "Students completing activities during an NSBE URegina mixer", title: "Fall Kickoff & Mixer", category: "Community" },
  { src: "/media/events/fall-kickoff/mixer-3.jpg", alt: "Students sharing food and conversation at an NSBE URegina mixer", title: "Fall Kickoff & Mixer", category: "Community" },
];
