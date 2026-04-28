"use client";
import { SITE_CONFIG, FOOTER_LINKS } from "@/lib/constants";
import { SOCIAL_LINKS } from "@/data/social";

interface FooterProps { onEnquireClick: () => void; }

export default function Footer({ onEnquireClick }: FooterProps) {
  return (
    <footer>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mb-16 relative z-10">
        <div className="glass-card rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="flex items-center gap-5 relative z-10">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: "var(--glass-bg)", border: "1px solid var(--glass-border)" }}>
              <svg className="w-9 h-9 t-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold t-heading">Want to Learn More?</h3>
              <p className="t-body mt-1">Get Expert Guidance for Your Team&apos;s Success!</p>
            </div>
          </div>
          <button onClick={onEnquireClick} className="relative z-10 btn-primary flex items-center gap-2 group flex-shrink-0">
            Contact Us
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>

      <div className="pt-28 pb-8" style={{ background: "var(--glass-strong)", borderTop: "1px solid var(--glass-border)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
            <div>
              <span className="text-3xl font-bold text-primary-500">accredian</span>
              <span className="block text-xs t-muted -mt-1">{SITE_CONFIG.tagline}</span>
              <div className="flex gap-3 mt-4">
                {SOCIAL_LINKS.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="w-9 h-9 glass-card rounded-lg flex items-center justify-center t-muted hover:t-accent transition-all" aria-label={s.label}>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d={s.svgPath} /></svg>
                  </a>
                ))}
              </div>
            </div>
            <div className="text-center md:text-right">
              <button onClick={onEnquireClick} className="btn-primary px-10">Enquire Now</button>
              <p className="text-xs t-muted mt-2">Speak with our Advisor</p>
            </div>
          </div>
          <hr style={{ borderColor: "var(--glass-border)" }} className="mb-8" />
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold t-heading mb-4">Accredian</h4>
              <ul className="space-y-2">{FOOTER_LINKS.map((l) => <li key={l}><a href="#" className="t-muted hover:text-primary-500 text-sm transition-colors">{l}</a></li>)}</ul>
            </div>
            <div>
              <h4 className="font-bold t-heading mb-4">Contact Us</h4>
              <div className="space-y-2 text-sm t-muted">
                <p>Email: <a href={`mailto:${SITE_CONFIG.email}`} className="text-primary-500 hover:underline">{SITE_CONFIG.email}</a></p>
                <p>Office: {SITE_CONFIG.address}</p>
              </div>
            </div>
          </div>
          <hr style={{ borderColor: "var(--glass-border)" }} className="my-8" />
          <p className="text-center text-xs t-muted">{SITE_CONFIG.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
