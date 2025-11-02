import { ShoppingCart, Star, Heart } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../contexts/CartContext'

export default function ProductCard({ product }) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [isAdding, setIsAdding] = useState(false)
  const { addToCart } = useCart()
  const navigate = useNavigate()

  const handleAddToCart = (e) => {
    e.stopPropagation() // Prevent navigation when clicking Add button
    setIsAdding(true)
    addToCart(product)
    
    setTimeout(() => {
      setIsAdding(false)
    }, 600)
  }

  const handleCardClick = () => {
    navigate(`/product/${product.id}`)
  }

  const handleFavoriteClick = (e) => {
    e.stopPropagation() // Prevent navigation when clicking favorite
    setIsFavorite(!isFavorite)
  }

  return (
    <div 
      onClick={handleCardClick}
      className="group glass-effect rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 hover:shadow-2xl transition-all duration-300 relative overflow-hidden cursor-pointer"
    >
      {/* Favorite Button */}
      <button
        onClick={handleFavoriteClick}
        className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 p-1.5 sm:p-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:scale-110 transition-transform active:scale-95"
        aria-label="Add to favorites"
      >
        <Heart 
          className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors ${
            isFavorite 
              ? 'fill-red-500 text-red-500' 
              : 'text-gray-400 hover:text-red-500'
          }`}
        />
      </button>

      {/* Image Container */}
      <div className="relative mb-3 sm:mb-4">
        <div className="absolute -inset-2 bg-gradient-to-br from-amber-400/20 to-red-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        <img
          src={product.image}
          alt={product.name}
          className="relative w-full h-40 sm:h-44 md:h-48 lg:h-52 object-cover rounded-xl sm:rounded-2xl transform group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80'
          }}
        />
        
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-2 left-2 sm:top-2 sm:left-2 px-2 py-0.5 sm:px-3 sm:py-1 bg-amber-500 text-white text-xs sm:text-xs font-bold rounded-full shadow-md">
            {product.badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div>
        {/* Category */}
        <span className="text-xs sm:text-xs text-amber-600 dark:text-amber-400 font-medium uppercase tracking-wide">
          {product.category}
        </span>

        {/* Title */}
        <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1.5 sm:mb-2 mt-1 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors line-clamp-1">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-0.5 sm:gap-1 mb-3 sm:mb-4">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-3 h-3 sm:w-4 sm:h-4 ${
                i < 4 
                  ? 'fill-yellow-400 text-yellow-400' 
                  : 'text-gray-300 dark:text-gray-600'
              }`}
            />
          ))}
          <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 ml-1 sm:ml-2">
            (4.8)
          </span>
        </div>

        {/* Price & Add to Cart */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex-shrink-0">
            <span className="text-xl sm:text-2xl md:text-2xl font-bold bg-gradient-to-r from-amber-700 to-amber-600 bg-clip-text text-transparent">
              ₹{product.price}
            </span>
          </div>
          <button 
            onClick={handleAddToCart}
            disabled={isAdding}
            className={`
              flex items-center gap-1.5 sm:gap-2 
              px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 
              bg-gradient-to-r from-amber-600 to-amber-500 
              hover:from-amber-700 hover:to-amber-600 
              text-white rounded-full text-xs sm:text-sm font-medium 
              transition-all duration-300 shadow-md hover:shadow-lg 
              active:scale-95 group-hover:scale-105
              disabled:opacity-75 disabled:cursor-not-allowed
              ${isAdding ? 'scale-90' : ''}
            `}
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingCart className={`w-3 h-3 sm:w-4 sm:h-4 ${isAdding ? 'animate-bounce' : ''}`} />
            <span className="hidden xs:inline sm:inline">
              {isAdding ? 'Added!' : 'Add'}
            </span>
            <span className="inline xs:hidden sm:hidden">
              {isAdding ? '✓' : '+'}
            </span>
          </button>
        </div>
      </div>

      {/* Success indicator */}
      {isAdding && (
        <div className="absolute inset-0 bg-green-500/10 rounded-2xl sm:rounded-3xl pointer-events-none animate-pulse" />
      )}
    </div>
  )
}
