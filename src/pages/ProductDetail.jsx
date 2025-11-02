import { useParams, useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'
import { useCart } from '../contexts/CartContext'
import { allProducts } from '../data/products'
import { 
  ShoppingCart, 
  Heart, 
  Star, 
  Minus, 
  Plus, 
  ArrowLeft,
  Shield,
  Truck,
  RotateCcw,
  Share2,
  Check
} from 'lucide-react'

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [isFavorite, setIsFavorite] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)
  const [isAdding, setIsAdding] = useState(false)

  // Find product by ID from ALL products
  const product = allProducts.find(p => p.id === parseInt(id))

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-amber-100 dark:bg-amber-900/30 mb-4">
            <ShoppingCart className="w-8 h-8 sm:w-10 sm:h-10 text-amber-600" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Product Not Found</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            The product you're looking for doesn't exist or has been removed.
          </p>
          <Link 
            to="/shop" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white rounded-full font-medium transition-all duration-300 shadow-lg"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  // Mock multiple images (using same image for demo)
  const productImages = [
    product.image,
    product.image,
    product.image,
    product.image
  ]

  // Get related products from the same category, excluding current product
  const relatedProducts = allProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 8) // Show 8 related products

  const handleAddToCart = () => {
    setIsAdding(true)
    // Add items to cart
    for (let i = 0; i < quantity; i++) {
      addToCart(product)
    }
    
    // Auto navigate to cart after 1 second
    setTimeout(() => {
      setIsAdding(false)
      navigate('/cart')
    }, 1000)
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: product.description,
          url: window.location.href
        })
      } catch (err) {
        console.log('Error sharing:', err)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard!')
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
      {/* Breadcrumb & Back Button */}
      <div className="flex items-center justify-between mb-6 sm:mb-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm sm:text-base">Back</span>
        </button>
        
        {/* Breadcrumb */}
        <div className="hidden sm:flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <Link to="/" className="hover:text-amber-600 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-amber-600 transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-amber-600 font-medium capitalize">{product.category}</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
        {/* Left Column - Images */}
        <div className="space-y-3 sm:space-y-4">
          {/* Main Image */}
          <div className="relative glass-effect rounded-2xl sm:rounded-3xl overflow-hidden aspect-square">
            <img
              src={productImages[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.badge && (
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 px-3 py-1 sm:px-4 sm:py-2 bg-amber-500 text-white text-xs sm:text-sm font-bold rounded-full shadow-lg">
                {product.badge}
              </div>
            )}
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 sm:p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:scale-110 active:scale-95 transition-transform"
            >
              <Heart className={`w-5 h-5 sm:w-6 sm:h-6 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
            </button>
          </div>

          {/* Thumbnail Images */}
          <div className="grid grid-cols-4 gap-2 sm:gap-3">
            {productImages.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative aspect-square rounded-lg sm:rounded-xl overflow-hidden transition-all ${
                  selectedImage === index
                    ? 'ring-2 ring-amber-500 scale-105'
                    : 'hover:scale-105 opacity-70 hover:opacity-100'
                }`}
              >
                <img src={img} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column - Details */}
        <div className="space-y-4 sm:space-y-6">
          {/* Category */}
          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-sm text-amber-600 dark:text-amber-400 font-medium uppercase tracking-wide">
              {product.category}
            </span>
            {product.badge && (
              <span className="px-2 py-0.5 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-semibold rounded-full">
                {product.badge}
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-4 h-4 sm:w-5 sm:h-5 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                />
              ))}
            </div>
            <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              4.8 <span className="text-gray-400">(245 reviews)</span>
            </span>
          </div>

          {/* Price */}
          <div className="flex flex-wrap items-baseline gap-2 sm:gap-4">
            <span className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-700 to-amber-600 bg-clip-text text-transparent">
              ₹{product.price}
            </span>
            <span className="text-base sm:text-lg text-gray-500 line-through">₹{(product.price * 1.3).toFixed(2)}</span>
            <span className="px-2 py-1 sm:px-3 sm:py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs sm:text-sm font-semibold">
              23% OFF
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
            {product.description}
          </p>

          {/* Quantity Selector */}
          <div>
            <label className="block text-sm sm:text-base font-medium mb-3">Quantity</label>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
              <div className="flex items-center glass-effect rounded-full px-3 sm:px-4 py-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={isAdding}
                  className="p-1.5 sm:p-2 hover:bg-amber-100 dark:hover:bg-amber-900/30 rounded-full transition-colors active:scale-95 disabled:opacity-50"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3 h-3 sm:w-4 sm:h-4" />
                </button>
                <span className="w-10 sm:w-12 text-center font-semibold text-base sm:text-lg">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  disabled={isAdding}
                  className="p-1.5 sm:p-2 hover:bg-amber-100 dark:hover:bg-amber-900/30 rounded-full transition-colors active:scale-95 disabled:opacity-50"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                </button>
              </div>
              <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                Total: <span className="font-bold text-amber-600 text-base sm:text-lg">₹{(product.price * quantity).toFixed(2)}</span>
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              onClick={handleAddToCart}
              disabled={isAdding}
              className={`flex-1 flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl text-base sm:text-lg disabled:opacity-75 disabled:cursor-not-allowed ${isAdding ? 'scale-95' : 'hover:scale-105'}`}
            >
              {isAdding ? (
                <>
                  <div className="animate-spin">
                    <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span>Going to Cart...</span>
                </>
              ) : (
                <>
                  <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span>Add to Cart</span>
                </>
              )}
            </button>
            <button
              onClick={handleShare}
              disabled={isAdding}
              className="px-5 sm:px-6 py-3 sm:py-4 glass-effect hover:shadow-lg rounded-full transition-all duration-300 active:scale-95 disabled:opacity-50"
              aria-label="Share product"
            >
              <Share2 className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="p-2 sm:p-3 rounded-full bg-green-100 dark:bg-green-900/30 flex-shrink-0">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <div className="font-semibold text-xs sm:text-sm">Secure Payment</div>
                <div className="text-xs text-gray-500">100% Protected</div>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="p-2 sm:p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 flex-shrink-0">
                <Truck className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <div className="font-semibold text-xs sm:text-sm">Free Shipping</div>
                <div className="text-xs text-gray-500">On orders ₹2500+</div>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="p-2 sm:p-3 rounded-full bg-amber-100 dark:bg-amber-900/30 flex-shrink-0">
                <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <div className="font-semibold text-xs sm:text-sm">Easy Returns</div>
                <div className="text-xs text-gray-500">30 Day Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Section - Now showing 8 products */}
      {relatedProducts.length > 0 && (
        <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24">
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
              More from {product.category}
            </h2>
            <Link 
              to={`/shop?category=${product.category.toLowerCase()}`}
              className="text-sm sm:text-base text-amber-600 hover:text-amber-700 font-medium transition-colors"
            >
              View All →
            </Link>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                to={`/product/${relatedProduct.id}`}
                className="glass-effect rounded-xl sm:rounded-2xl p-3 sm:p-4 hover:shadow-xl transition-all duration-300 group"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <div className="relative mb-3 overflow-hidden rounded-lg sm:rounded-xl">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-32 sm:h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {relatedProduct.badge && (
                    <div className="absolute top-2 left-2 px-2 py-0.5 bg-amber-500 text-white text-xs font-bold rounded-full">
                      {relatedProduct.badge}
                    </div>
                  )}
                </div>
                <h3 className="font-semibold text-sm sm:text-base mb-2 line-clamp-1 group-hover:text-amber-600 transition-colors">
                  {relatedProduct.name}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="text-base sm:text-lg font-bold text-amber-600">
                    ₹{relatedProduct.price}
                  </div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-3 h-3 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-8">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              <ShoppingCart className="w-5 h-5" />
              Explore All Products
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
