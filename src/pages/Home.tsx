import { Link } from 'react-router-dom';
import { ShoppingCart, RefreshCw, Package, Mail, Zap, Search, TrendingUp, ArrowRight, MessageCircle } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import TestimonialCard from '../components/TestimonialCard';
import { services } from '../data/services';
import { testimonials } from '../data/testimonials';

const Home = () => {
  const previewServices = services.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-dark overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary rounded-full filter blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
            Helping Brands Build, Launch & Scale{' '}
            <span className="text-primary">Profitable Online Stores</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            I build high-converting Shopify stores and automate email marketing systems that increase sales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Link
              to="/booking"
              className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-lg transition-all hover:scale-105"
            >
              Book Now
            </Link>
            <a
              href="https://wa.link/jkdm8e"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card inline-flex items-center justify-center text-white font-semibold py-3 px-8 rounded-lg hover:bg-white/10 transition-all"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-dark-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">My Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive e-commerce solutions to grow your online business
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {previewServices.map((service) => {
              const IconMap: Record<string, any> = {
                ShoppingCart, RefreshCw, Package, Mail, Zap, Search, TrendingUp
              };
              const Icon = IconMap[service.icon] || ShoppingCart;
              return (
                <GlassCard
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  icon={Icon}
                  features={service.features.slice(0, 2)}
                />
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center text-primary hover:text-primary-dark font-semibold transition-colors"
            >
              View All Services <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Check out some of the successful stores I've built and optimized
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[0, 1, 2].map((idx) => (
              <div key={idx} className="glass-card rounded-2xl overflow-hidden">
                <img
                  src={idx === 2 
                    ? 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=800&q=80'
                    : `https://images.unsplash.com/photo-${['1534438327276-14e5300c3a48', '1596462502278-27bfdc403348'][idx]}?w=800&q=80`}
                  alt="Portfolio preview"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {['Gymshark Clone', 'ColourPop', 'BlendJet'][idx]}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    High-converting {['fitness', 'beauty', 'kitchen gadgets'][idx]} e-commerce experience
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="inline-flex items-center text-primary hover:text-primary-dark font-semibold transition-colors"
            >
              View Full Portfolio <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-dark-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Client Testimonials</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Don't just take my word for it - hear from my clients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/20 to-purple-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Scale Your Online Store?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how I can help you build, optimize, and grow your e-commerce business.
          </p>
          <Link
            to="/booking"
            className="inline-flex items-center bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-lg transition-all hover:scale-105"
          >
            Book a Free Consultation <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
