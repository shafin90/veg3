import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Home = () => {
  const containerRef = useRef(null)
  const textRef = useRef(null)
  const { scrollYProgress } = useScroll()

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

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
    <div className="relative">
      {/* Hero Section */}
      <motion.div
        ref={containerRef}
        className="relative h-screen"
      >
        {/* Parallax Background */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1615361200141-f45040f367be')",
            y
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />

        {/* Hero Content */}
        <motion.div
          ref={textRef}
          className="relative h-full flex flex-col items-center justify-center text-white px-4 sm:px-6 lg:px-8"
          style={{ opacity }}
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-primary-400 text-lg md:text-xl mb-4 font-medium tracking-wider uppercase"
          >
            Modern Vegetarian Cuisine
          </motion.span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-center mb-6 tracking-tight leading-tight">
            Artisanal
            <br />
            <span className="text-primary-400">Veggie</span> Kababs
          </h1>
          <p className="text-lg md:text-xl text-center max-w-2xl mb-12 text-gray-200">
            Experience the art of plant-based kababs, crafted with exotic spices and modern techniques
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full font-medium text-lg transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-transform"
            >
              Reserve a Table
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white px-8 py-4 rounded-full font-medium text-lg transition-colors"
            >
              View Menu
            </motion.button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <svg
            className="w-6 h-6 text-white animate-bounce"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </motion.div>

      {/* Featured Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Signature Kababs",
                description: "Plant-based kababs infused with aromatic spices and grilled to perfection.",
                image: "https://images.unsplash.com/photo-1625938144755-652e08e359b7"
              },
              {
                title: "Modern Techniques",
                description: "Traditional recipes reimagined with contemporary culinary innovations.",
                image: "https://images.unsplash.com/photo-1600891964092-4316c288032e"
              },
              {
                title: "Exotic Flavors",
                description: "A fusion of global spices creating unique and memorable taste experiences.",
                image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-xl"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-display font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-200 text-sm">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1533640924469-f04e06f8898d')] bg-fixed bg-center opacity-5" />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-4">
              Special Offerings
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Discover our chef's specially curated selection of vegetarian delicacies
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Royal Veggie Platter",
                price: "$24.99",
                description: "An assortment of our finest kababs served with mint chutney and special sauces"
              },
              {
                name: "Mushroom Galouti",
                price: "$18.99",
                description: "Melt-in-mouth kababs made with exotic mushrooms and royal spices"
              },
              {
                name: "Paneer Seekh",
                price: "$16.99",
                description: "Cottage cheese marinated in aromatic spices and char-grilled"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-display font-bold text-secondary-900">
                    {item.name}
                  </h3>
                  <span className="text-lg font-medium text-primary-600">
                    {item.price}
                  </span>
                </div>
                <p className="text-secondary-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 