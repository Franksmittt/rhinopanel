// FAQ Data Structure for FAQPage Schema
// Phase 3: Content must match 1:1 with visible page content

export interface FAQItem {
  question: string;
  answer: string;
}

// General FAQs for homepage and about page
export const generalFAQs: FAQItem[] = [
  {
    question: "What insurance companies are you approved by?",
    answer: "We are approved panelbeaters for MiWay, Old Mutual, and Agruma (c/o King Price). For other insurance companies, we can still perform the work, but clients will need to sign an indemnity form before work commences.",
  },
  {
    question: "What areas do you serve?",
    answer: "We serve the entire Northern Route including Mtubatuba, St Lucia, Hluhluwe, Mkhuze, Pongola, Ulundi, Nongoma, and up to Kosi Bay. Our towing services are available 24/7 for emergency assistance.",
  },
  {
    question: "Do you offer warranties on your work?",
    answer: "Yes, we offer a lifetime warranty on workmanship and a minimum 3-year warranty on all paintwork. This gives you complete peace of mind that your vehicle repairs are protected.",
  },
  {
    question: "How long does a typical repair take?",
    answer: "Repair times vary based on the extent of damage and parts availability. Minor repairs may take 3-5 days, while major collision repairs typically take 1-2 weeks. We'll provide an accurate timeline during the initial assessment.",
  },
];

// Service-specific FAQs (keyed by service slug)
export const serviceFAQs: Record<string, FAQItem[]> = {
  "collision-repair": [
    {
      question: "Will you handle my insurance claim?",
      answer: "Yes, we work directly with approved insurance companies (MiWay, Old Mutual, Agruma c/o King Price) to handle the entire claims process. We submit quotes, negotiate on your behalf, and bill directly to your insurer.",
    },
    {
      question: "Do you use OEM (Original Equipment Manufacturer) parts?",
      answer: "We prioritize OEM parts for all collision repairs to maintain your vehicle's factory specifications and warranty protection. We'll only use quality aftermarket parts if specifically approved by you or your insurer.",
    },
    {
      question: "Can you repair structural damage?",
      answer: "Yes, we have advanced chassis straightening equipment and certified technicians capable of restoring your vehicle's structural integrity to factory specifications. All structural repairs include comprehensive safety inspections.",
    },
  ],
  "spray-painting": [
    {
      question: "What warranty do you offer on paintwork?",
      answer: "We offer a minimum 3-year warranty on all paintwork against peeling, fading, or defects. This warranty covers both materials and workmanship, ensuring your paint finish remains perfect.",
    },
    {
      question: "Do you match factory paint colors?",
      answer: "Yes, we use computer-assisted color matching technology to ensure a perfect blend with your vehicle's original paint. Our spray booth environment guarantees a factory-grade finish.",
    },
    {
      question: "How long does paintwork take to cure?",
      answer: "While the paint is touch-dry within hours, full curing takes approximately 30 days. We'll provide specific care instructions to protect the finish during this period.",
    },
  ],
  "emergency-towing": [
    {
      question: "Are you available 24/7 for towing?",
      answer: "Yes, our emergency towing service operates 24/7, including weekends and holidays. Simply call 072 311 5870 for immediate assistance anywhere on the Northern Route.",
    },
    {
      question: "What types of vehicles can you tow?",
      answer: "We can tow all passenger vehicles, light commercial vehicles, bakkies, and 4x4s. We use rollback trucks for safe, damage-free transport. For heavy-duty vehicles, please call to confirm availability.",
    },
    {
      question: "How quickly can you arrive at an accident scene?",
      answer: "Our average response time is under 45 minutes across the Northern Route. We strategically position our fleet in Mtubatuba to provide rapid response to the N2 highway and surrounding areas.",
    },
  ],
  "dent-removal": [
    {
      question: "What is Paintless Dent Removal (PDR)?",
      answer: "PDR is a specialized technique that massages dents back into shape without using fillers or repainting. It's faster, more cost-effective, and preserves your vehicle's original factory finish.",
    },
    {
      question: "Can all dents be repaired with PDR?",
      answer: "PDR works best for dents where the paint surface isn't broken. If the paint is cracked or chipped, traditional panelbeating and repainting may be required. We assess each case individually.",
    },
  ],
  "hail-damage-repair": [
    {
      question: "Do you handle insurance claims for hail damage?",
      answer: "Yes, we specialize in coordinating with insurance assessment centers for mass hail damage repairs. We combine PDR and traditional techniques to efficiently restore hundreds of dents.",
    },
    {
      question: "How long does hail damage repair take?",
      answer: "The timeframe depends on the extent of damage. Minor hail damage may take 1-2 days, while severe cases with hundreds of dents may take 1-2 weeks. We'll provide an accurate estimate after assessment.",
    },
  ],
};

// Helper function to get FAQs for a service
export function getFAQsForService(serviceSlug: string): FAQItem[] {
  return serviceFAQs[serviceSlug] || [];
}

// Helper function to get all FAQs (general + service-specific)
export function getAllFAQs(serviceSlug?: string): FAQItem[] {
  const serviceSpecific = serviceSlug ? getFAQsForService(serviceSlug) : [];
  return [...generalFAQs, ...serviceSpecific];
}

