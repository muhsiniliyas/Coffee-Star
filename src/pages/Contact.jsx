import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact form:', formData)
    alert('Message sent successfully!')
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold font-display mb-4">Get In Touch</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="glass-effect rounded-3xl p-8">
          <h2 className="text-2xl font-bold font-display mb-6">Send us a message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Your Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl glass-effect focus:outline-none focus:ring-2 focus:ring-coffee"
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email Address</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl glass-effect focus:outline-none focus:ring-2 focus:ring-coffee"
                placeholder="john@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-xl glass-effect focus:outline-none focus:ring-2 focus:ring-coffee"
                placeholder="How can we help?"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows="5"
                className="w-full px-4 py-3 rounded-xl glass-effect focus:outline-none focus:ring-2 focus:ring-coffee resize-none"
                placeholder="Your message..."
                required
              />
            </div>

            <button type="submit" className="w-full btn-primary">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div className="glass-effect rounded-3xl p-8">
            <h2 className="text-2xl font-bold font-display mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📍</div>
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    123 Coffee Street<br />
                    Downtown, CA 90210
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-3xl">📞</div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-3xl">✉️</div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-600 dark:text-gray-400">hello@oneacoffee.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-3xl">⏰</div>
                <div>
                  <h3 className="font-semibold mb-1">Hours</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Mon - Fri: 7:00 AM - 8:00 PM<br />
                    Sat - Sun: 8:00 AM - 9:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-effect rounded-3xl p-8">
            <h3 className="text-xl font-bold font-display mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <button className="w-12 h-12 glass-effect rounded-full flex items-center justify-center hover:bg-coffee hover:text-white transition-colors">
                <span className="text-xl">📘</span>
              </button>
              <button className="w-12 h-12 glass-effect rounded-full flex items-center justify-center hover:bg-coffee hover:text-white transition-colors">
                <span className="text-xl">📸</span>
              </button>
              <button className="w-12 h-12 glass-effect rounded-full flex items-center justify-center hover:bg-coffee hover:text-white transition-colors">
                <span className="text-xl">🐦</span>
              </button>
              <button className="w-12 h-12 glass-effect rounded-full flex items-center justify-center hover:bg-coffee hover:text-white transition-colors">
                <span className="text-xl">💼</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
