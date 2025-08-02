import { Button } from "@/components/ui/button";
import { Car, Menu, User } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
            <Car className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              AutoMoto AI
            </h1>
            <p className="text-xs text-muted-foreground">Automotive Intelligence Platform</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">
            Services
          </a>
          <a href="#sales" className="text-sm font-medium hover:text-primary transition-colors">
            Sales
          </a>
          <a href="#finance" className="text-sm font-medium hover:text-primary transition-colors">
            Finance
          </a>
          <a href="#insurance" className="text-sm font-medium hover:text-primary transition-colors">
            Insurance
          </a>
          <a href="#jobs" className="text-sm font-medium hover:text-primary transition-colors">
            Jobs
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm">
            <User className="w-4 h-4 mr-2" />
            Login
          </Button>
          <Button variant="hero" size="sm" className="hidden md:flex">
            Get Started
          </Button>
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;