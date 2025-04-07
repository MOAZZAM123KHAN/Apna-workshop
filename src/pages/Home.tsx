
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, Shield, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Home = () => {
  const workshops = [
    {
      id: 1,
      name: "AutoFix Masters",
      location: "Downtown, Auto City",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=500&h=300&fit=crop"
    },
    {
      id: 2,
      name: "EuroTech Garage",
      location: "West End, Auto City",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=500&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Precision Auto Care",
      location: "North Side, Auto City",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=500&h=300&fit=crop"
    }
  ];
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Expert Car Repairs at Your Fingertips
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Book trusted mechanics, track your repair status, and get back on the road faster with CarFixPro
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/book-repair">
                <Button className="btn-accent text-lg font-semibold py-6 px-8">
                  Book Repair Now
                </Button>
              </Link>
              <Link to="/workshops">
                <Button className="btn-secondary bg-white/10 border-white/30 text-white text-lg font-semibold py-6 px-8">
                  Find Workshops
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why Choose <span className="text-primary">APNA</span>
            <span className="text-accent">WORKSHOP</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Instant Repair Service</h3>
              <p className="text-gray-600">
                Book repairs instantly with our network of qualified mechanics. Get quick confirmations and same-day service.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Trusted Workshops</h3>
              <p className="text-gray-600">
                All our partner workshops are vetted and certified. Read reviews from real customers before booking.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <CreditCard className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Affordable Pricing</h3>
              <p className="text-gray-600">
                Transparent pricing with no hidden fees. Compare rates across workshops to find the best deal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Workshops Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-0">
              Top-Rated Workshops
            </h2>
            <Link to="/workshops">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                View All Workshops
              </Button>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {workshops.map((workshop) => (
              <div key={workshop.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img 
                  src={workshop.image} 
                  alt={workshop.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{workshop.name}</h3>
                  <p className="text-gray-600 mb-3">{workshop.location}</p>
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to get your car fixed?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have trusted APNA WORKSHOP for their vehicle repairs
          </p>
          <Link to="/book-repair">
            
            <Button className="btn-accent bg-[#F87116] text-lg font-semibold py-6 px-8 text-white"> Book Repair Now </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
