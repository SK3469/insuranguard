
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const ClaimProcessPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Claim Process</h1>
            
            <div className="prose prose-lg">
              <p>
                We've simplified the claim process to help you get back on the road quickly and hassle-free.
                Follow these steps when you need to make a claim.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">Steps to File a Claim</h2>
              
              <div className="space-y-8">
                <div className="flex">
                  <div className="bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1">
                    1
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Notify Us Immediately</h3>
                    <p>
                      Report the incident as soon as possible through our mobile app, customer care (1800-VAHAN-HELP),
                      or email (claims@vahankavach.in). For accidents, also file an FIR at the nearest police station.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1">
                    2
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Submit Claim Form & Documentation</h3>
                    <p>
                      Complete the claim form and submit it along with necessary documents. These typically include:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Duly filled and signed claim form</li>
                      <li>Copy of your insurance policy</li>
                      <li>Copy of vehicle registration certificate (RC)</li>
                      <li>Copy of valid driving license</li>
                      <li>Police FIR or Panchanama (for theft, third-party claims, or major accidents)</li>
                      <li>Original repair estimate from garage</li>
                      <li>Photos of the damaged vehicle (from multiple angles)</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1">
                    3
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Vehicle Inspection</h3>
                    <p>
                      Our surveyor will inspect your vehicle to assess the damage. This can be done:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>At the accident site (spot survey)</li>
                      <li>At the garage where your vehicle is towed</li>
                      <li>Virtually through our mobile app (for minor damages)</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1">
                    4
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Claim Approval</h3>
                    <p>
                      Once the surveyor submits their report, your claim will be processed. If approved,
                      we'll either:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Make a direct payment to the network garage (cashless claim)</li>
                      <li>Reimburse your repair expenses (reimbursement claim)</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1">
                    5
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Vehicle Delivery</h3>
                    <p>
                      Once repairs are completed and payment is settled, you can collect your vehicle from the garage.
                      Verify all repairs before taking delivery.
                    </p>
                  </div>
                </div>
              </div>
              
              <h2 className="text-xl font-semibold mt-10 mb-4">Cashless Claims vs. Reimbursement Claims</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-lg font-medium mb-3">Cashless Claims</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Available at our 5000+ network garages</li>
                    <li>No upfront payment for approved repairs</li>
                    <li>Faster processing with pre-approved workshops</li>
                    <li>Quality assured repairs</li>
                    <li>Simplified paperwork and streamlined process</li>
                  </ul>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-lg font-medium mb-3">Reimbursement Claims</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Available at any workshop of your choice</li>
                    <li>You pay upfront and claim reimbursement later</li>
                    <li>Requires additional documentation (original bills, payment receipts)</li>
                    <li>Processing time is typically longer</li>
                    <li>Freedom to choose your preferred garage</li>
                  </ul>
                </div>
              </div>
              
              <h2 className="text-xl font-semibold mt-10 mb-4">Special Claim Procedures</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium">Theft Claims</h3>
                  <p>
                    For vehicle theft claims, you need to:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 mt-1">
                    <li>File an FIR immediately</li>
                    <li>Inform RTO about the theft</li>
                    <li>Submit all original keys of the vehicle</li>
                    <li>Wait for the 90-day investigation period</li>
                    <li>Provide NOC from police and RTO after investigation</li>
                    <li>Transfer RC in the insurance company's name</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium">Total Loss Claims</h3>
                  <p>
                    If repair costs exceed 75% of IDV, it's considered a total loss (constructive total loss).
                    The process involves:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 mt-1">
                    <li>Surveyor declaring the vehicle as total loss</li>
                    <li>Transfer of RC in the insurance company's name</li>
                    <li>Settlement based on IDV minus salvage value</li>
                  </ul>
                </div>
              </div>
              
              <h2 className="text-xl font-semibold mt-10 mb-4">Claim Settlement Timeline</h2>
              <p>
                We strive to settle claims as quickly as possible:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Minor damage repairs: 3-5 working days</li>
                <li>Major damage repairs: 7-14 working days</li>
                <li>Total loss claims: 15-30 working days after all documentation</li>
                <li>Theft claims: 90+ days (after police investigation period)</li>
              </ul>
            </div>
            
            <div className="mt-12 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Need Help With a Claim?</h3>
              <p className="mb-4">Our claims assistance team is available 24x7 to guide you through the process.</p>
              <a 
                href="tel:1800-VAHAN-HELP" 
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Contact Claims Support
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ClaimProcessPage;
