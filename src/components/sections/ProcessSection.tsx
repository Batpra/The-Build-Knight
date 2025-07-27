import { motion } from 'framer-motion'
import { PROCESS_STEPS } from '../../lib/constants'

export function ProcessSection() {
  return (
    <section id="process" className="py-20 bg-gradient-dark relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white heading-glow mb-4"
          >
            Our Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            From concept to launch, we follow a proven methodology that ensures 
            successful project delivery every time.
          </motion.p>
        </div>

        {/* Desktop Horizontal Stepper */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-accent/30 via-accent to-accent/30 transform -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-5 gap-8 relative z-10">
              {PROCESS_STEPS.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Step Circle */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center text-3xl mb-4 hover-lift cursor-pointer"
                  >
                    {step.icon}
                  </motion.div>
                  
                  {/* Step Content */}
                  <div className="glass p-6 rounded-xl max-w-xs hover-lift">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3">
                      {step.description}
                    </p>
                    <div className="text-accent font-medium text-sm">
                      {step.duration}
                    </div>
                    
                    {/* Details */}
                    <ul className="mt-4 space-y-1 text-xs text-gray-400">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-1 h-1 bg-accent rounded-full mr-2"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Vertical Stepper */}
        <div className="lg:hidden space-y-8">
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start space-x-4"
            >
              {/* Step Number & Line */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-xl">
                  {step.icon}
                </div>
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="w-0.5 h-16 bg-accent/30 mt-4"></div>
                )}
              </div>
              
              {/* Step Content */}
              <div className="glass p-6 rounded-xl flex-1 hover-lift">
                <h3 className="text-xl font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-300 mb-3">
                  {step.description}
                </p>
                <div className="text-accent font-medium text-sm mb-4">
                  {step.duration}
                </div>
                
                <ul className="space-y-2 text-sm text-gray-400">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}