
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { Trophy, Calendar, Users, BookOpen, Globe, Award } from 'lucide-react';

const About = () => {
  // Stats for the club
  const stats = [
    { 
      icon: <Calendar className="h-8 w-8 text-chess-gold" />,
      value: "10+",
      label: "Years of Excellence"
    },
    { 
      icon: <Users className="h-8 w-8 text-chess-emerald" />,
      value: "500+",
      label: "Active Members"
    },
    { 
      icon: <Trophy className="h-8 w-8 text-chess-accent" />,
      value: "75+",
      label: "Tournaments Hosted"
    },
    { 
      icon: <Award className="h-8 w-8 text-chess-gold" />,
      value: "30+",
      label: "Champion Players"
    }
  ];

  return (
    <MainLayout>
      {/* Hero section */}
      <div className="pt-12 pb-20 relative overflow-hidden">
        <div className="absolute -z-10 top-1/3 right-0 w-1/2 h-1/2 bg-chess-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute -z-10 bottom-0 left-1/3 w-1/2 h-1/2 bg-chess-emerald/5 rounded-full blur-3xl"></div>
        
        <div className="chess-container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h1 className="chess-heading mb-6">
              <span className="gold-gradient">About</span>{' '}
              <span className="emerald-gradient">Elite Minds</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Elite Minds Chess Club was founded in Nairobi with a vision to create a premier community where chess players of all levels can learn, grow, and connect.
            </p>
          </div>
          
          {/* Vision and mission */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision & Mission</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Elite Minds Chess Club was established in 2014 with a clear vision: to become the leading chess community in Kenya that fosters intellectual growth, strategic thinking, and a passion for the game.
                </p>
                <p>
                  Our mission is to make chess accessible to everyone in East Africa, provide world-class training from masters, and build a vibrant community where players can connect, compete, and grow together.
                </p>
                <p>
                  We believe chess is more than just a game—it's a powerful tool for developing critical thinking, patience, foresight, and emotional resilience that benefits players throughout their lives.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-chess-dark to-background rounded-2xl p-6 shadow-xl border border-chess-gold/20 overflow-hidden">
                <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
                  <div className="bg-muted rounded-lg overflow-hidden">
                    <img 
                      src="/uploads/chess-tournaments.jpg" 
                      alt="Chess tournament in Nairobi"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-muted rounded-lg overflow-hidden">
                    <img 
                      src="/uploads/chess-coaching.jpg" 
                      alt="Chess coaching session"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-muted rounded-lg overflow-hidden">
                    <img 
                      src="/uploads/chess-players.jpg" 
                      alt="Elite chess players"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-muted rounded-lg overflow-hidden">
                    <img 
                      src="/uploads/chess-community.jpg" 
                      alt="Chess community in Kenya"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 -bottom-6 -right-6 w-64 h-64 bg-chess-gold opacity-5 rounded-full blur-3xl"></div>
              <div className="absolute -z-10 -top-6 -left-6 w-64 h-64 bg-chess-emerald opacity-5 rounded-full blur-3xl"></div>
            </div>
          </div>
          
          {/* Stats section */}
          <div className="py-12 bg-card rounded-xl mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="p-6">
                  <div className="flex justify-center mb-4">{stat.icon}</div>
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Our values */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="chess-card p-8 flex flex-col items-center text-center">
                <BookOpen className="h-12 w-12 text-chess-gold mb-6" />
                <h3 className="text-xl font-bold mb-4">Continuous Learning</h3>
                <p className="text-muted-foreground">
                  We promote a growth mindset where players of all levels are encouraged to learn, adapt, and continuously improve their game.
                </p>
              </div>
              
              <div className="chess-card p-8 flex flex-col items-center text-center">
                <Users className="h-12 w-12 text-chess-emerald mb-6" />
                <h3 className="text-xl font-bold mb-4">Inclusive Community</h3>
                <p className="text-muted-foreground">
                  We create a welcoming environment where diverse players from all backgrounds and skill levels across Kenya can connect and thrive.
                </p>
              </div>
              
              <div className="chess-card p-8 flex flex-col items-center text-center">
                <Globe className="h-12 w-12 text-chess-accent mb-6" />
                <h3 className="text-xl font-bold mb-4">Excellence & Integrity</h3>
                <p className="text-muted-foreground">
                  We uphold the highest standards in coaching, tournaments, and community engagement, always with honesty and respect.
                </p>
              </div>
            </div>
          </div>
          
          {/* Team section with African leadership */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Elite Minds is led by a team of chess enthusiasts, champions, and educators dedicated to bringing the best chess experience to our community in Kenya.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="chess-card overflow-hidden">
                <div className="h-64 relative">
                  <img 
                    src="/uploads/moses-terah.jpg" 
                    alt="Mr. Moses Terah"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold">Mr. Moses Terah</h3>
                  <p className="text-sm text-chess-gold mb-2">Founder & President</p>
                  <p className="text-muted-foreground text-sm">
                    International Master with 15+ years of experience in chess education across East Africa.
                  </p>
                </div>
              </div>
              
              <div className="chess-card overflow-hidden">
                <div className="h-64 relative">
                  <img 
                    src="/uploads/wanjiku-kimani.jpg" 
                    alt="Dr. Wanjiku Kimani"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold">Dr. Wanjiku Kimani</h3>
                  <p className="text-sm text-chess-gold mb-2">Education Director</p>
                  <p className="text-muted-foreground text-sm">
                    Developed our renowned chess curriculum and coach training program for Kenyan youth.
                  </p>
                </div>
              </div>
              
              <div className="chess-card overflow-hidden">
                <div className="h-64 relative">
                  <img 
                    src="/uploads/richard-omondi.jpg" 
                    alt="Richard Omondi"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold">Richard Omondi</h3>
                  <p className="text-sm text-chess-gold mb-2">Tournament Director</p>
                  <p className="text-muted-foreground text-sm">
                    Organizes our prestigious tournaments and competitive events throughout East Africa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
