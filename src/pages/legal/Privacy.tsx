import PageBanner from '../../components/PageBanner';

const Privacy = () => {
  return (
    <div>
      <PageBanner title="Privacy Policy" />
      <section className="py-20 bg-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Privacy Policy</h2>
            <p className="text-gray-300 mb-4">Last updated: {new Date().toLocaleDateString()}</p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">1. Information We Collect</h3>
            <p className="text-gray-300 mb-4">
              We collect information you provide directly when you fill out contact forms, booking requests,
              or communicate with us. This may include your name, email address, phone number, and project details.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">2. How We Use Your Information</h3>
            <p className="text-gray-300 mb-4">
              We use the information to respond to inquiries, provide services, send project updates,
              and improve our offerings. We do not sell or share your personal information with third parties
              except as necessary to provide our services.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">3. Data Security</h3>
            <p className="text-gray-300 mb-4">
              We implement appropriate security measures to protect your personal information against
              unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">4. Cookies</h3>
            <p className="text-gray-300 mb-4">
              Our website may use cookies to enhance user experience. You can choose to disable cookies
              through your browser settings, though this may affect website functionality.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">5. Third-Party Services</h3>
            <p className="text-gray-300 mb-4">
              We use third-party services like Formspree for form handling and WhatsApp for communication.
              These services have their own privacy policies governing the use of your information.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">6. Your Rights</h3>
            <p className="text-gray-300 mb-4">
              You have the right to access, correct, or delete your personal information. Contact us at
              emicyber20@gmail.com to exercise these rights.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
