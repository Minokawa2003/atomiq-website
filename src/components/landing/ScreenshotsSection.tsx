import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ScreenshotsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const screenshots = [
    {
      title: "Home Dashboard",
      description: "Fun and colorful home screen with daily challenges",
      gradient: "from-atomic-blue to-atomic-purple",
      emoji: "🏠",
    },
    {
      title: "Virtual Lab",
      description: "Interactive 3D experiments and simulations",
      gradient: "from-atomic-green to-atomic-blue",
      emoji: "🔬",
    },
    {
      title: "Quiz Arena",
      description: "Exciting quizzes with amazing rewards",
      gradient: "from-atomic-orange to-atomic-pink",
      emoji: "🎯",
    },
    {
      title: "Atom Builder",
      description: "Create and explore different atoms",
      gradient: "from-atomic-purple to-atomic-pink",
      emoji: "⚛️",
    },
    {
      title: "Achievement Hall",
      description: "Track progress and earn badges",
      gradient: "from-atomic-yellow to-atomic-orange",
      emoji: "🏆",
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section id="screenshots" className="relative py-20 bg-card overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-secondary/20 text-secondary-foreground font-semibold px-4 py-2 rounded-full text-sm mb-4">
            App Screenshots
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Take a Peek 
            <span className="text-gradient-warm"> Inside!</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what makes AtomKids the most fun science app for kids!
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
          <div className="flex items-center justify-center gap-4 px-16">
            {screenshots.map((screenshot, index) => {
              const offset = index - activeIndex;
              const isActive = index === activeIndex;
              
              return (
                <div
                  key={index}
                  className="transition-all duration-500 ease-out cursor-pointer"
                  style={{
                    transform: `translateX(${offset * 60}px) scale(${isActive ? 1 : 0.8})`,
                    opacity: Math.abs(offset) > 1 ? 0 : isActive ? 1 : 0.6,
                    zIndex: isActive ? 10 : 5 - Math.abs(offset),
                    display: Math.abs(offset) > 2 ? "none" : "block",
                  }}
                  onClick={() => setActiveIndex(index)}
                >
                  {/* Phone Frame */}
                  <div className="w-56 h-[460px] bg-foreground rounded-[2.5rem] p-2 shadow-2xl">
                    <div className={`w-full h-full bg-gradient-to-br ${screenshot.gradient} rounded-[2rem] overflow-hidden relative`}>
                      {/* Screen content */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-primary-foreground">
                        <span className="text-6xl mb-4">{screenshot.emoji}</span>
                        <h4 className="text-lg font-bold text-center">{screenshot.title}</h4>
                        <p className="text-xs text-center opacity-80 mt-2">
                          {screenshot.description}
                        </p>
                      </div>
                    </div>
                    {/* Notch */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-4 bg-foreground rounded-full" />
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
