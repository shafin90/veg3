import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaHeart, FaUsers, FaStar } from 'react-icons/fa'
import { GiCook, GiPlantRoots } from 'react-icons/gi'
import { IoRestaurantOutline } from 'react-icons/io5'

const StorySection = ({ children, image, reverse = false }) => {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95])

  return (
    <motion.section
      ref={sectionRef}
      className="relative min-h-screen py-32"
    >
      <motion.div 
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]) }}
      >
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          {children}
        </div>
      </motion.div>
    </motion.section>
  )
}

const About = () => {
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
            <GiCook className="text-primary-400 text-5xl mx-auto mb-8" />
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-7xl font-display font-bold text-white mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Our Story
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A journey of passion, innovation, and commitment to vegetarian excellence
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Content Container */}
      <div className="relative">
        {/* Extra Large Spacer */}
        <div className="h-[70vh]" />

        {/* Our Beginning */}
        <StorySection image="https://images.unsplash.com/photo-1600891964092-4316c288032e">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <span className="h-[1px] w-12 bg-primary-400/50" />
              <GiPlantRoots className="text-primary-400 text-2xl" />
              <h2 className="text-primary-400 font-medium tracking-wider uppercase">Our Beginning</h2>
            </div>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
              A Vision of Modern
              <br />
              <span className="bg-gradient-to-r from-primary-400 to-primary-500 bg-clip-text text-transparent">
                Vegetarian
              </span> Cuisine
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Founded in 2010, VegFresh began with a simple yet ambitious vision: to revolutionize vegetarian dining. Our journey started with the belief that plant-based cuisine could be both innovative and deeply satisfying.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600891964092-4316c288032e"
                alt="Our restaurant"
                className="object-cover"
              />
            </div>
          </motion.div>
        </StorySection>

        {/* Extra Large Spacer */}
        <div className="h-[70vh]" />

        {/* Our Values */}
        <section className="relative min-h-screen py-32">
          <motion.div 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1533640924469-f04e06f8898d')] bg-cover bg-center bg-no-repeat"
            style={{ 
              y: useTransform(scrollYProgress, [0, 1], ["0%", "20%"]),
              opacity: 0.05,
              scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95])
            }}
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-24"
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="h-[1px] w-12 bg-primary-400/50" />
                <FaHeart className="text-primary-400 text-2xl" />
                <h2 className="text-primary-400 font-medium tracking-wider uppercase">Our Values</h2>
                <span className="h-[1px] w-12 bg-primary-400/50" />
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">
                What We Stand For
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  icon: IoRestaurantOutline,
                  title: "Culinary Excellence",
                  description: "We pursue perfection in every dish, combining traditional techniques with modern innovation."
                },
                {
                  icon: FaUsers,
                  title: "Community Focus",
                  description: "Our restaurant is more than a dining spot—it's a gathering place for like-minded food enthusiasts."
                },
                {
                  icon: FaStar,
                  title: "Sustainability",
                  description: "We're committed to environmental responsibility in every aspect of our operation."
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="text-center"
                >
                  <value.icon className="text-primary-400 text-4xl mx-auto mb-6" />
                  <h3 className="text-2xl font-display font-bold text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-400">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Extra Large Spacer */}
        <div className="h-[70vh]" />

        {/* Final Spacer */}
        <div className="h-[50vh]" />
      </div>
    </div>
  )
}

export default About 