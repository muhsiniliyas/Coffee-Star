export default function Vendor() {
  const vendors = [
    {
      id: 1,
      name: 'Ethiopian Highlands',
      location: 'Ethiopia',
      specialty: 'Arabica Beans',
      emoji: '🇪🇹',
      description: 'Premium single-origin Arabica beans from the birthplace of coffee'
    },
    {
      id: 2,
      name: 'Colombian Farmers Co-op',
      location: 'Colombia',
      specialty: 'Organic Coffee',
      emoji: '🇨🇴',
      description: 'Fair-trade organic coffee from sustainable mountain farms'
    },
    {
      id: 3,
      name: 'Brazilian Plantations',
      location: 'Brazil',
      specialty: 'Robusta & Arabica',
      emoji: '🇧🇷',
      description: 'Rich, full-bodied beans from the world\'s largest coffee producer'
    },
    {
      id: 4,
      name: 'Vietnamese Highlands',
      location: 'Vietnam',
      specialty: 'Robusta Excellence',
      emoji: '🇻🇳',
      description: 'Bold and strong robusta beans from Central Highlands'
    },
    {
      id: 5,
      name: 'Costa Rican Estates',
      location: 'Costa Rica',
      specialty: 'Specialty Grade',
      emoji: '🇨🇷',
      description: 'Award-winning specialty coffee from volcanic soil estates'
    },
    {
      id: 6,
      name: 'Kenyan Cooperatives',
      location: 'Kenya',
      specialty: 'Bright & Fruity',
      emoji: '🇰🇪',
      description: 'Vibrant, wine-like flavors from high-altitude farms'
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold font-display mb-4">Our Vendors</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          We partner with ethical, sustainable coffee producers from around the world
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        <div className="glass-effect rounded-3xl p-6 text-center">
          <div className="text-4xl font-bold text-coffee mb-2">15+</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Countries</div>
        </div>
        <div className="glass-effect rounded-3xl p-6 text-center">
          <div className="text-4xl font-bold text-coffee mb-2">50+</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Vendors</div>
        </div>
        <div className="glass-effect rounded-3xl p-6 text-center">
          <div className="text-4xl font-bold text-coffee mb-2">100%</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Fair Trade</div>
        </div>
        <div className="glass-effect rounded-3xl p-6 text-center">
          <div className="text-4xl font-bold text-coffee mb-2">10K+</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Farmers</div>
        </div>
      </div>

      {/* Vendors Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {vendors.map(vendor => (
          <div key={vendor.id} className="glass-effect rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 group">
            <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform">
              {vendor.emoji}
            </div>
            <h3 className="text-2xl font-bold font-display mb-2">{vendor.name}</h3>
            <div className="flex items-center gap-2 text-sm text-coffee mb-3">
              <span>📍</span>
              <span>{vendor.location}</span>
            </div>
            <div className="inline-block px-4 py-1 bg-coffee/10 dark:bg-coffee/20 rounded-full text-sm font-medium mb-4">
              {vendor.specialty}
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {vendor.description}
            </p>
          </div>
        ))}
      </div>

      {/* Become a Vendor */}
      <div className="glass-effect rounded-3xl p-12 text-center">
        <h2 className="text-3xl font-bold font-display mb-4">Become Our Vendor</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Are you a coffee producer committed to quality and sustainability? We'd love to hear from you.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="btn-primary">Apply Now</button>
          <button className="btn-secondary">Learn More</button>
        </div>
      </div>
    </div>
  )
}
