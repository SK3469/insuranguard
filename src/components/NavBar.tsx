
import { useState, useEffect } from "react";
import Button from "./Button";
import { Menu, X, ShieldCheck } from "lucide-react";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "py-3 bg-white/90 backdrop-blur-md shadow-sm" 
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center space-x-2 group">
            <ShieldCheck className="h-7 w-7 text-primary group-hover:scale-110 transition-transform" />
            <span className="text-lg font-semibold tracking-tight">
              VahanSurakshaKavach
            </span>
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#quote" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Get Quote
            </a>
            <a href="#claims" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Claims Process
            </a>
            <a href="#assistance" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Accident Assistance
            </a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Log In
            </Button>
            <Button size="sm">
              Get Started
            </Button>
          </div>
          
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full animate-fade-in border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#quote"
              className="px-4 py-2 text-sm font-medium hover:bg-secondary rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Quote
            </a>
            <a
              href="#claims"
              className="px-4 py-2 text-sm font-medium hover:bg-secondary rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Claims Process
            </a>
            <a
              href="#assistance"
              className="px-4 py-2 text-sm font-medium hover:bg-secondary rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Accident Assistance
            </a>
            <div className="flex flex-col space-y-2 pt-2 border-t">
              <Button variant="outline" size="sm">
                Log In
              </Button>
              <Button size="sm">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
