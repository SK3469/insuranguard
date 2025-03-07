
import { useEffect, useState, useRef } from "react";

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  delay?: number;
  formatter?: (value: number) => string;
  className?: string;
}

const AnimatedNumber = ({
  value,
  duration = 1000,
  delay = 0,
  formatter = (val) => val.toString(),
  className = "",
}: AnimatedNumberProps) => {
  const [displayValue, setDisplayValue] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let start: number | null = null;
    let animationFrame: number;

    const startTime = delay;
    const endValue = value;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsedTime = timestamp - start;
      
      if (elapsedTime < startTime) {
        animationFrame = requestAnimationFrame(step);
        return;
      }

      const progress = Math.min((elapsedTime - startTime) / duration, 1);
      const easedProgress = easeOutQuart(progress);
      
      setDisplayValue(Math.floor(easedProgress * endValue));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        setDisplayValue(endValue);
      }
    };

    animationFrame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration, delay, isVisible]);

  // Easing function for smoother animation
  const easeOutQuart = (x: number): number => {
    return 1 - Math.pow(1 - x, 4);
  };

  return (
    <span ref={elementRef} className={`animate-number-count ${className}`}>
      {formatter(displayValue)}
    </span>
  );
};

export default AnimatedNumber;
