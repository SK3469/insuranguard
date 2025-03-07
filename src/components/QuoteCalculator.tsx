
import { useState } from "react";
import Button from "./Button";
import { Calculator, CarFront, Check, ChevronDown } from "lucide-react";
import AnimatedNumber from "./AnimatedNumber";

type VehicleType = "hatchback" | "sedan" | "suv" | "premium";
type CoverageType = "basic" | "standard" | "premium";

interface VehicleInfo {
  type: VehicleType;
  age: number;
  value: number;
}

interface CoverageInfo {
  type: CoverageType;
  multiplier: number;
  features: string[];
}

const vehicleTypes: Record<VehicleType, { label: string; baseRate: number }> = {
  hatchback: { label: "Hatchback", baseRate: 3500 },
  sedan: { label: "Sedan", baseRate: 5000 },
  suv: { label: "SUV/MUV", baseRate: 7500 },
  premium: { label: "Premium/Luxury", baseRate: 15000 }
};

const coverageTypes: Record<CoverageType, CoverageInfo> = {
  basic: {
    type: "basic",
    multiplier: 1.0,
    features: [
      "Third-party liability",
      "Own damage cover",
      "Personal accident cover"
    ]
  },
  standard: {
    type: "standard",
    multiplier: 1.25,
    features: [
      "All Basic coverage",
      "Zero depreciation",
      "Engine protection",
      "24/7 roadside assistance"
    ]
  },
  premium: {
    type: "premium",
    multiplier: 1.5,
    features: [
      "All Standard coverage",
      "No claim bonus protection",
      "Return to invoice",
      "Key replacement",
      "Daily allowance on repair"
    ]
  }
};

const QuoteCalculator = () => {
  const [vehicle, setVehicle] = useState<VehicleInfo>({
    type: "sedan",
    age: 2,
    value: 800000
  });
  
  const [coverage, setCoverage] = useState<CoverageType>("standard");
  const [showQuote, setShowQuote] = useState(false);
  
  // Calculate premium based on vehicle and coverage
  const calculatePremium = () => {
    const baseRate = vehicleTypes[vehicle.type].baseRate;
    const ageMultiplier = Math.max(0.8, 1 - vehicle.age * 0.05); // Older cars get slightly cheaper rates
    const valueAddition = vehicle.value * 0.0025; // 0.25% of vehicle value
    
    let premium = (baseRate + valueAddition) * ageMultiplier;
    premium *= coverageTypes[coverage].multiplier;
    
    return Math.round(premium);
  };
  
  const handleCalculate = () => {
    setShowQuote(true);
  };

  return (
    <section id="quote" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
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
                <div>
                  <label className="block text-sm font-medium mb-2">Vehicle Type</label>
                  <div className="relative">
                    <select
                      value={vehicle.type}
                      onChange={(e) => setVehicle({ ...vehicle, type: e.target.value as VehicleType })}
                      className="w-full p-3 pr-10 bg-white border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                    >
                      {Object.entries(vehicleTypes).map(([key, { label }]) => (
                        <option key={key} value={key}>
                          {label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Vehicle Age (years)</label>
                  <div className="relative">
                    <select
                      value={vehicle.age}
                      onChange={(e) => setVehicle({ ...vehicle, age: parseInt(e.target.value) })}
                      className="w-full p-3 pr-10 bg-white border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                    >
                      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((age) => (
                        <option key={age} value={age}>
                          {age} {age === 0 ? "year (New)" : age === 1 ? "year" : "years"}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Estimated Vehicle Value (₹)</label>
                  <input
                    type="number"
                    min="100000"
                    max="10000000"
                    step="50000"
                    value={vehicle.value}
                    onChange={(e) => setVehicle({ ...vehicle, value: parseInt(e.target.value) })}
                    className="w-full p-3 bg-white border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Coverage Type</label>
                  <div className="grid grid-cols-3 gap-2">
                    {Object.entries(coverageTypes).map(([key, { type }]) => (
                      <button
                        key={key}
                        onClick={() => setCoverage(type)}
                        className={`
                          p-3 rounded-lg border text-center transition-all duration-200
                          ${coverage === type 
                            ? "border-primary bg-primary/10 text-primary" 
                            : "border-gray-200 bg-white hover:border-gray-300"}
                        `}
                      >
                        <span className="capitalize">{type}</span>
                      </button>
                    ))}
                  </div>
                </div>
                
                <Button className="w-full" size="lg" onClick={handleCalculate}>
                  Calculate Premium
                </Button>
              </div>
              
              <div className="flex flex-col">
                <div className="mb-4">
                  <h3 className="text-lg font-medium mb-2">Coverage Features</h3>
                  <ul className="space-y-2">
                    {coverageTypes[coverage].features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {showQuote && (
                  <div className="mt-auto p-5 bg-blue-50 rounded-xl animate-scale-in">
                    <div className="text-center">
                      <h4 className="text-sm font-medium text-blue-700 mb-1">Your Estimated Premium</h4>
                      <div className="flex items-center justify-center gap-1 text-3xl font-bold text-primary">
                        <span>₹</span>
                        <AnimatedNumber 
                          value={calculatePremium()} 
                          formatter={(val) => val.toLocaleString('en-IN')}
                          className="text-3xl font-bold text-primary" 
                        />
                        <span className="text-base font-normal text-muted-foreground">/year</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">Prices may vary based on additional factors</p>
                    </div>
                    
                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <Button variant="outline" size="sm">Save Quote</Button>
                      <Button size="sm">Proceed</Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteCalculator;
