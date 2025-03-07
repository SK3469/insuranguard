
import { Check } from "lucide-react";
import { CoverageType, coverageTypes } from "./types";

interface CoverageFeaturesProps {
  coverage: CoverageType;
}

const CoverageFeatures = ({ coverage }: CoverageFeaturesProps) => {
  return (
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
  );
};

export default CoverageFeatures;
