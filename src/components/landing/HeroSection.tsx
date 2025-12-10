import { Button } from "@/components/ui/button";
import { Download, Sparkles, Zap } from "lucide-react";
import AtomDecoration from "./AtomDecoration";
import { APP_CONFIG } from "@/config";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Floating decorations */}
      <AtomDecoration 
        className="absolute top-32 left-10 animate-float opacity-60" 
        size="lg" 
        color="blue" 
      />
      <AtomDecoration 
        className="absolute top-48 right-20 animate-float-delayed opacity-50" 
        size="md" 
        color="orange" 
      />
      <AtomDecoration 
        className="absolute bottom-32 left-1/4 animate-float opacity-40" 
        size="sm" 
        color="green" 
      />
      <AtomDecoration 
        className="absolute bottom-48 right-1/3 animate-float-delayed opacity-50" 
        size="md" 
        color="purple" 
      />
      
      {/* Background shapes */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 pt-8 md:pt-16 pb-20 max-w-7xl h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          {/* Content */}
          <div className="relative z-10 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-card rounded-full px-3 py-1.5 mb-4 shadow-card">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-xs md:text-sm font-medium text-muted-foreground">Learning Made Super Fun!</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 lg:mb-6">
              When Facts Are Clear, 
              <span className="text-gradient-primary block"> There's Nothing to Fear!</span>
            </h1>
            
            <p className="text-base md:text-lg text-muted-foreground mb-6 lg:mb-8 max-w-lg mx-auto lg:mx-0">
              Join our community of young scientists debunking myths and exploring the true science behind nuclear energy through fun games and adventures! 🚀
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="lg" 
                className="group text-base px-8 h-12"
                onClick={() => window.location.href = APP_CONFIG.downloadLink}
              >
                <Download className="w-5 h-5 mr-2" />
                <span>Download APK</span>
              </Button>
            </div>
            
            <div className="flex items-center gap-4 lg:gap-6 mt-6 lg:mt-8 justify-center lg:justify-start">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-primary border-2 border-background flex items-center justify-center text-primary-foreground text-sm font-bold"
                  >
                    {["😊", "🤓", "🎉", "⚛️"][i-1]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-secondary">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Zap key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">Growing Community of Young Minds</p>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative w-full max-w-[200px] sm:max-w-[240px] lg:max-w-[280px]">
              <img 
                src="/images/hero.png" 
                alt="AtomIQ App Interface" 
                className="w-full h-auto drop-shadow-2xl hover-bounce"
              />
              
              {/* Floating badges */}
              <div className="absolute -left-12 top-20 bg-card rounded-2xl p-4 shadow-card animate-float hidden md:block">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🧪</span>
                  <span className="font-semibold text-sm">Fun Experiments</span>
                </div>
              </div>
              
              <div className="absolute -right-8 bottom-32 bg-card rounded-2xl p-4 shadow-card animate-float-delayed hidden md:block">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🏆</span>
                  <span className="font-semibold text-sm">Gamified Learning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="hsl(var(--card))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
