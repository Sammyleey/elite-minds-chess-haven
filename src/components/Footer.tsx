import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-chess-dark border-t border-chess-gold/20">
      <div className="chess-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About section */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img src="/uploads/logo.png" alt="Elite Minds Chess Academy" className="h-14 w-auto" />
              <span className="text-xl font-bold tracking-tight">
                <span className="gold-gradient">Elite Minds</span>
                <span className="text-white"> Chess</span>
              </span>
            </div>
            
            <p className="text-muted-foreground mb-6">
              Elite Minds Chess Club is dedicated to fostering strategic thinking, cognitive development, and a vibrant community of chess enthusiasts of all levels in Nairobi and across Kenya.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer"
                className="p-2 text-muted-foreground hover:text-chess-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer"
                className="p-2 text-muted-foreground hover:text-chess-gold transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                className="p-2 text-muted-foreground hover:text-chess-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer"
                className="p-2 text-muted-foreground hover:text-chess-gold transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="flex items-center text-muted-foreground hover:text-chess-gold transition-colors">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/membership" className="flex items-center text-muted-foreground hover:text-chess-gold transition-colors">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Membership Plans
                </Link>
              </li>
              <li>
                <Link to="/events" className="flex items-center text-muted-foreground hover:text-chess-gold transition-colors">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Events & Tournaments
                </Link>
              </li>
              <li>
                <Link to="/play" className="flex items-center text-muted-foreground hover:text-chess-gold transition-colors">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Play Online
                </Link>
              </li>
              <li>
                <Link to="/resources" className="flex items-center text-muted-foreground hover:text-chess-gold transition-colors">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Learning Resources
                </Link>
              </li>
              <li>
                <Link to="/coaches" className="flex items-center text-muted-foreground hover:text-chess-gold transition-colors">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Our Coaches
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-chess-gold mt-0.5" />
                <span className="text-muted-foreground">
                  Elite Minds Chess Academy<br />
                  Westlands, Nairobi<br />
                  Kenya
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-chess-gold" />
                <span className="text-muted-foreground">+254 733 127 696</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-chess-gold" />
                <span className="text-muted-foreground">+254 728 793 634</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-chess-gold" />
                <a href="mailto:info@eliteminds.chess" className="text-muted-foreground hover:text-chess-gold transition-colors">
                  info@eliteminds.chess
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6">Subscribe to Our Newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Stay updated with our latest events, tournaments, and chess insights.
            </p>
            <form className="space-y-4">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full rounded-md bg-muted border-border focus:border-chess-gold focus:ring-chess-gold py-2 px-4 text-foreground"
                  required
                />
              </div>
              <button 
                type="submit" 
                className="w-full chess-btn"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Bottom bar */}
      <div className="border-t border-chess-gold/10 bg-chess-dark py-6">
        <div className="chess-container flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Elite Minds Chess Club. All rights reserved.
          </div>
          
          <div className="flex space-x-6 text-sm">
            <Link to="/terms" className="text-muted-foreground hover:text-chess-gold transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="text-muted-foreground hover:text-chess-gold transition-colors">
              Privacy Policy
            </Link>
            <Link to="/sitemap" className="text-muted-foreground hover:text-chess-gold transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
