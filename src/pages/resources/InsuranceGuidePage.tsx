
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const InsuranceGuidePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Insurance Guide</h1>
            
            <div className="prose prose-lg">
              <p>
                Understanding motor insurance can be complicated. Our comprehensive guide helps you
                navigate the world of motor insurance in India with ease.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">Types of Motor Insurance</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium">Comprehensive Insurance</h3>
                  <p>
                    Provides complete coverage for both third-party liabilities and own damage to your vehicle.
                    Recommended for new and valuable vehicles.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium">Third-Party Liability Insurance</h3>
                  <p>
                    The legally mandatory minimum coverage that protects against financial liabilities arising from
                    injury, death, or property damage caused to third parties.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium">Own Damage Cover</h3>
                  <p>
                    Covers damages to your own vehicle due to accidents, theft, fire, natural calamities, etc.
                    Can be purchased as a standalone policy if you already have third-party insurance.
                  </p>
                </div>
              </div>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">Key Insurance Terms Explained</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium">Insured Declared Value (IDV)</h3>
                  <p>
                    The current market value of your vehicle after accounting for depreciation. This is the maximum amount
                    payable in case of total loss or theft.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium">No Claim Bonus (NCB)</h3>
                  <p>
                    A discount on premium that accumulates for each claim-free year, ranging from 20% to 50%.
                    This is transferable even when changing your insurer.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium">Deductible/Excess</h3>
                  <p>
                    The amount you need to pay out of pocket for each claim before insurance coverage kicks in.
                    Includes both compulsory and voluntary deductibles.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium">Add-ons</h3>
                  <p>
                    Optional coverages you can purchase to enhance your base policy, such as zero depreciation, engine protection,
                    roadside assistance, etc.
                  </p>
                </div>
              </div>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">How to Choose the Right Insurance</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Assess your vehicle's value and age</li>
                <li>Consider your usage pattern and risk exposure</li>
                <li>Evaluate your budget constraints</li>
                <li>Research insurer's claim settlement ratio and service quality</li>
                <li>Compare coverage, exclusions, and add-ons</li>
                <li>Check network garage availability in your area</li>
                <li>Review the policy document carefully before purchase</li>
              </ol>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">Insurance Premium Factors</h2>
              <p>Your premium amount is influenced by:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Vehicle type, model, age, and IDV</li>
                <li>Your geographical location</li>
                <li>Type of coverage selected</li>
                <li>Add-ons purchased</li>
                <li>No Claim Bonus accumulated</li>
                <li>Voluntary deductible opted</li>
                <li>Vehicle modifications (if any)</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">Maintaining Your Policy</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Renew your policy before expiry to maintain continuous coverage</li>
                <li>Update your contact and address details promptly</li>
                <li>Inform insurer about any modifications to your vehicle</li>
                <li>Review your coverage annually to ensure it meets your needs</li>
                <li>Keep all insurance documents safely accessible</li>
              </ul>
            </div>
            
            <div className="mt-12 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Need Personalized Guidance?</h3>
              <p className="mb-4">Our insurance experts are here to help you choose the right coverage for your needs.</p>
              <a 
                href="/" 
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Speak to an Expert
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InsuranceGuidePage;
