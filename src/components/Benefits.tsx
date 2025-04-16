
import React from 'react';
import { Brain, Lightbulb, BarChart, Users, Heart, Trophy } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Brain className="h-8 w-8 text-chess-gold" />,
      title: "Cognitive Development",
      description: "Chess enhances memory, concentration, and critical thinking skills by exercising both hemispheres of the brain.",
      stats: "15% improvement in cognitive abilities shown in studies with regular chess play."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-chess-emerald" />,
      title: "Problem-Solving",
      description: "Players learn to analyze complex situations, evaluate multiple options, and make strategic decisions under pressure.",
      stats: "Chess players score higher on problem-solving assessments compared to non-players."
    },
    {
      icon: <BarChart className="h-8 w-8 text-chess-accent" />,
      title: "Academic Performance",
      description: "Studies show that chess improves mathematical skills, reading comprehension, and overall academic achievement.",
      stats: "Students who play chess score 10-15% higher on standardized tests."
    },
    {
      icon: <Users className="h-8 w-8 text-chess-gold" />,
      title: "Social Development",
      description: "Chess builds sportsmanship, respect, and interpersonal skills through face-to-face competition and community.",
      stats: "90% of chess club members report improved social confidence."
    },
    {
      icon: <Heart className="h-8 w-8 text-chess-emerald" />,
      title: "Emotional Resilience",
      description: "Learning to handle wins and losses gracefully develops patience, emotional control, and perseverance.",
      stats: "Regular players demonstrate higher frustration tolerance and emotional regulation."
    },
    {
      icon: <Trophy className="h-8 w-8 text-chess-accent" />,
      title: "Lifelong Skill",
      description: "Chess can be enjoyed at any age, providing mental stimulation and social engagement throughout life.",
      stats: "Chess players maintain sharper cognitive abilities as they age."
    }
  ];

  return (
    <section className="chess-section py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute -z-10 top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-chess-gold/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute -z-10 bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-chess-emerald/5 to-transparent rounded-full blur-3xl"></div>
      
      <div className="chess-container">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="chess-heading mb-6">
            <span className="gold-gradient">The Power of</span>{' '}
            <span className="emerald-gradient">Chess</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Chess is more than just a game. It's a powerful tool for developing critical thinking, 
            strategic planning, and emotional intelligence that benefits players throughout their lives.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="chess-card p-6 flex flex-col h-full group"
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              
              <p className="text-muted-foreground mb-6 flex-grow">
                {benefit.description}
              </p>
              
              <div className="mt-auto">
                <div className="text-sm border-t border-border pt-4 text-chess-gold font-medium">
                  {benefit.stats}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Quote */}
        <blockquote className="mt-16 p-8 border-l-4 border-chess-gold bg-card rounded-lg max-w-3xl mx-auto">
          <p className="text-xl italic mb-4">
            "Chess is not just about kings, queens, and knights, but rather, focus, imagination, and strategic thinking."
          </p>
          <footer className="text-right">
            <cite className="text-chess-gold not-italic">— Garry Kasparov, Chess Grandmaster</cite>
          </footer>
        </blockquote>
      </div>
    </section>
  );
};

export default Benefits;
