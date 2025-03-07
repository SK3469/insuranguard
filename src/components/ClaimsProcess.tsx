
import { useState } from "react";
import Button from "./Button";
import { CheckCircle, FileText, Image, MessageSquare, Share2, Smartphone } from "lucide-react";
import FeatureCard from "./FeatureCard";

const steps = [
  {
    id: 1,
    title: "Report the Claim",
    description: "Notify us about the incident through our mobile app or website within 24 hours.",
    icon: <FileText className="h-6 w-6" />
  },
  {
    id: 2,
    title: "Upload Documentation",
    description: "Submit photos of damage, police report, and other required documents.",
    icon: <Image className="h-6 w-6" />
  },
  {
    id: 3,
    title: "Digital Assessment",
    description: "Our AI analyzes damage severity and processes your claim in minutes.",
    icon: <Smartphone className="h-6 w-6" />
  },
  {
    id: 4,
    title: "Claim Approval",
    description: "Receive instant approval for eligible claims with real-time notifications.",
    icon: <CheckCircle className="h-6 w-6" />
  }
];

const ClaimsProcess = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section id="claims" className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-blue-50 text-blue-700 mb-4">
            <FileText className="h-4 w-4 mr-2" />
            Seamless Claims Process
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Digital-First Claims Processing</h2>
          <p className="text-muted-foreground text-lg">
            Experience the fastest claim settlements in the industry with our innovative digital process. 
            Get back on the road quickly without paperwork hassles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <div className="relative bg-white rounded-2xl shadow-soft overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              
              <div className="p-6">
                <div className="flex items-center border-b pb-4 mb-4">
                  <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center mr-4">
                    <steps[activeStep - 1].icon />
                  </div>
                  <div>
                    <h3 className="font-medium">Step {activeStep}</h3>
                    <p className="text-sm text-muted-foreground">{steps[activeStep - 1].title}</p>
                  </div>
                </div>
                
                <div className="min-h-[120px] mb-6">
                  <h4 className="text-xl font-medium mb-2">{steps[activeStep - 1].title}</h4>
                  <p className="text-muted-foreground">{steps[activeStep - 1].description}</p>
                </div>
                
                <div className="grid grid-cols-4 gap-2">
                  {steps.map((step) => (
                    <button
                      key={step.id}
                      onClick={() => setActiveStep(step.id)}
                      className={`
                        p-3 rounded-lg border text-center transition-all duration-200 
                        ${activeStep === step.id
                          ? "border-primary bg-primary/10 text-primary" 
                          : "border-gray-200 bg-white hover:border-gray-300"}
                      `}
                    >
                      {step.id}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Why Our Claims Process is Different</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-medium">100% Digital Experience</h4>
                  <p className="text-sm text-muted-foreground">
                    Complete the entire claims process through our mobile app without paperwork.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-medium">Fast Processing Times</h4>
                  <p className="text-sm text-muted-foreground">
                    Get your claim processed in as little as 30 minutes with our AI-powered assessment.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-medium">Real-time Tracking</h4>
                  <p className="text-sm text-muted-foreground">
                    Monitor your claim's status at every stage with instant notifications.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-medium">Direct Settlement Options</h4>
                  <p className="text-sm text-muted-foreground">
                    Choose between repairs at our network partners or direct bank transfer.
                  </p>
                </div>
              </div>
            </div>
            
            <Button className="mt-4">Learn More About Claims</Button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <FeatureCard
            icon={<Share2 className="h-6 w-6" />}
            title="Network Garages"
            description="Access 5000+ authorized service centers across India for cashless repairs."
            className="animate-slide-in [animation-delay:0ms]"
          />
          
          <FeatureCard
            icon={<Smartphone className="h-6 w-6" />}
            title="Mobile Inspections"
            description="Our advanced app helps you capture damage details for quick remote assessment."
            className="animate-slide-in [animation-delay:100ms]"
          />
          
          <FeatureCard
            icon={<MessageSquare className="h-6 w-6" />}
            title="24/7 Claims Support"
            description="Dedicated claims experts are available around the clock to guide you."
            className="animate-slide-in [animation-delay:200ms]"
          />
        </div>
      </div>
    </section>
  );
};

export default ClaimsProcess;
