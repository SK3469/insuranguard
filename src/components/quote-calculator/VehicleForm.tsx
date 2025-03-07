
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { VehicleInfo, VehicleType, vehicleTypes } from "./types";

interface VehicleFormProps {
  vehicle: VehicleInfo;
  setVehicle: React.Dispatch<React.SetStateAction<VehicleInfo>>;
}

const VehicleForm = ({ vehicle, setVehicle }: VehicleFormProps) => {
  return (
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
    </div>
  );
};

export default VehicleForm;
