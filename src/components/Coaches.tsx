import React from 'react';
import { Calendar, Clock, BookOpen, Star, ChevronRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Coaches = () => {
  const coaches = [
    {
      id: 1,
      name: "Mr. Moses Terah",
      title: "International Master",
      image: "/uploads/moses-terah.jpg",
      rating: 2430,
      specialties: ["Strategic Gameplay", "Advanced Openings", "Tournament Preparation"],
      experience: "15+ years",
      bio: "Moses is an International Master with multiple championship titles across East Africa. He specializes in strategic gameplay and has coached several national champions.",
      availability: "Mon, Wed, Fri",
      featured: true
    },
    {
      id: 2,
      name: "Emmanuel Mutisya",
      title: "FIDE Master",
      image: "/uploads/emmanuel-mutisya.jpg",
      rating: 2320,
      specialties: ["Endgame Tactics", "Defense Strategies", "Youth Training"],
      experience: "10+ years",
      bio: "Emmanuel excels in endgame tactics and defensive play. He has a passion for teaching youth players and has developed specialized training programs for various skill levels.",
      availability: "Tue, Thu, Sat"
    },
    {
      id: 3,
      name: "Dr. Wanjiku Kimani",
      title: "Chess Psychologist & Coach",
      image: "/uploads/wanjiku-kimani.jpg",
      rating: 2250,
      specialties: ["Mental Preparation", "Pattern Recognition", "Competitive Psychology"],
      experience: "12+ years",
      bio: "Dr. Kimani combines her expertise in psychology and chess to provide a unique coaching approach focused on mental preparation and competitive psychology for tournament players.",
      availability: "Wed, Fri, Sun",
      featured: true
    }
  ];

  return (
    <section className="chess-section py-24 bg-card/50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute -z-10 top-0 right-1/4 w-1/2 h-1/2 bg-chess-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute -z-10 bottom-0 left-1/4 w-1/2 h-1/2 bg-chess-emerald/5 rounded-full blur-3xl"></div>
      
      <div className="chess-container">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="chess-heading mb-6">
            <span className="gold-gradient">Meet Our</span>{' '}
            <span className="emerald-gradient">Elite Coaches</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Learn from chess masters who bring decades of experience, championship titles, and a passion for teaching to every session.
          </p>
        </div>
        
        {/* Featured coaches grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {coaches.map(coach => (
            <div 
              key={coach.id}
              className="chess-card overflow-hidden flex flex-col group"
            >
              <div className="relative h-64 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transform transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${coach.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-chess-dark via-chess-dark/50 to-transparent" />
                
                {coach.featured && (
                  <div className="absolute top-0 right-0 m-4 z-10">
                    <div className="bg-chess-gold text-chess-dark px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                      Featured Coach
                    </div>
                  </div>
                )}
                
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{coach.name}</h3>
                  <div className="flex items-center">
                    <div className="text-chess-gold font-semibold mr-3">{coach.title}</div>
                    <div className="flex items-center text-white text-sm">
                      <Star className="h-4 w-4 mr-1 text-chess-gold fill-chess-gold" />
                      <span>{coach.rating} Rating</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex-grow">
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-muted-foreground mb-2">Specialties</h4>
                  <div className="flex flex-wrap gap-2">
                    {coach.specialties.map((specialty, index) => (
                      <span 
                        key={index}
                        className="inline-block px-3 py-1 bg-muted rounded-full text-xs font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  {coach.bio}
                </p>
                
                <div className="flex flex-wrap gap-4 text-sm mb-6">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-chess-gold" />
                    <span>{coach.experience} experience</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-chess-emerald" />
                    <span>Available: {coach.availability}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-card border-t border-border mt-auto">
                <div className="flex flex-wrap gap-3 justify-between">
                  <Link 
                    to={`/coaches/${coach.id}`} 
                    className="inline-flex items-center text-chess-gold hover:underline"
                  >
                    View Profile
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                  
                  <Link 
                    to={`/book-coach/${coach.id}`} 
                    className="chess-btn"
                  >
                    Book Session
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA section */}
        <div className="text-center">
          <div className="chess-card p-8 bg-gradient-to-br from-chess-dark to-chess-dark/80 max-w-3xl mx-auto relative overflow-hidden">
            {/* Decorative pieces */}
            <div className="absolute top-0 left-0 text-6xl text-chess-gold/10 -rotate-12 transform -translate-x-6 -translate-y-6">♚</div>
            <div className="absolute bottom-0 right-0 text-6xl text-chess-emerald/10 rotate-12 transform translate-x-6 translate-y-6">♝</div>
            
            <h3 className="text-2xl font-bold mb-4">Become a Coach</h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Are you a chess master with a passion for teaching? Join our team of elite coaches and help shape the next generation of chess champions in Kenya.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/join-as-coach" className="chess-btn">
                Apply Now
              </Link>
              
              <a href="mailto:coaching@eliteminds.chess" className="chess-btn-secondary inline-flex items-center justify-center">
                <Mail className="h-5 w-5 mr-2" />
                Contact Coaching Director
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coaches;
