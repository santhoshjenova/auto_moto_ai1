import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Shield, Zap, Users } from "lucide-react";
import heroImage from "@/assets/automotive-hero.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-black/20" />
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="relative container mx-auto px-4 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/20">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-white">AI-Powered Automotive Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              The Future of
              <span className="block bg-gradient-accent bg-clip-text text-transparent">
                Automotive Intelligence
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Unified SaaS platform for the entire automotive lifecycle: buying, selling, 
              servicing, financing, insurance, and careers—all powered by deep vertical AI.
            </p>
          </div>

          <div className="animate-slide-up flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="premium" size="lg" className="text-lg px-8 py-4 bg-white/10 border-white/20 text-white hover:bg-white/20">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 border border-white/20">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Enterprise Security</h3>
              <p className="text-white/80">Bank-grade security with GDPR & PCI compliance</p>
            </div>
            
            <div className="flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 border border-white/20">
                <Zap className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">AI-Powered</h3>
              <p className="text-white/80">Advanced ML for predictive maintenance & smart recommendations</p>
            </div>
            
            <div className="flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 border border-white/20">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Unified Platform</h3>
              <p className="text-white/80">All stakeholders connected in one modular ecosystem</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;