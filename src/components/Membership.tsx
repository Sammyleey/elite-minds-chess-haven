
import React from 'react';
import { Check, Crown, Star, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Membership = () => {
  const plans = [
    {
      name: "Free",
      price: "0",
      description: "Basic membership with access to essential features",
      features: [
        "Play unlimited games with our AI",
        "Access to basic tutorials",
        "Participate in community forums",
        "Join open club events"
      ],
      icon: <Star className="h-6 w-6" />,
      color: "text-chess-accent",
      bgColor: "bg-chess-accent",
      buttonStyle: "border-chess-accent hover:bg-chess-accent hover:text-white"
    },
    {
      name: "Premium",
      price: "19.99",
      period: "month",
      description: "Advanced features for serious chess enthusiasts",
      features: [
        "All Free features",
        "Advanced strategy tutorials",
        "Game analysis with insights",
        "Priority tournament registration",
        "1 free coaching session per month",
        "Access to premium events"
      ],
      popular: true,
      icon: <Crown className="h-6 w-6" />,
      color: "text-chess-gold",
      bgColor: "bg-chess-gold",
      buttonStyle: "bg-chess-gold text-primary-foreground hover:bg-chess-gold/90"
    },
    {
      name: "Elite",
      price: "99.99",
      period: "month",
      description: "The ultimate chess experience for dedicated players",
      features: [
        "All Premium features",
        "Unlimited coaching sessions",
        "Personalized training program",
        "Exclusive access to grandmaster events",
        "Private tournaments",
        "Early access to all club features"
      ],
      icon: <Star className="h-6 w-6" />,
      color: "text-chess-emerald",
      bgColor: "bg-chess-emerald",
      buttonStyle: "border-chess-emerald hover:bg-chess-emerald hover:text-white"
    }
  ];

  return (
    <section className="chess-section py-24 bg-card/50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute -z-10 top-0 left-1/4 w-1/2 h-1/2 bg-chess-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute -z-10 bottom-0 right-1/4 w-1/2 h-1/2 bg-chess-emerald/5 rounded-full blur-3xl"></div>
      
      <div className="chess-container">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="chess-heading mb-6">
            <span className="gold-gradient">Membership</span>{' '}
            <span className="emerald-gradient">Plans</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Join our community of chess enthusiasts and access exclusive features tailored to your level and aspirations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col rounded-xl border ${
                plan.popular 
                ? 'border-chess-gold shadow-lg' 
                : 'border-border'
              } overflow-hidden transition-all duration-300 hover:shadow-xl`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className={`${plan.bgColor} text-white px-4 py-1 text-sm font-medium uppercase tracking-wider transform translate-x-2 -translate-y-0 rotate-45 shadow-sm`}>
                    Popular
                  </div>
                </div>
              )}
              
              <div className="p-6 bg-card flex-grow">
                <div className="flex justify-between items-center mb-4">
                  <h3 className={`text-2xl font-bold ${plan.color}`}>{plan.name}</h3>
                  <div className={`p-2 rounded-full ${plan.bgColor} bg-opacity-10`}>
                    {plan.icon}
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-end">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    {plan.period && (
                      <span className="text-muted-foreground ml-2">/{plan.period}</span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className={`${plan.color} h-5 w-5 mr-2 mt-0.5 flex-shrink-0`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-6 bg-card border-t border-border mt-auto">
                <Link 
                  to="/signup" 
                  className={`w-full inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-semibold transition-colors ${
                    plan.popular 
                    ? plan.buttonStyle
                    : `border-2 bg-transparent hover:bg-opacity-10 ${plan.buttonStyle}`
                  }`}
                >
                  {plan.popular ? 'Join Now' : 'Get Started'}
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional info */}
        <div className="mt-16 max-w-3xl mx-auto text-center p-6 border border-border rounded-xl bg-card shadow-sm">
          <h3 className="text-xl font-bold mb-4">Looking for Corporate or Group Rates?</h3>
          <p className="text-muted-foreground mb-6">
            We offer special pricing for schools, companies, and groups of 5 or more. Contact us for a customized quote.
          </p>
          <Link to="/contact" className="chess-btn-secondary">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Membership;
