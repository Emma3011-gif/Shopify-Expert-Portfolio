import PageBanner from '../../components/PageBanner';

const Refund = () => {
  return (
    <div>
      <PageBanner title="Refund Policy" />
      <section className="py-20 bg-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Refund Policy</h2>
            <p className="text-gray-300 mb-4">Last updated: {new Date().toLocaleDateString()}</p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">1. General Policy</h3>
            <p className="text-gray-300 mb-4">
              At Emicyber, we strive to ensure complete satisfaction with our services. Due to the custom
              nature of our work, refund eligibility depends on the project stage and specific circumstances.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">2. Project Cancellation</h3>
            <p className="text-gray-300 mb-4">
              If you cancel a project before work begins, you are entitled to a full refund of any
              deposits made. Cancellations after work has commenced will be evaluated on a case-by-case
              basis, with refunds prorated based on work completed.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">3. Deliverable Dissatisfaction</h3>
            <p className="text-gray-300 mb-4">
              If you are not satisfied with deliverables, we provide up to two rounds of revisions
              at no additional cost. If we cannot meet your requirements after revisions, a partial
              refund may be issued at our discretion.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">4. Non-Refundable Items</h3>
            <p className="text-gray-300 mb-4">
              Third-party costs (app subscriptions, stock photos, domain purchases) are non-refundable.
              Completed and delivered work that has been approved by the client is also non-refundable.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">5. Refund Process</h3>
            <p className="text-gray-300 mb-4">
              To request a refund, contact us at emicyber20@gmail.com with your project details and
              reason for the request. Refunds will be processed within 7-14 business days.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">6. Disputes</h3>
            <p className="text-gray-300">
              We aim to resolve any disputes amicably. If we cannot reach an agreement, the matter
              will be subject to mediation before any legal action.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Refund;
