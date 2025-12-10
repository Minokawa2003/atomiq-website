import { Linkedin, Twitter } from "lucide-react";

const TeamSection = () => {
  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Founder & Lead Scientist",
      bio: "Former NASA researcher passionate about making science accessible to kids.",
      emoji: "👩‍🔬",
      color: "from-atomic-blue to-atomic-purple",
    },
    {
      name: "Marcus Williams",
      role: "Head of Education",
      bio: "15+ years teaching experience, loves making learning fun!",
      emoji: "👨‍🏫",
      color: "from-atomic-green to-atomic-blue",
    },
    {
      name: "Yuki Tanaka",
      role: "Lead Designer",
      bio: "Creates the colorful worlds that kids love to explore.",
      emoji: "👩‍🎨",
      color: "from-atomic-orange to-atomic-pink",
    },
    {
      name: "Alex Rivera",
      role: "Game Developer",
      bio: "Turns complex science into exciting games and adventures.",
      emoji: "👨‍💻",
      color: "from-atomic-purple to-atomic-pink",
    },
  ];

  return (
    <section id="team" className="relative py-20 bg-gradient-hero overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm mb-4">
            Our Amazing Team
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Meet the 
            <span className="text-gradient-primary"> Science Squad!</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A team of scientists, educators, and creatives dedicated to inspiring 
            the next generation of young scientists!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div 
              key={index}
              className="bg-card rounded-3xl p-6 shadow-card hover-bounce text-center group"
            >
              {/* Avatar */}
              <div className={`w-24 h-24 mx-auto mb-4 rounded-3xl bg-gradient-to-br ${member.color} flex items-center justify-center group-hover:animate-wiggle`}>
                <span className="text-5xl">{member.emoji}</span>
              </div>
              
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
              <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
              
              {/* Social links */}
              <div className="flex justify-center gap-3">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
