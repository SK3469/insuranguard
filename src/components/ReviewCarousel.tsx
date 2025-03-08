
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import Button from "./Button";

// Sample review data
const reviews = [
  {
    id: 1,
    name: "Sunil Kumar",
    location: "Delhi",
    rating: 5,
    review: "The claim process was incredibly smooth. My car was repaired within a week after the accident, and I didn't have to follow up even once. The team was proactive in keeping me updated.",
    vehicleType: "Hyundai Creta",
    imageUrl: "https://www.freepik.com/free-photo/full-shot-students-preparing-exam_31194720.htm#from_element=category_discover&from_view=category"
  },
  {
    id: 2,
    name: "Deepak Bisht",
    location: "Delhi",
    rating: 5,
    review: "Switching to VahanSurakshaKavach was the best decision. Their premium rates are competitive, and the coverage is extensive. The digital policy management makes everything so convenient.",
    vehicleType: "Honda Activa-5G",
    imageUrl: "https://i.pravatar.cc/150?img=60"
  },
  {
    id: 3,
    name: "Diwan Singh",
    location: "UK",
    rating: 4,
    review: "I was involved in a minor accident, and their roadside assistance team reached within 30 minutes. The entire claims process was handled digitally, and I received the settlement within 3 days.",
    vehicleType: "Hero Ducter-750cc",
    imageUrl: "https://i.pravatar.cc/150?img=5"
  },
  {
    id: 4,
    name: "Praveen Kumar",
    location: "Delhi",
    rating: 5,
    review: "The customer service is exceptional. When I had questions about my policy, their team explained everything clearly. The mobile app is user-friendly and makes tracking claims very simple.",
    vehicleType: "Maruti Swift",
    imageUrl: "https://i.pravatar.cc/150?img=12"
  },
  {
    id: 5,
    name: "Mukesh Atthaya",
    location: "Bangalore",
    rating: 5,
    review: "I've been with VahanSurakshaKavach for two years now, and their service has been consistently excellent. When I needed to update my policy after buying a new car, the process was seamless.",
    vehicleType: "Honda Shine",
    imageUrl: "https://i.pravatar.cc/150?img=25"
  },
  {
    id: 6,
    name: "Babli Kumari",
    location: "Patna",
    rating: 4,
    review: "The comprehensive coverage gives me peace of mind. Their accident assistance team was professional and helped me through a stressful situation after my car was damaged in a flood.",
    vehicleType: "Audi Q-7",
    imageUrl: "https://i.pravatar.cc/150?img=67"
  }
];

const ReviewCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  
  // Auto advance the carousel
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setActiveIndex((current) => (current + 1) % reviews.length);
      }, 5000);
    }
    
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying]);
  
  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);
  
  const goToPrev = () => {
    setActiveIndex((current) => (current - 1 + reviews.length) % reviews.length);
  };
  
  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % reviews.length);
  };
  
  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };
  
  // Get visible reviews (current, previous, and next)
  const visibleReviews = [
    reviews[(activeIndex - 1 + reviews.length) % reviews.length],
    reviews[activeIndex],
    reviews[(activeIndex + 1) % reviews.length]
  ];

  return (
    <div 
      className="relative overflow-hidden py-12"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Carousel navigation buttons */}
      <div className="absolute left-4 top-1/2 z-10 -translate-y-1/2">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white/90 shadow-soft"
          onClick={goToPrev}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
      </div>
      
      <div className="absolute right-4 top-1/2 z-10 -translate-y-1/2">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white/90 shadow-soft"
          onClick={goToNext}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
      
      {/* Carousel track */}
      <div className="flex items-stretch transition-all duration-500 ease-out-expo">
        <div className="flex w-full justify-center px-4">
          {/* Carousel items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
            {visibleReviews.map((review, idx) => {
              const isCurrent = idx === 1;
              return (
                <div
                  key={review.id}
                  className={cn(
                    "glass-card rounded-xl p-6 transition-all duration-500",
                    isCurrent 
                      ? "scale-100 opacity-100 shadow-medium" 
                      : "scale-95 opacity-70 shadow-soft hover:opacity-90 hover:scale-97"
                  )}
                >
                  <div className="mb-4 flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="h-16 w-16 rounded-full shadow-hard bg-black text-white overflow-hidden px-1">
                      <h1 className="text-xs h-10 w-full text-center my-4">{review.name}</h1>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium">{review.name}</h3>
                      <p className="text-sm text-muted-foreground">{review.location}</p>
                      <p className="text-xs text-muted-foreground mt-1">{review.vehicleType}</p>
                    </div>
                    <div className="ml-auto">
                      <Quote className="h-6 w-6 text-blue-300 opacity-60" />
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-sm leading-relaxed">"{review.review}"</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Carousel indicators */}
      <div className="flex justify-center mt-8">
        {reviews.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`h-2 w-2 mx-1 rounded-full transition-all ${
              idx === activeIndex 
                ? "bg-primary w-6" 
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewCarousel;
