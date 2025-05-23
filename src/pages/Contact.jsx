import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { IoLocationOutline, IoMailOutline, IoCallOutline, IoTimeOutline, IoRestaurantOutline } from 'react-icons/io5'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

const ContactInfo = ({ icon: Icon, title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group relative"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-primary-400/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="relative bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 group-hover:border-primary-500/30 transition-all duration-500">
      <Icon className="text-primary-400 text-3xl mb-4" />
      <h3 className="text-xl font-display font-bold text-white mb-2">{title}</h3>
      <div className="text-gray-400 space-y-1">
        {children}
      </div>
    </div>
  </motion.div>
)

const SocialLink = ({ icon: Icon, href }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary-400 hover:bg-primary-500 hover:text-white hover:border-primary-500 transition-all duration-300"
  >
    <Icon className="text-xl" />
  </motion.a>
)

const Contact = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Background parallax effect for the main content
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1.15])
  const bgOpacity = useTransform(scrollYProgress, [0, 0.2], [0.15, 0.05])

  // Hero section specific scroll effect
  const heroRef = useRef(null)
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  const heroY = useTransform(heroProgress, [0, 1], ["0%", "100%"])
  const heroScale = useTransform(heroProgress, [0, 1], [1, 1.2])
  const heroOpacity = useTransform(heroProgress, [0, 1], [1, 0])
  const textY = useTransform(heroProgress, [0, 1], ["0%", "100%"])

  return (
    <div ref={containerRef} className="relative bg-secondary-900">
      {/* Unified Background with Parallax */}
      <motion.div 
        className="fixed inset-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1606491956689-2ea866880c84')] bg-cover bg-center bg-fixed"
        style={{ 
          y: bgY,
          scale: bgScale,
          opacity: bgOpacity
        }}
      />

      {/* Hero Section */}
      <motion.div 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <motion.div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1615361200141-f45040f367be')] bg-cover bg-center bg-no-repeat"
          style={{ 
            y: heroY,
            scale: heroScale,
          }}
          initial={{ scale: 1 }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-secondary-900"
          style={{ opacity: heroOpacity }}
        />
        
        <motion.div 
          className="relative text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
          style={{ y: textY }}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <IoRestaurantOutline className="text-primary-400 text-5xl mx-auto mb-8" />
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-7xl font-display font-bold text-white mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We'd love to hear from you. Visit us or reach out through any of our channels.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Content Container */}
      <div className="relative">
        {/* Extra Large Spacer */}
        <div className="h-[70vh]" />

        {/* Contact Information */}
        <section className="relative py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ContactInfo icon={IoLocationOutline} title="Location">
                <p>123 Veggie Street</p>
                <p>Foodie District</p>
                <p>New York, NY 10001</p>
              </ContactInfo>

              <ContactInfo icon={IoTimeOutline} title="Hours">
                <p>Monday - Friday</p>
                <p>11:00 AM - 10:00 PM</p>
                <p>Weekends: 10:00 AM - 11:00 PM</p>
              </ContactInfo>

              <ContactInfo icon={IoCallOutline} title="Contact">
                <p>Phone: (555) 123-4567</p>
                <p>Mobile: (555) 987-6543</p>
                <p>Reservations: (555) 555-0123</p>
              </ContactInfo>

              <ContactInfo icon={IoMailOutline} title="Email & Social">
                <p>info@veggierestaurant.com</p>
                <p>reservations@veggierestaurant.com</p>
                <div className="flex gap-4 mt-4">
                  <SocialLink icon={FaFacebookF} href="#" />
                  <SocialLink icon={FaTwitter} href="#" />
                  <SocialLink icon={FaInstagram} href="#" />
                </div>
              </ContactInfo>
            </div>
          </div>
        </section>

        {/* Extra Large Spacer */}
        <div className="h-[70vh]" />

        {/* Map Section */}
        <section className="relative py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1647043099272!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Restaurant Location"
                className="grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
            </motion.div>
          </div>
        </section>

        {/* Extra Large Spacer */}
        <div className="h-[70vh]" />

        {/* Contact Form */}
        <section className="relative py-32">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-primary-400/5 rounded-2xl blur-xl" />
              <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-8 text-center">
                  Send us a Message
                </h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      whileHover={{ y: -2 }}
                      className="relative"
                    >
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors"
                      />
                    </motion.div>
                    <motion.div
                      whileHover={{ y: -2 }}
                      className="relative"
                    >
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors"
                      />
                    </motion.div>
                  </div>
                  <motion.div
                    whileHover={{ y: -2 }}
                    className="relative"
                  >
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors"
                    />
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -2 }}
                    className="relative"
                  >
                    <textarea
                      rows={6}
                      placeholder="Your Message"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                    />
                  </motion.div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-primary-500 text-white py-4 rounded-lg font-medium hover:bg-primary-600 transition-colors"
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final Spacer */}
        <div className="h-[50vh]" />
      </div>
    </div>
  )
}

export default Contact 