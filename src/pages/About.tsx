import { Code, ShoppingCart, Mail, TrendingUp, Search, Zap } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import PartnerBadges from '../components/PartnerBadges';
import profileImg from '../assets/WhatsApp_Image_2026-05-01_at_02.04.28-removebg-preview.png';

const skills = [
  { name: 'Shopify Development', icon: ShoppingCart, level: 95 },
  { name: 'HTML/CSS/JS', icon: Code, level: 90 },
  { name: 'Klaviyo', icon: Mail, level: 92 },
  { name: 'CRO (Conversion Rate Optimization)', icon: TrendingUp, level: 88 },
  { name: 'SEO', icon: Search, level: 85 },
  { name: 'Email Automation', icon: Zap, level: 90 },
];

const About = () => {
  return (
    <div>
      <PageBanner
        title="About Emicyber"
        subtitle="Shopify Expert | Email Marketing Specialist | Web Developer"
      />

      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="w-80 h-80 mx-auto rounded-full overflow-hidden">
                 <img src={profileImg} alt="Chigozie Emmanuel Ekpete" className="min-h-full min-w-full object-cover object-center" style={{ filter: 'contrast(1.05) brightness(1.05)' }} />
               </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Chigozie Emmanuel Ekpete</h2>
              <p className="text-gray-300 mb-4">
                I'm a passionate Shopify Expert and Web Developer with extensive experience in building
                high-converting online stores. My expertise spans across Shopify development, store
                optimization, and Klaviyo email marketing automation.
              </p>
              <p className="text-gray-300 mb-6">
                I help brands build, launch, and scale profitable online stores through conversion-focused
                design, technical optimization, and strategic email marketing. My approach combines
                technical expertise with a deep understanding of e-commerce psychology.
              </p>

              <div className="glass-card rounded-xl p-6 mb-6">
                <h3 className="text-xl font-semibold text-white mb-4">Mission Statement</h3>
                <p className="text-gray-300">
                  To empower businesses with high-performing e-commerce solutions that drive growth,
                  increase conversions, and build lasting customer relationships through innovative
                  technology and data-driven strategies.
                </p>
              </div>

              <PartnerBadges />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div key={skill.name} className="glass-card rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <Icon className="w-6 h-6 text-primary mr-3" />
                    <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2.5">
                    <div
                      className="bg-primary h-2.5 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <p className="text-right text-sm text-gray-400 mt-1">{skill.level}%</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Let's Work Together</h2>
          <p className="text-xl text-gray-300 mb-8">
            Ready to take your online store to the next level? Let's discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.link/jkdm8e"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-lg transition-all hover:scale-105"
            >
              Chat on WhatsApp
            </a>
            <a
              href="mailto:emicyber20@gmail.com"
              className="glass-card inline-flex items-center justify-center text-white font-semibold py-3 px-8 rounded-lg hover:bg-white/10 transition-all"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
