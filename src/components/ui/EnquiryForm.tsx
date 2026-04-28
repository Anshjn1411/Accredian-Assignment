"use client";
import { useState, useEffect } from "react";
import { DOMAIN_NAMES } from "@/data/domains";
import { DELIVERY_MODES, EMPTY_LEAD_FORM, FORM_SELLING_POINTS } from "@/lib/constants";
import type { LeadFormData } from "@/types";

interface EnquiryFormProps { isOpen: boolean; onClose: () => void; }

const INPUT_CLASS = "w-full px-4 py-3 rounded-xl text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary-500/50";

export default function EnquiryForm({ isOpen, onClose }: EnquiryFormProps) {
  const [formData, setFormData] = useState<LeadFormData>({ ...EMPTY_LEAD_FORM });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/leads", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formData) });
      if (!res.ok) throw new Error("Submission failed");
      setIsSuccess(true);
      setFormData({ ...EMPTY_LEAD_FORM });
      setTimeout(() => { setIsSuccess(false); onClose(); }, 3000);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  const glassInput = { background: "var(--glass-bg)", border: "1px solid var(--glass-border)", color: "var(--heading)" };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-md modal-overlay" onClick={onClose} />
      <div className="relative w-full max-w-4xl max-h-[90vh] glass-card rounded-3xl overflow-hidden modal-content flex flex-col md:flex-row" style={{ background: "var(--glass-hover)", backdropFilter: "blur(24px)" }}>
        {/* Sidebar */}
        <div className="hidden md:flex md:w-2/5 p-8 flex-col justify-between relative overflow-hidden" style={{ background: "var(--glass-strong)", borderRight: "1px solid var(--glass-border)" }}>
          <div className="relative z-10">
            <h3 className="t-heading text-2xl font-bold mb-3">Transform Your Team&apos;s Potential</h3>
            <p className="t-body text-sm leading-relaxed">Get a customized training plan. Our experts will help you identify skill gaps and create impactful learning journeys.</p>
          </div>
          <div className="relative z-10 space-y-4">
            {FORM_SELLING_POINTS.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "var(--glass-bg)", border: "1px solid var(--glass-border)" }}>
                  <svg className="w-4 h-4 t-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                </div>
                <span className="t-heading text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
          <p className="relative z-10 t-muted text-xs">Trusted by 50+ leading organizations</p>
        </div>

        {/* Form */}
        <div className="flex-1 p-6 md:p-8 overflow-y-auto">
          <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 glass-card rounded-full flex items-center justify-center z-20" aria-label="Close">
            <svg className="w-4 h-4 t-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>

          {isSuccess ? (
            <div className="flex flex-col items-center justify-center h-full py-12 text-center">
              <div className="w-20 h-20 bg-green-100/50 rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-2xl font-bold t-heading mb-2">Thank You!</h3>
              <p className="t-body">Our team will get in touch with you soon.</p>
            </div>
          ) : (
            <>
              <h3 className="text-2xl font-bold t-heading mb-1">Get In Touch</h3>
              <p className="t-body text-sm mb-6">Fill in your details and we&apos;ll reach out to you.</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input name="name" type="text" placeholder="Enter Name *" value={formData.name} onChange={handleChange} required className={INPUT_CLASS} style={glassInput} />
                  <input name="email" type="email" placeholder="Enter Email *" value={formData.email} onChange={handleChange} required className={INPUT_CLASS} style={glassInput} />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-xl text-sm t-muted" style={{ background: "var(--glass-bg)", border: "1px solid var(--glass-border)", borderRight: "none" }}>+91</span>
                    <input name="phone" type="tel" placeholder="Phone *" value={formData.phone} onChange={handleChange} required className={`${INPUT_CLASS} rounded-l-none`} style={glassInput} />
                  </div>
                  <input name="company" type="text" placeholder="Company Name *" value={formData.company} onChange={handleChange} required className={INPUT_CLASS} style={glassInput} />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <select name="domain" value={formData.domain} onChange={handleChange} required className={INPUT_CLASS} style={glassInput}>
                    <option value="">Select Domain *</option>
                    {DOMAIN_NAMES.map((d) => <option key={d} value={d}>{d}</option>)}
                  </select>
                  <input name="candidates" type="number" placeholder="No. of Candidates *" value={formData.candidates} onChange={handleChange} required min="1" className={INPUT_CLASS} style={glassInput} />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <select name="deliveryMode" value={formData.deliveryMode} onChange={handleChange} required className={INPUT_CLASS} style={glassInput}>
                    <option value="">Delivery Mode *</option>
                    {DELIVERY_MODES.map((m) => <option key={m} value={m}>{m}</option>)}
                  </select>
                  <input name="location" type="text" placeholder="Location (e.g. Delhi)" value={formData.location} onChange={handleChange} className={INPUT_CLASS} style={glassInput} />
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button type="submit" disabled={isSubmitting} className="w-full btn-primary py-4 text-base disabled:opacity-50 disabled:cursor-not-allowed">
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
