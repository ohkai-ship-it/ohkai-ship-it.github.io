import { Navigation } from './components/Navigation';
import { ProjectCard } from './components/ProjectCard';
import { SkillCard } from './components/SkillCard';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function App() {
  const projects = [
    {
      title: "Unified AI Fabric & Copilot for Security Operations",
      quote: "From whiteboard to wireframes and more — architecting an enterprise AI platform\nwith production-grade thinking for enterprise scalability",
      description: "Architected a unified AI Fabric for enterprise security operations, moving from siloed features to a scalable multi-tenant platform. Designed comprehensive system diagrams and interactive prototype showcasing threat intelligence, predictive analytics, and GenAI with RAG. Included production considerations: gated rollouts, observability, cost controls, and tiered monetization strategy aligned to measurable business outcomes.",
      tags: ["System Architecture", "AI Platform", "Multi-tenant SaaS", "MLOps", "RAG", "Kubernetes", "Enterprise PM", "Eraser.io", "Figma"],
      imageUrl: "/images/cybersecurity.png",
      links: [
        { text: "View Architecture", url: "https://app.eraser.io/workspace/woQji0k3PtmoGtlTHJaN?origin=share" },
        { text: "View Prototype", url: "https://www.figma.com/make/9Qe6qoygdDU2VYeggiAmmC/CyberSec-AI-Prototype---v0.1?node-id=0-1&t=spwfkxfwzOeVFuJx-1" },
      ],
    },
    {
      title: "Joblication - AI Job Application Assistant",
      quote: "From job posting to personalized cover letter in one click\nautomation meets personalization at scale",
      description: "Full-stack Flask application automating job applications end-to-end. Scrapes job postings, structures data, populates Trello boards with intelligent tags, and generates personalized cover letters using OpenAI. Built with modular architecture, template-based document generation, and production-grade error handling. Solves the real problem of scaling personalized job applications while maintaining quality and consistency.",
      tags: ["Python", "Flask", "OpenAI API", "Web Scraping", "BeautifulSoup", "Trello API", "Automation", "Full-Stack", "python-docx"],
      imageUrl: "/images/joblication.png",
      links: [
        { text: "View on GitHub", url: "https://github.com/ohkai-ship-it/job-application-automation" },
      ],
    },
    {
      title: "Agentic AI Travel Assistant - Intelligent Journey Planning",
      quote: "Teaching AI agents to plan your perfect trip\nautonomous, coordinated, intelligent collaboration\nwhere each agent brings specialized expertise",
      description: "Building a multi-agent system for intelligent travel planning and booking. Orchestrating specialized AI agents that autonomously handle research, price optimization, itinerary coordination, and booking workflows. Exploring cutting-edge agentic frameworks for agent communication, task delegation, and coordinated decision-making. Each agent operates with specific expertise while collaborating toward unified travel goals.",
      tags: ["Agentic AI", "LangChain", "Multi-Agent Systems", "Autonomous Systems", "LLM Orchestration", "Product Development"],
      imageUrl: "/images/travel-assistant.svg",
      status: "In Development",
      links: [],
    }
  ];

  const skills = [
    {
      title: 'Product Strategy',
      description: 'Define product vision and roadmap aligned with business objectives. Expert in market analysis, competitive positioning, and strategic planning for technical products.'
    },
    {
      title: 'Technical Leadership',
      description: 'Bridge business and engineering teams. Deep understanding of system architecture, API design, and modern development practices including AI/ML integration.'
    },
    {
      title: 'Data-Driven Decision Making',
      description: 'Leverage analytics and metrics to guide product development. Proficient in A/B testing, user research, and translating data insights into actionable strategies.'
    },
    {
      title: 'Stakeholder Management',
      description: 'Communicate effectively with C-level executives, engineering teams, and customers. Expert in aligning diverse stakeholder interests and managing expectations.'
    },
    {
      title: 'Agile & Scrum',
      description: 'Lead cross-functional teams using agile methodologies. Experienced in sprint planning, backlog management, and continuous delivery practices.'
    },
    {
      title: 'AI/ML Products',
      description: 'Design and ship AI-powered features. Understanding of RAG, LLMs, prompt engineering, and practical implementation of machine learning solutions.'
    },
    {
      title: 'System Architecture',
      description: 'Evaluate technical trade-offs and scalability. Knowledge of cloud infrastructure, microservices, API design, and modern development frameworks.'
    },
    {
      title: 'Growth & Optimization',
      description: 'Drive user acquisition and retention through product improvements. Expert in conversion optimization, funnel analysis, and growth experimentation.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F2F2F2]">
      <Navigation />

      {/* Hero Section */}
      <header 
        id="home" 
        className="text-white py-32 px-4 text-center"
        style={{ background: 'linear-gradient(135deg, #3D4E5C 0%, #658199 100%)' }}
      >
        <h1 className="mb-4" style={{ color: '#F2F2F2' }}>Dr. Kai Voges</h1>
        <p className="text-xl" style={{ color: '#F2F2F2', opacity: 0.95 }}>
          Product Leadership | AI & Platform Thinking | Founder
        </p>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 px-4" style={{ backgroundColor: '#E5E5E5' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="mb-12 text-center text-2xl font-semibold" style={{ color: '#3D4E5C' }}>About</h2>
          <div className="bg-white shadow-lg p-8" style={{ borderRadius: '0.625rem' }}>
            <div className="flex gap-8 items-start">
              {/* Profile Image - Circular */}
              <div className="flex-shrink-0" style={{ width: '140px', height: '140px', minWidth: '140px', borderRadius: '50%', overflow: 'hidden' }}>
                <img
                  src="/images/Voges,-Kai_0100-11qa_web.jpg"
                  alt="Dr. Kai Voges"
                  className="rounded-full object-cover"
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%'
                  }}
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    img.style.display = 'none';
                    const parent = img.parentElement;
                    if (parent) {
                      parent.innerHTML = '<div style="width: 140px; height: 140px; background: #3D4E5C; border-radius: 50%; display: flex; align-items: center; justify-content: center;"><span style="color: white; font-size: 48px; font-weight: bold;">K</span></div>';
                    }
                  }}
                />
              </div>

              {/* Text Content */}
              <div className="flex-1">
                <p className="mb-4" style={{ color: '#333333', lineHeight: '1.6', fontSize: '15px' }}>
                  I bridge the gap between complex technical systems and meaningful business outcomes. As a Product Manager and technical leader, I transform ambitious ideas into products that create real impact. My expertise spans system architecture, AI integration, and cross-functional team leadership.
                </p>
                <p className="mb-4" style={{ color: '#333333', lineHeight: '1.6', fontSize: '15px' }}>
                  I excel at understanding what matters most—whether that's accelerating product development, scaling engineering practices, or building intelligent systems. By combining deep technical knowledge with strategic thinking, I guide teams toward solutions that balance innovation with practical execution.
                </p>
                <p style={{ color: '#333333', lineHeight: '1.6', fontSize: '15px' }}>
                  My approach combines strategic vision with hands-on execution. I've worked across security operations, AI platforms, and automation projects—always focused on delivering measurable impact. I thrive in environments where innovation meets pragmatism, where we can explore cutting-edge technologies while maintaining focus on what actually matters to users and business goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                title={skill.title}
                description={skill.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4" style={{ backgroundColor: '#F2F2F2' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-12 text-center" style={{ color: '#3D4E5C' }}>Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                quote={project.quote}
                description={project.description}
                tags={project.tags}
                imageUrl={project.imageUrl}
                status={project.status}
                links={project.links}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="mb-12 text-center">Let's Connect</h2>
          <div className="bg-white shadow-lg p-8 text-center" style={{ borderRadius: '10px' }}>
            <p className="mb-8" style={{ color: '#717171' }}>
              I'm always interested in discussing new opportunities, innovative projects, or potential collaborations. Let's talk about how we can create value together.
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="mailto:kai.voges@gmx.net"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 transition-all duration-300"
                style={{ 
                  borderColor: '#3D4E5C',
                  color: '#3D4E5C',
                  borderRadius: '10px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#3D4E5C';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#3D4E5C';
                }}
              >
                <Mail size={20} />
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/worldapprentice/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 transition-all duration-300"
                style={{ 
                  borderColor: '#3D4E5C',
                  color: '#3D4E5C',
                  borderRadius: '10px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#3D4E5C';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#3D4E5C';
                }}
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a
                href="https://github.com/ohkai-ship-it"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 transition-all duration-300"
                style={{ 
                  borderColor: '#3D4E5C',
                  color: '#3D4E5C',
                  borderRadius: '10px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#3D4E5C';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#3D4E5C';
                }}
              >
                <Github size={20} />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center" style={{ backgroundColor: '#3D4E5C', color: '#F2F2F2' }}>
        <p className="text-sm" style={{ color: '#717171' }}>
          © 2025 Dr. Kai Voges. All rights reserved.
        </p>
      </footer>
    </div>
  );
}