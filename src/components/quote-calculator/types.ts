
export type VehicleType = "hatchback" | "sedan" | "suv" | "premium";
export type CoverageType = "basic" | "standard" | "premium";

export interface VehicleInfo {
  type: VehicleType;
  age: number;
  value: number;
}

export interface CoverageInfo {
  type: CoverageType;
  multiplier: number;
  features: string[];
}

export const vehicleTypes: Record<VehicleType, { label: string; baseRate: number }> = {
  hatchback: { label: "Hatchback", baseRate: 3500 },
  sedan: { label: "Sedan", baseRate: 5000 },
  suv: { label: "SUV/MUV", baseRate: 7500 },
  premium: { label: "Premium/Luxury", baseRate: 15000 }
};

export const coverageTypes: Record<CoverageType, CoverageInfo> = {
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

export const calculatePremium = (vehicle: VehicleInfo, coverage: CoverageType): number => {
  const baseRate = vehicleTypes[vehicle.type].baseRate;
  const ageMultiplier = Math.max(0.8, 1 - vehicle.age * 0.05);
  const valueAddition = vehicle.value * 0.0025;
  
  let premium = (baseRate + valueAddition) * ageMultiplier;
  premium *= coverageTypes[coverage].multiplier;
  
  return Math.round(premium);
};
