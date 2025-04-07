
import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const services = [
    {
      id: 1,
      name: "Oil Change",
      price: "99 Rs - 499 Rs",
      description: "Comprehensive oil change with filter replacement and fluid check.",
      timeEstimate: "30-60 minutes",
      commonServices: [
        "Oil and filter replacement",
        "Fluid level check",
        "Visual inspection",
        "Tire pressure check"
      ]
    },
    {
      id: 2,
      name: "Brake Service",
      price: "99 Rs - 499 Rs",
      description: "Complete brake pad replacement, inspection and rotor resurfacing if needed.",
      timeEstimate: "1-3 hours",
      commonServices: [
        "Brake pad replacement",
        "Brake fluid check and top-up",
        "Rotor inspection",
        "Caliper lubrication and adjustment"
      ]
    },
    {
      id: 3,
      name: "Wheel Alignment",
      price: "199 Rs - 499 Rs",
      description: "Precision wheel alignment to improve handling and extend tire life.",
      timeEstimate: "1-2 hours",
      commonServices: [
        "Four-wheel alignment",
        "Tire pressure adjustment",
        "Steering and suspension check",
        "Road test"
      ]
    },
    {
      id: 4,
      name: "Engine Diagnostics",
      price: "99 Rs- 499 Rs",
      description: "Comprehensive computer diagnostics to identify engine issues.",
      timeEstimate: "30-60 minutes",
      commonServices: [
        "Computer scanning",
        "Error code reading",
        "Performance testing",
        "Component testing"
      ]
    },
    {
      id: 5,
      name: "Battery Replacement",
      price: "99 Rs - 499 Rs",
      description: "Battery testing, replacement and electrical system check.",
      timeEstimate: "30-60 minutes",
      commonServices: [
        "Battery testing",
        "Battery replacement",
        "Charging system check",
        "Terminal cleaning"
      ]
    },
    {
      id: 6,
      name: "AC Service",
      price: "699 Rs - 1999 Rs",
      description: "Air conditioning system check, refrigerant recharge and leak detection.",
      timeEstimate: "1-2 hours",
      commonServices: [
        "System pressure check",
        "Refrigerant recharge",
        "Leak detection",
        "Performance test"
      ]
    },
    {
      id: 7,
      name: "Suspension Service",
      price: "699 Rs - 1999 Rs",
      description: "Suspension system check, alignment and maintenance for smooth ride and better handling.",
      timeEstimate: "1-2 hours",
      commonServices: [
        "System inspection",
        "Alignment check",
        "Shock absorber check",
        "Ball joint inspection",
        "Tie rod end inspection"
      ]
    },
    {
      id: 8,
      name: "Electric Fault Diagnosis and Repair",
      price: "99 Rs - 999 Rs",
      description: "Electric system check, diagnosis and repair for faulty wiring, battery or electrical components.",
      timeEstimate: "1-2 hours",
      commonServices: [
        "Battery check",
        "Alternator check",
        "Starter motor check",
        "Wiring inspection",
        "Fault code scanning"
      ]
    }
    
    
  ];

  return (
    <div className="py-12 md:py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Transparent Pricing</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We believe in complete transparency. Browse our service pricing below, 
            or contact us for a custom quote for your specific vehicle needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{service.name}</CardTitle>
                <CardDescription>Estimated time: {service.timeEstimate}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <p className="text-3xl font-bold text-primary mb-2">
                    {service.price}
                  </p>
                  <p className="text-gray-600 text-sm">Price varies by vehicle make and model</p>
                </div>
                <p className="text-gray-700 mb-6">{service.description}</p>
                <div className="space-y-2">
                  {service.commonServices.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 text-green-500">
                        <Check className="h-5 w-5" />
                      </div>
                      <p className="ml-3 text-gray-600">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Link to="/book-repair" className="w-full">
                  <Button className="w-full">Book Service</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-lg p-8 shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Need a Custom Quote?</h2>
          <p className="text-center text-gray-600 mb-8">
            We offer specialized services for all makes and models. Contact us for a personalized quote.
          </p>
          <div className="text-center">
            <Link to="/contact">
              <Button className="btn-primary px-8 py-6 text-lg font-medium">
                Request Custom Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
