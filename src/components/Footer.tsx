
import { Facebook, Instagram, Linkedin, Mail, Phone, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-4">VahanSurakshaKavach</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Comprehensive motor insurance solutions with digital-first experiences 
              designed for the modern Indian driver.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products/comprehensive-insurance" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Comprehensive Insurance
                </Link>
              </li>
              <li>
                <Link to="/products/third-party-liability" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Third-Party Liability
                </Link>
              </li>
              <li>
                <Link to="/products/own-damage-cover" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Own Damage Cover
                </Link>
              </li>
              <li>
                <Link to="/products/add-on-coverages" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Add-On Coverages
                </Link>
              </li>
              <li>
                <Link to="/products/commercial-vehicle-insurance" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Commercial Vehicle Insurance
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/resources/insurance-guide" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Insurance Guide
                </Link>
              </li>
              <li>
                <Link to="/resources/claim-process" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Claim Process
                </Link>
              </li>
              <li>
                <Link to="/resources/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/resources/network-garages" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Network Garages
                </Link>
              </li>
              <li>
                <Link to="/resources/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <p className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="h-4 w-4 mr-2" />
                  +91-9013488512 | +91-7011217296
                </p>
              </li>
              <li>
                <p  className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-4 w-4 mr-2" />
                mypolicyquery@outlook.com
                </p>
             
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-2">Download our App <span className="text-xs text-red-600">comming soon!</span></h4>
              <div className="flex space-x-3">
                <a href="#" className="bg-black text-white rounded-lg px-3 py-2 text-xs flex items-center space-x-1">
                  <span>Play Store</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-cols gap-2 items-center">
            <p className="text-xs text-muted-foreground mb-4 md:mb-0">
              © {new Date().getFullYear()} VahanSurakshaKavach | All rights reserved.
            </p >
            <p  className="text-xs text-muted-foreground mb-4 md:mb-0" >crafted & desgined by SunilMernStack</p>
            <div className="flex space-x-4">
              <Link to="/privacy-policy" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="/disclaimer" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
