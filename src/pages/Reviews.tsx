
import React from 'react';
import { Star, User, Quote } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Michael Johnson",
      avatar: null,
      date: "March 15, 2025",
      rating: 5,
      text: "I had an issue with my brakes and used CarFixPro to find a workshop. The booking process was super easy, and the mechanics at AutoFix Masters did an excellent job. My car is now running perfectly. Highly recommend!"
    },
    {
      id: 2,
      name: "Sarah Williams",
      avatar: null,
      date: "February 28, 2025",
      rating: 4,
      text: "EuroTech Garage was fantastic with my BMW. They diagnosed the issue quickly and had my car fixed the same day. The only reason for 4 stars instead of 5 is that the final price was slightly higher than the initial quote."
    },
    {
      id: 3,
      name: "David Chen",
      avatar: null,
      date: "February 12, 2025",
      rating: 5,
      text: "Precision Auto Care went above and beyond to fix my Audi. They explained everything clearly, finished the repair ahead of schedule, and the price was exactly as quoted. The entire experience was stress-free!"
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      avatar: null,
      date: "January 25, 2025",
      rating: 5,
      text: "I booked an oil change through CarFixPro and was impressed with how smooth the whole process was. The workshop was ready for me when I arrived, and the service was completed in just 45 minutes. Will definitely use again!"
    },
    {
      id: 5,
      name: "Thomas Wright",
      avatar: null,
      date: "January 18, 2025",
      rating: 4,
      text: "TurboTech Auto Shop did great work on my Mustang. They really know their stuff when it comes to performance vehicles. The only small issue was that they were running a bit behind schedule, but the quality of work made up for it."
    },
    {
      id: 6,
      name: "Jessica Kim",
      avatar: null,
      date: "January 5, 2025",
      rating: 5,
      text: "As someone who knows very little about cars, I appreciated how City Motors Workshop took the time to explain everything to me. They didn't try to upsell me on unnecessary services, and my Honda runs better than ever now!"
    },
    {
      id: 7,
      name: "Robert Miller",
      avatar: null,
      date: "December 20, 2024",
      rating: 5,
      text: "Expert Mechanics Inc. fixed an electrical issue that two other shops couldn't diagnose. Their attention to detail and expertise is impressive. The booking through CarFixPro was simple and I received confirmation within minutes."
    },
    {
      id: 8,
      name: "Lisa Thompson",
      avatar: null,
      date: "December 10, 2024",
      rating: 4,
      text: "I've used CarFixPro multiple times now, and I'm always satisfied with the service. The app makes it easy to find available appointments, and I like being able to see workshop ratings before booking."
    }
  ];

  // Calculate overall stats
  const averageRating = (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1);
  const fiveStarCount = reviews.filter(review => review.rating === 5).length;
  const fiveStarPercentage = Math.round((fiveStarCount / reviews.length) * 100);

  return (
    <div className="py-12 md:py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Customer Reviews</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            See what our customers are saying about their repair experiences
          </p>
        </div>
        
        {/* Stats Overview */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">{averageRating}</div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className={`w-6 h-6 ${i < Math.round(Number(averageRating)) 
                      ? 'text-yellow-500 fill-yellow-500' 
                      : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <p className="text-gray-600">Average Rating</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">{reviews.length}</div>
              <p className="text-gray-600">Verified Reviews</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">{fiveStarPercentage}%</div>
              <p className="text-gray-600">5-Star Reviews</p>
            </div>
          </div>
        </div>
        
        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow relative">
              <Quote className="absolute top-4 right-4 text-gray-200 w-10 h-10" />
              
              <div className="flex items-center mb-4">
                {review.avatar ? (
                  <img 
                    src={review.avatar} 
                    alt={review.name} 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                    <User className="w-6 h-6 text-gray-500" />
                  </div>
                )}
                <div>
                  <h3 className="font-bold text-gray-900">{review.name}</h3>
                  <p className="text-gray-500 text-sm">{review.date}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className={`w-5 h-5 ${i < review.rating 
                      ? 'text-yellow-500 fill-yellow-500' 
                      : 'text-gray-300'}`}
                  />
                ))}
              </div>
              
              <p className="text-gray-700">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
