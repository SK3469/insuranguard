
import { CoverageType, coverageTypes } from "./types";

interface CoverageSelectorProps {
  coverage: CoverageType;
  setCoverage: React.Dispatch<React.SetStateAction<CoverageType>>;
}

const CoverageSelector = ({ coverage, setCoverage }: CoverageSelectorProps) => {
  return (
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
  );
};

export default CoverageSelector;
