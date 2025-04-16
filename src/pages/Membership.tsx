
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import MembershipComponent from '@/components/Membership';

const MembershipPage = () => {
  return (
    <MainLayout>
      <div className="pt-12">
        <div className="chess-container text-center mb-16 max-w-3xl mx-auto">
          <h1 className="chess-heading mb-6">
            <span className="gold-gradient">Membership</span>{' '}
            <span className="emerald-gradient">Options</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Join our community of chess enthusiasts and unlock premium features tailored to help you improve your game.
          </p>
        </div>
        
        <MembershipComponent />
      </div>
    </MainLayout>
  );
};

export default MembershipPage;
