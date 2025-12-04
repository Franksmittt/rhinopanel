import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Rhino Panelbeaters",
  description: "Our commitment to protecting your personal information in accordance with POPIA.",
  alternates: {
    canonical: '/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      
      <main className="flex-grow py-12 md:py-20">
        <div className="container px-4 md:px-8 mx-auto max-w-3xl">
          
            <h1 className="text-4xl font-bold mb-8 text-foreground">Privacy Policy</h1>
            <p className="text-sm text-muted-foreground mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

            <div className="prose prose-lg prose-blue max-w-none text-muted-foreground">
                <p>
                    Rhino Panelbeaters &amp; Towing (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclosure, and safeguard your information when you visit our website or use our services.
                </p>

                <h3 className="text-foreground font-bold mt-8 mb-4">1. Information We Collect</h3>
                <p>
                    We collect personal information that you voluntarily provide to us when you request a quote or contact us. This includes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Personal Identification (Name, Phone Number, Email Address)</li>
                    <li>Vehicle Information (Make, Model, Registration Number, VIN)</li>
                    <li>Insurance Details (Provider Name)</li>
                    <li>Images of vehicle damage provided for assessment purposes</li>
                </ul>

                <h3 className="text-foreground font-bold mt-8 mb-4">2. How We Use Your Information</h3>
                <p>
                    We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Generate accurate repair estimates and quotes.</li>
                    <li>Communicate with you regarding your vehicle&apos;s repair status.</li>
                    <li>Liaise with insurance providers on your behalf (with your consent).</li>
                    <li>Dispatch emergency towing services to your location.</li>
                </ul>

                <h3 className="text-foreground font-bold mt-8 mb-4">3. POPIA Compliance (South Africa)</h3>
                <p>
                    In accordance with the Protection of Personal Information Act (POPIA), we act as the responsible party for your data. We implement reasonable technical and organizational measures to secure your personal information against accidental or unlawful destruction, loss, alteration, or unauthorized access.
                </p>

                <h3 className="text-foreground font-bold mt-8 mb-4">4. Sharing of Information</h3>
                <p>
                    We do not sell your personal data. We may share your information with:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Insurance companies (strictly for the purpose of claim authorization).</li>
                    <li>Sub-contractors (e.g., specialized towing partners) only when necessary to fulfill a service request.</li>
                </ul>

                <h3 className="text-foreground font-bold mt-8 mb-4">5. Contact Us</h3>
                <p>
                    If you have questions about this privacy policy or wish to exercise your rights to access or delete your data, please contact our Information Officer at:
                </p>
                <p className="mt-4 font-medium text-foreground">
                    Rhino Panelbeaters<br/>
                    174 Jacaranda Ave, Mtubatuba, 3935<br/>
                    035 550 0211
                </p>
            </div>

        </div>
      </main>
      
      <Footer />
    </div>
  );
}