import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import { Play, ShoppingBag, ArrowRight, ChevronDown } from 'lucide-react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)

  const heroSlides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&q=80',
      title: 'When Life Gives You Lemons, Trade Them For Coffee!!',
      subtitle: 'Shake up your taste buds with a chocolate delight. Chill out with our chocolicious shakes. Pure cocoa goodness in every sip.',
      badge: 'New Arrival',
      productImage: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1920&q=80',
      title: 'Premium Coffee Shop Experience',
      subtitle: 'Step into our cozy coffee shop and discover the perfect atmosphere for your daily caffeine fix.',
      badge: 'Bestseller',
      productImage: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=1920&q=80',
      title: 'Finest Coffee Beans from Around the World',
      subtitle: 'Experience the rich aroma and bold flavors of our carefully selected premium coffee beans.',
      badge: 'Premium',
      productImage: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1509785307050-d4066910ec1e?w=1920&q=80',
      title: 'Artisan Latte Art Perfection',
      subtitle: 'Watch our skilled baristas create beautiful latte art masterpieces in every cup.',
      badge: 'Popular',
      productImage: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&q=80',
      title: 'Fresh Brewed Excellence Daily',
      subtitle: 'Experience the finest selection of ethically sourced coffee beans roasted to perfection.',
      badge: 'Fresh',
      productImage: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&q=80'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=1920&q=80',
      title: 'Handcrafted Beverages Made with Love',
      subtitle: 'Every cup is carefully crafted by our expert baristas using premium ingredients.',
      badge: 'Signature',
      productImage: 'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?w=800&q=80'
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1920&q=80',
      title: 'Coffee Culture at Its Finest',
      subtitle: 'Join our community of coffee enthusiasts and discover your new favorite blend.',
      badge: 'Community',
      productImage: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=800&q=80'
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1920&q=80',
      title: 'Cozy Moments, Perfect Coffee',
      subtitle: 'Create unforgettable moments with our signature blends and artisan pastries.',
      badge: 'Limited Edition',
      productImage: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80'
    }
  ]

  return (
    <section className="relative overflow-hidden min-h-screen">
      {/* Background Slider */}
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={1500}
        loop={true}
        pagination={{
          clickable: true,
          bulletClass: 'hero-pagination-bullet',
          bulletActiveClass: 'hero-pagination-bullet-active',
        }}
        onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
        className="absolute inset-0 w-full h-full"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('${slide.image}')` }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Gradient Overlay - Enhanced for mobile */}
      <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/90 via-black/80 to-black/70 md:from-black/80 md:via-black/60 md:to-black/30 z-10" />

      {/* Content */}
      <div className="relative z-20 w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-4 sm:space-y-6 text-white text-center md:text-left">
              {/* Badge */}
              <div 
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-amber-500/20 backdrop-blur-sm rounded-full text-amber-300 text-xs sm:text-sm font-medium border border-amber-500/30 animate-fade-in"
                key={`badge-${activeSlide}`}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                </span>
                {heroSlides[activeSlide].badge}
              </div>

              {/* Title with Animation */}
              <h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight animate-slide-up"
                key={`title-${activeSlide}`}
              >
                {heroSlides[activeSlide].title}
              </h1>

              {/* Subtitle */}
              <p 
                className="text-base sm:text-lg md:text-xl text-gray-200 animate-slide-up animation-delay-200 max-w-2xl mx-auto md:mx-0"
                key={`subtitle-${activeSlide}`}
              >
                {heroSlides[activeSlide].subtitle}
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-slide-up animation-delay-400 justify-center md:justify-start">
                <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                  <span>Get Promo</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <Link 
                  to="/shop" 
                  className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-full font-medium transition-all duration-300 border-2 border-white/30 flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>View Menu</span>
                </Link>
              </div>

              {/* Features */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 pt-4 animate-slide-up animation-delay-600 justify-center md:justify-start">
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm sm:text-base font-medium">4.9/5 Rating</div>
                    <div className="text-xs text-gray-300">50K+ Reviews</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm sm:text-base font-medium">Fast Delivery</div>
                    <div className="text-xs text-gray-300">30 min or Free</div>
                  </div>
                </div>
              </div>

              {/* Decorative Heart Line */}
              <div className="flex items-center gap-4 pt-6 sm:pt-8 animate-slide-up animation-delay-800">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/30" />
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-red-500 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/30" />
              </div>
            </div>

            {/* Hero Product Image - Hidden on mobile, visible on md+ */}
            <div className="relative hidden md:block">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-300/30 to-red-500/30 rounded-full blur-3xl animate-pulse" />
              
              {/* Product Image with Animation */}
              <div 
                className="relative flex justify-center items-center animate-float"
                key={`product-${activeSlide}`}
              >
                <img
                  src={heroSlides[activeSlide].productImage}
                  alt="Coffee drink"
                  className="w-full max-w-md drop-shadow-2xl rounded-3xl transform hover:scale-105 transition-transform duration-500"
                />
                

              </div>
            </div>

            {/* Mobile Product Image - Only visible on mobile */}
            <div className="relative block md:hidden mt-8" key={`mobile-product-${activeSlide}`}>
              <div className="relative flex justify-center items-center">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-300/20 to-red-500/20 rounded-full blur-2xl animate-pulse" />
                <img
                  src={heroSlides[activeSlide].productImage}
                  alt="Coffee drink"
                  className="relative w-full max-w-xs drop-shadow-2xl rounded-3xl animate-fade-in"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
      </div>

      {/* Custom Pagination Styles */}
      <style jsx>{`
        .hero-pagination-bullet {
          width: 10px;
          height: 10px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          margin: 0 4px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .hero-pagination-bullet-active {
          background: rgba(251, 191, 36, 1);
          width: 24px;
          border-radius: 6px;
        }

        .swiper-pagination {
          bottom: 24px !important;
          z-index: 30;
        }

        /* Mobile optimizations */
        @media (min-width: 640px) {
          .hero-pagination-bullet {
            width: 12px;
            height: 12px;
            margin: 0 6px;
          }
          
          .hero-pagination-bullet-active {
            width: 32px;
          }

          .swiper-pagination {
            bottom: 40px !important;
          }
        }
      `}</style>
    </section>
  )
}
