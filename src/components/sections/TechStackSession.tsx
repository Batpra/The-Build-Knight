import { motion } from 'framer-motion'
import { TECH_STACK } from '../../lib/constants'

export function TechStackSection() {
  return (
    <section id="tech-stack" className="py-20 bg-gradient-dark relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-transparent"></div>
      <div className="container mx-auto px-6 relative">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gradient heading-glow"
          >
            Our Tech Stack
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-xl text-gray-300"
          >
            Cutting-edge technologies for modern solutions
          </motion.p>
        </div>

        <div className="mt-16">
          {TECH_STACK.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2 }}
              className="mb-16 last:mb-0"
            >
              <h3 className="text-2xl font-bold mb-8 text-white">{category.category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: categoryIndex * 0.2 + techIndex * 0.1,
                      type: 'spring',
                      stiffness: 100,
                    }}
                    className="p-6 rounded-lg glass hover-lift group"
                  >
                    <div className="text-3xl mb-4 text-accent group-hover:scale-110 transition-transform">
                      {tech.icon}
                    </div>
                    <h4 className="text-lg font-semibold mb-2 text-white">
                      {tech.name}
                    </h4>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden mb-3">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-accent"
                      />
                    </div>
                    <p className="text-sm text-gray-300">
                      {tech.experience}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
