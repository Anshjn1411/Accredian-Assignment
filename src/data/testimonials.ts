import type { Testimonial } from "@/types";
import { ASSET_BASE } from "@/lib/constants";

export const TESTIMONIALS: Testimonial[] = [
  {
    company: "ADP",
    logo: `${ASSET_BASE}/adp.svg`,
    quote:
      "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication and expertise.",
  },
  {
    company: "Bayer",
    logo: `${ASSET_BASE}/bayer.svg`,
    quote:
      "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded.",
  },
  {
    company: "Reliance",
    logo: `${ASSET_BASE}/rel.png`,
    quote:
      "Choosing Accredian for the learning & development of our employees was a beneficial decision. The value derived is immense.",
  },
];
