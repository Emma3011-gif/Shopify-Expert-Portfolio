import PageBanner from '../components/PageBanner';
import GlassCard from '../components/GlassCard';
import { services } from '../data/services';
import { ShoppingCart, RefreshCw, Package, Mail, Zap, Search, TrendingUp } from 'lucide-react';

const iconMap: Record<string, any> = {
  ShoppingCart,
  RefreshCw,
  Package,
  Mail,
  Zap,
  Search,
  TrendingUp,
};

const Services = () => {
  return (
    <div>
      <PageBanner
        title="My Services"
        subtitle="Comprehensive e-commerce solutions to grow your online business"
      />

      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || ShoppingCart;
              return (
                <GlassCard
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  icon={Icon}
                  features={service.features}
                  ctaText="Get Started"
                  onCtaClick={() => window.location.href = '/booking'}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Need a Custom Solution?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Every business is unique. Let's discuss your specific requirements and create a tailored solution.
          </p>
          <a
            href="https://wa.link/jkdm8e"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-lg transition-all hover:scale-105"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
