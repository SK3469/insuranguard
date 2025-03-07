
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { Car, FileText, Upload, User, Home, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  // Personal Information
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  pincode: string;
  
  // Vehicle Information
  vehicleType: string;
  make: string;
  model: string;
  year: string;
  registrationNumber: string;
  engineNumber: string;
  chassisNumber: string;
}

const VehicleProtectionForm = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    vehicleType: "hatchback",
    make: "",
    model: "",
    year: "",
    registrationNumber: "",
    engineNumber: "",
    chassisNumber: ""
  });
  
  const [documents, setDocuments] = useState<{
    registration: File | null;
    insurance: File | null;
    drivingLicense: File | null;
  }>({
    registration: null,
    insurance: null,
    drivingLicense: null
  });

  const { toast } = useToast();
  const navigate = useNavigate();
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, docType: keyof typeof documents) => {
    if (e.target.files && e.target.files[0]) {
      setDocuments(prev => ({
        ...prev,
        [docType]: e.target.files ? e.target.files[0] : null
      }));
    }
  };
  
  const nextStep = () => {
    if (step === 1) {
      // Validate personal information
      if (!formData.fullName || !formData.email || !formData.phone) {
        toast({
          title: "Missing Information",
          description: "Please fill in all required fields",
          variant: "destructive"
        });
        return;
      }
      setStep(2);
    } else if (step === 2) {
      // Validate vehicle information
      if (!formData.make || !formData.model || !formData.registrationNumber) {
        toast({
          title: "Missing Information",
          description: "Please fill in all required fields",
          variant: "destructive"
        });
        return;
      }
      setStep(3);
    }
  };
  
  const prevStep = () => {
    if (step === 2) setStep(1);
    if (step === 3) setStep(2);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if all required documents are uploaded
    if (!documents.registration || !documents.drivingLicense) {
      toast({
        title: "Missing Documents",
        description: "Please upload all required documents",
        variant: "destructive"
      });
      return;
    }
    
    // Here you would typically send the data to your backend
    console.log("Form data submitted:", formData);
    console.log("Documents:", documents);
    
    // Show success message
    toast({
      title: "Application Submitted",
      description: "We've received your protection request. Our team will review it shortly.",
    });
    
    // Redirect to home page or confirmation page
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-semibold mb-2">Protect Your Vehicle</h1>
        <p className="text-muted-foreground">Complete the form below to get started with VahanSurakshaKavach</p>
      </div>
      
      {/* Progress Steps */}
      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center w-full max-w-xl">
          <div className={`flex-1 text-center ${step >= 1 ? "text-primary" : "text-muted-foreground"}`}>
            <div className={`h-10 w-10 rounded-full flex items-center justify-center mx-auto mb-2 border-2 ${step >= 1 ? "border-primary bg-primary/10" : "border-gray-200"}`}>
              <User className="h-5 w-5" />
            </div>
            <span className="text-sm">Personal Details</span>
          </div>
          
          {/* Line divider */}
          <div className={`flex-1 h-1 mx-2 ${step >= 2 ? "bg-primary" : "bg-gray-200"}`}></div>
          
          <div className={`flex-1 text-center ${step >= 2 ? "text-primary" : "text-muted-foreground"}`}>
            <div className={`h-10 w-10 rounded-full flex items-center justify-center mx-auto mb-2 border-2 ${step >= 2 ? "border-primary bg-primary/10" : "border-gray-200"}`}>
              <Car className="h-5 w-5" />
            </div>
            <span className="text-sm">Vehicle Information</span>
          </div>
          
          {/* Line divider */}
          <div className={`flex-1 h-1 mx-2 ${step >= 3 ? "bg-primary" : "bg-gray-200"}`}></div>
          
          <div className={`flex-1 text-center ${step >= 3 ? "text-primary" : "text-muted-foreground"}`}>
            <div className={`h-10 w-10 rounded-full flex items-center justify-center mx-auto mb-2 border-2 ${step >= 3 ? "border-primary bg-primary/10" : "border-gray-200"}`}>
              <FileText className="h-5 w-5" />
            </div>
            <span className="text-sm">Documents</span>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-soft p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Step 1: Personal Information */}
          {step === 1 && (
            <div className="space-y-6" data-aos="fade-up">
              <h2 className="text-xl font-medium flex items-center mb-4">
                <User className="mr-2 h-5 w-5" /> Personal Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="address" className="block text-sm font-medium mb-1">
                  Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  rows={2}
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium mb-1">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="pincode" className="block text-sm font-medium mb-1">
                    PIN Code <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="pincode"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    required
                    maxLength={6}
                  />
                </div>
              </div>
            </div>
          )}
          
          {/* Step 2: Vehicle Information */}
          {step === 2 && (
            <div className="space-y-6" data-aos="fade-up">
              <h2 className="text-xl font-medium flex items-center mb-4">
                <Car className="mr-2 h-5 w-5" /> Vehicle Information
              </h2>
              
              <div>
                <label htmlFor="vehicleType" className="block text-sm font-medium mb-1">
                  Vehicle Type <span className="text-red-500">*</span>
                </label>
                <select
                  id="vehicleType"
                  name="vehicleType"
                  value={formData.vehicleType}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all appearance-none bg-white"
                  required
                >
                  <option value="hatchback">Hatchback</option>
                  <option value="sedan">Sedan</option>
                  <option value="suv">SUV/MUV</option>
                  <option value="premium">Premium/Luxury</option>
                </select>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="make" className="block text-sm font-medium mb-1">
                    Make (Manufacturer) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="make"
                    name="make"
                    value={formData.make}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    required
                    placeholder="e.g. Maruti Suzuki, Hyundai"
                  />
                </div>
                
                <div>
                  <label htmlFor="model" className="block text-sm font-medium mb-1">
                    Model <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="model"
                    name="model"
                    value={formData.model}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    required
                    placeholder="e.g. Swift, Creta"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="year" className="block text-sm font-medium mb-1">
                    Manufacturing Year <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="year"
                    name="year"
                    value={formData.year}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    required
                    placeholder="e.g. 2020"
                    maxLength={4}
                  />
                </div>
                
                <div>
                  <label htmlFor="registrationNumber" className="block text-sm font-medium mb-1">
                    Registration Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="registrationNumber"
                    name="registrationNumber"
                    value={formData.registrationNumber}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    required
                    placeholder="e.g. MH01AB1234"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="engineNumber" className="block text-sm font-medium mb-1">
                    Engine Number
                  </label>
                  <input
                    type="text"
                    id="engineNumber"
                    name="engineNumber"
                    value={formData.engineNumber}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    placeholder="Find it on your RC book"
                  />
                </div>
                
                <div>
                  <label htmlFor="chassisNumber" className="block text-sm font-medium mb-1">
                    Chassis Number
                  </label>
                  <input
                    type="text"
                    id="chassisNumber"
                    name="chassisNumber"
                    value={formData.chassisNumber}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    placeholder="Find it on your RC book"
                  />
                </div>
              </div>
            </div>
          )}
          
          {/* Step 3: Document Upload */}
          {step === 3 && (
            <div className="space-y-6" data-aos="fade-up">
              <h2 className="text-xl font-medium flex items-center mb-4">
                <FileText className="mr-2 h-5 w-5" /> Document Upload
              </h2>
              
              <div className="bg-blue-50 p-4 rounded-lg flex items-start mb-6">
                <AlertCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 shrink-0" />
                <p className="text-sm text-blue-700">
                  Please upload clear images or PDFs of your documents. Make sure all text is visible and the full document is in frame.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="border border-dashed border-gray-300 rounded-lg p-4">
                  <div className="flex items-start">
                    <div className="mr-4">
                      <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center">
                        <FileText className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-base font-medium mb-1">Vehicle Registration Certificate (RC) <span className="text-red-500">*</span></h3>
                      <p className="text-sm text-muted-foreground mb-3">Upload front and back side of your RC book</p>
                      
                      <div className="flex items-center">
                        <label className="relative cursor-pointer bg-white border border-gray-200 rounded-lg px-4 py-2 hover:bg-gray-50 transition-colors">
                          <span className="flex items-center text-sm font-medium">
                            <Upload className="h-4 w-4 mr-2" />
                            {documents.registration ? 'Change File' : 'Select File'}
                          </span>
                          <input
                            type="file"
                            className="hidden"
                            accept=".jpg,.jpeg,.png,.pdf"
                            onChange={(e) => handleFileChange(e, 'registration')}
                          />
                        </label>
                        {documents.registration && (
                          <span className="ml-3 text-sm text-muted-foreground">
                            {documents.registration.name}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="border border-dashed border-gray-300 rounded-lg p-4">
                  <div className="flex items-start">
                    <div className="mr-4">
                      <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center">
                        <FileText className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-base font-medium mb-1">Current Insurance Policy (if any)</h3>
                      <p className="text-sm text-muted-foreground mb-3">Upload if you have an existing insurance policy</p>
                      
                      <div className="flex items-center">
                        <label className="relative cursor-pointer bg-white border border-gray-200 rounded-lg px-4 py-2 hover:bg-gray-50 transition-colors">
                          <span className="flex items-center text-sm font-medium">
                            <Upload className="h-4 w-4 mr-2" />
                            {documents.insurance ? 'Change File' : 'Select File'}
                          </span>
                          <input
                            type="file"
                            className="hidden"
                            accept=".jpg,.jpeg,.png,.pdf"
                            onChange={(e) => handleFileChange(e, 'insurance')}
                          />
                        </label>
                        {documents.insurance && (
                          <span className="ml-3 text-sm text-muted-foreground">
                            {documents.insurance.name}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="border border-dashed border-gray-300 rounded-lg p-4">
                  <div className="flex items-start">
                    <div className="mr-4">
                      <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center">
                        <FileText className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-base font-medium mb-1">Driving License <span className="text-red-500">*</span></h3>
                      <p className="text-sm text-muted-foreground mb-3">Upload front and back side of your driving license</p>
                      
                      <div className="flex items-center">
                        <label className="relative cursor-pointer bg-white border border-gray-200 rounded-lg px-4 py-2 hover:bg-gray-50 transition-colors">
                          <span className="flex items-center text-sm font-medium">
                            <Upload className="h-4 w-4 mr-2" />
                            {documents.drivingLicense ? 'Change File' : 'Select File'}
                          </span>
                          <input
                            type="file"
                            className="hidden"
                            accept=".jpg,.jpeg,.png,.pdf"
                            onChange={(e) => handleFileChange(e, 'drivingLicense')}
                          />
                        </label>
                        {documents.drivingLicense && (
                          <span className="ml-3 text-sm text-muted-foreground">
                            {documents.drivingLicense.name}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-4 border-t border-gray-100">
            {step > 1 ? (
              <Button type="button" variant="outline" onClick={prevStep}>
                Back
              </Button>
            ) : (
              <div></div> // Empty div to maintain layout
            )}
            
            {step < 3 ? (
              <Button type="button" onClick={nextStep}>
                Next
              </Button>
            ) : (
              <Button type="submit">
                Submit Application
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default VehicleProtectionForm;
