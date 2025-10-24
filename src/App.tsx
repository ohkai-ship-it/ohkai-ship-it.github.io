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
      title: "AI Fabric Architecture for Cybersecurity",
      description: "Designed comprehensive system architecture for an AI-powered cybersecurity platform. Created detailed Figma prototypes and technical documentation for cross-team alignment.",
      quote: "Bridging security operations with intelligent automation",
      tags: ["System Design", "Figma", "Architecture", "AI/ML"],
      image: "https://images.unsplash.com/photo-1664526937033-fe2c11f1be25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29yayUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjEzMTI5MDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      inDevelopment: false,
    },
    {
      title: "Joblification",
      description: "Built automated job application assistant using Flask and OpenAI APIs. Streamlines resume customization and cover letter generation with intelligent parsing.",
      quote: "Making job hunting efficient through smart automation",
      tags: ["Flask", "OpenAI", "Automation", "Python"],
      image: "https://images.unsplash.com/photo-1664526937033-fe2c11f1be25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbWF0aW9uJTIwd29ya2Zsb3clMjBkaWFncmFtfGVufDF8fHx8MTc2MTMxMjkwNXww&ixlib=rb-4.1.0&q=80&w=1080",
      inDevelopment: false,
    },
    {
      title: "Agentic AI Travel Assistant",
      description: "Developing multi-agent system for personalized travel planning. Orchestrates specialized agents for recommendations, booking, and itinerary optimization.",
      quote: "Intelligent agents working together for seamless travel experiences",
      tags: ["Multi-Agent", "LangChain", "Travel Tech", "AI Orchestration"],
      image: "https://images.unsplash.com/photo-1650171457588-dc7baef3ed22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHJvYm90JTIwYXNzaXN0YW50fGVufDF8fHx8MTc2MTI5MzM3NXww&ixlib=rb-4.1.0&q=80&w=1080",
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
                  <p className="text-gray-500 italic mb-4">"{project.quote}"</p>
                  <div className="flex flex-wrap gap-2">
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
                href="mailto:your.email@example.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#323B4C] text-[#323B4C] rounded-md hover:bg-[#323B4C] hover:text-white transition-all duration-300"
              >
                <Mail size={20} />
                Email
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#323B4C] text-[#323B4C] rounded-md hover:bg-[#323B4C] hover:text-white transition-all duration-300"
              >
                <Github size={20} />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
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
