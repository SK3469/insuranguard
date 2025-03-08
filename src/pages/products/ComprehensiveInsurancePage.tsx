
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const ComprehensiveInsurancePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Comprehensive Insurance</h1>
            
            <div className="prose prose-lg">
              <p>
                Our comprehensive insurance policy is the ultimate protection for your vehicle, covering 
                both third-party liabilities and own damage to your vehicle.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">What is Comprehensive Insurance?</h2>
              <p>
                Comprehensive insurance provides complete coverage for your vehicle against damages 
                caused by accidents, theft, fire, natural calamities, and man-made disasters. It also 
                covers third-party liabilities as mandated by law.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">What's Covered?</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Own damage due to accidents</li>
                <li>Damage from natural calamities like floods, earthquakes, cyclones</li>
                <li>Damage from man-made disasters like riots, strikes</li>
                <li>Theft of your vehicle</li>
                <li>Fire damage</li>
                <li>Third-party liabilities - injury, death, or property damage</li>
                <li>Personal accident cover for the owner-driver</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">Benefits of Our Comprehensive Insurance</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Complete peace of mind with 360° protection</li>
                <li>Cashless claims at our network garages</li>
                <li>Quick claim settlement process</li>
                <li>24x7 roadside assistance</li>
                <li>Option to add valuable add-ons for enhanced protection</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">Who Should Get Comprehensive Insurance?</h2>
              <p>
                We recommend comprehensive insurance for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>New vehicle owners</li>
                <li>Vehicles less than 5 years old</li>
                <li>Premium and luxury vehicles</li>
                <li>Vehicles in areas prone to natural calamities</li>
                <li>Anyone seeking complete peace of mind</li>
              </ul>
            </div>
            
            <div className="mt-12 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Get a Quote Today</h3>
              <p className="mb-4">Protect your vehicle with our comprehensive insurance plan.</p>
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

export default ComprehensiveInsurancePage;
