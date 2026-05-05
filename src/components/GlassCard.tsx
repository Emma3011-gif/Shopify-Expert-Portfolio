import type { LucideIcon } from 'lucide-react';

interface GlassCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features?: string[];
  ctaText?: string;
  onCtaClick?: () => void;
}

const GlassCard = ({ title, description, icon: Icon, features, ctaText, onCtaClick }: GlassCardProps) => {
  return (
    <div className="glass-card rounded-2xl p-6 h-full">
      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      {features && (
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-300">
              <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
              {feature}
            </li>
          ))}
        </ul>
      )}
      {ctaText && (
        <button
          onClick={onCtaClick}
          className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded-lg transition-colors"
        >
          {ctaText}
        </button>
      )}
    </div>
  );
};

export default GlassCard;
