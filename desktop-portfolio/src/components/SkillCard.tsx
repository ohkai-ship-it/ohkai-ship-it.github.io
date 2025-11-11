interface SkillCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export function SkillCard({ title, description, icon }: SkillCardProps) {
  return (
    <div 
      className="bg-white rounded-[0.625rem] p-6 transition-all duration-300"
      style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.12)';
        e.currentTarget.style.transform = 'translateY(-1px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {icon && (
        <div className="mb-4" style={{ color: '#3D4E5C' }}>
          {icon}
        </div>
      )}
      <h3 className="mb-3">{title}</h3>
      <p style={{ color: '#717171' }}>{description}</p>
    </div>
  );
}