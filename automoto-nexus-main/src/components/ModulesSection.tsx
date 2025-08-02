import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Wrench, 
  ShoppingCart, 
  CreditCard, 
  Shield, 
  Briefcase, 
  BarChart3,
  ArrowRight,
  Brain,
  Zap,
  Eye
} from "lucide-react";
import serviceImage from "@/assets/service-module.jpg";
import salesImage from "@/assets/sales-module.jpg";
import financeImage from "@/assets/finance-module.jpg";

const ModulesSection = () => {
  const modules = [
    {
      icon: Wrench,
      title: "Service Module",
      description: "Predictive maintenance with AI-powered fault forecasting and automated service workflows",
      image: serviceImage,
      features: [
        "AI predictive maintenance",
        "Automated service booking",
        "Digital vehicle history",
        "Real-time diagnostics"
      ],
      color: "text-blue-600"
    },
    {
      icon: ShoppingCart,
      title: "Sales Module",
      description: "Personalized offers and virtual showrooms with AI-guided presentations",
      image: salesImage,
      features: [
        "Virtual 360° tours",
        "AI lead scoring",
        "Dealer CRM integration",
        "Personalized offers"
      ],
      color: "text-green-600"
    },
    {
      icon: CreditCard,
      title: "Finance Module",
      description: "Instant credit checks and automated loan applications with smart document processing",
      image: financeImage,
      features: [
        "Instant credit eligibility",
        "Loan comparison tools",
        "OCR document processing",
        "Digital KYC workflows"
      ],
      color: "text-purple-600"
    },
    {
      icon: Shield,
      title: "Insurance Module",
      description: "AI-powered smart quotes with automated policy matching and renewal management",
      image: null,
      features: [
        "Smart quote engine",
        "Policy comparison",
        "Automated renewals",
        "Risk assessment AI"
      ],
      color: "text-orange-600"
    },
    {
      icon: Briefcase,
      title: "Jobs Module",
      description: "Auto-industry job board with AI-powered matching and skill analysis",
      image: null,
      features: [
        "Resume parsing AI",
        "Job matching algorithms",
        "Skill gap analysis",
        "Employer dashboards"
      ],
      color: "text-indigo-600"
    },
    {
      icon: BarChart3,
      title: "Analytics Module",
      description: "Customer 360 dashboards with predictive insights and actionable recommendations",
      image: null,
      features: [
        "Customer 360 view",
        "Churn prediction",
        "Sales forecasting",
        "Performance insights"
      ],
      color: "text-pink-600"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Brain className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI-Powered Modules</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Complete Automotive
            <span className="block text-primary">Intelligence Suite</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Six powerful modules working together to transform every aspect of the automotive lifecycle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <Card 
              key={module.title} 
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-0 shadow-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {module.image && (
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={module.image} 
                    alt={module.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              )}
              
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <module.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {module.title}
                    </CardTitle>
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {module.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-2 mb-6">
                  {module.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full group/btn">
                  <Eye className="w-4 h-4 mr-2" />
                  Explore Module
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            View All Features
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;