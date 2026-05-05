import { useState } from 'react';
import PageBanner from '../components/PageBanner';
import { portfolioItems, niches } from '../data/portfolio';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredItems = activeFilter === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.niche === activeFilter);

  return (
    <div>
      <PageBanner
        title="Portfolio"
        subtitle="Showcasing successful e-commerce projects across various niches"
      />

      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {niches.map((niche) => (
              <button
                key={niche}
                onClick={() => setActiveFilter(niche)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  activeFilter === niche
                    ? 'bg-primary text-white'
                    : 'glass-card text-gray-300 hover:text-white'
                }`}
              >
                {niche}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="glass-card rounded-2xl overflow-hidden group cursor-pointer"
                onClick={() => window.open(item.url, '_blank')}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white">{item.name}</h3>
                    <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                      {item.niche}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Visit Site <span className="ml-2">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
