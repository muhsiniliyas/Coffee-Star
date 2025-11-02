import { Link } from 'react-router-dom'
import { useState } from 'react'
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'
import CategoryButton from '../components/CategoryButton'
import { featuredProducts } from '../data/products'
import { 
  Coffee, 
  ShoppingBag, 
  Award, 
  Users, 
  Clock, 
  Heart,
  Star,
  TrendingUp,
  Gift,
  Truck,
  Shield,
  Zap,
  Wine,
  Leaf,
  Cookie
} from 'lucide-react'

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', icon: <Coffee />, label: 'All', emoji: '☕' },
    { id: 'coffee', icon: <Coffee />, label: 'Coffee', emoji: '☕' },
    { id: 'drinks', icon: <Wine />, label: 'Drinks', emoji: '🥤' },
    { id: 'tea', icon: <Leaf />, label: 'Tea', emoji: '🍵' },
    { id: 'bakery', icon: <Cookie />, label: 'Bakery', emoji: '🧁' }
  ]

  // Filter products based on active category
  const filteredProducts = activeCategory === 'all' 
    ? featuredProducts 
    : featuredProducts.filter(product => 
        product.category.toLowerCase() === activeCategory.toLowerCase()
      )

  const features = [
    {
      icon: <Coffee className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: 'Premium Quality',
      description: 'Sourced from the finest coffee farms worldwide'
    },
    {
      icon: <Truck className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: 'Fast Delivery',
      description: 'Free shipping on orders over $50'
    },
    {
      icon: <Shield className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: '100% Secure',
      description: 'Safe and secure payment processing'
    },
    {
      icon: <Award className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: 'Award Winning',
      description: 'Recognized for excellence in quality'
    }
  ]

  const stats = [
    { icon: <Users className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />, value: '50K+', label: 'Happy Customers' },
    { icon: <Coffee className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />, value: '100+', label: 'Coffee Varieties' },
    { icon: <Award className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />, value: '15+', label: 'Awards Won' },
    { icon: <Star className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />, value: '4.9', label: 'Average Rating' }
  ]

  const benefits = [
    { icon: <Gift className="w-5 h-5 sm:w-6 sm:h-6" />, text: 'Special Offers & Rewards' },
    { icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />, text: 'Quick Order Processing' },
    { icon: <Heart className="w-5 h-5 sm:w-6 sm:h-6" />, text: 'Handcrafted with Love' },
    { icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />, text: 'Always Fresh Beans' }
  ]

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <section className="bg-gradient-to-b from-amber-50 to-white dark:from-gray-800 dark:to-gray-900 py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 md:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="glass-effect rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex justify-center mb-2 sm:mb-3 md:mb-4 text-amber-600 dark:text-amber-400">
                  {stat.icon}
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories & Products Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8 sm:w-10 md:w-12 lg:w-16 bg-gradient-to-r from-transparent to-amber-600" />
            <Coffee className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-amber-600" />
            <div className="h-px w-8 sm:w-10 md:w-12 lg:w-16 bg-gradient-to-l from-transparent to-amber-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-3 sm:mb-4 px-4">
            Our Popular Picks
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
            Discover our handpicked selection of premium coffee and beverages
          </p>
        </div>

        {/* Category Filters - Now Working! */}
        <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 md:mb-12 flex-wrap px-2">
          {categories.map((category) => (
            <CategoryButton
              key={category.id}
              icon={category.emoji}
              label={category.label}
              active={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
            />
          ))}
        </div>

        {/* Product Count Indicator */}
        <div className="text-center mb-6">
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Showing <span className="font-semibold text-amber-600 dark:text-amber-400">{filteredProducts.length}</span> {filteredProducts.length === 1 ? 'product' : 'products'}
            {activeCategory !== 'all' && (
              <span> in <span className="font-semibold capitalize">{activeCategory}</span></span>
            )}
          </p>
        </div>

        {/* Featured Products Grid with Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
                <Coffee className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No Products Found</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                We couldn't find any products in this category.
              </p>
              <button
                onClick={() => setActiveCategory('all')}
                className="px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white rounded-full font-medium transition-all duration-300 shadow-lg"
              >
                View All Products
              </button>
            </div>
          )}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <Link 
            to="/shop" 
            className="inline-flex items-center gap-2 px-6 sm:px-7 md:px-8 lg:px-10 py-3 sm:py-3.5 md:py-4 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base md:text-lg"
          >
            <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            View All Products
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-b from-white to-amber-50 dark:from-gray-900 dark:to-gray-800 py-12 sm:py-14 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-3 sm:mb-4 px-4">
              Why Choose Coffee-Star?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
              Experience the difference with our commitment to quality and service
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group glass-effect rounded-2xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-7 md:p-8 lg:p-10 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 mb-4 sm:mb-5 md:mb-6 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 text-white group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Banner */}
      <section className="bg-gradient-to-r from-amber-600 to-amber-500 dark:from-amber-700 dark:to-amber-600 py-8 sm:py-9 md:py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 text-white justify-center sm:justify-start"
              >
                <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-white/20 flex items-center justify-center">
                  {benefit.icon}
                </div>
                <span className="font-medium text-sm sm:text-base md:text-lg">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 md:py-16 lg:py-20">
        <div 
          className="relative glass-effect rounded-2xl sm:rounded-2xl md:rounded-3xl overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('https://images.unsplash.com/photo-1511920170033-f8396924c348?w=1920&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="relative z-10 p-6 sm:p-8 md:p-12 lg:p-16 text-center">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 bg-amber-500/20 backdrop-blur-sm rounded-full text-amber-300 text-xs sm:text-sm md:text-base font-medium mb-4 sm:mb-5 md:mb-6">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 fill-current" />
              Join Our Community
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-display mb-3 sm:mb-4 md:mb-6 text-white px-4">
              Ready to Experience the Best Coffee?
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-6 sm:mb-7 md:mb-8 max-w-2xl mx-auto px-4">
              Join thousands of coffee lovers who start their day with Coffee-Star. Get exclusive offers and updates.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 justify-center items-stretch sm:items-center px-4 max-w-2xl mx-auto">
              <Link 
                to="/shop"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 md:px-8 lg:px-10 py-3 sm:py-3.5 md:py-4 bg-white text-amber-900 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm sm:text-base md:text-lg"
              >
                <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                Explore Our Menu
              </Link>
              
              <button className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 md:px-8 lg:px-10 py-3 sm:py-3.5 md:py-4 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 rounded-full font-medium transition-all duration-300 hover:bg-white/20 text-sm sm:text-base md:text-lg">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                Order Now
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-8 mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-7 md:pt-8 border-t border-white/20">
              <div className="flex items-center gap-2 text-white">
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 fill-current text-red-400" />
                <span className="text-xs sm:text-sm md:text-base">Loved by 50K+ customers</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 fill-current text-yellow-400" />
                <span className="text-xs sm:text-sm md:text-base">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-green-400" />
                <span className="text-xs sm:text-sm md:text-base">100% Secure</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-b from-amber-50 to-white dark:from-gray-800 dark:to-gray-900 py-12 sm:py-14 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 text-white mb-4 sm:mb-5 md:mb-6">
            <Gift className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10" />
          </div>
          
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-display mb-3 sm:mb-4 px-4">
            Get 10% Off Your First Order
          </h3>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 mb-6 sm:mb-7 md:mb-8 px-4">
            Subscribe to our newsletter for exclusive deals and coffee tips
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto px-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 sm:px-6 md:px-7 py-3 sm:py-3.5 md:py-4 rounded-full glass-effect focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm sm:text-base md:text-lg"
            />
            <button 
              type="submit"
              className="px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap text-sm sm:text-base md:text-lg"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
