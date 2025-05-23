import { motion, useScroll, useSpring } from 'framer-motion'

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  
  // Make the scroll progress smoother with spring animation
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <>
      {/* Background track */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-white/5 backdrop-blur-sm z-50" />
      
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 via-primary-500 to-primary-400 origin-left z-50"
        style={{ scaleX }}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-400 blur-sm opacity-50" />
        
        {/* Moving highlight */}
        <motion.div 
          className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
          animate={{
            x: ['-100%', '100%']
          }}
          transition={{
            duration: 1,
            ease: 'linear',
            repeat: Infinity,
            repeatDelay: 1
          }}
        />
        
        {/* Edge highlight */}
        <div className="absolute right-0 top-[-2px] bottom-[-2px] w-1 bg-white/50 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
      </motion.div>
    </>
  )
}

export default ScrollProgress 