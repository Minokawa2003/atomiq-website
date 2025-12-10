import { Button } from "@/components/ui/button";
import { Download, Rocket } from "lucide-react";
import AtomDecoration from "./AtomDecoration";
import { APP_CONFIG } from "@/config";

const CTASection = () => {
  return (
    <section className="relative py-20 bg-gradient-primary overflow-hidden">
      {/* Decorations */}
      <AtomDecoration 
        className="absolute top-10 left-10 opacity-30" 
        size="lg" 
        color="yellow" 
      />
      <AtomDecoration 
        className="absolute bottom-10 right-10 opacity-30" 
        size="md" 
        color="pink" 
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-primary-foreground">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/20 rounded-full px-4 py-2 mb-6">
            <Rocket className="w-5 h-5" />
            <span className="font-medium">Start the Adventure Today!</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Explore the Atomic Universe?
          </h2>
          
          <p className="text-xl opacity-90 mb-8">
            Download AtomIQ now and watch your learner fall in love with science!
            Free to start, endless fun to discover! 🌟
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="xl" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-xl hover:-translate-y-2 transition-all px-8"
              onClick={() => window.location.href = APP_CONFIG.downloadLink}
            >
              <Download className="w-6 h-6 mr-2" />
              <span>Download APK</span>
            </Button>
          </div>
          
          <p className="mt-8 text-sm opacity-70">
            ✓ Free to download &nbsp; ✓ No ads &nbsp; ✓ 100% learner-safe
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
