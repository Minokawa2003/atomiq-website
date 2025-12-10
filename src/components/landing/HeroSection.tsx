import { Button } from "@/components/ui/button";
import { Apple, PlayCircle, Sparkles, Zap } from "lucide-react";
import AtomDecoration from "./AtomDecoration";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden pt-16">
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
      
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="relative z-10 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-card rounded-full px-4 py-2 mb-6 shadow-card">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-muted-foreground">Learning Made Super Fun!</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Discover the 
              <span className="text-gradient-primary"> Amazing World </span>
              of Atoms!
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              Join millions of young scientists exploring nuclear science through fun games, 
              cool experiments, and exciting adventures! 🚀
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" className="group">
                <Apple className="w-6 h-6" />
                <span>App Store</span>
              </Button>
              <Button variant="warm" size="xl" className="group">
                <PlayCircle className="w-6 h-6" />
                <span>Google Play</span>
              </Button>
            </div>
            
            <div className="flex items-center gap-6 mt-8 justify-center lg:justify-start">
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
                <p className="text-sm text-muted-foreground">1M+ Happy Young Scientists</p>
              </div>
            </div>
          </div>
          
          {/* Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone frame */}
              <div className="relative w-72 h-[580px] bg-foreground rounded-[3rem] p-3 shadow-2xl hover-bounce">
                <div className="w-full h-full bg-gradient-primary rounded-[2.5rem] overflow-hidden relative">
                  {/* Screen content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-primary-foreground">
                    <div className="w-20 h-20 bg-primary-foreground/20 rounded-3xl flex items-center justify-center mb-4 animate-bounce-soft">
                      <span className="text-4xl">⚛️</span>
                    </div>
                    <h3 className="text-2xl font-bold text-center mb-2">AtomKids</h3>
                    <p className="text-center text-primary-foreground/80 text-sm">
                      Explore atoms, molecules, and the amazing world of science!
                    </p>
                    <div className="mt-8 w-full space-y-3">
                      {["Start Learning", "Fun Experiments", "Quiz Time!"].map((text, i) => (
                        <div 
                          key={i}
                          className="bg-primary-foreground/20 rounded-xl p-3 text-center font-medium hover:bg-primary-foreground/30 transition-colors cursor-pointer"
                        >
                          {text}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Notch */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-foreground rounded-full" />
              </div>
              
              {/* Floating badges */}
              <div className="absolute -left-12 top-20 bg-card rounded-2xl p-4 shadow-card animate-float">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🧪</span>
                  <span className="font-semibold text-sm">100+ Experiments</span>
                </div>
              </div>
              
              <div className="absolute -right-8 bottom-32 bg-card rounded-2xl p-4 shadow-card animate-float-delayed">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🏆</span>
                  <span className="font-semibold text-sm">Award Winner!</span>
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
