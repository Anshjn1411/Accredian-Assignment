import type { CourseSegment } from "@/types";
import { ASSET_BASE } from "@/lib/constants";

export const COURSE_SEGMENTS: CourseSegment[] = [
  { title: "Program Specific", description: "Certificate, Executive, Post Graduate Certificate", image: `${ASSET_BASE}/project-management-v2.webp` },
  { title: "Industry Specific", description: "IT, Healthcare, Retail, Finance, Education, Manufacturing", image: `${ASSET_BASE}/digital-transformation-v2.webp` },
  { title: "Topic Specific", description: "Machine Learning, Design, Analytics, Cybersecurity, Cloud", image: `${ASSET_BASE}/data-science-v2.webp` },
  { title: "Level Specific", description: "Senior Leadership, Mid-Career Professionals, Freshers", image: `${ASSET_BASE}/senior-management-v2.webp` },
];
