
import { useEffect, useRef } from "react";
import Button from "./Button";
import { ArrowRight, Shield, Clock, Award } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = event;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      // Subtle parallax effect
      const moveX = (x - 0.5) * 20;
      const moveY = (y - 0.5) * 20;
      
      const bgLayers = heroRef.current.querySelectorAll('.bg-layer');
      
      bgLayers.forEach((layer, index) => {
        const speed = (index + 1) * 0.5;
        const htmlLayer = layer as HTMLElement;
        htmlLayer.style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden"
    >
      {/* Background layers for parallax effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="bg-layer absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-100 opacity-60 blur-3xl"></div>
        <div className="bg-layer absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-blue-200 opacity-40 blur-3xl"></div>
        <div className="bg-layer absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-blue-50 opacity-70 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-8 max-w-xl" data-aos="fade-up">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-blue-50 text-blue-700">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
              Trusted by 10,000+ drivers across India
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-balance">
              Protect Your Vehicle with Intelligent Insurance
            </h1>
            
            <p className="text-lg text-muted-foreground">
              VahanSurakshaKavach offers comprehensive motor insurance with instant quotes, 
              digital claims, and 24/7 accident assistance.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <Button size="lg" className="group">
                Get Your Quote <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="flex flex-col">
                <div className="flex items-center text-blue-600 mb-1">
                  <Shield className="h-5 w-5 mr-2" />
                  <span className="font-semibold">Protected</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  Full coverage
                </span>
              </div>
              
              <div className="flex flex-col">
                <div className="flex items-center text-blue-600 mb-1">
                  <Clock className="h-5 w-5 mr-2" />
                  <span className="font-semibold">Fast</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  Quick claims
                </span>
              </div>
              
              <div className="flex flex-col">
                <div className="flex items-center text-blue-600 mb-1">
                  <Award className="h-5 w-5 mr-2" />
                  <span className="font-semibold">Trusted</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  5-star rated
                </span>
              </div>
            </div>
          </div>
          
          <div className="relative" data-aos="fade-left" data-aos-delay="200">
            <div className="aspect-[4/3] relative">
              <div className="absolute inset-0 rounded-2xl overflow-hidden bg-gradient-to-r from-blue-50 to-blue-100 shadow-inner">
                <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
                <div className="absolute inset-0 bg-grid-slate-100/[0.2] [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]"></div>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="glass-card w-full max-w-md mx-auto p-6 rounded-xl relative overflow-hidden hover-float">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-lg font-medium">Comprehensive Coverage</h3>
                      <p className="text-sm text-muted-foreground">For your car's complete protection</p>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center">
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Accident Damage</span>
                      <span className="text-sm text-primary">Covered</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Third-Party Liability</span>
                      <span className="text-sm text-primary">Covered</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Natural Disasters</span>
                      <span className="text-sm text-primary">Covered</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">24/7 Roadside Assistance</span>
                      <span className="text-sm text-primary">Included</span>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Button className="w-full">Get Protected Now</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
