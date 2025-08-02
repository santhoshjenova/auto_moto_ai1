import { Car, Mail, Phone, MapPin, Twitter, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Car className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary-foreground">AutoMoto AI</h3>
                <p className="text-xs text-muted-foreground">Automotive Intelligence</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              The unified SaaS platform transforming the entire automotive lifecycle with deep vertical AI.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="sm" className="h-10 w-10 p-0">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-10 w-10 p-0">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-10 w-10 p-0">
                <Github className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4 text-secondary-foreground">Platform Modules</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-secondary-foreground transition-colors">Service Management</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary-foreground transition-colors">Sales & CRM</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary-foreground transition-colors">Finance & Loans</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary-foreground transition-colors">Insurance</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary-foreground transition-colors">Job Board</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary-foreground transition-colors">Analytics</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-secondary-foreground">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-secondary-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary-foreground transition-colors">Partners</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary-foreground transition-colors">Press</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary-foreground transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-secondary-foreground">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                <span className="text-muted-foreground">Mumbai, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                <span className="text-muted-foreground">hello@automoto.ai</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                <span className="text-muted-foreground">+91 98765 43210</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 AutoMoto AI. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-secondary-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-secondary-foreground transition-colors">Terms of Service</a>
              <a href="#" className="text-muted-foreground hover:text-secondary-foreground transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;