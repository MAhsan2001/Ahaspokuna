import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { SectionHeading } from '../components/SectionHeading';
import { ContactForm } from '../components/ContactForm';
import { siteConfig } from '../data/site';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Compass } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <PageTransition>
      {/* Hero Header */}
      <section className="relative py-32 sm:py-40 bg-[#0d1e16] text-[#faf7f2] overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=80"
            alt="Contact Hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1e16] via-[#0d1e16]/80 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <span className="text-xs uppercase tracking-[0.25em] text-[#c5a059] font-semibold">
            Get in Touch
          </span>
          <h1 className="font-serif-heading text-4xl sm:text-6xl md:text-7xl text-[#faf7f2] font-normal leading-tight mt-2 mb-4">
            CONTACT & LOCATION
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-[#d6c6b3]/90 font-light leading-relaxed">
            We are here to assist with villa reservations, day-outing packages, and custom event inquiries.
          </p>
        </div>
      </section>

      {/* Main Contact Content */}
      <section className="py-24 sm:py-32 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 sm:gap-16">
            {/* Left Contact Details (1 Col) */}
            <div className="space-y-8 lg:col-span-1">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold">
                  Direct Inquiries
                </span>
                <h3 className="font-serif-heading text-3xl text-[#0d1e16] mt-1">
                  Resort Reach
                </h3>
                <p className="text-sm text-[#28503c]/85 font-light leading-relaxed mt-2">
                  Reach out directly to our reservations desk for special requests or directions.
                </p>
              </div>

              <div className="space-y-6 pt-4 border-t border-[#d6c6b3]/50 text-sm">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-[#28503c] text-[#c5a059] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0d1e16]">Resort Location</h4>
                    <p className="text-xs text-[#28503c]/80 font-light mt-0.5">
                      {siteConfig.address.fullText}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-[#28503c] text-[#c5a059] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0d1e16]">Phone & WhatsApp</h4>
                    <p className="text-xs text-[#28503c]/80 font-light mt-0.5">
                      {siteConfig.contact.phones[0]}
                    </p>
                    <p className="text-xs text-[#28503c]/80 font-light">
                      {siteConfig.contact.phones[1]}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-[#28503c] text-[#c5a059] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0d1e16]">Email Address</h4>
                    <p className="text-xs text-[#28503c]/80 font-light mt-0.5">
                      {siteConfig.contact.email}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-[#28503c] text-[#c5a059] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0d1e16]">Front Desk Hours</h4>
                    <p className="text-xs text-[#28503c]/80 font-light mt-0.5">
                      Open 24 Hours Daily
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form (2 Cols) */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>

          {/* Interactive Map Component Placeholder */}
          <div className="mt-20">
            <h3 className="font-serif-heading text-2xl text-[#0d1e16] mb-4">
              Resort Location Map
            </h3>
            <div className="w-full h-96 rounded-2xl overflow-hidden border border-[#d6c6b3] relative bg-[#0d1e16] shadow-lg flex items-center justify-center text-center p-6">
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80"
                alt="Ahas Pokuna Map Location"
                className="absolute inset-0 w-full h-full object-cover opacity-40"
              />
              <div className="relative z-10 p-8 bg-[#0d1e16]/95 border border-[#28503c] rounded-2xl text-[#faf7f2] max-w-lg space-y-3">
                <Compass className="w-8 h-8 text-[#c5a059] mx-auto" />
                <h4 className="font-serif-heading text-2xl text-[#faf7f2]">
                  Ahas Pokuna Holiday Resorts
                </h4>
                <p className="text-xs text-[#d6c6b3]/90 font-light">
                  Ranthatiuyana Road, Barandana, Kurunegala, Sri Lanka
                </p>
                <div className="pt-2">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-5 py-2.5 bg-[#c5a059] text-[#0d1e16] text-xs font-semibold uppercase tracking-widest rounded hover:bg-[#dfbe7d] transition-colors"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
