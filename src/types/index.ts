// ============================
// Core Application Types
// ============================

/** Navigation item for the main navbar */
export interface NavItem {
  label: string;
  href: string;
}

/** Statistic card data */
export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

/** Partner/client logo entry */
export interface Partner {
  name: string;
  src: string;
  size: string;
}

/** Domain expertise card */
export interface Domain {
  title: string;
  iconPath: string;
}

/** Course segmentation card */
export interface CourseSegment {
  title: string;
  description: string;
  image: string;
}

/** Target audience card */
export interface Audience {
  title: string;
  description: string;
  iconPath: string;
}

/** How-it-works step */
export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

/** FAQ question-answer pair */
export interface FAQItem {
  question: string;
  answer: string;
}

/** FAQ data organized by category */
export type FAQData = Record<string, FAQItem[]>;

/** Client testimonial */
export interface Testimonial {
  company: string;
  logo: string;
  quote: string;
}

/** Lead capture form data */
export interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  domain: string;
  candidates: string;
  deliveryMode: string;
  location: string;
}

/** Social media link */
export interface SocialLink {
  label: string;
  href: string;
  svgPath: string;
}

/** Theme type */
export type Theme = "dark" | "light";
