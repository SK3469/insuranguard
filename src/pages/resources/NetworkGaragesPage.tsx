
import { useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

// Sample data - in a real application, this would come from an API
const garageData = [
  {
    id: 1,
    name: "AutoCare Service Center",
    address: "123 Mechanic Street, Delhi",
    phone: "011-23456789",
    services: ["Denting & Painting", "Engine Repair", "AC Service", "General Service"],
    rating: 4.5,
    region: "North India"
  },
  {
    id: 2,
    name: "Premium Auto Workshop",
    address: "456 Repair Road, Mumbai",
    phone: "022-34567890",
    services: ["Denting & Painting", "Electrical Work", "Suspension Work", "General Service"],
    rating: 4.7,
    region: "West India"
  },
  {
    id: 3,
    name: "Reliable Motors",
    address: "789 Service Lane, Bangalore",
    phone: "080-45678901",
    services: ["Engine Repair", "Transmission Work", "Body Work", "Wheel Alignment"],
    rating: 4.3,
    region: "South India"
  },
  {
    id: 4,
    name: "Quick Fix Garage",
    address: "321 Fix Avenue, Kolkata",
    phone: "033-56789012",
    services: ["Quick Service", "Towing", "Battery Replacement", "Tire Services"],
    rating: 4.1,
    region: "East India"
  },
  {
    id: 5,
    name: "Highway Auto Center",
    address: "654 Express Road, Jaipur",
    phone: "0141-67890123",
    services: ["Accident Repair", "Glass Replacement", "Paint Job", "General Service"],
    rating: 4.6,
    region: "North India"
  },
  {
    id: 6,
    name: "City Garage Solutions",
    address: "987 Urban Street, Chennai",
    phone: "044-78901234",
    services: ["Denting & Painting", "Engine Repair", "Electrical Work", "AC Service"],
    rating: 4.4,
    region: "South India"
  },
];

const regions = ["All Regions", "North India", "South India", "East India", "West India"];

const NetworkGaragesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All Regions");
  
  const filteredGarages = garageData.filter(garage => {
    const matchesSearch = 
      garage.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      garage.address.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesRegion = selectedRegion === "All Regions" || garage.region === selectedRegion;
    
    return matchesSearch && matchesRegion;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">Network Garages</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Find authorized garages in our network for cashless claim settlements and quality repairs.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search by garage name or location"
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="w-full md:w-48">
                <select
                  className="w-full h-10 px-3 rounded-md border border-input bg-background"
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                >
                  {regions.map(region => (
                    <option key={region} value={region}>{region}</option>
                  ))}
                </select>
              </div>
            </div>
            
            {filteredGarages.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredGarages.map(garage => (
                  <div key={garage.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="p-6">
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-semibold">{garage.name}</h3>
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
                          {garage.rating} ★
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground mt-2">{garage.address}</p>
                      <p className="text-sm font-medium mt-1">{garage.phone}</p>
                      
                      <div className="mt-4">
                        <h4 className="text-sm font-medium mb-2">Services Offered:</h4>
                        <div className="flex flex-wrap gap-2">
                          {garage.services.map((service, index) => (
                            <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-4 flex space-x-3">
                        <Button variant="outline" size="sm">
                          Get Directions
                        </Button>
                        <Button size="sm">
                          Contact Garage
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 border rounded-lg bg-gray-50">
                <h3 className="text-lg font-medium mb-2">No garages found</h3>
                <p className="text-muted-foreground">Try adjusting your search criteria.</p>
              </div>
            )}
            
            <div className="mt-12 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Have an Emergency?</h3>
              <p className="mb-4">Our 24/7 roadside assistance is just a call away.</p>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Request Roadside Assistance
              </Button>
            </div>
            
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Cashless Claim Process at Network Garages</h2>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Contact our claims team to report the incident</li>
                <li>Take your vehicle to the nearest network garage</li>
                <li>Present your policy details and claim reference number</li>
                <li>Our surveyor will inspect the vehicle and approve repairs</li>
                <li>The garage will repair your vehicle</li>
                <li>We'll settle the bill directly with the garage</li>
                <li>Collect your repaired vehicle</li>
              </ol>
              
              <p className="mt-4 text-muted-foreground">
                Note: For repairs at non-network garages, you'll need to pay upfront and claim reimbursement later.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NetworkGaragesPage;
