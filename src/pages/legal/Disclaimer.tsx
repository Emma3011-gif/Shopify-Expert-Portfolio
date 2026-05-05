import PageBanner from '../../components/PageBanner';

const Disclaimer = () => {
  return (
    <div>
      <PageBanner title="Disclaimer" />
      <section className="py-20 bg-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Disclaimer</h2>
            <p className="text-gray-300 mb-4">Last updated: {new Date().toLocaleDateString()}</p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">1. General Information</h3>
            <p className="text-gray-300 mb-4">
              The information on this website is provided for general informational purposes only. While
              we strive to keep information up to date and accurate, we make no representations or
              warranties of any kind about the completeness, accuracy, reliability, or availability
              of the website or information.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">2. Professional Advice</h3>
            <p className="text-gray-300 mb-4">
              The content on this website does not constitute professional advice. You should consult
              with qualified professionals regarding your specific business needs and circumstances.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">3. Results Disclaimer</h3>
            <p className="text-gray-300 mb-4">
              While we strive to deliver high-quality services and achieve positive results, we cannot
              guarantee specific outcomes, conversion rates, or revenue increases. Results vary based
              on numerous factors beyond our control.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">4. External Links</h3>
            <p className="text-gray-300 mb-4">
              Our website may contain links to external websites. We have no control over the nature,
              content, and availability of those sites. The inclusion of any links does not necessarily
              imply endorsement of the views expressed within them.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">5. Portfolio Representations</h3>
            <p className="text-gray-300 mb-4">
              Portfolio examples shown are for demonstration purposes. Actual client results and project
              details are confidential and shared only with client permission.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">6. Contact</h3>
            <p className="text-gray-300">
              For questions about this disclaimer, contact us at emicyber20@gmail.com.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Disclaimer;
