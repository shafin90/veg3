import { motion } from 'framer-motion'

const MenuSection = ({ title, items }) => (
  <div className="mb-16">
    <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-8 relative inline-block">
      {title}
      <motion.div
        className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary-400"
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white/5 backdrop-blur-md rounded-lg p-6 hover:bg-white/10 transition-colors"
        >
          <div className="flex justify-between items-start gap-4">
            <div>
              <h4 className="text-xl font-display font-bold text-white mb-2">{item.name}</h4>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>
            <span className="text-primary-400 font-medium">{item.price}</span>
          </div>
          {item.spicy && (
            <span className="inline-block mt-2 text-xs font-medium text-primary-400 bg-primary-400/10 px-2 py-1 rounded">
              Spicy 🌶️
            </span>
          )}
        </motion.div>
      ))}
    </div>
  </div>
)

const Menu = () => {
  const menuData = {
    starters: [
      {
        name: "Mushroom Galouti Kebab",
        description: "Melt-in-mouth kebabs made with exotic mushrooms and royal spices",
        price: "$12.99",
        spicy: true
      },
      {
        name: "Paneer Tikka",
        description: "Marinated cottage cheese with bell peppers and onions",
        price: "$10.99"
      },
      {
        name: "Vegetable Seekh",
        description: "Minced vegetables skewered and grilled with aromatic spices",
        price: "$11.99"
      },
      {
        name: "Hariyali Kebab",
        description: "Green herb-infused vegetable patties grilled to perfection",
        price: "$13.99"
      }
    ],
    mainCourse: [
      {
        name: "Royal Veggie Platter",
        description: "Assortment of our signature kebabs with mint chutney and special sauces",
        price: "$24.99",
        spicy: true
      },
      {
        name: "Tandoori Cauliflower",
        description: "Whole cauliflower marinated in yogurt and spices",
        price: "$18.99"
      },
      {
        name: "Jackfruit Kebab",
        description: "Young jackfruit marinated and grilled with special spice blend",
        price: "$19.99",
        spicy: true
      },
      {
        name: "Mixed Grill Platter",
        description: "Selection of grilled vegetables and paneer with assorted dips",
        price: "$22.99"
      }
    ],
    sides: [
      {
        name: "Mint Chutney",
        description: "Fresh mint leaves blended with green chilies and spices",
        price: "$3.99"
      },
      {
        name: "Grilled Vegetables",
        description: "Seasonal vegetables grilled with herbs",
        price: "$6.99"
      },
      {
        name: "Saffron Rice",
        description: "Aromatic basmati rice with saffron",
        price: "$5.99"
      },
      {
        name: "Assorted Breads",
        description: "Selection of naan and roti",
        price: "$4.99"
      }
    ]
  }

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
            backgroundImage: "url('https://images.unsplash.com/photo-1600891964092-4316c288032e')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-900 via-secondary-900/50 to-secondary-900" />
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold text-center mb-4"
          >
            Our Menu
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-center max-w-2xl"
          >
            Discover our artisanal selection of vegetarian kebabs and sides
          </motion.p>
        </div>
      </div>

      {/* Menu Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <MenuSection title="Starters" items={menuData.starters} />
        <MenuSection title="Main Course" items={menuData.mainCourse} />
        <MenuSection title="Sides & Accompaniments" items={menuData.sides} />
      </div>
    </motion.div>
  )
}

export default Menu 