
import { Link } from "react-router-dom";
import Button from "../Button";
import AnimatedNumber from "../AnimatedNumber";
import { VehicleInfo, CoverageType, calculatePremium } from "./types";

interface PremiumQuoteProps {
  vehicle: VehicleInfo;
  coverage: CoverageType;
}

const PremiumQuote = ({ vehicle, coverage }: PremiumQuoteProps) => {
  return (
    <div className="p-5 bg-blue-50 rounded-xl animate-scale-in">
      <div className="text-center">
        <h4 className="text-sm font-medium text-blue-700 mb-1">Your Estimated Premium</h4>
        <div className="flex items-center justify-center gap-1 text-3xl font-bold text-primary">
          <span>₹</span>
          <AnimatedNumber 
            value={calculatePremium(vehicle, coverage)} 
            formatter={(val) => val.toLocaleString('en-IN')}
            className="text-3xl font-bold text-primary" 
          />
          <span className="text-base font-normal text-muted-foreground">/year</span>
        </div>
        <p className="text-xs text-muted-foreground mt-1">Prices may vary based on additional factors</p>
      </div>
      
      <div className="mt-4 grid grid-cols-2 gap-3">
        <Button variant="outline" size="sm">Save Quote</Button>
        <Button as={Link} to="/protection" size="sm">Proceed</Button>
      </div>
      
      <div className="mt-3 text-center">
        <Link to="/reviews" className="text-xs text-blue-600 hover:underline">
          See what our customers say about us
        </Link>
      </div>
    </div>
  );
};

export default PremiumQuote;
