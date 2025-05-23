import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-secondary-900"
    >
      {/* Hero Section */}
      <div ref={containerRef} className="relative h-screen">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1543362906-acfc16c67564')",
            y
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-900 via-secondary-900/50 to-secondary-900" />
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold text-center mb-4"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-center max-w-2xl"
          >
            A journey of flavors, tradition, and innovation
          </motion.p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Vision Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
              Modern Vegetarian Cuisine
            </h2>
            <p className="text-gray-400">
              At VegFresh, we reimagine traditional kebab recipes with a modern vegetarian twist. Our journey began with a simple vision: to create extraordinary plant-based dishes that celebrate the rich heritage of kebab cuisine while embracing contemporary culinary innovations.
            </p>
            <p className="text-gray-400">
              Every dish we serve is a testament to our commitment to quality, creativity, and sustainable dining. We source the finest organic ingredients and combine them with exotic spices to create unforgettable flavors.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] rounded-lg overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1625938144755-652e08e359b7"
              alt="Modern vegetarian cuisine"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: "Quality",
              description: "We source only the finest organic ingredients for our dishes.",
              icon: "🌟"
            },
            {
              title: "Innovation",
              description: "Constantly exploring new techniques and flavor combinations.",
              icon: "🔬"
            },
            {
              title: "Sustainability",
              description: "Committed to eco-friendly practices and minimal waste.",
              icon: "🌱"
            }
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-md rounded-lg p-8 hover:bg-white/10 transition-colors"
            >
              <span className="text-4xl mb-4 block">{value.icon}</span>
              <h3 className="text-xl font-display font-bold text-white mb-4">
                {value.title}
              </h3>
              <p className="text-gray-400">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-16">
            Meet Our Culinary Artists
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                name: "Chef Sarah",
                role: "Head Chef",
                image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548"
              },
              {
                name: "Chef Michael",
                role: "Sous Chef",
                image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c"
              },
              {
                name: "Chef Lisa",
                role: "Pastry Chef",
                image: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group"
              >
                <div className="relative h-[300px] rounded-lg overflow-hidden mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-400">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default About 