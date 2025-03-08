
import { useEffect } from "react";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import QuoteCalculator from "@/components/QuoteCalculator";
import ClaimsProcess from "@/components/ClaimsProcess";
import AccidentAssistance from "@/components/AccidentAssistance";
import Footer from "@/components/Footer";
import WhatsAppFloater from "@/components/WhatsAppFloater";
import TelegramFloater from "@/components/TelegramFloater";
import ReviewsPage from "./ReviewsPage";

const Index = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: 'smooth'
            });
          }
        }
      });
    });
    
    // Animation on scroll effect (simplified version)
    const handleScrollAnimation = () => {
      const elements = document.querySelectorAll('[data-aos]');
      
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.85) {
          element.classList.add('animate-fade-in');
          element.classList.remove('opacity-0');
        }
      });
    };
    
    // Initialize elements as invisible
    document.querySelectorAll('[data-aos]').forEach(element => {
      element.classList.add('opacity-0');
    });
    
    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">
        <Hero />
        <QuoteCalculator />
        <ReviewsPage/>
        <ClaimsProcess />
        <AccidentAssistance />
      </main>
      <Footer />
      <WhatsAppFloater />
      <TelegramFloater />
    </div>
  );
};

export default Index;
