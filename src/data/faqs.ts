import type { FAQData } from "@/types";

export const FAQ_CATEGORIES = [
  "About the Course",
  "About the Delivery",
  "Miscellaneous",
] as const;

export const FAQ_DATA: FAQData = {
  "About the Course": [
    {
      question: "What types of corporate training programs does Accredian offer?",
      answer:
        "Accredian offers a wide range of corporate training programs including leadership development, technology upskilling, data analytics, Gen-AI, cybersecurity, product management, and more.",
    },
    {
      question: "What domain specializations are available?",
      answer:
        "We offer specializations across Product & Innovation, Gen-AI Mastery, Leadership Elevation, Tech & Data Insights, Operations Excellence, Digital Enterprise, and Fintech Innovation.",
    },
    {
      question: "How are programs customized for each organization?",
      answer:
        "We begin with a comprehensive skill gap analysis, then create a tailored training roadmap. Our CAT Framework ensures practical, applicable learning.",
    },
  ],
  "About the Delivery": [
    {
      question: "What delivery modes are available?",
      answer:
        "We offer flexible delivery options including fully online, in-person, and hybrid modes. Programs can be delivered as intensive bootcamps or extended learning journeys.",
    },
    {
      question: "How long do the training programs typically last?",
      answer:
        "Program duration varies based on scope. Short workshops can be 2-3 days, while comprehensive programs may span 4-12 weeks.",
    },
  ],
  Miscellaneous: [
    {
      question: "What kind of support is available after the training?",
      answer:
        "We provide post-training support including access to learning resources, follow-up sessions, performance tracking dashboards, and alumni networks.",
    },
    {
      question: "How do you measure training effectiveness?",
      answer:
        "We employ multiple assessment methods including pre and post skill assessments, project evaluations, participant feedback surveys, and ROI metrics.",
    },
  ],
};
