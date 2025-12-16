import { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://rhinopanelbeaters.co.za';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Our Services | Rhino Panelbeaters & Towing | Mtubatuba",
  description: "Comprehensive panelbeating and towing services in Mtubatuba. Collision repair, spray painting, dent removal, 24/7 emergency towing, and more. Professional quality standards.",
  keywords: "panelbeating services Mtubatuba, collision repair, spray painting, dent removal, towing services, chassis straightening",
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: "Our Services | Rhino Panelbeaters & Towing",
    description: "Comprehensive panelbeating and towing services in Mtubatuba. Professional quality standards.",
    url: `${baseUrl}/services`,
    siteName: 'Rhino Panelbeaters & Towing',
    locale: 'en_ZA',
    type: 'website',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
