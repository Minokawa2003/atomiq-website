import { Bot, Gamepad2, Users, ShieldCheck } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Gamepad2,
      title: "Gamified Learning Path: The Mission",
      description: "Embark on an epic journey to save the atomic world! Complete daily quests, earn XP, and unlock new levels.",
      color: "bg-atomic-orange",
    },
    {
      icon: ShieldCheck,
      title: "Myth Busters Module",
      description: "Challenge misconceptions and discover the truth behind nuclear science with our interactive fact-checking games.",
      color: "bg-atomic-blue",
    },
    {
      icon: Users,
      title: "Community",
      description: "Connect with fellow young scientists, share your achievements, and participate in global challenges together.",
      color: "bg-atomic-green",
    },
    {
      icon: Bot,
      title: "Ask Schrodi",
      description: "Meet your personal AI lab assistant! Schrodi is always ready to answer your questions and help you with tricky concepts.",
      color: "bg-atomic-purple",
    },
  ];

  return (
    <section id="features" className="relative py-20 bg-gradient-hero overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="text-center mb-16">
          <span className="inline-block bg-accent/10 text-accent font-semibold px-4 py-2 rounded-full text-sm mb-4">
            Amazing Features
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Everything Learners Need to 
            <span className="text-gradient-primary"> Love Science!</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Packed with interactive features designed to spark curiosity and make 
            every child a science superstar! ⭐
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
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
