import { motion } from 'framer-motion'

const ContactInfo = ({ icon, title, details }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    className="bg-white/5 backdrop-blur-md rounded-lg p-6 hover:bg-white/10 transition-colors"
  >
    <span className="text-2xl mb-4 block">{icon}</span>
    <h3 className="text-lg font-display font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{details}</p>
  </motion.div>
)

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-secondary-900 pt-20"
    >
      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1533640924469-f04e06f8898d')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-900 via-secondary-900/50 to-secondary-900" />
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold text-center mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-center max-w-2xl"
          >
            Get in touch with us for any inquiries
          </motion.p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Visit Us
              </h2>
              <p className="text-gray-400">
                Experience the finest vegetarian kebabs in an elegant setting. We're conveniently located in the heart of the city.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ContactInfo
                icon="📍"
                title="Location"
                details="123 Culinary Street, Foodie District, City"
              />
              <ContactInfo
                icon="🕒"
                title="Hours"
                details="Mon-Sun: 11:00 AM - 10:00 PM"
              />
              <ContactInfo
                icon="📞"
                title="Phone"
                details="+1 (555) 123-4567"
              />
              <ContactInfo
                icon="📧"
                title="Email"
                details="info@vegfresh.com"
              />
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="pt-8"
            >
              <h3 className="text-xl font-display font-bold text-white mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                {[
                  { icon: "📱", label: "Instagram" },
                  { icon: "👥", label: "Facebook" },
                  { icon: "🐦", label: "Twitter" },
                  { icon: "📸", label: "Pinterest" }
                ].map((social, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/5 hover:bg-white/10 p-3 rounded-full transition-colors"
                  >
                    <span className="text-2xl" role="img" aria-label={social.label}>
                      {social.icon}
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative h-[600px] rounded-lg overflow-hidden bg-white/5"
          >
            <div className="absolute inset-0 bg-secondary-800">
              {/* Replace with actual map implementation */}
              <div className="w-full h-full flex items-center justify-center text-white/50">
                <p className="text-center">
                  Interactive Map
                  <br />
                  (Integration required)
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact 