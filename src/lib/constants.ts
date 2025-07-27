export const SERVICES = [
  {
    id: 'web-apps',
    title: 'Web App Development',
    description: 'Full-stack web applications with modern frameworks and scalable architecture',
    icon: '🏗️',
    features: ['React/Next.js', 'Node.js/Python', 'Database Design', 'API Development', 'Performance Optimization'],
    price: 'From $15,000'
  },
  {
    id: 'ai-integration',
    title: 'AI Integrations',
    description: 'Intelligent features powered by cutting-edge AI and machine learning',
    icon: '🤖',
    features: ['OpenAI Integration', 'Custom Models', 'Data Analytics', 'Process Automation', 'Natural Language Processing'],
    price: 'From $10,000'
  },
  {
    id: 'devops-setup',
    title: 'DevOps Setup',
    description: 'Streamlined deployment pipelines and infrastructure automation',
    icon: '⚙️',
    features: ['CI/CD Pipelines', 'Docker/Kubernetes', 'AWS/GCP Setup', 'Monitoring & Logging', 'Security Hardening'],
    price: 'From $8,000'
  },
  {
    id: 'product-design',
    title: 'Product Design',
    description: 'User-centered design from wireframes to high-fidelity prototypes',
    icon: '🎨',
    features: ['UI/UX Design', 'Prototyping', 'Design Systems', 'User Research', 'Usability Testing'],
    price: 'From $12,000'
  },
  {
    id: 'maintenance',
    title: 'Maintenance Plans',
    description: 'Ongoing support, updates, and optimization for your applications',
    icon: '🛠️',
    features: ['24/7 Monitoring', 'Security Updates', 'Performance Optimization', 'Bug Fixes', 'Feature Enhancements'],
    price: 'From $2,000/month'
  }
];

export const PROCESS_STEPS = [
  {
    id: 1,
    title: 'Discover',
    description: 'Requirements gathering, feasibility analysis, and project planning',
    icon: '🔍',
    duration: '1-2 weeks',
    details: ['Stakeholder interviews', 'Technical requirements', 'Timeline planning', 'Budget estimation']
  },
  {
    id: 2,
    title: 'Design',
    description: 'System architecture, UI/UX design, and technical specifications',
    icon: '🎨',
    duration: '2-3 weeks',
    details: ['Wireframes & mockups', 'Database design', 'API architecture', 'Design system']
  },
  {
    id: 3,
    title: 'Build',
    description: 'Agile development with regular updates and milestone reviews',
    icon: '⚡',
    duration: '4-12 weeks',
    details: ['Sprint planning', 'Daily standups', 'Code reviews', 'Progress tracking']
  },
  {
    id: 4,
    title: 'Launch',
    description: 'Testing, deployment, and go-live support',
    icon: '🚀',
    duration: '1-2 weeks',
    details: ['Quality assurance', 'Performance testing', 'Deployment setup', 'Launch support']
  },
  {
    id: 5,
    title: 'Support',
    description: 'Ongoing maintenance, monitoring, and feature enhancements',
    icon: '🛠️',
    duration: 'Ongoing',
    details: ['Bug fixes', 'Security updates', 'Performance monitoring', 'Feature requests']
  }
];

export const TECH_STACK = [
  {
    category: 'Frontend',
    technologies: [
      { name: 'React', icon: '⚛️', proficiency: 95, experience: '5+ years' },
      { name: 'Next.js', icon: '▲', proficiency: 90, experience: '3+ years' },
      { name: 'TypeScript', icon: '🔷', proficiency: 90, experience: '4+ years' },
      { name: 'Tailwind CSS', icon: '🎨', proficiency: 95, experience: '3+ years' },
    ]
  },
  {
    category: 'Backend',
    technologies: [
      { name: 'Node.js', icon: '🟢', proficiency: 90, experience: '5+ years' },
      { name: 'Python', icon: '🐍', proficiency: 85, experience: '4+ years' },
      { name: 'PostgreSQL', icon: '🐘', proficiency: 85, experience: '4+ years' },
      { name: 'MongoDB', icon: '🍃', proficiency: 80, experience: '3+ years' },
    ]
  },
  {
    category: 'Cloud & DevOps',
    technologies: [
      { name: 'AWS', icon: '☁️', proficiency: 85, experience: '3+ years' },
      { name: 'Docker', icon: '🐳', proficiency: 80, experience: '3+ years' },
      { name: 'Kubernetes', icon: '⚙️', proficiency: 75, experience: '2+ years' },
      { name: 'CI/CD', icon: '🔄', proficiency: 85, experience: '4+ years' },
    ]
  },
  {
    category: 'Design & Tools',
    technologies: [
      { name: 'Figma', icon: '🎨', proficiency: 85, experience: '3+ years' },
      { name: 'Adobe XD', icon: '💎', proficiency: 80, experience: '2+ years' },
      { name: 'Framer', icon: '🖼️', proficiency: 75, experience: '2+ years' },
      { name: 'Sketch', icon: '✏️', proficiency: 70, experience: '2+ years' },
    ]
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'CTO',
    company: 'TechFlow Solutions',
    content: 'The Build Knight delivered an exceptional web application that exceeded our expectations. Their attention to detail and technical expertise is unmatched.',
    rating: 5,
    avatar: '👩‍💼'
  },
  {
    id: 2,
    name: 'Marcus Rodriguez',
    role: 'Founder',
    company: 'GrowthLab',
    content: 'Working with The Build Knight was a game-changer for our startup. They built our MVP quickly and helped us scale efficiently.',
    rating: 5,
    avatar: '👨‍💻'
  },
  {
    id: 3,
    name: 'Emily Watson',
    role: 'Product Manager',
    company: 'InnovateCorp',
    content: 'Their AI integration expertise helped us automate our workflow and increase productivity by 300%. Highly recommended!',
    rating: 5,
    avatar: '👩‍🚀'
  },
  {
    id: 4,
    name: 'David Park',
    role: 'CEO',
    company: 'DataViz Pro',
    content: 'The Build Knight transformed our complex data into beautiful, interactive dashboards. Their work speaks for itself.',
    rating: 5,
    avatar: '👨‍💼'
  }
];

export const BUDGET_OPTIONS = [
  { value: 'under-10k', label: 'Under $10,000' },
  { value: '10k-25k', label: '$10,000 - $25,000' },
  { value: '25k-50k', label: '$25,000 - $50,000' },
  { value: '50k-100k', label: '$50,000 - $100,000' },
  { value: 'over-100k', label: 'Over $100,000' },
  { value: 'discuss', label: 'Let\'s discuss' }
];

export const PROJECT_TYPES = [
  { value: 'web-app', label: 'Web Application' },
  { value: 'mobile-app', label: 'Mobile Application' },
  { value: 'ai-integration', label: 'AI Integration' },
  { value: 'devops', label: 'DevOps & Infrastructure' },
  { value: 'design', label: 'Product Design' },
  { value: 'consulting', label: 'Technical Consulting' },
  { value: 'maintenance', label: 'Maintenance & Support' }
];