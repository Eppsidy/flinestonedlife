
import React, { useState, useEffect } from 'react';
import SpotlightCard from './ui/spotlight-card';

interface Testimonial {
  id: number;
  name: string;
  text: string;
  location: string;
  rating: number;
}

const TestimonialSlider: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Fred Flintstone",
      text: "Shit Slaps.",
      location: "Vaal",
      rating: 5
    },
    {
      id: 2,
      name: "Barney Rubble",
      text: "Never been that high",
      location: "Vaal",
      rating: 5
    },
    {
      id: 3,
      name: "Wilma Flintstone",
      text: "Yoh",
      location: "Vaal",
      rating: 5
    },
    {
      id: 4,
      name: "Betty Rubble",
      text: "Di gatta tsa quality",
      location: "Vaal",
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-2xl ${i < rating ? 'text-yellow-400' : 'text-gray-400'}`}>
        ⭐
      </span>
    ));
  };

  return (
    <section
  className="py-20 bg-cover bg-center"
  style={{
    backgroundImage: `url("/assets/testbg.jpeg")`
  }}
> 
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
             Flinstoner Reviews 
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Hear from our satisfied Stone Age customers across Flintstoned!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <SpotlightCard 
            className="bg-black shadow-2xl border-4 border-stone-400"
            spotlightColor="rgba(34, 197, 94, 0.3)"
          >
            {/* Stone texture background */}
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill-opacity='0.1'%3E%3Cpolygon fill='%23000' points='36,1 14,1 6,14 6,27 14,40 36,40 44,27 44,14'/%3E%3C/g%3E%3C/svg%3E")`
            }}></div>

            <div className="relative z-10 text-center">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-2xl md:text-3xl text-white font-semibold mb-8 leading-relaxed animate-fade-in">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              {/* Customer Info */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-green-200 mb-2">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-white">
                  {testimonials[currentTestimonial].location}
                </p>
              </div>

              {/* Navigation */}
              <div className="flex justify-center items-center space-x-6">
                <button 
                  onClick={prevTestimonial}
                  className="bg-white hover:bg-stone-700 text-white p-3 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300"
                >
                  ⬅️
                </button>

                {/* Dots */}
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial ? 'bg-black scale-125' : 'bg-stone-400'
                      }`}
                    />
                  ))}
                </div>

                <button 
                  onClick={nextTestimonial}
                  className="bg-black hover:bg-stone-700 text-white p-3 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300"
                >
                  ➡️
                </button>
              </div>
            </div>
          </SpotlightCard>
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-12">
          <div className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full shadow-xl border-4 border-yellow-400">
            <span className="text-lg font-bold">🏆 A lot of Happy Cavemen! 🏆</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
