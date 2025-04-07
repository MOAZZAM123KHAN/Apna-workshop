
import React, { useState } from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const BookRepair = () => {
  // Form state
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [carModel, setCarModel] = useState('');
  const [issue, setIssue] = useState('');
  const [workshop, setWorkshop] = useState('');
  const [date, setDate] = useState<Date>();
  
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!name || !phone || !carModel || !issue || !workshop || !date) {
      toast({
        title: "Error",
        description: "Please fill in all the fields",
        variant: "destructive",
      });
      return;
    }
    
    // Success toast - in a real app, you would submit the form data to a server
    toast({
      title: "Success!",
      description: "Your repair booking has been submitted. We'll contact you shortly.",
    });
    
    // Reset form
    setName('');
    setPhone('');
    setCarModel('');
    setIssue('');
    setWorkshop('');
    setDate(undefined);
  };
  
  const workshops = [
    { id: "1", name: "AutoFix Masters" },
    { id: "2", name: "EuroTech Garage" },
    { id: "3", name: "Precision Auto Care" },
    { id: "4", name: "TurboTech Auto Shop" },
    { id: "5", name: "City Motors Workshop" },
  ];

  return (
    <div className="py-12 md:py-20 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Book Your Car Repair</h1>
            <p className="text-gray-600 text-lg">
              Fill in the details below and we'll connect you with the best workshop for your needs
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="input-field"
                  />
                </div>
                
                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(123) 456-7890"
                    className="input-field"
                  />
                </div>
                
                {/* Car Model */}
                <div>
                  <label htmlFor="carModel" className="block text-sm font-medium text-gray-700 mb-2">
                    Car Model
                  </label>
                  <Input
                    id="carModel"
                    value={carModel}
                    onChange={(e) => setCarModel(e.target.value)}
                    placeholder="Toyota Camry 2023"
                    className="input-field"
                  />
                </div>
                
                {/* Workshop */}
                <div>
                  <label htmlFor="workshop" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Workshop
                  </label>
                  <Select value={workshop} onValueChange={setWorkshop}>
                    <SelectTrigger id="workshop" className="input-field">
                      <SelectValue placeholder="Select a workshop" />
                    </SelectTrigger>
                    <SelectContent>
                      {workshops.map((w) => (
                        <SelectItem key={w.id} value={w.id}>
                          {w.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                {/* Date */}
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                    Appointment Date
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        id="date"
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal border border-gray-300 px-4 py-3 h-[50px]",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 pointer-events-auto">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        disabled={(date) => date < new Date()}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                
                {/* Issue Description */}
                <div className="md:col-span-2">
                  <label htmlFor="issue" className="block text-sm font-medium text-gray-700 mb-2">
                    Issue Description
                  </label>
                  <Textarea
                    id="issue"
                    value={issue}
                    onChange={(e) => setIssue(e.target.value)}
                    placeholder="Please describe the issue with your car..."
                    className="input-field resize-none"
                    rows={4}
                  />
                </div>
              </div>
              
              <div className="mt-8">
                <Button type="submit" className="btn-accent w-full py-6 text-lg font-semibold">
                  Submit Booking
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookRepair;
