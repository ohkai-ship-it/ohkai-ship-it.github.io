import { Navigation } from './components/Navigation';
import { ProjectCard } from './components/ProjectCard';
import { SkillCard } from './components/SkillCard';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function App() {
  const projects = [
    {
      title: 'Enterprise AI\nPlatform',
      quote: 'Transformed complex technical requirements into an intuitive product that accelerated time-to-value by 40%',
      description: 'Led development of AI-powered analytics platform using <strong>Flask</strong>, <strong>OpenAI API</strong>, and <strong>RAG</strong> architecture. Managed cross-functional team of <strong>10 engineers</strong> to deliver <strong>4 core products</strong>, achieving <strong>>20M EUR market opportunity</strong>.',
      tags: ['Product Strategy', 'AI/ML', 'Flask', 'OpenAI', 'Team Leadership'],
      imageUrl: 'https://images.unsplash.com/photo-1757310998648-f8aaa5572e8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3klMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYyNjA4MjE0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      status: 'Active'
    },
    {
      title: 'Financial Services\nDashboard',
      quote: 'Reduced operational costs by 30% through strategic feature prioritization and technical optimization',
      description: 'Built comprehensive product roadmap for fintech platform managing <strong>15M EUR</strong> in transactions. Implemented <strong>real-time analytics</strong> and <strong>automated reporting</strong>, improving decision-making speed by <strong>50%</strong>.',
      tags: ['Fintech', 'Analytics', 'Stakeholder Management', 'Agile'],
      imageUrl: 'https://images.unsplash.com/photo-1676276374803-36e48196d5ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwbWFuYWdlbWVudCUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjI2MzgzMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'Mobile-First\nB2C Platform',
      quote: 'Drove user acquisition from 0 to 100K+ users in first year through data-driven product iterations',
      description: 'Designed and launched consumer mobile app with focus on <strong>user experience</strong> and <strong>conversion optimization</strong>. Leveraged <strong>A/B testing</strong> and <strong>behavioral analytics</strong> to achieve <strong>85% user retention</strong> rate.',
      tags: ['Mobile', 'UX Design', 'Growth', 'Data Analytics'],
      imageUrl: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzYyNTkxOTc3fDA&ixlib=rb-4.1.0&q=80&w=1080'
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
          Product Manager • Technical Leader • Results-Driven Strategist
        </p>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="mb-12 text-center">About</h2>
          <div className="bg-white rounded-[0.625rem] shadow-lg p-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NjI1MTg0MzV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Dr. Kai Voges"
                  className="w-48 h-48 rounded-full object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="mb-4">
                  I turn complex technical challenges into successful products that drive business value. With a track record of managing <strong>15M+ EUR</strong> in product value across multiple domains, I bring deep technical expertise combined with strategic thinking to deliver measurable results.
                </p>
                <p style={{ color: '#717171' }}>
                  My approach combines system-level architecture understanding with customer-centric design. I excel at bridging the gap between engineering teams and business stakeholders, using <strong>data-driven insights</strong> to guide decisions. Whether it's building <strong>AI-powered platforms</strong>, optimizing <strong>mobile experiences</strong>, or scaling <strong>enterprise solutions</strong>, I focus on outcomes that matter: revenue growth, cost reduction, and user satisfaction.
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
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-12 text-center">Projects</h2>
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
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="mb-12 text-center">Let's Connect</h2>
          <div className="bg-white rounded-[0.625rem] shadow-lg p-8 text-center">
            <p className="mb-8" style={{ color: '#717171' }}>
              I'm always interested in discussing new opportunities, innovative projects, or potential collaborations. Let's talk about how we can create value together.
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="mailto:kai.voges@example.com"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 rounded-[0.375rem] transition-all duration-300"
                style={{ 
                  borderColor: '#3D4E5C',
                  color: '#3D4E5C'
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
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 rounded-[0.375rem] transition-all duration-300"
                style={{ 
                  borderColor: '#3D4E5C',
                  color: '#3D4E5C'
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
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 rounded-[0.375rem] transition-all duration-300"
                style={{ 
                  borderColor: '#3D4E5C',
                  color: '#3D4E5C'
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