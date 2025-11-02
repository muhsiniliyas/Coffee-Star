export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header with Background */}
      <div 
        className="relative text-center mb-16 rounded-3xl overflow-hidden p-16"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <h1 className="text-5xl font-bold font-display mb-4 text-white">About Coffee-Star</h1>
        <p className="text-xl text-gray-200 max-w-3xl mx-auto">
          Crafting exceptional coffee experiences since our inception
        </p>
      </div>

      {/* Rest of the content */}
      <section className="mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            className="glass-effect rounded-3xl h-96 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=80')`
            }}
          />
          <div>
            <h2 className="text-3xl font-bold font-display mb-4">Our Story</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Founded with a passion for exceptional coffee, Coffee-Star has been serving the community with premium beverages and baked goods. Our journey began with a simple mission: to bring joy through every cup.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              We source the finest beans from sustainable farms around the world, roast them to perfection, and craft each drink with care. Our commitment to quality and customer satisfaction sets us apart.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold font-display text-center mb-12">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass-effect rounded-3xl p-8 text-center">
            <div className="text-5xl mb-4">☕</div>
            <h3 className="text-xl font-semibold mb-2">Quality First</h3>
            <p className="text-gray-600 dark:text-gray-400">
              We never compromise on the quality of our ingredients and preparation methods.
            </p>
          </div>
          <div className="glass-effect rounded-3xl p-8 text-center">
            <div className="text-5xl mb-4">🌱</div>
            <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Committed to eco-friendly practices and supporting sustainable farming.
            </p>
          </div>
          <div className="glass-effect rounded-3xl p-8 text-center">
            <div className="text-5xl mb-4">❤️</div>
            <h3 className="text-xl font-semibold mb-2">Community</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Building lasting relationships with our customers and local community.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section>
        <h2 className="text-3xl font-bold font-display text-center mb-12">Meet Our Team</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { name: 'Sarah Johnson', role: 'Head Barista', emoji: '👩‍🍳' },
            { name: 'Michael Chen', role: 'Coffee Roaster', emoji: '👨‍🔬' },
            { name: 'Emily Davis', role: 'Pastry Chef', emoji: '👩‍🍳' },
            { name: 'David Wilson', role: 'Manager', emoji: '👨‍💼' }
          ].map((member, index) => (
            <div key={index} className="glass-effect rounded-3xl p-6 text-center">
              <div className="text-6xl mb-4">{member.emoji}</div>
              <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
