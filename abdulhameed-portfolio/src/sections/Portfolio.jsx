import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiX, FiLayers, FiMaximize2, FiChevronLeft, 
  FiChevronRight, FiEye, FiDownload, FiChevronDown, FiChevronUp, FiCheck
} from 'react-icons/fi';

const CATEGORIES = ['All', 'Logos', 'Branding', 'Flyers', 'UI/UX'];
const PROJECTS_PER_PAGE = 6; 

const PROJECTS = [
  {
    id: 'g-spark-summit',
    title: 'G-Spark Summit Branding',
    category: 'Branding',
    image: '/G1.jpg', 
    tools: ['CorelDRAW', 'Figma', 'Canva'],
    role: 'Lead Designer & Brand Manager',
    description: 'As the Graphics Design and Branding Lead at G-SPARK, I oversee the creative direction of the organization, ensuring a consistent and impactful brand identity across all visual communications. I lead a team of designers in developing high-quality creative assets that strengthen brand recognition, support organizational goals, and engage target audiences.',
    bullets: [
      'Lead and mentor the design team, coordinating creative projects and ensuring the delivery of high-quality visual content across digital and print platforms.',
      'Drive the organizations branding strategy by maintaining brand consistency, developing visual identity guidelines, and overseeing the design of marketing and promotional materials.'
    ],
    flyers: [
      { src: '/G2.jpg', label: 'G-Spark Summit Design Core 02' },
      { src: '/G3.jpg', label: 'G-Spark Summit Design Core 03' },
      { src: '/G4.jpg', label: 'G-Spark Summit Design Core 04' },
      { src: '/G5.png', label: 'G-Spark Summit Design Core 05' },
      { src: '/G6.jpg', label: 'G-Spark Summit Design Core 06' },
      { src: '/G7.png', label: 'G-Spark Summit Design Core 07' },
      { src: '/G8.png', label: 'G-Spark Summit Design Core 08' },
      { src: '/G9.png', label: 'G-Spark Summit Design Core 09' },
      { src: '/G10.png', label: 'G-Spark Summit Design Core 10' },
      { src: '/G11.png', label: 'G-Spark Summit Design Core 11' },
      { src: '/G12.png', label: 'G-Spark Summit Design Core 12' },
      { src: '/G13.png', label: 'G-Spark Summit Design Core 13' },
      { src: '/G14.png', label: 'G-Spark Summit Design Core 14' },
      { src: '/G15.png', label: 'G-Spark Summit Design Core 15' },
      { src: '/G16.png', label: 'G-Spark Summit Design Core 16' },
      { src: '/G17.png', label: 'G-Spark Summit Design Core 17' },
      { src: '/G18.png', label: 'G-Spark Summit Design Core 18' },
      { src: '/G19.png', label: 'G-Spark Summit Design Core 19' },
      { src: '/G20.png', label: 'G-Spark Summit Design Core 20' },
      { src: '/G21.png', label: 'G-Spark Summit Design Core 21' }

    ]
  },
  {
    id: 'merryloaded-gistplug',
    title: 'Graphics Design Lead',
    category: 'Branding',
    image: '/HDefault.jpg',
    tools: ['CorelDRAW', 'Photoshop', 'Canva'],
    role: 'Lead Designer & Visual Strategist',
    description: 'As the Graphics Design Lead of GDGD FUNAAB, I oversee the creation of visual content that strengthens our brand identity, promotes our initiatives, and effectively communicates our message to students and stakeholders. I am passionate about combining creativity with strategy to deliver impactful designs that inspire engagement and foster innovation within the community.',
    bullets: [
      'Lead the creation of visual content for community events, workshops, campaigns, and digital platforms, ensuring consistency with the organizations brand identity and objectives.',
      'Collaborate with cross-functional teams to design engaging graphics that effectively communicate ideas, increase audience engagement, and enhance the overall visibility of GDGD FUNAAB initiatives.'
    ],
    flyers: [
      { src: '/H1.png', label: 'GDGD FUNAAB Design Core 01' },
      { src: '/H2.png', label: 'GDGD FUNAAB Design Core 02' },
      { src: '/H3.png', label: 'GDGD FUNAAB Design Core 03' },
      { src: '/H4.png', label: 'GDGD FUNAAB Design Core 04' },
    ]
  },
  {
    id: 'aoe-furnitures',
    title: 'AL IZZA INSTITUTE',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop',
    tools: ['Canva', 'CorelDRAW'],
    role: 'Lead UI/UX Architect',
    description: 'Engineered a highly scalable digital e-commerce storefront specification architecture mapping atomic layout tokens designed for high-end furniture retail environments.',
    bullets: [
      'User Journey Optimization: Restructured minimalist user checkout tracks to minimize shopping-cart abandonment vectors.',
      'Comprehensive Component Specifications: Provided detailed frontend structural parameters, standardized color palettes, and global typography design tokens.'
    ],
    flyers: []
  },
  {
    id: 'al-izza-consult',
    title: 'Al-Izza Educational Consult',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop',
    tools: ['CorelDRAW', 'Canva'],
    role: 'Creative Media Lead',
    description: 'Developed the corporate visual identity roadmap for Al-Izza Online Educational Consult, incorporating crisp typography and elegant vector backgrounds to position the brand as a premium academic advisor.',
    bullets: [
      'Academic Catalog Systems: Formulated multi-page digital enrollment guides and registration collateral systems.',
      'Social Growth Material: Standardized clean layouts for course overviews, session notices, and student success metrics.'
    ],
    flyers: []
  },
  {
    id: 'kommunity-os',
    title: 'Kommunity Hyperlocal OS',
    category: 'UI/UX',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop',
    tools: ['Figma', 'React'],
    role: 'Product Designer',
    description: 'Designed a multi-tenant localized neighborhood coordination application focusing on community safety vectors, local economies, and civic engagement protocols.',
    bullets: [
      'Civic Alert Dashboards: Configured intuitive interfaces for real-time safety reporting and emergency parameter tracking.',
      'Hyperlocal Marketplaces: Wireframed lightweight trading panels optimized for local merchant transactions and discovery.'
    ],
    flyers: []
  },
  {
    id: 'bi-insights-dashboard',
    title: 'Business Intelligence Kit',
    category: 'UI/UX',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop',
    tools: ['Figma', 'Tableau', 'PowerBI'],
    role: 'Data Visualization Analyst',
    description: 'Designed and mapped intuitive user interface metrics that convert complex, raw transaction databases into highly functional corporate insight assets.',
    bullets: [
      'Data Storytelling Nodes: Configured unified dashboard layouts using dynamic filtering, data graphs, and crisp visualization models.',
      'Actionable Metric Architectures: Structured intuitive corporate reports optimizing daily operational tracking loops.'
    ],
    flyers: []
  },
  {
    id: 'gdg-campus-flyers',
    title: 'GDG Campus Marketing Grid',
    category: 'Flyers',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop',
    tools: ['CorelDRAW', 'Canva'],
    role: 'Community Design Lead',
    description: 'Engineered a highly impactful sequence of technical community marketing flyers and backdrop structures for the Google Developer Groups on Campus developer meetups.',
    bullets: [
      'Tech Theme Integration: Infused abstract code vectors and tech silhouettes into clean flyer components.',
      'High-Engagement Typography: Prioritized structural content hierarchies to amplify campus registration metrics.'
    ],
    flyers: [
      { src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=500&auto=format&fit=crop', label: 'Tech Meetup Announcement' },
      { src: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=500&auto=format&fit=crop', label: 'Hackathon Track Structure' }
    ]
  },
  {
    id: 'vector-iconography-pack',
    title: 'Abstract Geometric Vector Pack',
    category: 'Logos',
    image: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=600&auto=format&fit=crop',
    tools: ['CorelDRAW', 'Illustrator'],
    role: 'Vector Asset Illustrator',
    description: 'Engineered an expansive, high-fidelity library of geometric design vectors, minimalist identity badges, and premium custom icon packs.',
    bullets: [
      'Mathematical Accuracy: Structured uniform nodes and anchor lines for perfectly crisp vector manipulation.',
      'Scalable Layout Compatibility: Built assets natively configured for instant large-format merchandise or microscopic app rendering.'
    ],
    flyers: []
  },
  {
    id: 'corporate-summit-assets',
    title: 'Innovation Summit Asset Suite',
    category: 'Flyers',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=600&auto=format&fit=crop',
    tools: ['Canva', 'Photoshop'],
    role: 'Lead Graphic Designer',
    description: 'Produced a cohesive sequence of corporate promotional materials, stage backdrops, and session schedules engineered to attract ecosystem stakeholders.',
    bullets: [
      'Corporate Layout Standards: Maintained strict grid structures, tracking rules, and premium spatial pacing across assets.',
      'Print Optimization Profiles: Formulated assets precisely matching true industrial color spaces and scaling benchmarks.'
    ],
    flyers: []
  },
  {
    id: 'luxury-brand-identity',
    title: 'E-Commerce Branding Matrix',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&auto=format&fit=crop',
    tools: ['CorelDRAW', 'Figma'],
    role: 'Branding Strategist',
    description: 'Formulated a comprehensive identity system mapping brand typography guidelines, luxury color configurations, and promotional systems for premium platforms.',
    bullets: [
      'High-End Typography Rules: Curated specific typographic couples that project authority and modern aesthetic value.',
      'Sleek Asset Packaging: Supplied a modular brand book tracking exact spatial parameters for visual implementation.'
    ],
    flyers: []
  }
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  
  const [isTextExpanded, setIsTextExpanded] = useState(false);
  const [showScrollDrawer, setShowScrollDrawer] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImages, setSelectedImages] = useState([]);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter, searchQuery]);

  useEffect(() => {
    setActiveImageIdx(0);
    setIsTextExpanded(false);
    setShowScrollDrawer(false);
    setSelectedImages([]);
  }, [selectedProject]);

  const filteredProjects = PROJECTS.filter(project => {
    const matchesCategory = activeFilter === 'All' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.tools.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  const indexOfLastProject = currentPage * PROJECTS_PER_PAGE;
  const indexOfFirstProject = indexOfLastProject - PROJECTS_PER_PAGE;
  const currentProjectsChunk = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  const handlePrevImage = (flyers) => {
    setActiveImageIdx((prev) => (prev === 0 ? flyers.length - 1 : prev - 1));
  };

  const handleNextImage = (flyers) => {
    setActiveImageIdx((prev) => (prev === flyers.length - 1 ? 0 : prev + 1));
  };

  const triggerDownload = (url, name) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = name || 'asset-download';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const triggerBulkDownload = () => {
    selectedImages.forEach((src, index) => {
      setTimeout(() => {
        triggerDownload(src, `bulk-asset-${index + 1}`);
      }, index * 250);
    });
  };

  const toggleImageSelection = (src) => {
    if (selectedImages.includes(src)) {
      setSelectedImages(prev => prev.filter(item => item !== src));
    } else {
      setSelectedImages(prev => [...prev, src]);
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-[#0a0a0c] text-white relative">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#10b981]">Showcase</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mt-1">Creative Outputs</h2>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <input 
              type="text" 
              placeholder="Search tools or specs..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 text-sm bg-[#16161a] border border-neutral-800 rounded-lg focus:outline-none focus:border-[#10b981] transition-colors w-full sm:w-48"
            />
            <div className="flex items-center bg-[#16161a] p-1 rounded-lg border border-neutral-800 overflow-x-auto max-w-full">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-1.5 rounded-md text-xs font-medium transition-all cursor-pointer ${activeFilter === cat ? 'bg-[#10b981] text-black font-semibold' : 'text-neutral-400 hover:text-white'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-h-[400px] items-start">
          <AnimatePresence mode="popLayout">
            {currentProjectsChunk.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="bg-[#16161a] border border-neutral-800/60 rounded-2xl overflow-hidden p-3 hover:border-neutral-700/80 transition-all flex flex-col justify-between group cursor-pointer relative"
              >
                <div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-neutral-900">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-neutral-900/80 p-3 rounded-full border border-neutral-700/50 text-[#10b981]"><FiMaximize2 size={18} /></div>
                  </div>
                </div>
                <div className="mt-4 px-1">
                  <span className="text-[11px] font-bold text-[#10b981] uppercase tracking-wide">{project.category}</span>
                  <h4 className="text-lg font-bold tracking-tight text-neutral-100 mt-0.5">{project.title}</h4>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {project.tools.map((t) => (
                      <span key={t} className="text-[9px] bg-neutral-900 text-neutral-400 border border-neutral-800 px-2 py-0.5 rounded">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <div className="col-span-full text-center py-20 text-neutral-500 text-sm font-mono border border-dashed border-neutral-900 rounded-2xl">
              No structural parameter records found matching specifications.
            </div>
          )}
        </div>

        {/* Pagination Block */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-16 border-t border-neutral-900/60 pt-8">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              className="p-2.5 rounded-xl bg-[#16161a] border border-neutral-800 text-neutral-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
            >
              <FiChevronLeft size={16} />
            </button>

            <div className="flex items-center gap-1.5">
              {Array.from({ length: totalPages }, (_, idx) => {
                const pageNumber = idx + 1;
                return (
                  <button
                    key={pageNumber}
                    onClick={() => setCurrentPage(pageNumber)}
                    className={`w-10 h-10 rounded-xl text-xs font-semibold font-mono transition-all cursor-pointer ${
                      currentPage === pageNumber
                        ? 'bg-[#10b981] text-black shadow-lg font-bold'
                        : 'bg-[#16161a] border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
                    }`}
                  >
                    {pageNumber}
                  </button>
                );
              })}
            </div>

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              className="p-2.5 rounded-xl bg-[#16161a] border border-neutral-800 text-neutral-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
            >
              <FiChevronRight size={16} />
            </button>
          </div>
        )}

        {/* Full Modal Lightbox Studio */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)} className="absolute inset-0 bg-black/90 backdrop-blur-md" />

              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-[#121214] border border-neutral-800 rounded-3xl w-full max-w-6xl max-h-[90vh] overflow-y-auto shadow-2xl relative z-10 custom-scrollbar"
              >
                <div className="sticky top-0 bg-[#121214]/90 backdrop-blur-md z-20 px-6 py-4 border-b border-neutral-800/60 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-neutral-400 text-xs font-mono uppercase tracking-widest">
                    <FiLayers className="text-[#10b981]" /> Interactive Blueprint Studio
                  </div>
                  <button onClick={() => setSelectedProject(null)} className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white cursor-pointer"><FiX size={18} /></button>
                </div>

                <div className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                  
                  {/* Left Descriptive Column */}
                  <div className="lg:col-span-5 space-y-6">
                    <div>
                      <span className="text-[10px] font-bold tracking-wider text-[#10b981] uppercase bg-[#10b981]/10 px-3 py-1 rounded-full">{selectedProject.role}</span>
                      <h3 className="text-2xl md:text-3xl font-black tracking-tight mt-3 text-neutral-100">{selectedProject.title}</h3>
                    </div>

                    <div className="relative">
                      <motion.div 
                        animate={{ height: isTextExpanded ? "auto" : "280px" }}
                        className="overflow-hidden space-y-4 text-neutral-400 text-sm leading-relaxed"
                        style={{ maskImage: !isTextExpanded ? 'linear-gradient(to bottom, black 65%, transparent 100%)' : 'none', WebkitMaskImage: !isTextExpanded ? 'linear-gradient(to bottom, black 65%, transparent 100%)' : 'none' }}
                      >
                        <p>{selectedProject.description}</p>
                        <div className="space-y-3 pt-2">
                          <h5 className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Core System Responsibilities:</h5>
                          <ul className="space-y-3 text-neutral-300">
                            {selectedProject.bullets.map((bullet, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <span className="text-[#10b981] mt-0.5">✦</span>
                                <div>{bullet}</div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>

                      <button onClick={() => setIsTextExpanded(!isTextExpanded)} className="flex items-center gap-1.5 text-xs font-bold text-[#10b981] mt-3 hover:text-emerald-400 transition-colors uppercase tracking-wider cursor-pointer">
                        {isTextExpanded ? (<>See Less <FiChevronUp /></>) : (<>See More Details <FiChevronDown /></>)}
                      </button>
                    </div>

                    <div>
                      <h5 className="text-[11px] font-bold text-neutral-500 uppercase tracking-widest mb-2">Production Tools</h5>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tools.map((tool) => (
                          <span key={tool} className="text-xs bg-neutral-900 text-neutral-300 px-3 py-1 rounded-md border border-neutral-800">{tool}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Media Column */}
                  <div className="lg:col-span-7 space-y-4 w-full">
                    <div className="relative bg-[#16161a] border border-neutral-800 rounded-2xl overflow-hidden group aspect-[4/3] flex items-center justify-center">
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={activeImageIdx}
                          src={selectedProject.flyers?.length > 0 ? selectedProject.flyers[activeImageIdx].src : selectedProject.image}
                          alt="Active Showcase Blueprint"
                          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                          className="w-full h-full object-cover"
                        />
                      </AnimatePresence>

                      {selectedProject.flyers?.length > 1 && (
                        <>
                          <button onClick={() => handlePrevImage(selectedProject.flyers)} className="absolute left-4 p-2.5 rounded-full bg-black/60 border border-neutral-800 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#10b981] hover:text-black cursor-pointer"><FiChevronLeft size={18} /></button>
                          <button onClick={() => handleNextImage(selectedProject.flyers)} className="absolute right-4 p-2.5 rounded-full bg-black/60 border border-neutral-800 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#10b981] hover:text-black cursor-pointer"><FiChevronRight size={18} /></button>
                        </>
                      )}

                      <button onClick={() => triggerDownload(selectedProject.flyers?.length > 0 ? selectedProject.flyers[activeImageIdx].src : selectedProject.image, selectedProject.title)} className="absolute top-4 right-4 p-2.5 rounded-xl bg-black/70 border border-neutral-800 text-neutral-400 hover:text-[#10b981] transition-all cursor-pointer"><FiDownload size={16} /></button>

                      <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-neutral-800 text-[11px] text-neutral-300 font-medium">
                        {selectedProject.flyers?.length > 0 ? selectedProject.flyers[activeImageIdx].label : 'Master Preview Frame'}
                      </div>
                    </div>

                    {/* Thumbnail Active Link Bar */}
                    {selectedProject.flyers?.length > 1 && (
                      <div className="space-y-2">
                        <div className="flex justify-between items-center px-1">
                          <p className="text-[10px] uppercase font-bold tracking-widest text-neutral-500">Select Asset Blueprint:</p>
                          <span className="text-[10px] font-mono text-neutral-500">Total: {selectedProject.flyers.length} Items</span>
                        </div>

                        <div className="flex gap-2.5 items-center">
                          {selectedProject.flyers.slice(0, 4).map((flyer, idx) => (
                            <button
                              key={idx}
                              onClick={() => setActiveImageIdx(idx)}
                              className={`relative rounded-xl overflow-hidden aspect-[4/3] w-20 sm:w-24 border-2 transition-all flex-shrink-0 cursor-pointer ${activeImageIdx === idx ? 'border-[#10b981] scale-95 shadow-lg' : 'border-neutral-800 opacity-60 hover:opacity-100'}`}
                            >
                              <img src={flyer.src} alt="preview thumbnail" className="w-full h-full object-cover" />
                            </button>
                          ))}

                          {selectedProject.flyers.length === 5 ? (
                            <button onClick={() => setActiveImageIdx(4)} className={`relative rounded-xl overflow-hidden aspect-[4/3] w-20 sm:w-24 border-2 transition-all flex-shrink-0 cursor-pointer ${activeImageIdx === 4 ? 'border-[#10b981]' : 'border-neutral-800'}`}>
                              <img src={selectedProject.flyers[4].src} alt="preview thumbnail" className="w-full h-full object-cover" />
                            </button>
                          ) : selectedProject.flyers.length > 5 ? (
                            <button onClick={() => setShowScrollDrawer(true)} className="relative rounded-xl overflow-hidden aspect-[4/3] w-20 sm:w-24 border-2 border-neutral-800 flex-shrink-0 bg-neutral-900 hover:border-neutral-700 transition-all flex flex-col items-center justify-center cursor-pointer group">
                              <img src={selectedProject.flyers[4].src} alt="more items preview" className="absolute inset-0 w-full h-full object-cover opacity-20 blur-xs" />
                              <div className="relative z-10 text-center">
                                <div className="text-sm font-black text-[#10b981]">+{selectedProject.flyers.length - 4}</div>
                                <div className="text-[9px] font-mono text-neutral-400 uppercase tracking-wide mt-0.5">More</div>
                              </div>
                            </button>
                          ) : null}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* ========================================================================= */}
                {/* MASONRY ARCHIVE DRAWER (HIGH-CONTRAST UPDATES)                             */}
                {/* ========================================================================= */}
                <AnimatePresence>
                  {showScrollDrawer && (
                    <motion.div 
                      initial={{ opacity: 0, y: 50 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      exit={{ opacity: 0, y: 50 }} 
                      className="absolute inset-x-0 bottom-0 bg-[#0d0d0f] border-t border-neutral-800 rounded-t-3xl p-6 z-30 max-h-[60vh] overflow-y-auto custom-scrollbar flex flex-col"
                    >
                      <div className="sticky top-0 bg-[#0d0d0f]/95 backdrop-blur-md z-40 pb-4 mb-4 border-b border-neutral-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 flex items-center gap-2">
                          <FiEye className="text-[#10b981]" /> Media File Archive Workspace
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <AnimatePresence>
                            {selectedImages.length > 0 && (
                              <motion.button
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                onClick={triggerBulkDownload}
                                className="px-3 py-1.5 text-xs font-bold font-mono bg-[#10b981] text-black rounded-lg shadow-lg shadow-[#10b981]/10 hover:bg-emerald-400 transition-all flex items-center gap-1.5 cursor-pointer"
                              >
                                <FiDownload size={13} /> Bulk Download ({selectedImages.length})
                              </motion.button>
                            )}
                          </AnimatePresence>

                          <button 
                            onClick={() => setShowScrollDrawer(false)} 
                            className="px-3 py-1.5 text-xs font-mono bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-400 hover:text-white cursor-pointer flex items-center gap-1"
                          >
                            Collapse Archive <FiChevronDown />
                          </button>
                        </div>
                      </div>

                      {/* MASONRY LAYOUT FOR INDIVIDUAL CARDS */}
                      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4 w-full">
                        {selectedProject.flyers?.map((flyer, idx) => {
                          const isChecked = selectedImages.includes(flyer.src);
                          return (
                            <div 
                              key={idx} 
                              onClick={() => setActiveImageIdx(idx)}
                              className={`break-inside-avoid bg-[#16161a] border rounded-2xl p-2.5 flex flex-col relative group transition-all duration-300 hover:border-neutral-700/80 cursor-pointer ${activeImageIdx === idx ? 'border-neutral-700 bg-neutral-900/40 shadow-xl' : 'border-neutral-800/80'}`}
                            >
                              <div className="relative rounded-xl overflow-hidden w-full bg-neutral-950">
                                <img 
                                  src={flyer.src} 
                                  alt={flyer.label} 
                                  className="w-full h-auto object-contain block transition-transform duration-300 group-hover:scale-101"
                                />

                                {/* UPDATED: HIGH-CONTRAST CHECKBOX OVERLAY (PERMANENTLY VISIBLE) */}
                                <div 
                                  onClick={(e) => { e.stopPropagation(); toggleImageSelection(flyer.src); }}
                                  className={`absolute top-3 right-3 w-7 h-7 rounded-full border backdrop-blur-md transition-all duration-200 z-10 flex items-center justify-center shadow-lg ${
                                    isChecked 
                                      ? 'bg-[#10b981] border-[#10b981] text-neutral-950 scale-100 font-black' 
                                      : 'bg-neutral-950/80 border-neutral-700 text-neutral-400 hover:border-[#10b981]'
                                  }`}
                                >
                                  {isChecked && <FiCheck size={16} strokeWidth={3} />}
                                </div>

                                {/* UPDATED: PERSISTENT INDIVIDUAL FILE DOWNLOAD LINK */}
                                <button 
                                  onClick={(e) => { e.stopPropagation(); triggerDownload(flyer.src, flyer.label); }} 
                                  className="absolute bottom-3 right-3 p-2 bg-neutral-950/80 border border-neutral-800 text-neutral-400 hover:text-[#10b981] hover:border-[#10b981]/30 backdrop-blur-md transition-all duration-200 shadow-lg rounded-lg"
                                  title="Download Single Image"
                                >
                                  <FiDownload size={13} />
                                </button>
                              </div>

                              <p className="text-[11px] font-medium text-neutral-400 truncate mt-2 px-1 text-center">
                                {flyer.label}
                              </p>
                            </div>
                          );
                        })}
                      </div>

                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;