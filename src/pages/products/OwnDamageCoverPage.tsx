
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const OwnDamageCoverPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Own Damage Cover</h1>
            
            <div className="prose prose-lg">
              <p>
                Own Damage (OD) cover protects your vehicle against damages caused by accidents, theft, fire, 
                natural calamities, and other unforeseen events.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">What is Own Damage Cover?</h2>
              <p>
                Own Damage insurance covers the expenses for repairing or replacing your vehicle if it's damaged
                in an accident or by other covered perils. It can be purchased as a standalone policy if you 
                already have a valid third-party liability insurance, or as part of a comprehensive policy.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">What's Covered?</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Accidental damage to your vehicle</li>
                <li>Damage from natural calamities (flood, earthquake, storm)</li>
                <li>Damage from man-made disasters (riot, strike, malicious acts)</li>
                <li>Fire, explosion, self-ignition</li>
                <li>Theft of the vehicle</li>
                <li>Damage during transit by road, rail, inland waterway, or air</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">What's Not Covered?</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Normal wear and tear, mechanical/electrical breakdown</li>
                <li>Damage to tires and tubes unless the vehicle is damaged at the same time</li>
                <li>Damage caused when driving under the influence of alcohol/drugs</li>
                <li>Damage caused outside geographical limits</li>
                <li>Consequential loss, depreciation, and damage due to deliberate actions</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">Benefits of Our Own Damage Cover</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cashless repairs at our network garages across India</li>
                <li>Quick claim settlement process</li>
                <li>24x7 roadside assistance</li>
                <li>Competitive premium rates with attractive discounts</li>
                <li>Flexible coverage options with various add-ons available</li>
              </ul>
            </div>
            
            <div className="mt-12 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Protect Your Vehicle</h3>
              <p className="mb-4">Get own damage coverage to protect your vehicle from unforeseen damages.</p>
              <a 
                href="/" 
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Get Instant Quote
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OwnDamageCoverPage;
