
import React, { useState, useEffect } from 'react';

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
      text: "Yabba Dabba Doo! Best shopping experience in all of Bedrock! My wife Wilma loves everything we bought here.",
      location: "Bedrock, Stone County",
      rating: 5
    },
    {
      id: 2,
      name: "Barney Rubble",
      text: "Hey Fred, these guys rock! Got my new club here and it's the best I've ever swung. Highly recommend!",
      location: "Bedrock Heights",
      rating: 5
    },
    {
      id: 3,
      name: "Wilma Flintstone",
      text: "The cave painting kit is absolutely wonderful! My artistic side has never been happier. Fast delivery too!",
      location: "Bedrock, Stone County",
      rating: 5
    },
    {
      id: 4,
      name: "Betty Rubble",
      text: "Love the prehistoric fashion collection! Finally found clothes that fit my Stone Age lifestyle perfectly.",
      location: "Bedrock Heights",
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
    <section className="py-20 bg-gradient-to-b from-stone-200 to-amber-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-stone-800 mb-6">
            🗣️ WHAT BEDROCK SAYS 🗣️
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Hear from our satisfied Stone Age customers across Bedrock!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border-4 border-stone-400 relative overflow-hidden">
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
              <blockquote className="text-2xl md:text-3xl text-stone-700 font-semibold mb-8 leading-relaxed animate-fade-in">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              {/* Customer Info */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-orange-600 mb-2">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-stone-600">
                  {testimonials[currentTestimonial].location}
                </p>
              </div>

              {/* Navigation */}
              <div className="flex justify-center items-center space-x-6">
                <button 
                  onClick={prevTestimonial}
                  className="bg-orange-600 hover:bg-orange-700 text-white p-3 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300"
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
                        index === currentTestimonial ? 'bg-orange-600 scale-125' : 'bg-stone-400'
                      }`}
                    />
                  ))}
                </div>

                <button 
                  onClick={nextTestimonial}
                  className="bg-orange-600 hover:bg-orange-700 text-white p-3 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300"
                >
                  ➡️
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-12">
          <div className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full shadow-xl border-4 border-yellow-400">
            <span className="text-lg font-bold">🏆 Over 10,000 Happy Cavemen! 🏆</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
