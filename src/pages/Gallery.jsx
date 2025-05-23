import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { IoImagesOutline } from 'react-icons/io5'
import { FaCamera } from 'react-icons/fa'

const GallerySection = ({ title, subtitle, images }) => {
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
      className="relative min-h-screen py-32 overflow-hidden"
    >
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('${images[0]}')`,
          y,
          opacity: 0.05,
          scale
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-[1px] w-12 bg-primary-400/50" />
            <FaCamera className="text-primary-400 text-2xl" />
            <h2 className="text-primary-400 font-medium tracking-wider uppercase">{subtitle}</h2>
            <span className="h-[1px] w-12 bg-primary-400/50" />
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            {title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-primary-400/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative aspect-w-16 aspect-h-12 rounded-2xl overflow-hidden">
                <motion.img
                  src={image}
                  alt="Gallery"
                  className="object-cover w-full h-full"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

const Gallery = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1.2])

  return (
    <div ref={containerRef} className="relative bg-secondary-900">
      {/* Hero Section */}
      <motion.div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600891964092-4316c288032e')] bg-cover bg-center bg-no-repeat"
          style={{ y, scale }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-secondary-900" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <IoImagesOutline className="text-primary-400 text-5xl mx-auto mb-8" />
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8">
            Our Gallery
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A visual journey through our culinary artistry and dining experience
          </p>
        </motion.div>
      </motion.div>

      {/* Extra Large Spacer */}
      <div className="h-[70vh]" />

      {/* Signature Dishes Gallery */}
      <GallerySection 
        title="Signature Dishes"
        subtitle="Culinary Artistry"
        images={[
          "https://images.unsplash.com/photo-1625938144755-652e08e359b7",
          "https://images.unsplash.com/photo-1598511796432-32663d0875bd",
          "https://images.unsplash.com/photo-1606491956689-2ea866880c84",
          "https://images.unsplash.com/photo-1546793665-c74683f339c1",
          "https://images.unsplash.com/photo-1547496502-affa22d38842",
          "https://images.unsplash.com/photo-1518133683791-0b9de5a055f0"
        ]}
      />

      {/* Extra Large Spacer */}
      <div className="h-[70vh]" />

      {/* Restaurant Ambiance */}
      <GallerySection 
        title="Restaurant Ambiance"
        subtitle="Our Space"
        images={[
          "https://images.unsplash.com/photo-1600891964092-4316c288032e",
          "https://images.unsplash.com/photo-1600891964565-89de6c8d4a08",
          "https://images.unsplash.com/photo-1600891964369-ca85a2100fa6",
          "https://images.unsplash.com/photo-1600891964370-7c3c1a3b2c01",
          "https://images.unsplash.com/photo-1600891964371-b3f1f51d1b11",
          "https://images.unsplash.com/photo-1600891964372-c3f1f1b1b3f1"
        ]}
      />

      {/* Extra Large Spacer */}
      <div className="h-[70vh]" />

      {/* Final Spacer */}
      <div className="h-[50vh]" />
    </div>
  )
}

export default Gallery 