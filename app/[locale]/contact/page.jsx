import { getDictionary } from "@/lib/get-dictionary";
import { locales } from "@/lib/i18n-config";
import ContactForm from "@/components/ContactForm";
import AppointmentSection from "@/components/AppointmentSection";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function ContactPage({ params }) {
  const { locale } = params;
  const dict = getDictionary(locale);
  const { contact } = dict;

  return (
    <>
      <section className="bg-navy-deep">
        <div className="container-x py-20 sm:py-24">
          <span className="eyebrow text-cyan">{contact.eyebrow}</span>
          <h1 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl text-mist-100 max-w-2xl leading-tight text-balance">
            {contact.title}
          </h1>
          <p className="mt-5 text-mist-100/70 max-w-xl leading-relaxed">{contact.intro}</p>
        </div>
      </section>

      <section className="container-x py-16 sm:py-20 grid lg:grid-cols-[1.3fr_1fr] gap-10 items-start">
        <ContactForm dict={dict} />

        <div className="space-y-6">
          <AppointmentSection dict={dict} />

          <div className="rounded-3xl bg-white p-7 sm:p-8 ring-1 ring-navy/5">
            <h3 className="font-display text-lg text-navy">{contact.direct.title}</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan/10 shrink-0">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M4 6h16v12H4z" stroke="#0B93A3" strokeWidth="1.6" />
                    <path d="M4 7l8 6 8-6" stroke="#0B93A3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <a href={`mailto:${contact.direct.email}`} className="focus-ring text-slate-dark hover:text-navy break-all">
                  {contact.direct.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan/10 shrink-0">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.33 4.97L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2z" stroke="#0B93A3" strokeWidth="1.5" />
                  </svg>
                </span>
                <a href="https://wa.me/971553910708" className="focus-ring text-slate-dark hover:text-navy" dir="ltr">
                  {contact.direct.whatsapp}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan/10 shrink-0">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 22s7-6.1 7-12a7 7 0 10-14 0c0 5.9 7 12 7 12z" stroke="#0B93A3" strokeWidth="1.5" />
                    <circle cx="12" cy="10" r="2.4" stroke="#0B93A3" strokeWidth="1.5" />
                  </svg>
                </span>
                <span className="text-slate-dark">{contact.direct.location}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
