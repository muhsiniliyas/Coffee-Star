import { useState } from 'react'
import ProductCard from '../components/ProductCard'
import { allProducts } from '../data/products'
import { Search, Filter, Coffee, Wine, Leaf, Cookie, Grid3x3, List, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react'

export default function Shop() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [viewMode, setViewMode] = useState('grid')
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage] = useState(12) // Show 12 products per page

  const categories = [
    { id: 'all', label: 'All Products', icon: <Grid3x3 className="w-4 h-4" /> },
    { id: 'coffee', label: 'Coffee', icon: <Coffee className="w-4 h-4" /> },
    { id: 'drinks', label: 'Drinks', icon: <Wine className="w-4 h-4" /> },
    { id: 'tea', label: 'Tea', icon: <Leaf className="w-4 h-4" /> },
    { id: 'bakery', label: 'Bakery', icon: <Cookie className="w-4 h-4" /> }
  ]

  // Filter products
  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || product.category.toLowerCase() === selectedCategory.toLowerCase()
    return matchesSearch && matchesCategory
  })

  // Pagination calculations
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)

  // Reset to page 1 when filters change
  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId)
    setCurrentPage(1)
  }

  const handleSearchChange = (value) => {
    setSearchQuery(value)
    setCurrentPage(1)
  }

  // Pagination handlers
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const goToFirstPage = () => goToPage(1)
  const goToLastPage = () => goToPage(totalPages)
  const goToNextPage = () => {
    if (currentPage < totalPages) goToPage(currentPage + 1)
  }
  const goToPreviousPage = () => {
    if (currentPage > 1) goToPage(currentPage - 1)
  }

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = []
    const maxPagesToShow = 5

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i)
        pages.push('...')
        pages.push(totalPages)
      } else if (currentPage >= totalPages - 2) {
        pages.push(1)
        pages.push('...')
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i)
      } else {
        pages.push(1)
        pages.push('...')
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i)
        pages.push('...')
        pages.push(totalPages)
      }
    }
    return pages
  }

  return (
    <div 
      className="min-h-screen relative"
      style={{
        backgroundImage: `url('https://www.transparenttextures.com/patterns/45-degree-fabric-light.png')`,
        backgroundRepeat: 'repeat'
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-50/50 to-amber-50 dark:from-gray-900 dark:via-gray-900/50 dark:to-gray-900" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-amber-600" />
            <Coffee className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
            <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-amber-600" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-3 sm:mb-4">
            Our Menu
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400">
            Discover our handcrafted beverages and fresh bakery items
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-6 sm:mb-8 space-y-4">
          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Search coffee, tea, bakery..."
                className="w-full px-4 sm:px-5 py-3 sm:py-3.5 pl-11 sm:pl-12 rounded-xl sm:rounded-2xl glass-effect focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm sm:text-base transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => handleSearchChange('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  ✕
                </button>
              )}
            </div>

            {/* View Mode Toggle - Desktop Only */}
            <div className="hidden sm:flex gap-2 glass-effect rounded-xl p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2.5 rounded-lg transition-all ${
                  viewMode === 'grid'
                    ? 'bg-amber-500 text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
                aria-label="Grid view"
              >
                <Grid3x3 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2.5 rounded-lg transition-all ${
                  viewMode === 'list'
                    ? 'bg-amber-500 text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
                aria-label="List view"
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
            <Filter className="w-5 h-5 text-gray-400 flex-shrink-0 hidden sm:block" />
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium whitespace-nowrap transition-all text-sm sm:text-base ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-amber-600 to-amber-500 text-white shadow-lg scale-105'
                    : 'glass-effect hover:shadow-lg hover:scale-105 active:scale-95'
                }`}
              >
                {category.icon}
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter and Pagination Info */}
        <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Showing <span className="font-semibold text-amber-600 dark:text-amber-400">{indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, filteredProducts.length)}</span> of <span className="font-semibold text-amber-600 dark:text-amber-400">{filteredProducts.length}</span> products
            {searchQuery && (
              <span> for "<span className="font-semibold">{searchQuery}</span>"</span>
            )}
          </p>
          {totalPages > 1 && (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Page {currentPage} of {totalPages}
            </p>
          )}
        </div>

        {/* Products Grid */}
        {currentProducts.length > 0 ? (
          <>
            <div className={`grid gap-4 sm:gap-6 md:gap-8 ${
              viewMode === 'grid'
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                : 'grid-cols-1'
            }`}>
              {currentProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                {/* Desktop Pagination */}
                <div className="hidden sm:flex items-center gap-2">
                  {/* First Page */}
                  <button
                    onClick={goToFirstPage}
                    disabled={currentPage === 1}
                    className="p-2 rounded-lg glass-effect hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="First page"
                  >
                    <ChevronsLeft className="w-5 h-5" />
                  </button>

                  {/* Previous Page */}
                  <button
                    onClick={goToPreviousPage}
                    disabled={currentPage === 1}
                    className="p-2 rounded-lg glass-effect hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Previous page"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  {/* Page Numbers */}
                  {getPageNumbers().map((page, index) => (
                    page === '...' ? (
                      <span key={`ellipsis-${index}`} className="px-3 py-2 text-gray-400">...</span>
                    ) : (
                      <button
                        key={page}
                        onClick={() => goToPage(page)}
                        className={`min-w-[40px] px-3 py-2 rounded-lg font-medium transition-all ${
                          currentPage === page
                            ? 'bg-gradient-to-r from-amber-600 to-amber-500 text-white shadow-lg'
                            : 'glass-effect hover:shadow-lg'
                        }`}
                      >
                        {page}
                      </button>
                    )
                  ))}

                  {/* Next Page */}
                  <button
                    onClick={goToNextPage}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-lg glass-effect hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Next page"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  {/* Last Page */}
                  <button
                    onClick={goToLastPage}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-lg glass-effect hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Last page"
                  >
                    <ChevronsRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile Pagination */}
                <div className="flex sm:hidden items-center gap-2 w-full">
                  <button
                    onClick={goToPreviousPage}
                    disabled={currentPage === 1}
                    className="flex-1 px-4 py-3 rounded-xl glass-effect hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <ChevronLeft className="w-5 h-5" />
                    <span>Previous</span>
                  </button>
                  <div className="px-4 py-3 rounded-xl glass-effect font-semibold">
                    {currentPage}/{totalPages}
                  </div>
                  <button
                    onClick={goToNextPage}
                    disabled={currentPage === totalPages}
                    className="flex-1 px-4 py-3 rounded-xl glass-effect hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <span>Next</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          // Empty State
          <div className="text-center py-16 sm:py-24">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-amber-100 dark:bg-amber-900/30 mb-6">
              <Search className="w-8 h-8 sm:w-10 sm:h-10 text-amber-600" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3">No Products Found</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto px-4">
              {searchQuery
                ? `We couldn't find any products matching "${searchQuery}".`
                : `No products available in the ${selectedCategory} category.`
              }
            </p>
            <button
              onClick={() => {
                setSearchQuery('')
                setSelectedCategory('all')
                setCurrentPage(1)
              }}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View All Products
            </button>
          </div>
        )}

        {/* Quick Stats */}
        {filteredProducts.length > 0 && (
          <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            <div className="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-amber-600 mb-1">
                {allProducts.length}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                Total Products
              </div>
            </div>
            <div className="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-amber-600 mb-1">
                {categories.length - 1}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                Categories
              </div>
            </div>
            <div className="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-amber-600 mb-1">
                4.9
              </div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                Avg Rating
              </div>
            </div>
            <div className="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-amber-600 mb-1">
                NEW
              </div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                Fresh Daily
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}
