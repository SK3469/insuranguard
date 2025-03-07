
import Button from "./Button";
import { Ambulance, Car, MapPin, MessageSquare, Phone, Shield, Clock } from "lucide-react";
import AnimatedNumber from "./AnimatedNumber";

const AccidentAssistance = () => {
  return (
    <section id="assistance" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-blue-50 to-transparent"></div>
        <div className="absolute -top-20 right-20 w-64 h-64 rounded-full bg-red-50 opacity-40 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-blue-50 opacity-50 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-red-50 text-red-700 mb-4">
            <Ambulance className="h-4 w-4 mr-2" />
            24/7 Emergency Assistance
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Real-Time Accident Assistance</h2>
          <p className="text-muted-foreground text-lg">
            When accidents happen, we're there for you. Our comprehensive emergency response system
            ensures you're never alone in a crisis situation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="relative mb-8">
              <div className="absolute -top-4 -left-4 h-24 w-24 bg-red-100 rounded-full blur-2xl opacity-60"></div>
              <div className="relative bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl p-6 shadow-soft overflow-hidden">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 bg-white/10 rounded-full"></div>
                <div className="absolute bottom-0 left-0 -mb-10 -ml-10 h-36 w-36 bg-white/10 rounded-full"></div>
                
                <div className="flex items-center mb-4">
                  <div className="bg-white/20 rounded-full p-2 mr-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Emergency Hotline</h3>
                </div>
                
                <p className="mb-6 text-white/80">
                  One call connects you to our 24/7 emergency response team. We coordinate everything
                  from roadside assistance to medical help.
                </p>
                
                <div className="font-mono text-2xl font-bold tracking-wider mb-2">
                  1800-VAHAN-HELP
                </div>
                
                <Button className="bg-white text-red-600 hover:bg-white/90">
                  Save to Contacts
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-soft p-6">
              <h3 className="text-xl font-semibold mb-4">What Happens When You Call</h3>
              
              <div className="space-y-4">
                <div className="flex">
                  <div className="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center mr-4 shrink-0">
                    <span className="text-sm font-medium text-primary">01</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Immediate Location Tracking</h4>
                    <p className="text-sm text-muted-foreground">
                      Our system automatically detects your location to send help exactly where you need it.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center mr-4 shrink-0">
                    <span className="text-sm font-medium text-primary">02</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Dispatched Assistance</h4>
                    <p className="text-sm text-muted-foreground">
                      Based on the situation, we deploy appropriate vehicles and personnel to help you.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center mr-4 shrink-0">
                    <span className="text-sm font-medium text-primary">03</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Claim Pre-Processing</h4>
                    <p className="text-sm text-muted-foreground">
                      We begin processing your claim while help is en route, saving you time later.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center mr-4 shrink-0">
                    <span className="text-sm font-medium text-primary">04</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Follow-up Support</h4>
                    <p className="text-sm text-muted-foreground">
                      We stay with you through the entire process until you're safely back on the road.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-medium hover:translate-y-[-5px]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-medium">Average Response Time</h3>
                <p className="text-muted-foreground mb-3">Nationwide assistance network with rapid response</p>
                <div className="text-3xl font-bold text-green-600 flex items-end">
                  <AnimatedNumber value={18} className="text-3xl font-bold text-green-600" />
                  <span className="text-base ml-1 text-muted-foreground mb-0.5">minutes</span>
                </div>
              </div>
              
              <div className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-medium hover:translate-y-[-5px]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-medium">Service Coverage</h3>
                <p className="text-muted-foreground mb-3">Cities and highways across India with support</p>
                <div className="text-3xl font-bold text-blue-600 flex items-end">
                  <AnimatedNumber value={1200} className="text-3xl font-bold text-blue-600" formatter={(val) => val.toLocaleString()} />
                  <span className="text-base ml-1 text-muted-foreground mb-0.5">cities</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="glass-card p-6 rounded-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center">
                    <Car className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Roadside Assistance</h4>
                    <p className="text-sm text-muted-foreground">Towing, repairs, fuel delivery</p>
                  </div>
                </div>
                <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="absolute top-0 left-0 h-full w-[92%] bg-primary rounded-full"></div>
                </div>
                <div className="flex justify-between mt-1 text-xs">
                  <span>Services offered</span>
                  <span className="font-medium">92%</span>
                </div>
              </div>
              
              <div className="glass-card p-6 rounded-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center">
                    <Ambulance className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Medical Coordination</h4>
                    <p className="text-sm text-muted-foreground">Hospital arrangements, ambulance</p>
                  </div>
                </div>
                <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="absolute top-0 left-0 h-full w-[88%] bg-primary rounded-full"></div>
                </div>
                <div className="flex justify-between mt-1 text-xs">
                  <span>Services offered</span>
                  <span className="font-medium">88%</span>
                </div>
              </div>
              
              <div className="glass-card p-6 rounded-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center">
                    <MessageSquare className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Legal & Documentation Help</h4>
                    <p className="text-sm text-muted-foreground">Police reporting, paperwork assistance</p>
                  </div>
                </div>
                <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="absolute top-0 left-0 h-full w-[95%] bg-primary rounded-full"></div>
                </div>
                <div className="flex justify-between mt-1 text-xs">
                  <span>Services offered</span>
                  <span className="font-medium">95%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 md:p-12 shadow-soft overflow-hidden relative">
          <div className="absolute top-0 right-0 -mt-16 -mr-16 h-64 w-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-80 w-80 bg-white/10 rounded-full blur-3xl"></div>
          
          <div className="relative max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-white/20 mb-6">
              <Shield className="h-8 w-8" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Ready for Complete Protection?</h2>
            <p className="text-xl opacity-90 mb-8">
              Join thousands of satisfied VahanSurakshaKavach customers who drive with confidence.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-blue-700 hover:bg-white/90 px-8 py-3 text-base">
                Get Your Quote
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-base">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccidentAssistance;
