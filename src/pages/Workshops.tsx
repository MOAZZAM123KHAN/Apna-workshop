
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Star, Search, MapPin, Phone } from 'lucide-react';

const Workshops = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const workshopsData = [
    {
      id: 1,
      name: "AutoFix Masters",
      location: "123 Repair Road, Downtown",
      phone: "(123) 456-7890",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=500&h=300&fit=crop",
      specialties: ["European Cars", "Oil Change", "Brake Repair"]
    },
    {
      id: 2,
      name: "EuroTech Garage",
      location: "456 Mechanic Avenue, West End",
      phone: "(123) 456-7891",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=500&h=300&fit=crop",
      specialties: ["European Cars", "Engine Repair", "Diagnostics"]
    },
    {
      id: 3,
      name: "Precision Auto Care",
      location: "789 Service Lane, North Side",
      phone: "(123) 456-7892",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=500&h=300&fit=crop",
      specialties: ["Japanese Cars", "Electrical Systems", "Transmission"]
    },
    {
      id: 4,
      name: "TurboTech Auto Shop",
      location: "321 Turbo Street, East Side",
      phone: "(123) 456-7893",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=500&h=300&fit=crop",
      specialties: ["Sports Cars", "Performance Tuning", "Custom Work"]
    },
    {
      id: 5,
      name: "City Motors Workshop",
      location: "555 Central Avenue, Midtown",
      phone: "(123) 456-7894",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=500&h=300&fit=crop",
      specialties: ["All Makes", "Wheel Alignment", "AC Service"]
    },
    {
      id: 6,
      name: "Expert Mechanics Inc",
      location: "888 Expertise Way, South End",
      phone: "(123) 456-7895",
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=500&h=300&fit=crop",
      specialties: ["Domestic Cars", "Oil Change", "Brake Service"]
    }
  ];
  
  const filteredWorkshops = workshopsData.filter(workshop => 
    workshop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    workshop.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    workshop.specialties.some(specialty => 
      specialty.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="py-12 md:py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Find Trusted Workshops</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Browse our network of certified workshops to find the perfect match for your car repair needs
          </p>
        </div>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search by name, location or service..."
              className="pl-10 py-6 text-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        {/* Workshop Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWorkshops.map((workshop) => (
            <div key={workshop.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img 
                src={workshop.image} 
                alt={workshop.name} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{workshop.name}</h3>
                
                <div className="flex items-start mb-3">
                  <MapPin className="w-5 h-5 text-gray-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-gray-600">{workshop.location}</p>
                </div>
                
                <div className="flex items-center mb-3">
                  <Phone className="w-5 h-5 text-gray-500 mr-2 flex-shrink-0" />
                  <p className="text-gray-600">{workshop.phone}</p>
                </div>
                
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        className={`w-5 h-5 ${i < Math.floor(workshop.rating) 
                          ? 'text-yellow-500 fill-yellow-500' 
                          : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-700 font-medium">{workshop.rating}</span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-5">
                  {workshop.specialties.map((specialty, index) => (
                    <span 
                      key={index}
                      className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Link to={`/workshops/${workshop.id}`} className="flex-1">
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/5">
                      View Details
                    </Button>
                  </Link>
                  <Link to="/book-repair" className="flex-1">
                    <Button className="w-full">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Empty State */}
        {filteredWorkshops.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold mb-2">No workshops found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search or browse all workshops</p>
            <Button onClick={() => setSearchTerm('')}>
              View All Workshops
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Workshops;
