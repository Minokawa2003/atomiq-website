import { Atom, Heart, Mail } from "lucide-react";

const Footer = () => {
  const links = {
    product: [
      { label: "Features", href: "#features" },
      { label: "Screenshots", href: "#screenshots" },
      { label: "Pricing", href: "#" },
      { label: "Download", href: "#" },
    ],
    company: [
      { label: "About Us", href: "#about" },
      { label: "Team", href: "#team" },
      { label: "Careers", href: "#" },
      { label: "Press Kit", href: "#" },
    ],
    support: [
      { label: "Help Center", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  };

  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <Atom className="w-8 h-8 text-secondary" />
              <span className="text-2xl font-bold">AtomKids</span>
            </a>
            <p className="text-primary-foreground/70 mb-6 max-w-sm">
              Making nuclear science fun and accessible for young minds around the world. 
              Spark curiosity, ignite passion! 🚀
            </p>
            <div className="flex items-center gap-2 text-primary-foreground/70">
              <Mail className="w-4 h-4" />
              <a href="mailto:hello@atomkids.app" className="hover:text-secondary transition-colors">
                hello@atomkids.app
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-3">
              {links.product.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/70 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/70 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-3">
              {links.support.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/70 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 AtomKids. All rights reserved.
          </p>
          <p className="text-primary-foreground/60 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-destructive fill-destructive" /> for curious kids everywhere
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
