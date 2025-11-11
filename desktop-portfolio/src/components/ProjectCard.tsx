import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  quote: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  link?: string;
  status?: string;
}

export function ProjectCard({ title, quote, description, tags, imageUrl, link, status }: ProjectCardProps) {
  return (
    <div 
      className="bg-white rounded-[0.625rem] overflow-hidden transition-all duration-300"
      style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
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
      <div className="p-6">
        {/* Title */}
        <h3 className="min-h-16 mb-3" dangerouslySetInnerHTML={{ __html: title.replace(/\n/g, '<br/>') }} />

        {/* Quote */}
        <p 
          className="text-sm italic min-h-16 mb-4"
          style={{ color: '#717171' }}
        >
          {quote}
        </p>

        {/* Description */}
        <p style={{ color: '#333333' }} className="mb-4" dangerouslySetInnerHTML={{ __html: description }} />

        {/* Tags */}
        <div className="flex flex-wrap gap-2 min-h-10 mb-4">
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
        {link && (
          <div className="border-t pt-4" style={{ borderColor: '#E5E5E5' }}>
            <a
              href={link}
              className="inline-flex items-center gap-1 hover:underline"
              style={{ color: '#2A747E' }}
            >
              View Project <ArrowRight size={16} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}