import PageBanner from '../../components/PageBanner';

const Terms = () => {
  return (
    <div>
      <PageBanner title="Terms of Service" />
      <section className="py-20 bg-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-invert">
          <div className="glass-card rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Terms of Service</h2>
            <p className="text-gray-300 mb-4">Last updated: {new Date().toLocaleDateString()}</p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">1. Agreement to Terms</h3>
            <p className="text-gray-300 mb-4">
              By accessing our website and services, you agree to be bound by these Terms of Service.
              If you disagree with any part of these terms, you do not have permission to access our services.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">2. Services</h3>
            <p className="text-gray-300 mb-4">
              Emicyber provides Shopify development, store optimization, Klaviyo setup, email automation,
              SEO optimization, and related e-commerce services. All services are subject to availability
              and mutual agreement on project scope.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">3. Payment Terms</h3>
            <p className="text-gray-300 mb-4">
              Payment terms will be specified in individual project agreements. Typically, we require
              a deposit before commencing work, with remaining balance due upon project completion.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">4. Intellectual Property</h3>
            <p className="text-gray-300 mb-4">
              Upon full payment, clients receive ownership of custom code, designs, and deliverables
              created specifically for their project. Emicyber retains the right to showcase the work
              in our portfolio.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">5. Limitation of Liability</h3>
            <p className="text-gray-300 mb-4">
              Emicyber shall not be liable for any indirect, incidental, special, consequential, or
              punitive damages resulting from your use of our services.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">6. Contact Information</h3>
            <p className="text-gray-300">
              For questions about these Terms, please contact us at emicyber20@gmail.com.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
