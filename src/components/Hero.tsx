
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Award, Brain, Users } from 'lucide-react';

const Hero = () => {
  const boardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Simple animation for the chess pattern
    const animateBoard = () => {
      const squares = boardRef.current?.querySelectorAll('.chess-square');
      if (!squares) return;
      
      squares.forEach((square, index) => {
        setTimeout(() => {
          square.classList.add('opacity-100');
        }, index * 20);
      });
    };
    
    animateBoard();
  }, []);
  
  return (
    <div className="relative pt-28 pb-20 overflow-hidden">
      {/* Chess pattern background */}
      <div 
        ref={boardRef}
        className="absolute inset-0 -z-10 opacity-10"
      >
        <div className="grid grid-cols-8 h-full">
          {Array.from({ length: 64 }).map((_, i) => {
            const row = Math.floor(i / 8);
            const col = i % 8;
            const isDark = (row + col) % 2 === 1;
            
            return (
              <div 
                key={i} 
                className={`chess-square opacity-0 transition-opacity duration-500 ${isDark ? 'bg-chess-gold' : 'bg-chess-emerald/70'}`}
              />
            );
          })}
        </div>
      </div>
      
      {/* Floating pieces */}
      <div className="absolute -z-5 top-1/4 left-1/4 text-4xl floating-animation opacity-20 text-chess-gold">♚</div>
      <div className="absolute -z-5 bottom-1/4 right-1/3 text-5xl floating-animation opacity-20 text-chess-emerald delay-700">♝</div>
      <div className="absolute -z-5 top-1/3 right-1/4 text-4xl floating-animation opacity-20 text-chess-accent delay-300">♞</div>
      <div className="absolute -z-5 bottom-1/4 left-1/3 text-5xl floating-animation opacity-20 text-chess-gold delay-500">♜</div>
      
      <div className="chess-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-6 fade-in">
            <h1 className="chess-heading">
              <span className="gold-gradient">Master Strategy,</span><br/>
              <span className="emerald-gradient">Cultivate Brilliance</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Join Elite Minds Chess Club and unlock your strategic potential in an environment that fosters growth, community, and intellectual excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Link to="/signup" className="chess-btn">
                Join the Club
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              
              <Link to="/play" className="chess-btn-secondary">
                Play Now
              </Link>
            </div>
          </div>
          
          <div className="relative">
            {/* 3D Chess piece illustrations */}
            <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-chess-dark to-background rounded-2xl p-6 shadow-xl border border-chess-gold/20 overflow-hidden group">
              {/* Dynamic chess visualization */}
              <div className="relative h-full w-full">
                {/* King silhouette */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-[12rem] opacity-20 text-chess-gold group-hover:opacity-30 transition-opacity duration-300">♚</div>
                </div>
                
                {/* Animated overlay grid */}
                <div className="absolute inset-0">
                  <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div 
                        key={i} 
                        className="border border-chess-gold/5 opacity-50"
                      />
                    ))}
                  </div>
                </div>
                
                {/* Stats counters */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 p-4">
                  <h2 className="text-2xl font-bold relative z-10">Elite Minds Chess</h2>
                  
                  <div className="grid grid-cols-3 gap-4 w-full">
                    <div className="text-center">
                      <Award className="h-8 w-8 mx-auto text-chess-gold mb-2" />
                      <div className="text-2xl font-bold">200+</div>
                      <div className="text-sm text-muted-foreground">Members</div>
                    </div>
                    <div className="text-center">
                      <Brain className="h-8 w-8 mx-auto text-chess-emerald mb-2" />
                      <div className="text-2xl font-bold">50+</div>
                      <div className="text-sm text-muted-foreground">Tournaments</div>
                    </div>
                    <div className="text-center">
                      <Users className="h-8 w-8 mx-auto text-chess-accent mb-2" />
                      <div className="text-2xl font-bold">12</div>
                      <div className="text-sm text-muted-foreground">Coaches</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-64 h-64 bg-chess-gold opacity-5 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 -top-6 -left-6 w-64 h-64 bg-chess-emerald opacity-5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
