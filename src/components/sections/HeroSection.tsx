import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import { Logo } from '../ui/logo'

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center pt-20 bg-gradient-dark relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Hero Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full glass mb-6"
            >
              <span className="text-accent text-sm font-medium">⚔️ Crafting Code, Forging Futures</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-6">
              Building{' '}
              <span className="text-gradient heading-glow">
                Digital Excellence
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
              We craft exceptional web applications, AI integrations, and digital solutions 
              that drive business growth and user engagement.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="xl" 
                className="bg-gradient-primary hover:opacity-90 text-white hover-lift"
              >
                Start Your Project
              </Button>
              <Button 
                size="xl" 
                variant="outline" 
                className="text-white border-accent hover:bg-accent hover:text-primary"
              >
                View Our Work
              </Button>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-700"
            >
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-accent">50+</div>
                <div className="text-gray-400">Projects Delivered</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-accent">5+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-accent">100%</div>
                <div className="text-gray-400">Client Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-[400px] lg:h-[600px] flex items-center justify-center"
          >
            <div className="relative">
              {/* Main Logo/Knight */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="text-9xl opacity-20 hover:opacity-30 transition-opacity"
              >
                ⚔️
              </motion.div>
              
              {/* Orbiting Icons */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-full h-full"
              >
                {['⚛️', '🐍', '☁️', '🎨', '🤖', '⚙️'].map((icon, index) => (
                  <motion.div
                    key={index}
                    className="absolute text-4xl opacity-60"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `rotate(${index * 60}deg) translateY(-120px) rotate(-${index * 60}deg)`,
                    }}
                    whileHover={{ scale: 1.2, opacity: 1 }}
                  >
                    {icon}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}