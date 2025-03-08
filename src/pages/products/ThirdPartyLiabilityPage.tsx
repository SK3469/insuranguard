
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const ThirdPartyLiabilityPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Third-Party Liability Insurance</h1>
            
            <div className="prose prose-lg">
              <p>
                Third-party liability insurance is a mandatory coverage required by Indian law for all vehicle owners, 
                protecting you from financial liabilities arising from damage caused to other people or their property.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">What is Third-Party Liability Insurance?</h2>
              <p>
                Third-party liability insurance covers your legal liability for any bodily injury, death, or property damage 
                caused to a third party due to an accident involving your insured vehicle. It is the minimum legal requirement 
                for all vehicles driving on Indian roads.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">What's Covered?</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Injury or death of a third party</li>
                <li>Damage to third-party property</li>
                <li>Legal costs arising from covered accidents</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">What's Not Covered?</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Damage to your own vehicle</li>
                <li>Theft of your vehicle</li>
                <li>Damage due to natural calamities</li>
                <li>Personal accidents of the owner/driver</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">Benefits of Our Third-Party Insurance</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Legal compliance at affordable premiums</li>
                <li>Protection from potentially unlimited third-party liability claims</li>
                <li>Streamlined claim settlement process</li>
                <li>No claim rejection based on driver's age or license validity (unlike own damage)</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">Do I Need Additional Coverage?</h2>
              <p>
                While third-party insurance meets the legal requirement, it doesn't protect your own vehicle. 
                If your vehicle is less than 5 years old or holds significant value, we recommend upgrading to 
                comprehensive insurance or adding own damage cover for complete protection.
              </p>
            </div>
            
            <div className="mt-12 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Get Third-Party Coverage</h3>
              <p className="mb-4">Meet legal requirements with our affordable third-party liability insurance.</p>
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

export default ThirdPartyLiabilityPage;
