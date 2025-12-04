import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Rhino Panelbeaters & Towing | Mtubatuba",
  description: "Comprehensive panelbeating and towing services in Mtubatuba. Collision repair, spray painting, dent removal, 24/7 emergency towing, and more. Professional quality standards.",
  keywords: "panelbeating services Mtubatuba, collision repair, spray painting, dent removal, towing services, chassis straightening",
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
