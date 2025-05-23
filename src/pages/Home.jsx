import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { IoRestaurantOutline } from 'react-icons/io5'

gsap.registerPlugin(ScrollTrigger)

const GradientButton = ({ to, children, primary = false }) => (
  <Link to={to}>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative group overflow-hidden ${
        primary 
          ? "bg-primary-500 hover:bg-primary-600" 
          : "bg-transparent hover:bg-white/10 border-2 border-white"
      } text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300`}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-primary-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent blur-lg transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
      </div>
    </motion.button>
  </Link>
)

const StatCard = ({ number, label }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -5 }}
    transition={{ duration: 0.3 }}
    className="relative group"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-primary-400/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 group-hover:border-primary-500/30 transition-colors duration-300">
      <div className="text-3xl font-bold bg-gradient-to-r from-white to-primary-400 bg-clip-text text-transparent mb-2">
        {number}
      </div>
      <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
        {label}
      </div>
    </div>
  </motion.div>
)

const Home = () => {
  const containerRef = useRef(null)
  const textRef = useRef(null)
  const experienceSectionRef = useRef(null)
  const isExperienceInView = useInView(experienceSectionRef, { once: false, amount: 0.2 })
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

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (textRef.current) {
        gsap.from(textRef.current.children, {
          y: 100,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power4.out",
        })
      }
    })

    return () => ctx.revert()
  }, [])

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
            <IoRestaurantOutline className="text-primary-400 text-6xl mx-auto mb-8" />
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Fresh & Natural
            <br />
            <span className="text-primary-400">Vegetarian</span> Cuisine
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mx-auto mb-12"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience the art of vegetarian dining in a modern and elegant setting
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link
              to="/menu"
              className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-primary-500 border border-transparent rounded-full hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-300"
            >
              View Our Menu
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Content Container */}
      <div className="relative">
        {/* Extra Large Spacer */}
        <div className="h-[70vh]" />

        {/* Featured Dishes Section with Modern Layout */}
        <section className="relative py-64 min-h-screen">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1606491956689-2ea866880c84')] bg-fixed bg-center opacity-5" />
          <div className="max-w-[1920px] mx-auto relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex items-center justify-center gap-4 mb-6">
                  <span className="h-[1px] w-12 bg-primary-400/50" />
                  <h2 className="text-primary-400 font-medium tracking-wider uppercase">Our Specialties</h2>
                  <span className="h-[1px] w-12 bg-primary-400/50" />
                </div>
                <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  Signature Dishes
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-24">
                  Discover our chef's specially curated selection of vegetarian delicacies
                </p>
              </motion.div>
            </div>

            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                {[
                  {
                    name: "Royal Mushroom Crown",
                    description: "Stuffed portobello mushrooms with exotic spices and truffle oil",
                    image: "https://images.unsplash.com/photo-1625938144755-652e08e359b7",
                    price: "$16.99",
                    spicy: true,
                    time: "25 min"
                  },
                  {
                    name: "Golden Cauliflower",
                    description: "Whole roasted cauliflower with saffron and cashew cream",
                    image: "https://images.unsplash.com/photo-1598511796432-32663d0875bd",
                    price: "$18.99",
                    time: "30 min"
                  },
                  {
                    name: "Tandoori Platter Royale",
                    description: "Assorted grilled vegetables and paneer with signature spices",
                    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84",
                    price: "$24.99",
                    spicy: true,
                    time: "35 min"
                  }
                ].map((dish, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-primary-400/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 group-hover:border-primary-500/30 transition-all duration-500">
                      <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                        <img
                          src={dish.image}
                          alt={dish.name}
                          className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="p-8 lg:p-10">
                        <h3 className="text-3xl font-display font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
                          {dish.name}
                        </h3>
                        <p className="text-gray-400 text-lg mb-8">
                          {dish.description}
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-primary-400 font-medium text-2xl">
                            {dish.price}
                          </span>
                          <div className="flex items-center gap-4">
                            {dish.spicy && (
                              <span className="inline-block text-sm font-medium text-primary-400 bg-primary-400/10 px-4 py-2 rounded-full">
                                Spicy 🌶️
                              </span>
                            )}
                            <span className="text-base text-gray-500">
                              {dish.time}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Extra Large Spacer */}
        <div className="h-[100vh]" />

        {/* Experience Section with Modern Stats */}
        <motion.section 
          ref={experienceSectionRef}
          className="relative min-h-screen py-64 overflow-hidden"
          style={{
            opacity: isExperienceInView ? 1 : 0,
            transition: "opacity 1s ease-in-out"
          }}
        >
          <motion.div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1533640924469-f04e06f8898d')",
              scale: isExperienceInView ? 1 : 1.1,
              transition: "all 1.5s ease-out"
            }}
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="space-y-12"
              >
                <div className="flex items-center gap-4">
                  <span className="h-[1px] w-12 bg-primary-400/50" />
                  <h2 className="text-primary-400 font-medium tracking-wider uppercase">Our Experience</h2>
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
                  Experience Modern
                  <br />
                  <span className="bg-gradient-to-r from-primary-400 to-primary-500 bg-clip-text text-transparent">
                    Vegetarian
                  </span> Fine Dining
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Our chefs combine traditional recipes with contemporary techniques to create unique, 
                  flavorful dishes that celebrate the richness of vegetarian cuisine.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { number: "10+", label: "Signature Dishes" },
                    { number: "15+", label: "Years Experience" },
                    { number: "100%", label: "Plant Based" },
                    { number: "4.9", label: "Customer Rating" }
                  ].map((stat, index) => (
                    <StatCard key={index} {...stat} />
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="relative"
              >
                <div className="relative">
                  <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1600891964092-4316c288032e"
                      alt="Fine dining experience"
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-8 -left-8 bg-gradient-to-br from-primary-500 to-primary-600 text-white p-8 rounded-2xl shadow-2xl"
                  >
                    <p className="text-2xl font-display font-bold mb-2">
                      Special Offer
                    </p>
                    <p className="text-lg opacity-90">
                      15% off on weekday lunches
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Extra Large Spacer */}
        <div className="h-[100vh]" />

        {/* Modern Call to Action */}
        <section className="relative py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary-900 to-black" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="h-[1px] w-12 bg-primary-400/50" />
                <h2 className="text-primary-400 font-medium tracking-wider uppercase">Join Us</h2>
                <span className="h-[1px] w-12 bg-primary-400/50" />
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Ready to Experience Our Cuisine?
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg">
                Join us for an unforgettable dining experience featuring our signature vegetarian kebabs and modern dishes.
              </p>
              <GradientButton to="/menu" primary>
                Explore Our Menu
              </GradientButton>
            </motion.div>
          </div>
        </section>

        {/* Final Spacer */}
        <div className="h-[50vh]" />
      </div>
    </div>
  )
}

export default Home 