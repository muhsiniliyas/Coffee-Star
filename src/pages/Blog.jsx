export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'The Art of Coffee Brewing',
      excerpt: 'Discover the secrets behind brewing the perfect cup of coffee at home.',
      date: 'October 25, 2025',
      category: 'Brewing',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Coffee Bean Origins Explained',
      excerpt: 'A comprehensive guide to understanding different coffee bean origins.',
      date: 'October 20, 2025',
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80',
      readTime: '8 min read'
    },
    // Add more posts with images...
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold font-display mb-4">Coffee Blog</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Insights, tips, and stories from the world of coffee
        </p>
      </div>

      {/* Featured Post with Background */}
      <div className="mb-16 rounded-3xl overflow-hidden relative h-[500px]">
        <img 
          src={blogPosts[0].image}
          alt={blogPosts[0].title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        
        <div className="relative h-full flex items-center p-12">
          <div className="max-w-2xl text-white">
            <span className="text-sm font-medium uppercase tracking-wide bg-amber-500 px-4 py-1 rounded-full">
              Featured Post
            </span>
            <h2 className="text-4xl font-bold font-display my-4">{blogPosts[0].title}</h2>
            <p className="text-gray-200 mb-6 text-lg">{blogPosts[0].excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-gray-300 mb-6">
              <span>{blogPosts[0].date}</span>
              <span>•</span>
              <span>{blogPosts[0].readTime}</span>
            </div>
            <button className="btn-primary">Read More</button>
          </div>
        </div>
      </div>

      {/* Blog Grid with Image Backgrounds */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.slice(1).map(post => (
          <article key={post.id} className="glass-effect rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            
            <div className="p-6">
              <span className="text-xs text-[var(--color-coffee)] font-medium uppercase tracking-wide">
                {post.category}
              </span>
              <h3 className="text-xl font-bold font-display my-3 group-hover:text-[var(--color-coffee)] transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
