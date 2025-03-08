
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const CommercialVehicleInsurancePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Commercial Vehicle Insurance</h1>
            
            <div className="prose prose-lg">
              <p>
                Specialized insurance solutions for commercial vehicles to protect your business assets,
                meet legal requirements, and ensure business continuity.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">Types of Commercial Vehicles We Cover</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Goods carrying vehicles (trucks, tempos, lorries)</li>
                <li>Passenger carrying vehicles (buses, taxis)</li>
                <li>Three-wheelers (autorickshaws, delivery vehicles)</li>
                <li>Special purpose vehicles (ambulances, fire engines, construction vehicles)</li>
                <li>Fleet management solutions for multiple vehicles</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">Coverage Options</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium">Comprehensive Commercial Vehicle Insurance</h3>
                  <p>
                    Protects against both third-party liabilities and own damage to your commercial vehicle
                    from accidents, theft, fire, natural and man-made calamities.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium">Third-Party Liability Insurance</h3>
                  <p>
                    Covers legal liabilities arising from third-party bodily injury, death, or property damage.
                    This is the minimum legal requirement for all commercial vehicles.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium">Passenger Cover Add-on</h3>
                  <p>
                    Provides coverage for passengers being transported in commercial passenger vehicles,
                    offering protection against injuries or death during accidents.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium">Goods in Transit Insurance</h3>
                  <p>
                    Covers damage to goods being transported in your commercial vehicle due to accidents,
                    fire, or other insured perils.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium">Driver & Staff Accident Cover</h3>
                  <p>
                    Provides personal accident coverage for drivers and other staff operating your
                    commercial vehicles.
                  </p>
                </div>
              </div>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">Special Features for Commercial Vehicles</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Higher third-party cover limits suitable for commercial operations</li>
                <li>Specialized add-ons for business continuity (loss of use, downtime protection)</li>
                <li>Flexible plans based on vehicle usage and business needs</li>
                <li>Discounted premiums for fleet insurance</li>
                <li>Simplified claim process with minimal downtime</li>
                <li>Legal liability to employees (paid driver, cleaner, etc.)</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">Why Choose Our Commercial Vehicle Insurance</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Specialized underwriting for commercial risks</li>
                <li>Pan-India network of garages for faster repairs</li>
                <li>Dedicated claims team for commercial vehicles</li>
                <li>Risk management advisory services</li>
                <li>Digital-first approach for easy policy management</li>
                <li>Competitive premiums with flexible payment options</li>
              </ul>
            </div>
            
            <div className="mt-12 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Business Vehicle Solutions</h3>
              <p className="mb-4">Speak with our commercial insurance specialists to find the right coverage for your business vehicles.</p>
              <a 
                href="/" 
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Business Insurance Consultation
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CommercialVehicleInsurancePage;
