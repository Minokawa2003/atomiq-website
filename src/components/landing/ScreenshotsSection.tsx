import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ScreenshotsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const screenshots = [
    {
      title: "Home Dashboard",
      description: "Fun and colorful home screen with daily challenges",
      image: "/images/ss (1).jpg",
      gradient: "from-atomic-blue to-atomic-purple",
    },
    {
      title: "Learning Modules",
      description: "Interactive lessons about atoms and molecules",
      image: "/images/ss (2).jpg",
      gradient: "from-atomic-green to-atomic-blue",
    },
    {
      title: "Quiz Arena",
      description: "Exciting quizzes with amazing rewards",
      image: "/images/ss (3).jpg",
      gradient: "from-atomic-orange to-atomic-pink",
    },
    {
      title: "Experiment Lab",
      description: "Virtual experiments and simulations",
      image: "/images/ss (4).jpg",
      gradient: "from-atomic-purple to-atomic-pink",
    },
    {
      title: "Progress Tracking",
      description: "Track your learning journey",
      image: "/images/ss (5).jpg",
      gradient: "from-atomic-yellow to-atomic-orange",
    },
    {
      title: "Achievement Hall",
      description: "Earn badges and rewards",
      image: "/images/ss (6).jpg",
      gradient: "from-atomic-pink to-atomic-red",
    },
    {
      title: "Community Hub",
      description: "Connect with other young scientists",
      image: "/images/ss (7).jpg",
      gradient: "from-atomic-blue to-atomic-green",
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  // Auto-scroll for infinite effect
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="screenshots" className="relative py-20 bg-card overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <span className="inline-block bg-secondary/20 text-secondary-foreground font-semibold px-4 py-2 rounded-full text-sm mb-4">
            App Screenshots
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Take a Peek 
            <span className="text-gradient-warm"> Inside!</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what makes AtomIQ the most fun science app for learners!
          </p>
        </div>
        
        {/* Screenshots Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Buttons */}
          <Button 
            variant="outline" 
            size="icon" 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-card shadow-card"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          
          <Button 
            variant="outline" 
            size="icon" 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-card shadow-card"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
          
          {/* Carousel */}
          <div className="flex items-center justify-center gap-4 px-4 sm:px-16 h-[500px] perspective-1000 relative w-full overflow-visible">
            {screenshots.map((screenshot, index) => {
              const length = screenshots.length;
              // Calculate circular offset
              let offset = (index - activeIndex + length) % length;
              // Adjust offset to be centered around 0 (e.g. -3, -2, -1, 0, 1, 2, 3)
              if (offset > length / 2) {
                offset -= length;
              }
              
              const isActive = offset === 0;
              const absOffset = Math.abs(offset);
              
              return (
                <div
                  key={index}
                  className="transition-all duration-500 ease-out cursor-pointer absolute left-1/2 top-1/2"
                  style={{
                    transform: `translate(-50%, -50%) translateX(${offset * 120}px) scale(${1 - absOffset * 0.15})`,
                    opacity: absOffset > 2 ? 0 : 1,
                    zIndex: 10 - absOffset,
                    pointerEvents: absOffset > 1 ? 'none' : 'auto',
                  }}
                  onClick={() => setActiveIndex(index)}
                >
                  {/* Phone Frame */}
                  <div className={`w-64 h-[500px] bg-foreground rounded-[2.5rem] p-3 shadow-2xl relative transition-shadow duration-300 ${isActive ? 'shadow-primary/50' : ''}`}>
                    <div className={`w-full h-full bg-white rounded-[2rem] overflow-hidden relative`}>
                      {/* Screen content */}
                      <img 
                        src={screenshot.image} 
                        alt={screenshot.title} 
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Gradient overlay for text readability if needed, or remove if images have text */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white opacity-0 hover:opacity-100 transition-opacity">
                        <h4 className="text-sm font-bold text-center">{screenshot.title}</h4>
                        <p className="text-[10px] text-center opacity-90 mt-1">
                          {screenshot.description}
                        </p>
                      </div>
                    </div>
                    {/* Notch */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 bg-foreground rounded-full z-20" />
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex 
                    ? "bg-primary w-8" 
                    : "bg-muted hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsSection;
