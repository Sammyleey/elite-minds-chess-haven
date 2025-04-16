
import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Trophy, ChevronRight, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';

const Events = () => {
  const [filter, setFilter] = useState('all');
  
  // Mock event data
  const events = [
    {
      id: 1,
      title: "Weekend Tournament",
      date: "May 15, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Elite Minds HQ",
      type: "tournament",
      participants: 32,
      image: "https://images.unsplash.com/photo-1580541832626-2a7131ee809f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      registrationFee: "$25.00",
      featured: true
    },
    {
      id: 2,
      title: "Grandmaster Lecture Series",
      date: "May 20, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Virtual Event",
      type: "workshop",
      participants: 100,
      image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      registrationFee: "$15.00"
    },
    {
      id: 3,
      title: "Chess Strategy Workshop",
      date: "June 5, 2025",
      time: "5:00 PM - 7:00 PM",
      location: "Elite Minds HQ",
      type: "workshop",
      participants: 20,
      image: "https://images.unsplash.com/photo-1637249915236-794e907edc64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      registrationFee: "$10.00"
    },
    {
      id: 4,
      title: "Monthly Rapid Chess Challenge",
      date: "June 12, 2025",
      time: "1:00 PM - 5:00 PM",
      location: "Elite Minds HQ",
      type: "tournament",
      participants: 48,
      image: "https://images.unsplash.com/photo-1604948501466-4e9c339b9c24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      registrationFee: "$20.00"
    },
    {
      id: 5,
      title: "Chess & Wine Social",
      date: "June 18, 2025",
      time: "7:00 PM - 10:00 PM",
      location: "The Bishop's Cellar",
      type: "social",
      participants: 30,
      image: "https://images.unsplash.com/photo-1630395812805-17e77594cefc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      registrationFee: "$30.00",
      featured: true
    },
    {
      id: 6,
      title: "Youth Chess Camp",
      date: "July 10-14, 2025",
      time: "9:00 AM - 3:00 PM",
      location: "Elite Minds HQ",
      type: "workshop",
      participants: 15,
      image: "https://images.unsplash.com/photo-1560421741-50d051ed1820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      registrationFee: "$150.00"
    }
  ];
  
  // Filter events based on selected type
  const filteredEvents = filter === 'all' 
    ? events 
    : events.filter(event => event.type === filter);
  
  // Get featured events for the special section
  const featuredEvents = events.filter(event => event.featured);
  
  return (
    <section className="chess-section py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute -z-10 top-1/4 left-0 w-1/3 h-1/3 bg-chess-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute -z-10 bottom-1/4 right-0 w-1/3 h-1/3 bg-chess-emerald/5 rounded-full blur-3xl"></div>
      
      <div className="chess-container">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="chess-heading mb-6">
            <span className="gold-gradient">Upcoming</span>{' '}
            <span className="emerald-gradient">Events</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Join us for tournaments, workshops, lectures, and social gatherings designed to improve your chess skills and connect with fellow enthusiasts.
          </p>
        </div>
        
        {/* Featured events section */}
        {featuredEvents.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Trophy className="h-6 w-6 text-chess-gold mr-2" />
              <span>Featured Events</span>
            </h3>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredEvents.map(event => (
                <div 
                  key={event.id}
                  className="group chess-card overflow-hidden relative"
                >
                  <div className="absolute top-0 right-0 z-10 m-4">
                    <div className="bg-chess-gold text-chess-dark px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider shadow-md">
                      Featured
                    </div>
                  </div>
                  
                  <div className="relative h-64 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-center bg-cover transform transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${event.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-chess-dark to-transparent" />
                    
                    <div className="absolute bottom-0 left-0 p-6 w-full">
                      <div className={`inline-block px-3 py-1 mb-4 rounded-full text-xs font-semibold
                        ${event.type === 'tournament' ? 'bg-chess-gold text-chess-dark' : 
                          event.type === 'workshop' ? 'bg-chess-emerald text-chess-dark' : 
                            'bg-chess-accent text-chess-dark'}`
                      }>
                        {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                      </div>
                      <h3 className="text-2xl font-bold text-white">{event.title}</h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex flex-wrap gap-4 text-sm mb-6">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-chess-gold" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-chess-emerald" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-chess-accent" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>{event.participants} spots</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-xl font-bold">{event.registrationFee}</div>
                      <Link 
                        to={`/events/${event.id}`} 
                        className="chess-btn"
                      >
                        Register Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Events filter and list */}
        <div>
          <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
            <h3 className="text-2xl font-bold">All Events</h3>
            
            <div className="flex items-center gap-2">
              <Select
                defaultValue="all"
                onValueChange={setFilter}
              >
                <SelectTrigger className="w-[180px]">
                  <div className="flex items-center">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Filter events" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Events</SelectItem>
                  <SelectItem value="tournament">Tournaments</SelectItem>
                  <SelectItem value="workshop">Workshops</SelectItem>
                  <SelectItem value="social">Social Events</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <Tabs defaultValue="list" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="list">List View</TabsTrigger>
              <TabsTrigger value="grid">Grid View</TabsTrigger>
            </TabsList>
            
            <TabsContent value="list" className="space-y-4">
              {filteredEvents.map(event => (
                <div 
                  key={event.id}
                  className="chess-card overflow-hidden flex flex-col md:flex-row"
                >
                  <div className="w-full md:w-1/4 h-48 md:h-auto relative">
                    <div 
                      className="absolute inset-0 bg-center bg-cover"
                      style={{ backgroundImage: `url(${event.image})` }}
                    />
                  </div>
                  
                  <div className="p-6 flex-grow">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                      <div>
                        <div className={`inline-block px-3 py-1 mb-2 rounded-full text-xs font-semibold
                          ${event.type === 'tournament' ? 'bg-chess-gold text-chess-dark' : 
                            event.type === 'workshop' ? 'bg-chess-emerald text-chess-dark' : 
                              'bg-chess-accent text-chess-dark'}`
                        }>
                          {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                        </div>
                        <h3 className="text-xl font-bold">{event.title}</h3>
                      </div>
                      <div className="text-xl font-bold">{event.registrationFee}</div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm mb-6">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-chess-gold" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-chess-emerald" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-chess-accent" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>{event.participants} spots</span>
                      </div>
                    </div>
                    
                    <Link 
                      to={`/events/${event.id}`} 
                      className="inline-flex items-center text-chess-gold hover:underline"
                    >
                      View Details
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                  
                  <div className="p-6 md:w-1/6 bg-card flex items-end justify-center md:justify-end md:items-center border-t md:border-t-0 md:border-l border-border">
                    <Link 
                      to={`/events/${event.id}`} 
                      className="chess-btn w-full md:w-auto whitespace-nowrap"
                    >
                      Register
                    </Link>
                  </div>
                </div>
              ))}
            </TabsContent>
            
            <TabsContent value="grid" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map(event => (
                <div 
                  key={event.id}
                  className="chess-card overflow-hidden flex flex-col"
                >
                  <div className="relative h-48">
                    <div 
                      className="absolute inset-0 bg-center bg-cover"
                      style={{ backgroundImage: `url(${event.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-chess-dark to-transparent" />
                    
                    <div className="absolute top-0 left-0 p-4">
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold
                        ${event.type === 'tournament' ? 'bg-chess-gold text-chess-dark' : 
                          event.type === 'workshop' ? 'bg-chess-emerald text-chess-dark' : 
                            'bg-chess-accent text-chess-dark'}`
                      }>
                        {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-bold mb-4">{event.title}</h3>
                    
                    <div className="space-y-2 text-sm mb-6">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-chess-gold" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-chess-emerald" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-chess-accent" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-card border-t border-border mt-auto">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-lg font-bold">{event.registrationFee}</div>
                      <div className="flex items-center text-sm">
                        <Users className="h-4 w-4 mr-1 text-muted-foreground" />
                        <span>{event.participants} spots</span>
                      </div>
                    </div>
                    
                    <Link 
                      to={`/events/${event.id}`} 
                      className="chess-btn w-full"
                    >
                      Register
                    </Link>
                  </div>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </div>
        
        {/* View all events button */}
        <div className="mt-12 text-center">
          <Link to="/events" className="chess-btn-secondary">
            View All Events
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Events;
