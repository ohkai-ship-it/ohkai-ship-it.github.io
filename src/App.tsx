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
      quote: "From whiteboard to wireframes — architecting an enterprise AI platform with production-grade thinking",
      tags: ["System Architecture", "AI Platform", "Multi-tenant SaaS", "MLOps", "RAG", "Kubernetes", "Enterprise PM", "Eraser.io", "Figma"],
      links: [
        { text: "View Architecture", url: "https://app.eraser.io/workspace/woQji0k3PtmoGtlTHJaN?origin=share" },
        { text: "View Prototype", url: "https://www.figma.com/make/9Qe6qoygdDU2VYeggiAmmC/CyberSec-AI-Prototype---v0.1?node-id=0-1&t=spwfkxfwzOeVFuJx-1" },
      ],
      image: "/images/cybersecurity.png",
      inDevelopment: false,
    },
    {
      title: "Joblication - AI Job Application Assistant",
      description: "Full-stack Flask application automating job applications end-to-end. Scrapes job postings, structures data, populates Trello boards with intelligent tags, and generates personalized cover letters using OpenAI. Built with modular architecture, template-based document generation, and production-grade error handling. Solves the real problem of scaling personalized job applications while maintaining quality and consistency.",
      quote: "From job posting to personalized cover letter in one click — automation meets personalization",
      tags: ["Python", "Flask", "OpenAI API", "Web Scraping", "BeautifulSoup", "Trello API", "Automation", "Full-Stack", "python-docx"],
      links: [
        { text: "View on GitHub", url: "https://github.com/ohkai-ship-it/job-application-automation/blob/master/README.md" },
      ],
      image: "/images/joblication.png",
      inDevelopment: false,
    },
    {
      title: "Agentic AI Travel Assistant",
      description: "Building a multi-agent system for intelligent travel planning and booking. Orchestrating specialized AI agents that autonomously handle research, price optimization, itinerary coordination, and booking workflows. Exploring cutting-edge agentic frameworks for agent communication, task delegation, and coordinated decision-making. Each agent operates with specific expertise while collaborating toward unified travel goals.",
      quote: "Teaching AI agents to plan your perfect trip — autonomous, coordinated, intelligent",
      tags: ["Agentic AI", "LangChain", "Multi-Agent Systems", "Autonomous Systems", "LLM Orchestration", "Product Development"],
      links: [],
      image: "/images/travel-assistant.svg",
      inDevelopment: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-[#323B4C] to-[#4a5563] text-white py-32 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="mb-4">Dr. Kai Voges</h1>
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
                  activeSection === section ? "text-[#323B4C]" : "text-gray-700 hover:text-[#323B4C]"
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
          <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="mb-6 text-[#323B4C]">About</h2>
            <div className="space-y-4 text-gray-700">
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
          <h2 className="text-center mb-12 text-[#323B4C]">Core Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="mb-3 text-[#323B4C]">{skill.title}</h3>
                <p className="text-gray-600">{skill.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-12 text-[#323B4C]">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative h-48 bg-gradient-to-br from-[#323B4C] to-[#4a5563] overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-60"
                  />
                  {project.inDevelopment && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-yellow-500 text-white border-none">
                        In Development
                      </Badge>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="mb-3 text-[#323B4C]">{project.title}</h3>
                  <p className="text-gray-700 mb-3">{project.description}</p>
                  <p className="text-gray-500 italic mb-4 text-sm" style={{ lineHeight: "1.4" }}>"{project.quote}"</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="bg-gray-100 text-[#323B4C] hover:bg-gray-200"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  {project.links && project.links.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      {project.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mr-4 text-[#323B4C] text-sm font-medium no-underline hover:text-gray-600 hover:underline transition-colors"
                        >
                          {link.text} →
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 shadow-lg text-center">
            <h2 className="mb-6 text-[#323B4C]">Let's Connect</h2>
            <p className="text-gray-700 mb-8">
              Interested in collaborating or discussing AI product development? Reach out through any of these channels.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="mailto:kai.voges@gmx.net"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#323B4C] text-[#323B4C] rounded-md hover:bg-[#323B4C] hover:text-white transition-all duration-300"
              >
                <Mail size={20} />
                Email
              </a>
              <a
                href="https://github.com/ohkai-ship-it"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#323B4C] text-[#323B4C] rounded-md hover:bg-[#323B4C] hover:text-white transition-all duration-300"
              >
                <Github size={20} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/worldapprentice/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#323B4C] text-[#323B4C] rounded-md hover:bg-[#323B4C] hover:text-white transition-all duration-300"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#333] text-white py-8 text-center">
        <p className="text-gray-400">© 2025 Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}
