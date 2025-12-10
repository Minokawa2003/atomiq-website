import { Brain, Gamepad2, Medal, Microscope, Palette, Shield } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Microscope,
      title: "Virtual Lab",
      description: "Conduct safe, virtual experiments and watch atoms come alive in stunning 3D animations!",
      color: "bg-atomic-blue",
    },
    {
      icon: Gamepad2,
      title: "Fun Games",
      description: "Learn through play with exciting puzzle games, quizzes, and atom-building challenges!",
      color: "bg-atomic-orange",
    },
    {
      icon: Brain,
      title: "Smart Learning",
      description: "AI-powered lessons that adapt to your child's pace and learning style.",
      color: "bg-atomic-purple",
    },
    {
      icon: Medal,
      title: "Earn Rewards",
      description: "Collect badges, unlock achievements, and become a certified Young Scientist!",
      color: "bg-atomic-yellow",
    },
    {
      icon: Palette,
      title: "Creative Mode",
      description: "Design your own molecules, create atomic art, and share with friends!",
      color: "bg-atomic-green",
    },
    {
      icon: Shield,
      title: "Parent Controls",
      description: "Full parental controls, progress tracking, and zero ads. 100% kid-safe!",
      color: "bg-atomic-pink",
    },
  ];

  return (
    <section id="features" className="relative py-20 bg-gradient-hero overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block bg-accent/10 text-accent font-semibold px-4 py-2 rounded-full text-sm mb-4">
            Amazing Features
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Everything Kids Need to 
            <span className="text-gradient-primary"> Love Science!</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Packed with interactive features designed to spark curiosity and make 
            every child a science superstar! ⭐
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card rounded-3xl p-8 shadow-card hover-bounce group"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${feature.color} mb-6 group-hover:animate-wiggle`}>
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
