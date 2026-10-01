import React from 'react';
import { PageTransition } from '../components/PageTransition';

export const TermsPage: React.FC = () => {
  return (
    <PageTransition>
      <section className="relative py-32 bg-[#0d1e16] text-[#faf7f2]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-serif-heading text-4xl sm:text-5xl">Terms & Conditions</h1>
          <p className="text-xs uppercase tracking-widest text-[#c5a059] mt-2">Ahas Pokuna Holiday Resorts</p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-[#faf7f2] text-[#0d1e16]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-sm sm:text-base font-light leading-relaxed">
          <p>
            Welcome to Ahas Pokuna Holiday Resorts. By accessing our website or booking an accommodation stay with us, you agree to comply with and be bound by the following terms.
          </p>

          <h3 className="font-serif-heading text-2xl text-[#0d1e16]">Reservations & Check-In</h3>
          <p>
            Standard check-in and check-out times apply. All villa reservations are confirmed upon direct verification with our front desk team. Guests are required to present a valid government-issued photo ID upon check-in.
          </p>

          <h3 className="font-serif-heading text-2xl text-[#0d1e16]">Resort Policy & Nature Conservation</h3>
          <p>
            Ahas Pokuna is situated within a 25-acre natural forest reserve. Guests are requested to respect local wildlife, avoid littering, and maintain quiet atmosphere after 10:00 PM to ensure peace for all visitors and forest wildlife.
          </p>

          <h3 className="font-serif-heading text-2xl text-[#0d1e16]">Cancellation & Modification</h3>
          <p>
            Cancellation terms depend on seasonal booking policies. Please contact our reservation team directly at +94 372 222 692 or +94 71 865 5603 for modifications or cancellations.
          </p>
        </div>
      </section>
    </PageTransition>
  );
};
