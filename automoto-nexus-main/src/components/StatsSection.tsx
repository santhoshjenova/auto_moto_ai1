import { TrendingUp, Users, Building, Globe } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      value: "100K+",
      label: "Active Users",
      description: "Car owners using our platform"
    },
    {
      icon: Building,
      value: "500+",
      label: "Dealerships",
      description: "Trusted dealer partners"
    },
    {
      icon: TrendingUp,
      value: "$200K",
      label: "Monthly Revenue",
      description: "Growing MRR target"
    },
    {
      icon: Globe,
      value: "10+",
      label: "Countries",
      description: "Global expansion plan"
    }
  ];

  return (
    <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-90" />
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transforming the Automotive Industry
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Join the platform that's revolutionizing how the automotive ecosystem operates
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/20">
                <stat.icon className="w-8 h-8 text-accent" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2 group-hover:text-accent transition-colors">
                {stat.value}
              </div>
              <div className="text-lg font-semibold mb-1">
                {stat.label}
              </div>
              <div className="text-primary-foreground/80 text-sm">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;