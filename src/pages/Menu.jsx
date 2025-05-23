import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaLeaf, FaFire, FaSeedling, FaStar } from 'react-icons/fa'
import { IoRestaurant } from 'react-icons/io5'
import { GiMushrooms } from 'react-icons/gi'

const MenuSection = ({ title, subtitle, children, icon: Icon }) => {
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <motion.span 
              className="h-[1px] w-12 bg-primary-400/50"
              style={{ scaleX: useTransform(scrollYProgress, [0, 0.5], [0, 1]) }}
            />
            <Icon className="text-primary-400 text-2xl" />
            <h2 className="text-primary-400 font-medium tracking-wider uppercase">{subtitle}</h2>
            <motion.span 
              className="h-[1px] w-12 bg-primary-400/50"
              style={{ scaleX: useTransform(scrollYProgress, [0, 0.5], [0, 1]) }}
            />
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            {title}
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6">
          {children}
        </div>
      </motion.div>
    </motion.section>
  )
}

const MenuItem = ({ name, description, price, isSpicy, isVegan, isNew }) => {
  const itemRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95])

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group relative h-full flex flex-col"
      style={{ y, scale }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-primary-400/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 group-hover:border-primary-500/30 transition-all duration-500 flex flex-col h-full">
        <div className="aspect-w-16 aspect-h-12 overflow-hidden">
          <img
            src="https://howinturkey.com/wp-content/uploads/2023/04/where-to-eat-kebap-in-turkey0000.jpg"
            alt={name}
            className="object-cover w-full h-[300px] transform group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-8 flex flex-col flex-grow">
          <div className="flex justify-between items-start gap-4 mb-4">
            <h3 className="text-2xl font-display font-bold text-white group-hover:text-primary-400 transition-colors">
              {name}
            </h3>
            <span className="text-xl text-primary-400 font-medium whitespace-nowrap">
              {price}
            </span>
          </div>
          <p className="text-gray-400 text-base mb-6 flex-grow">
            {description}
          </p>
          <div className="flex items-center gap-3 mt-auto">
            {isSpicy && (
              <motion.span 
                className="inline-flex items-center gap-1 text-sm font-medium text-primary-400/90 bg-primary-400/10 px-3 py-1.5 rounded-full"
                whileHover={{ scale: 1.05 }}
              >
                <FaFire className="text-sm" /> Spicy
              </motion.span>
            )}
            {isVegan && (
              <motion.span 
                className="inline-flex items-center gap-1 text-sm font-medium text-green-400/90 bg-green-400/10 px-3 py-1.5 rounded-full"
                whileHover={{ scale: 1.05 }}
              >
                <FaLeaf className="text-sm" /> Vegan
              </motion.span>
            )}
            {isNew && (
              <motion.span 
                className="inline-flex items-center gap-1 text-sm font-medium text-blue-400/90 bg-blue-400/10 px-3 py-1.5 rounded-full"
                whileHover={{ scale: 1.05 }}
              >
                <FaStar className="text-sm" /> New
              </motion.span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const Menu = () => {
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
          style={{ y: textY }}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <IoRestaurant className="text-primary-400 text-5xl mx-auto mb-8" />
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-7xl font-display font-bold text-white mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Our Menu
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover our carefully crafted dishes, where traditional recipes meet modern innovation
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Content Container */}
      <div className="relative">
        {/* Extra Large Spacer */}
        <div className="h-[70vh]" />

        {/* Starters Section */}
        <MenuSection 
          title="Starters & Small Plates" 
          subtitle="Begin Your Journey"
          icon={FaSeedling}
        >
          <MenuItem
            name="Crispy Mushroom Tempura"
            description="Assorted wild mushrooms in light tempura batter, served with truffle aioli"
            price="$12"
            isVegan
          />
          <MenuItem
            name="Garden Fresh Spring Rolls"
            description="Rice paper rolls filled with fresh vegetables and herbs, served with peanut sauce"
            price="$10"
            isVegan
          />
          <MenuItem
            name="Spicy Cauliflower Wings"
            description="Crispy cauliflower florets tossed in our signature spicy sauce"
            price="$11"
            isSpicy
            isVegan
          />
        </MenuSection>

        {/* Extra Large Spacer */}
        <div className="h-[70vh]" />

        {/* Main Course Section */}
        <MenuSection 
          title="Main Courses" 
          subtitle="Heart of the Experience"
          icon={GiMushrooms}
        >
          <MenuItem
            name="Royal Mushroom Crown"
            description="Stuffed portobello mushrooms with exotic spices and truffle oil"
            price="$24"
            isSpicy
            isNew
          />
          <MenuItem
            name="Golden Saffron Risotto"
            description="Creamy arborio rice with saffron, wild mushrooms and aged parmesan"
            price="$22"
            isNew
          />
          <MenuItem
            name="Buddha's Feast Bowl"
            description="Quinoa bowl with roasted vegetables, avocado and tahini dressing"
            price="$20"
            isVegan
          />
        </MenuSection>

        {/* Extra Large Spacer */}
        <div className="h-[70vh]" />

        {/* Desserts Section */}
        <MenuSection 
          title="Sweet Endings" 
          subtitle="Indulge Your Senses"
          icon={FaStar}
        >
          <MenuItem
            name="Dark Chocolate Mousse"
            description="Rich dark chocolate mousse with berry compote and gold leaf"
            price="$12"
            isNew
          />
          <MenuItem
            name="Saffron Poached Pear"
            description="Pears poached in saffron syrup with cardamom ice cream"
            price="$14"
            isVegan
          />
          <MenuItem
            name="Pistachio Rose Cake"
            description="Layered cake with rose water cream and crushed pistachios"
            price="$13"
          />
        </MenuSection>

        {/* Extra Large Spacer */}
        <div className="h-[70vh]" />

        {/* Drinks Section */}
        <MenuSection 
          title="Beverages" 
          subtitle="Refresh & Revive"
          icon={IoRestaurant}
        >
          <MenuItem
            name="Signature Herb Mojito"
            description="Fresh mint, basil, and lime with sparkling water"
            price="$8"
            isVegan
          />
          <MenuItem
            name="Golden Turmeric Latte"
            description="Warm blend of turmeric, ginger, and almond milk"
            price="$6"
            isVegan
          />
          <MenuItem
            name="Berry Kombucha Fizz"
            description="House-made kombucha with mixed berry infusion"
            price="$7"
            isNew
          />
        </MenuSection>

        {/* Extra Large Spacer */}
        <div className="h-[70vh]" />

        {/* Final Spacer */}
        <div className="h-[50vh]" />
      </div>
    </div>
  )
}

export default Menu 