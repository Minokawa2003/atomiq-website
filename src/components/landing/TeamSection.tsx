import { Facebook, Sparkles } from "lucide-react";

const TeamSection = () => {
  const team = [
    {
      name: "Kent D. Garcia",
      role: "Full Stack Developer",
      bio: "Passionate about making complex physics concepts accessible to young minds through interactive play.",
      emoji: "👨‍🏫",
      image: "/images/kent.jpg",
      color: "from-blue-400 to-blue-600",
      bg: "bg-blue-50",
      social: "https://www.facebook.com/share/17B9iUG6Lx/"
    },
    {
      name: "Michelle V. Reyes",
      role: "Researcher",
      bio: "Ensures all our content is age-appropriate and supports healthy cognitive development.",
      emoji: "👩‍⚕️",
      image: "/images/michelle.jpg",
      color: "from-purple-400 to-purple-600",
      bg: "bg-purple-50",
      social: "https://www.facebook.com/share/17ksKUkUCT/"
    },
    {
      name: "Ezekiel M. Pinto",
      role: "Researcher",
      bio: "The artistic mind behind our colorful characters and engaging visual style.",
      emoji: "🎨",
      image: "/images/ezek.jpg",
      color: "from-orange-400 to-orange-600",
      bg: "bg-orange-50",
      social: "https://www.facebook.com/share/1CbZ2hRe8d/"
    }
  ];

  return (
    <section id="team" className="relative py-20 bg-gradient-hero overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm mb-4">
            Our Amazing Team
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Meet the 
            <span className="text-gradient-primary"> Science Squad!</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A team of IT students dedicated to inspiring 
            the next generation of young scientists!
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {team.map((member, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Card Background Decoration */}
              <div className={`absolute inset-0 bg-gradient-to-br ${member.color} rounded-[2rem] opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`} />
              
              <div className="relative bg-card border-2 border-transparent group-hover:border-primary/20 rounded-[2rem] overflow-hidden shadow-card hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Image Container - Full height/width aspect */}
                <div className={`relative h-[400px] w-full overflow-hidden ${member.bg}`}>
                  <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 z-10`} />
                  
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-8xl">
                      {member.emoji}
                    </div>
                  )}

                  {/* Floating Role Badge */}
                  <div className="absolute top-4 left-4 z-20">
                     <span className="inline-flex items-center gap-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-primary shadow-sm">
                        <Sparkles className="w-3 h-3" />
                        {member.role}
                     </span>
                  </div>

                  {/* Social Link Button */}
                   <a 
                    href={member.social}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
                
                {/* Content Overlay/Bottom Section */}
                <div className="relative p-6 -mt-12 z-20">
                    <div className="bg-background/95 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-primary/10 h-full flex flex-col justify-center">
                        <h3 className="text-2xl font-bold mb-2 text-center">{member.name}</h3>
                        <p className="text-muted-foreground text-sm text-center leading-relaxed">
                            {member.bio}
                        </p>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
