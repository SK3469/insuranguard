
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const AddOnCoveragesPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Add-On Coverages</h1>
            
            <div className="prose prose-lg">
              <p>
                Enhance your motor insurance with our specialized add-on coverages to get additional protection
                and benefits beyond your standard policy.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">Popular Add-On Coverages</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium">Zero Depreciation Cover</h3>
                  <p>
                    Eliminates the deduction for depreciation on parts replaced during repairs, ensuring
                    you get full claim without any deduction for the age of parts.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium">Engine Protection Cover</h3>
                  <p>
                    Covers damage to your engine caused by water ingression or leakage of lubricating oil,
                    which is typically excluded in standard policies.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium">Return to Invoice</h3>
                  <p>
                    In case of total loss or theft, this add-on ensures you receive the invoice value of your vehicle
                    (including registration and road tax) rather than just the Insured Declared Value (IDV).
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium">No Claim Bonus Protection</h3>
                  <p>
                    Protects your accumulated No Claim Bonus (NCB) even when you make a claim, helping you
                    maintain your discount on future premium payments.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium">Roadside Assistance</h3>
                  <p>
                    24x7 emergency services including towing, battery jump-start, flat tire change,
                    fuel delivery, and minor repairs at the breakdown location.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium">Consumables Cover</h3>
                  <p>
                    Covers the cost of consumables like engine oil, coolant, lubricants, nuts, bolts, screws,
                    washers, grease, etc. that need replacement during repairs.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium">Key Replacement Cover</h3>
                  <p>
                    Covers the cost of replacing your vehicle keys if they are lost, stolen, or damaged.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium">Daily Allowance / Loss of Use</h3>
                  <p>
                    Provides a fixed daily amount to cover alternative transportation costs while your
                    vehicle is being repaired at the workshop.
                  </p>
                </div>
              </div>
              
              <h2 className="text-xl font-semibold mt-10 mb-4">How to Choose the Right Add-Ons</h2>
              <p>
                When selecting add-ons, consider your vehicle's age, usage pattern, and specific risks you want to mitigate:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>For new vehicles: Zero Depreciation, Return to Invoice, and Engine Protection are highly recommended</li>
                <li>For older vehicles: Roadside Assistance and Consumables Cover offer great value</li>
                <li>For drivers in flood-prone areas: Engine Protection is essential</li>
                <li>For high-end vehicles: Comprehensive coverage with all possible add-ons provides the best protection</li>
              </ul>
            </div>
            
            <div className="mt-12 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Customize Your Protection</h3>
              <p className="mb-4">Speak with our insurance advisors to customize your policy with the right add-ons.</p>
              <a 
                href="/" 
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Get Expert Advice
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AddOnCoveragesPage;
