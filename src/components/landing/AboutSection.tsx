import { BookOpen, Gamepad2, Lightbulb, Users } from "lucide-react";
import AtomDecoration from "./AtomDecoration";

const AboutSection = () => {
  const stats = [
    { icon: Users, value: "1M+", label: "Happy Kids", color: "text-atomic-blue" },
    { icon: BookOpen, value: "500+", label: "Lessons", color: "text-atomic-green" },
    { icon: Gamepad2, value: "100+", label: "Games", color: "text-atomic-orange" },
    { icon: Lightbulb, value: "50+", label: "Experiments", color: "text-atomic-purple" },
  ];

  return (
    <section id="about" className="relative py-20 bg-card overflow-hidden">
      <AtomDecoration 
        className="absolute -top-10 right-10 opacity-20" 
        size="lg" 
        color="yellow" 
      />
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm mb-4">
              About AtomKids
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Making Science 
              <span className="text-gradient-warm"> Super Cool </span>
              for Every Kid!
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              AtomKids transforms complex nuclear science concepts into exciting, 
              bite-sized adventures that kids actually love! Our app uses colorful 
              animations, interactive games, and friendly characters to make learning 
              about atoms, molecules, and energy an absolute blast! 💥
            </p>
            
            <p className="text-lg text-muted-foreground mb-8">
              Designed by scientists and educators, approved by parents, and loved by 
              millions of curious young minds around the world.
            </p>
            
            <div className="flex flex-wrap gap-4">
              {["Ages 6-12", "Ad-Free", "Offline Mode", "Safe & Secure"].map((badge) => (
                <span 
                  key={badge}
                  className="bg-muted px-4 py-2 rounded-xl text-sm font-medium text-muted-foreground"
                >
                  ✓ {badge}
                </span>
              ))}
            </div>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-background rounded-3xl p-6 shadow-card hover-bounce text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-muted mb-4 ${stat.color}`}>
                  <stat.icon className="w-8 h-8" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</h3>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
