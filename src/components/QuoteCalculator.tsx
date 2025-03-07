
import { useState } from "react";
import { Calculator } from "lucide-react";
import Button from "./Button";
import { VehicleInfo, CoverageType } from "./quote-calculator/types";
import VehicleForm from "./quote-calculator/VehicleForm";
import CoverageSelector from "./quote-calculator/CoverageSelector";
import CoverageFeatures from "./quote-calculator/CoverageFeatures";
import PremiumQuote from "./quote-calculator/PremiumQuote";

const QuoteCalculator = () => {
  const [vehicle, setVehicle] = useState<VehicleInfo>({
    type: "sedan",
    age: 2,
    value: 800000
  });
  
  const [coverage, setCoverage] = useState<CoverageType>("standard");
  const [showQuote, setShowQuote] = useState(false);
  
  const handleCalculate = () => {
    setShowQuote(true);
  };

  return (
    <section id="quote" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-blue-50 opacity-60 blur-3xl"></div>
        <div className="absolute -bottom-20 right-20 w-80 h-80 rounded-full bg-blue-100 opacity-40 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-blue-50 text-blue-700 mb-4">
            <Calculator className="h-4 w-4 mr-2" />
            Instant Quote Calculator
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Get Your Personalized Insurance Quote</h2>
          <p className="text-muted-foreground text-lg">
            Calculate your premium in seconds. Customize your coverage options to find the perfect balance of protection and affordability.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-6 md:p-8 rounded-2xl shadow-soft">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <VehicleForm vehicle={vehicle} setVehicle={setVehicle} />
                <CoverageSelector coverage={coverage} setCoverage={setCoverage} />
                <Button className="w-full" size="lg" onClick={handleCalculate}>
                  Calculate Premium
                </Button>
              </div>
              
              <div className="flex flex-col">
                <CoverageFeatures coverage={coverage} />
                
                {showQuote && <PremiumQuote vehicle={vehicle} coverage={coverage} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteCalculator;
