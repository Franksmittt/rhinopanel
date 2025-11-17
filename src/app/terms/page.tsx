import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Rhino Panelbeaters",
  description: "Terms and conditions for Rhino Panelbeaters & Towing services, including repair warranties, payment terms, and storage policies.",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      
      <main className="flex-grow py-12 md:py-20">
        <div className="container px-4 md:px-8 mx-auto max-w-3xl">
          
            <h1 className="text-4xl font-bold mb-8 text-foreground">Terms of Service</h1>
            <p className="text-sm text-muted-foreground mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

            <div className="prose prose-lg prose-blue max-w-none text-muted-foreground">
                <p>
                    Welcome to Rhino Panelbeaters &amp; Towing. By using our website or engaging our services, you agree to the following terms and conditions.
                </p>

                <h3 className="text-foreground font-bold mt-8 mb-4">1. Repair Services &amp; Quotes</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Estimates:</strong> Quotes provided via our digital assessment tool are estimates only. A final quote will be issued upon physical inspection of the vehicle at our workshop.</li>
                    <li><strong>Authorization:</strong> No repair work will commence without written authorization from the vehicle owner or the relevant insurance provider.</li>
                    <li><strong>Parts:</strong> We utilize OEM (Original Equipment Manufacturer) parts where specified by insurance policies. In other cases, high-quality approved aftermarket parts may be used with client consent.</li>
                </ul>

                <h3 className="text-foreground font-bold mt-8 mb-4">2. Towing &amp; Recovery</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Emergency Response:</strong> While we strive for the fastest possible response times, arrival times may vary due to traffic, weather, and road conditions.</li>
                    <li><strong>Indemnity:</strong> While all reasonable care is taken during recovery, Rhino Panelbeaters &amp; Towing accepts no liability for further damage sustained during the recovery of vehicles from precarious positions (e.g., roll-overs, off-road extractions) unless due to gross negligence.</li>
                    <li><strong>Personal Items:</strong> Please remove all valuables from your vehicle before towing. We are not responsible for the loss of personal items left inside the vehicle.</li>
                </ul>

                <h3 className="text-foreground font-bold mt-8 mb-4">3. Payment &amp; Storage</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Payment Terms:</strong> For private (non-insurance) work, a 50% deposit is required before work commences, with the balance due upon collection.</li>
                    <li><strong>Insurance Excess:</strong> The vehicle owner is responsible for paying any insurance excess directly to us before the vehicle can be released.</li>
                    <li><strong>Storage Fees:</strong> Vehicles left at our premises for more than 3 days after notification of completion (or after assessment without repair authorization) may incur daily storage fees.</li>
                </ul>

                <h3 className="text-foreground font-bold mt-8 mb-4">4. Warranties</h3>
                <p>
                    We stand by our workmanship.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Paintwork:</strong> Guaranteed for a minimum of 3 years against peeling, blistering, or fading.</li>
                    <li><strong>Workmanship:</strong> We offer a lifetime guarantee on our structural repair workmanship for as long as you own the vehicle.</li>
                    <li><strong>Parts:</strong> Parts are covered by the respective manufacturer&apos;s warranty.</li>
                </ul>

                <h3 className="text-foreground font-bold mt-8 mb-4">5. Jurisdiction</h3>
                <p>
                    These terms are governed by the laws of the Republic of South Africa. Any disputes arising from these terms shall be subject to the jurisdiction of the courts of South Africa.
                </p>

                <h3 className="text-foreground font-bold mt-8 mb-4">6. Contact Information</h3>
                <p>
                    For any questions regarding these terms, please contact us at:
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