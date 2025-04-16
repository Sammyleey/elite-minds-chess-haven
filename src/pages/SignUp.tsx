
import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/components/layouts/MainLayout';
import { ChevronRight } from 'lucide-react';

const SignUp = () => {
  return (
    <MainLayout>
      <div className="pt-12 pb-24">
        <div className="chess-container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h1 className="chess-heading mb-6">
              <span className="gold-gradient">Join</span>{' '}
              <span className="emerald-gradient">Elite Minds Chess Club</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Create your account to access exclusive features, join tournaments, and connect with chess enthusiasts.
            </p>
          </div>
          
          <div className="max-w-md mx-auto chess-card p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-md bg-muted border-border focus:border-chess-gold focus:ring-chess-gold py-2 px-4 text-foreground"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-md bg-muted border-border focus:border-chess-gold focus:ring-chess-gold py-2 px-4 text-foreground"
                  />
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium mb-2">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="w-full rounded-md bg-muted border-border focus:border-chess-gold focus:ring-chess-gold py-2 px-4 text-foreground"
                  />
                </div>
              </div>
              
              <div className="text-sm">
                <div className="flex items-center">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-chess-gold focus:ring-chess-gold"
                    required
                  />
                  <label htmlFor="terms" className="ml-2 block text-muted-foreground">
                    I agree to the{' '}
                    <Link to="/terms" className="text-chess-gold hover:underline">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link to="/privacy" className="text-chess-gold hover:underline">
                      Privacy Policy
                    </Link>
                  </label>
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full chess-btn"
              >
                Create Account
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
              
              <div className="text-center text-sm text-muted-foreground">
                Already have an account?{' '}
                <Link to="/login" className="text-chess-gold hover:underline">
                  Sign in
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SignUp;
