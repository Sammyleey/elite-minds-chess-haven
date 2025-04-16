
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import ChessGame from '@/components/ChessGame';

const Play = () => {
  return (
    <MainLayout>
      <div className="pt-12 pb-24">
        <div className="chess-container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h1 className="chess-heading mb-6">
              <span className="gold-gradient">Play</span>{' '}
              <span className="emerald-gradient">Chess</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Challenge yourself against our AI, play with friends, or improve your skills with our tutorials.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <ChessGame />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Play;
