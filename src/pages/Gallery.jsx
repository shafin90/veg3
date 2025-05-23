import { motion } from 'framer-motion'

const Gallery = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1615361200141-f45040f367be",
      title: "Signature Kebabs",
      category: "Main Course"
    },
    {
      src: "https://images.unsplash.com/photo-1625938144755-652e08e359b7",
      title: "Grilled Perfection",
      category: "Process"
    },
    {
      src: "https://images.unsplash.com/photo-1600891964092-4316c288032e",
      title: "Modern Plating",
      category: "Presentation"
    },
    {
      src: "https://images.unsplash.com/photo-1606491956689-2ea866880c84",
      title: "Fresh Ingredients",
      category: "Ingredients"
    },
    {
      src: "https://images.unsplash.com/photo-1533640924469-f04e06f8898d",
      title: "Restaurant Ambience",
      category: "Ambience"
    },
    {
      src: "https://images.unsplash.com/photo-1543362906-acfc16c67564",
      title: "Organic Produce",
      category: "Ingredients"
    }
  ]

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
            Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-center max-w-2xl"
          >
            A visual journey through our culinary artistry
          </motion.p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-w-16 aspect-h-12 overflow-hidden rounded-lg bg-secondary-800"
            >
              <img
                src={image.src}
                alt={image.title}
                className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-display font-bold text-white mb-1">
                    {image.title}
                  </h3>
                  <p className="text-sm text-primary-400">
                    {image.category}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Gallery 