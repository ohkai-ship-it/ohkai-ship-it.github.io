import { ArrowRight } from 'lucide-react';

interface ProjectLink {
  text: string;
  url: string;
}

interface ProjectCardProps {
  title: string;
  quote: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  link?: string;
  links?: ProjectLink[];
  status?: string;
}

export function ProjectCard({ title, quote, description, tags, imageUrl, link, links, status }: ProjectCardProps) {
  return (
    <div 
      className="bg-white overflow-hidden transition-all duration-300"
      style={{ 
        borderRadius: '10px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.12)';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {/* Project Image */}
      <div className="h-48 relative" style={{ background: 'linear-gradient(135deg, #3D4E5C 0%, #658199 100%)' }}>
        {imageUrl && (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover opacity-60"
          />
        )}
        {status && (
          <div 
            className="absolute top-4 right-4 px-3 py-1 rounded text-sm"
            style={{ backgroundColor: '#E4980E', color: '#FFFFFF' }}
          >
            {status}
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Title */}
        <h3 className="mb-3 font-semibold text-lg" dangerouslySetInnerHTML={{ __html: title.replace(/\n/g, '<br/>') }} />

        {/* Quote */}
        <p 
          className="text-sm italic mb-4"
          style={{ color: '#717171' }}
        >
          {quote}
        </p>

        {/* Description */}
        <p style={{ color: '#333333' }} className="mb-4" dangerouslySetInnerHTML={{ __html: description }} />

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded text-sm transition-colors duration-300"
              style={{ 
                backgroundColor: '#F2F2F2',
                color: '#3D4E5C'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#E5E5E5';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#F2F2F2';
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Link */}
        {(link || (links && links.length > 0)) && (
          <div className="border-t pt-4 mt-auto" style={{ borderColor: '#E5E5E5' }}>
            {link && (
              <a
                href={link}
                className="inline-flex items-center gap-1 hover:underline"
                style={{ color: '#2A747E' }}
              >
                View Project <ArrowRight size={16} />
              </a>
            )}
            {links && links.length > 0 && (
              <div>
                {links.map((linkItem, index) => (
                  <div key={index} className="mb-2">
                    <a
                      href={linkItem.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium hover:underline transition-colors"
                      style={{ color: '#3D4E5C' }}
                    >
                      {linkItem.text} →
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}