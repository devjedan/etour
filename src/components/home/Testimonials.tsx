import { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  text: string;
  tour: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Aarav Sharma',
    location: 'Delhi, India',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 5,
    text: 'Our Swiss Alps trip was absolutely magical! E-Tour handled everything perfectly from accommodations to local guides. We got to experience the breathtaking landscapes without any hassle. Highly recommend!',
    tour: 'Swiss Alps Adventure',
  },
  {
    id: 2,
    name: 'Sanya Patel',
    location: 'Mumbai, India',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 5,
    text: 'The Kerala backwaters cruise was a serene experience I\'ll never forget. Watching the sunset from our houseboat while enjoying delicious local cuisine was incredible. E-Tour\'s attention to detail made our trip perfect.',
    tour: 'Kerala Backwaters Cruise',
  },
  {
    id: 3,
    name: 'Rahul Verma',
    location: 'Bangalore, India',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4,
    text: 'Golden Triangle tour was an amazing cultural experience. The Taj Mahal at sunrise, the majestic forts of Jaipur, and Delhi\'s vibrant markets were all highlights. Our guide was knowledgeable and accommodating.',
    tour: 'Golden Triangle Tour',
  },
  {
    id: 4,
    name: 'Priya Singh',
    location: 'Hyderabad, India',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 5,
    text: 'Bali was a dream come true! From the beautiful beaches to the cultural ceremonies, everything was perfect. E-Tour arranged special access to a traditional village ceremony which was the highlight of our trip.',
    tour: 'Bali Retreat Package',
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-primary-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Travelers Say</h2>
          <p className="text-lg text-primary-200 max-w-3xl mx-auto">
            Authentic reviews from travelers who have experienced our tours and services.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className={`transition-transform duration-500 ${isAnimating ? 'opacity-50' : 'opacity-100'}`}
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              <div className="flex">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0">
                    <div className="bg-primary-800/50 backdrop-blur-sm p-8 md:p-10 rounded-2xl">
                      <div className="flex items-center mb-6">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h4 className="text-xl font-semibold">{testimonial.name}</h4>
                          <p className="text-primary-300">{testimonial.location}</p>
                          <div className="flex mt-1">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(testimonial.rating) ? 'text-yellow-400' : 'text-gray-600'
                                }`}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>

                      <svg
                        className="text-primary-500/30 w-12 h-12 absolute top-8 right-8"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>

                      <blockquote className="text-lg md:text-xl leading-relaxed mb-6 relative z-10">
                        {testimonial.text}
                      </blockquote>

                      <p className="text-primary-300 font-medium">Tour: {testimonial.tour}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-white text-primary-900 rounded-full p-3 shadow-lg hover:bg-primary-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-white text-primary-900 rounded-full p-3 shadow-lg hover:bg-primary-50 transition-colors"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`mx-1 w-3 h-3 rounded-full ${
                activeIndex === index ? 'bg-white' : 'bg-primary-700'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;