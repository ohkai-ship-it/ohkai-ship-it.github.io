import { useState } from "react";
import { Card } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Mail, Github, Linkedin } from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

export default function App() {
  const [activeSection, setActiveSection] = useState("about");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const skills = [
    {
      title: "Product Management",
      description: "Strategic roadmapping, stakeholder alignment, and cross-functional team leadership",
    },
    {
      title: "AI/ML Integration",
      description: "Deploying intelligent systems, LLM orchestration, and model selection",
    },
    {
      title: "Technical Prototyping",
      description: "Rapid MVP development, Figma to code, full-stack proof of concepts",
    },
    {
      title: "API Orchestration",
      description: "System architecture, microservices design, and integration planning",
    },
  ];

    const projects = [
    {
      title: "Unified AI Fabric & Copilot for Security Operations",
      description: "Architected a unified AI Fabric for enterprise security operations, moving from siloed features to a scalable multi-tenant platform. Designed comprehensive system diagrams and interactive prototype showcasing threat intelligence, predictive analytics, and GenAI with RAG. Included production considerations: gated rollouts, observability, cost controls, and tiered monetization strategy aligned to measurable business outcomes.",
      quote: "From whiteboard to wireframes and more — architecting an enterprise AI platform\nwith production-grade thinking for enterprise scalability",
      tags: ["System Architecture", "AI Platform", "Multi-tenant SaaS", "MLOps", "RAG", "Kubernetes", "Enterprise PM", "Eraser.io", "Figma"],
      links: [
        { text: "View Architecture", url: "https://app.eraser.io/workspace/woQji0k3PtmoGtlTHJaN?origin=share" },
        { text: "View Prototype", url: "https://www.figma.com/make/9Qe6qoygdDU2VYeggiAmmC/CyberSec-AI-Prototype---v0.1?node-id=0-1&t=spwfkxfwzOeVFuJx-1" },
      ],
      image: "/images/cybersecurity.png",
      inDevelopment: false,
    },
    {
      title: "Joblication\nAI Job Application Assistant",
      description: "Full-stack Flask application automating job applications end-to-end. Scrapes job postings, structures data, populates Trello boards with intelligent tags, and generates personalized cover letters using OpenAI. Built with modular architecture, template-based document generation, and production-grade error handling. Solves the real problem of scaling personalized job applications while maintaining quality and consistency.",
      quote: "From job posting to personalized cover letter in one click\nautomation meets personalization at scale",
      tags: ["Python", "Flask", "OpenAI API", "Web Scraping", "BeautifulSoup", "Trello API", "Automation", "Full-Stack", "python-docx"],
      links: [
        { text: "View on GitHub", url: "https://github.com/ohkai-ship-it/job-application-automation" },
      ],
      image: "/images/joblication.png",
      inDevelopment: false,
    },
    {
      title: "Agentic AI Travel Assistant\nIntelligent Journey Planning",
      description: "Building a multi-agent system for intelligent travel planning and booking. Orchestrating specialized AI agents that autonomously handle research, price optimization, itinerary coordination, and booking workflows. Exploring cutting-edge agentic frameworks for agent communication, task delegation, and coordinated decision-making. Each agent operates with specific expertise while collaborating toward unified travel goals.",
      quote: "Teaching AI agents to plan your perfect trip\nautonomous, coordinated, intelligent collaboration\nwhere each agent brings specialized expertise",
      tags: ["Agentic AI", "LangChain", "Multi-Agent Systems", "Autonomous Systems", "LLM Orchestration", "Product Development"],
      links: [],
      image: "/images/travel-assistant.svg",
      inDevelopment: true,
    },
  ];

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Header Section */}
      <header className="relative overflow-hidden bg-gradient-primary text-white py-32 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="mb-4 text-display">Dr. Kai Voges</h1>
          <p className="text-xl opacity-90">Product Manager | AI & Technical Architecture</p>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="sticky top-0 bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center gap-8 py-4">
            {["about", "skills", "projects", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-colors duration-300 ${
                  activeSection === section ? "text-teal font-semibold" : "text-dark-gray hover:text-teal"
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border border-medium-gray rounded-lg">
            <h2 className="mb-6 text-h2 text-slate-blue font-semibold">About</h2>
            <div className="space-y-4 text-charcoal">
              <p>
                I specialize in bridging the gap between complex technical systems and user needs. As a Product Manager with deep technical expertise in AI and system architecture, I transform ambitious ideas into scalable, intelligent products. My approach combines strategic thinking with hands-on prototyping to validate concepts quickly and effectively.
              </p>
              <p>
                With experience spanning AI/ML integration, API orchestration, and full-stack development, I bring a systems-thinking mindset to product development. I excel at creating detailed technical specifications, architectural diagrams, and interactive prototypes that align cross-functional teams and accelerate development cycles.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-12 text-h2 text-slate-blue font-semibold">Core Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-medium-gray rounded-lg"
              >
                <h3 className="mb-3 text-h3 text-slate-blue font-medium">{skill.title}</h3>
                <p className="text-dark-gray text-body">{skill.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-light-gray">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-12 text-h2 text-slate-blue font-semibold">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300 border border-medium-gray rounded-lg bg-white flex flex-col"
              >
                <div className="relative h-48 bg-gradient-primary overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-60"
                  />
                  {project.inDevelopment && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-vibrant-orange text-white border-none font-medium text-micro">
                        In Development
                      </Badge>
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col h-full">
                  <h3 className="mb-3 text-h3 text-slate-blue font-semibold min-h-16">{project.title}</h3>
                  <p className="text-dark-gray italic mb-4 text-small min-h-16" style={{ lineHeight: "1.4" }}>"{project.quote}"</p>
                  <p className="text-charcoal mb-4 text-body">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4 min-h-10">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        className="bg-light-gray text-slate-blue border border-medium-gray text-micro font-medium"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-auto">
                    <div className="pt-4 border-t border-medium-gray">
                      {project.links && project.links.length > 0 && (
                        <>
                          {project.links.map((link, linkIndex) => (
                            <div key={linkIndex} className="mb-2">
                              <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-teal text-small font-semibold no-underline hover:text-vibrant-orange transition-colors"
                              >
                                {link.text} →
                              </a>
                            </div>
                          ))}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 shadow-md border border-medium-gray rounded-lg text-center">
            <h2 className="mb-6 text-h2 text-slate-blue font-semibold">Let's Connect</h2>
            <p className="text-charcoal mb-8 text-body">
              Interested in collaborating or discussing AI product development? Reach out through any of these channels.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="mailto:kai.voges@gmx.net"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-teal text-white rounded-md hover:bg-slate-blue transition-all duration-300 font-semibold"
              >
                <Mail size={20} />
                Email
              </a>
              <a
                href="https://github.com/ohkai-ship-it"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-slate-blue text-slate-blue rounded-md hover:bg-slate-blue hover:text-white transition-all duration-300 font-semibold"
              >
                <Github size={20} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/worldapprentice/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-slate-blue text-slate-blue rounded-md hover:bg-slate-blue hover:text-white transition-all duration-300 font-semibold"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-8 text-center">
        <p className="text-dark-gray">© 2025 Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}
