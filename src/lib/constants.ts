/** Application-wide constants */

export const SITE_CONFIG = {
  name: "Accredian Enterprise",
  tagline: "credentials that matter",
  title: "Accredian Enterprise - Next-Gen Expertise For Your Enterprise",
  description:
    "Cultivate high-performance teams through expert learning. Corporate training programs by Accredian with tailored solutions, innovative frameworks, and flexible delivery.",
  url: "https://enterprise.accredian.com",
  email: "enterprise@accredian.com",
  address: "4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana",
  copyright: `© ${new Date().getFullYear()} Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved.`,
} as const;

/** Google Cloud Storage base URL for Accredian assets */
export const ASSET_BASE =
  "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other" as const;

/** Available delivery modes for the enquiry form */
export const DELIVERY_MODES = ["Online", "Offline", "Hybrid"] as const;

/** Footer navigation links */
export const FOOTER_LINKS = ["About", "Blog", "Why Accredian"] as const;

/** Hero section feature badges */
export const HERO_FEATURES = [
  "Tailored Solutions",
  "Industry Insights",
  "Expert Guidance",
] as const;

/** Enquiry form sidebar selling points */
export const FORM_SELLING_POINTS = [
  "Tailored Programs",
  "Expert Instructors",
  "Measurable ROI",
] as const;

/** Initial (empty) lead form state */
export const EMPTY_LEAD_FORM = {
  name: "",
  email: "",
  phone: "",
  company: "",
  domain: "",
  candidates: "",
  deliveryMode: "",
  location: "",
} as const;
