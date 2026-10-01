import React from 'react';
import { PageTransition } from '../components/PageTransition';

export const PrivacyPage: React.FC = () => {
  return (
    <PageTransition>
      <section className="relative py-32 bg-[#0d1e16] text-[#faf7f2]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-serif-heading text-4xl sm:text-5xl">Privacy Policy</h1>
          <p className="text-xs uppercase tracking-widest text-[#c5a059] mt-2">Ahas Pokuna Holiday Resorts</p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-[#faf7f2] text-[#0d1e16]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-sm sm:text-base font-light leading-relaxed">
          <p>
            At Ahas Pokuna Holiday Resorts, we are committed to respecting your privacy and protecting personal information collected through our website and booking services.
          </p>

          <h3 className="font-serif-heading text-2xl text-[#0d1e16]">Information We Collect</h3>
          <p>
            We collect personal details such as your name, email address, phone number, check-in/check-out dates, and specific room preferences when you submit an inquiry or booking request.
          </p>

          <h3 className="font-serif-heading text-2xl text-[#0d1e16]">How We Use Your Information</h3>
          <p>
            The information collected is used solely to process your resort reservations, communicate inquiry updates, provide customer support, and improve our guest hospitality experience. We do not sell or share your personal data with third-party advertisers.
          </p>

          <h3 className="font-serif-heading text-2xl text-[#0d1e16]">Data Protection & Security</h3>
          <p>
            We implement administrative and technical security measures to maintain the safety of your personal information.
          </p>

          <h3 className="font-serif-heading text-2xl text-[#0d1e16]">Contacting Us</h3>
          <p>
            If you have questions regarding this privacy policy, please contact us at <strong>info@ahaspokunaholidayresorts.com</strong>.
          </p>
        </div>
      </section>
    </PageTransition>
  );
};
