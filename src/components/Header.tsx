
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const navItems = [
    { 
      name: 'Learn', 
      dropdown: true, 
      id: 'learn',
      items: [
        { name: 'Tutorials', path: '/tutorials' },
        { name: 'Resources', path: '/resources' },
        { name: 'Chess Benefits', path: '/benefits' }
      ]
    },
    { 
      name: 'Play', 
      dropdown: true, 
      id: 'play',
      items: [
        { name: 'Online Game', path: '/play' },
        { name: 'Tournaments', path: '/tournaments' },
        { name: 'Challenges', path: '/challenges' }
      ]
    },
    { name: 'Membership', path: '/membership' },
    { name: 'Events', path: '/events' },
    { name: 'About Us', path: '/about' }
  ];

  return (
    <header className="py-4 border-b border-chess-gold/20 backdrop-blur-md bg-background/80 fixed w-full top-0 z-50">
      <div className="chess-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 bg-gold-gradient rounded-full opacity-20 animate-glow"></div>
              <div className="absolute inset-1 bg-chess-dark rounded-full flex items-center justify-center">
                <span className="text-chess-gold font-bold text-2xl">♞</span>
              </div>
            </div>
            <span className="text-xl font-bold tracking-tight">
              <span className="gold-gradient">Elite Minds</span>
              <span className="text-white"> Chess</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.dropdown ? (
                <div key={item.id} className="relative group">
                  <button 
                    onClick={() => toggleDropdown(item.id)}
                    className="flex items-center space-x-1 py-2 text-foreground/90 hover:text-chess-gold transition-colors"
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {activeDropdown === item.id && (
                    <div className="absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg bg-card border border-border overflow-hidden">
                      <div className="py-1">
                        {item.items?.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block px-4 py-2 text-sm text-foreground/90 hover:bg-muted transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path as string}
                  className="py-2 text-foreground/90 hover:text-chess-gold transition-colors"
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>

          {/* Login/Join button */}
          <div className="hidden md:block">
            <Link 
              to="/signup" 
              className="chess-btn"
            >
              Join the Club
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-md hover:bg-muted transition-colors"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden w-full bg-card border-t border-border py-4 mt-4">
          <div className="chess-container">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                item.dropdown ? (
                  <div key={item.id} className="space-y-2">
                    <button 
                      onClick={() => toggleDropdown(item.id)}
                      className="flex items-center justify-between w-full py-2 text-foreground/90 hover:text-chess-gold transition-colors"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    {activeDropdown === item.id && (
                      <div className="pl-4 border-l-2 border-chess-gold/20 space-y-2">
                        {item.items?.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block py-2 text-sm text-foreground/90 hover:text-chess-gold transition-colors"
                            onClick={toggleMenu}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path as string}
                    className="block py-2 text-foreground/90 hover:text-chess-gold transition-colors"
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <Link 
                to="/signup" 
                className="chess-btn w-full justify-center mt-4"
                onClick={toggleMenu}
              >
                Join the Club
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
