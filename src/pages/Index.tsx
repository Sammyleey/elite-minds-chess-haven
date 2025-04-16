
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import Hero from '@/components/Hero';
import ChessGame from '@/components/ChessGame';
import Benefits from '@/components/Benefits';
import Membership from '@/components/Membership';
import Events from '@/components/Events';
import Coaches from '@/components/Coaches';

const Index = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <Hero />
      
      {/* Interactive Chess Game Section */}
      <section className="py-24 bg-card/50">
        <div className="chess-container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="chess-heading mb-6">
              <span className="gold-gradient">Play</span>{' '}
              <span className="emerald-gradient">Chess</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Challenge our AI with adjustable difficulty levels, play with a friend, or improve your skills with our interactive tutorials.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <ChessGame />
          </div>
        </div>
      </section>
      
      {/* Benefits of Chess Section */}
      <Benefits />
      
      {/* Membership Section */}
      <Membership />
      
      {/* Events Section */}
      <Events />
      
      {/* Coaches Section */}
      <Coaches />
      
      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-chess-dark to-chess-dark/80">
        <div className="chess-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              <span className="gold-gradient">Subscribe to Our Newsletter</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Stay updated with tournaments, events, and chess strategies from Elite Minds Chess Club.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow rounded-md bg-muted/50 border-border focus:border-chess-gold focus:ring-chess-gold py-3 px-4 text-foreground"
                required
              />
              <button type="submit" className="chess-btn whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
