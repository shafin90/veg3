import { motion } from 'framer-motion'

const CustomCursor = ({ position }) => {
  return (
    <motion.div
      className="custom-cursor"
      animate={{
        x: position.x,
        y: position.y,
        scale: 1,
      }}
      transition={{
        type: "spring",
        damping: 30,
        mass: 0.5,
        stiffness: 400
      }}
    />
  )
}

export default CustomCursor 