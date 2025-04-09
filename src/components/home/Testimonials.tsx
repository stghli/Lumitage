
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    quote: "The quality of these beads is exceptional. I've received so many compliments on my waist beads. Will definitely be purchasing more!",
    name: "Sarah Johnson",
    location: "New York, USA",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg"
  },
  {
    id: 2,
    quote: "I bought a pair of men's sandals for my husband and he loves them. Great craftsmanship and very comfortable for daily wear.",
    name: "Michael Brown",
    location: "London, UK",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    quote: "The beaded bracelets are beautiful and exactly as described. The shipping was fast and the packaging was lovely.",
    name: "Emily Davis",
    location: "Toronto, Canada",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg"
  }
];

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary">What Our Customers Say</h2>
          <p className="text-gray-600 mt-2">Real testimonials from our happy customers</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-white rounded-xl shadow-md p-8 mb-8">
            <svg className="absolute text-primary opacity-10 w-16 h-16 -top-6 -left-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
            </svg>
            <div className="relative">
              <p className="text-gray-700 italic leading-relaxed mb-6">"{testimonials[activeIndex].quote}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonials[activeIndex].avatar} 
                  alt={testimonials[activeIndex].name} 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-secondary">{testimonials[activeIndex].name}</h4>
                  <p className="text-sm text-gray-500">{testimonials[activeIndex].location}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center space-x-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <div className="flex items-center space-x-2 mx-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-primary' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
