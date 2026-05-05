import PageBanner from '../../components/PageBanner';

const CookiePolicy = () => {
  return (
    <div>
      <PageBanner title="Cookie Policy" />
      <section className="py-20 bg-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Cookie Policy</h2>
            <p className="text-gray-300 mb-4">Last updated: {new Date().toLocaleDateString()}</p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">1. What Are Cookies</h3>
            <p className="text-gray-300 mb-4">
              Cookies are small text files that are placed on your computer or mobile device when you
              visit a website. They are widely used to make websites work more efficiently and provide
              information to website owners.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">2. How We Use Cookies</h3>
            <p className="text-gray-300 mb-4">
              We use cookies to understand how you interact with our website, remember your preferences,
              and improve your browsing experience. This helps us optimize our content and services.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">3. Types of Cookies We Use</h3>
            <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-2">
              <li><strong className="text-white">Essential Cookies:</strong> Necessary for the website to function properly.</li>
              <li><strong className="text-white">Analytics Cookies:</strong> Help us understand website traffic and usage patterns.</li>
              <li><strong className="text-white">Preference Cookies:</strong> Remember your settings and preferences.</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">4. Third-Party Cookies</h3>
            <p className="text-gray-300 mb-4">
              We may use third-party services that set their own cookies. These include analytics
              providers and form handling services. Please refer to their respective privacy policies.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">5. Managing Cookies</h3>
            <p className="text-gray-300 mb-4">
              Most web browsers allow you to control cookies through their settings preferences.
              However, limiting cookies may affect your ability to use our website fully.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">6. Changes to This Policy</h3>
            <p className="text-gray-300">
              We may update this Cookie Policy from time to time. Any changes will be posted on this page
              with an updated revision date.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicy;
