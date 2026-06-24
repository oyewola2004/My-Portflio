export const services = [
  {
    id: 1,
    title: "Brand Identity & Logo Design",
    icon: "FiFeather",
    description: "Crafting distinct visual identities, logos, and cohesive design systems that guarantee an elite market presence.",
    features: ["Vector Scalability", "Brand Guidelines", "Visual Strategy"]
  },
  {
    id: 2,
    title: "UI/UX & Product Design",
    icon: "FiLayout",
    description: "Designing high-fidelity, interactive user interfaces optimized for modern web layouts and responsive systems.",
    features: ["Wireframing", "Interactive Prototypes", "Design Tokens"]
  },
  {
    id: 3,
    title: "Data Storytelling & Infographics",
    icon: "FiPieChart",
    description: "Translating complex analytical datasets into beautiful, highly scannable visual narratives and business dashboards.",
    features: ["Data Visualizations", "Corporate Reports", "Executive Graphics"]
  },
  {
   id: 4,
    title: "Marketing & Social Media Assets",
    icon: "FiSpeaker", // <-- Change this from "FiMegaphone"
    description: "High-impact promotional materials, energetic event flyers, and clean layouts that optimize crowd capture.",
    features: ["Flyers & Posters", "Campaign Kits", "Ad Optimization"]
  }
];

export const skills = {
  designTools: [
    { name: "CorelDRAW", level: 95 },
    { name: "Canva", level: 90 },
    { name: "Figma", level: 90 },
    { name: "Adobe Photoshop", level: 85 },
    { name: "Adobe Illustrator", level: 80 }
  ],
  designSkills: [
    { name: "Branding & Identity", level: 95 },
    { name: "Typography & Layout", level: 90 },
    { name: "Data Visualization", level: 92 },
    { name: "UI Design & Prototyping", level: 85 },
    { name: "Color Theory", level: 88 }
  ]
};

export const projects = [
  {
    id: 1,
    title: "G-Spark Summit Branding",
    category: "Branding",
    thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200",
    description: "Complete visual identity and global tech campaign design for the flagship tech event focusing on AI and developer innovation.",
    challenge: "The event required a tech-forward look that stayed rooted in accessibility, while heavily projecting themes of AI and collaborative progress.",
    process: "Conducted asset brainstorming, selected a high-contrast electric gradient matrix, and executed a complete multi-channel rollout spanning large-scale banners, badges, and social slide systems.",
    outcome: "Unified a global engineering event under a cohesive aesthetic, earning highly positive feedback across digital and physical touchpoints.",
    tools: ["CorelDRAW", "Figma", "Canva"],
    featured: true
  },
  {
    id: 2,
    title: "Merryloaded GistPlug Visual Kit",
    category: "Logos",
    thumbnail: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1200",
    description: "A comprehensive digital media logo and identity ecosystem built to sustain fast, high-density traffic branding.",
    challenge: "Designing an energetic visual footprint optimized for mobile screen responsiveness without muddying brand scaling.",
    process: "Iterated dynamic lettermark thumbnails, combined fluid geometry, and implemented a strict, vibrant dark-mode-first color palette.",
    outcome: "Successfully launched across all social and publishing vectors, providing distinct recognition.",
    tools: ["CorelDRAW", "Photoshop"],
    featured: true
  },
  {
    id: 3,
    title: "E-Commerce Luxury Blueprint",
    category: "UI/UX",
    thumbnail: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200",
    description: "High-fidelity UX design specification, structural components, and atomic interface token layouts for a modern storefront.",
    challenge: "Synthesizing a clean luxury aesthetic with complex multi-variant configuration patterns.",
    process: "Built wireframes prioritizing product visual hierarchies, framed detailed grid patterns, and designed customized component micro-interactions.",
    outcome: "Delivered a production-ready design blueprint allowing zero-friction scaling during component build pipelines.",
    tools: ["Figma"],
    featured: true
  }
];

export const processTimeline = [
  { phase: "01", title: "Research & Audit", desc: "Analyzing core context metrics, visual competitors, and target group demographic baselines." },
  { phase: "02", title: "Brainstorming", desc: "Translating structural goals into design conceptual maps and semantic moodboards." },
  { phase: "03", title: "Sketching", desc: "Rapid ideation across primary grids to pinpoint baseline structural elements." },
  { phase: "04", title: "Design Creation", desc: "Executing vector production, premium type styling, and precise visual assets." },
  { phase: "05", title: "Refinement", desc: "Deploying deep micro-reviews and continuous user alignment optimizations." },
  { phase: "06", title: "Final Delivery", desc: "Exporting production-optimized assets across all requested formats." }
];