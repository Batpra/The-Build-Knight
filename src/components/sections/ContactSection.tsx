import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { BUDGET_OPTIONS, PROJECT_TYPES } from '../../lib/constants'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  budget: yup.string().required('Please select a budget range'),
  projectTypes: yup.array().min(1, 'Please select at least one project type'),
  message: yup.string().required('Message is required').min(10, 'Message must be at least 10 characters')
})

type FormData = yup.InferType<typeof schema>

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  })

  const watchedProjectTypes = watch('projectTypes') || []

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log('Form submitted:', data)
      setSubmitSuccess(true)
      reset()
      setTimeout(() => setSubmitSuccess(false), 5000)
    } catch (error) {
      console.error('Submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-dark relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white heading-glow mb-4"
          >
            Let's Build Something Amazing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Ready to bring your ideas to life? Get in touch and let's discuss 
            how we can help you achieve your goals.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass p-8 rounded-2xl hover-lift">
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Email</div>
                    <div className="text-gray-300">hello@thebuildknight.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Phone</div>
                    <div className="text-gray-300">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Location</div>
                    <div className="text-gray-300">San Francisco, CA</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="glass p-8 rounded-2xl hover-lift">
              <h4 className="text-xl font-bold text-white mb-6">Why Choose Us?</h4>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">24h</div>
                  <div className="text-gray-300 text-sm">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">99%</div>
                  <div className="text-gray-300 text-sm">On-Time Delivery</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">5★</div>
                  <div className="text-gray-300 text-sm">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">24/7</div>
                  <div className="text-gray-300 text-sm">Support</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-2xl hover-lift"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-medium mb-2">Name *</label>
                  <Input
                    {...register('name')}
                    placeholder="Your full name"
                    className={errors.name ? 'border-red-500' : ''}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Email *</label>
                  <Input
                    {...register('email')}
                    type="email"
                    placeholder="your@email.com"
                    className={errors.email ? 'border-red-500' : ''}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Budget */}
              <div>
                <label className="block text-white font-medium mb-2">Budget Range *</label>
                <select
                  {...register('budget')}
                  className="w-full h-12 rounded-lg glass-dark px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="">Select your budget range</option>
                  {BUDGET_OPTIONS.map(option => (
                    <option key={option.value} value={option.value} className="bg-gray-800">
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.budget && (
                  <p className="text-red-400 text-sm mt-1">{errors.budget.message}</p>
                )}
              </div>

              {/* Project Types */}
              <div>
                <label className="block text-white font-medium mb-2">Project Type *</label>
                <div className="grid grid-cols-2 gap-3">
                  {PROJECT_TYPES.map(type => (
                    <label key={type.value} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        {...register('projectTypes')}
                        value={type.value}
                        className="w-4 h-4 text-accent bg-transparent border-gray-600 rounded focus:ring-accent"
                      />
                      <span className="text-gray-300 text-sm">{type.label}</span>
                    </label>
                  ))}
                </div>
                {errors.projectTypes && (
                  <p className="text-red-400 text-sm mt-1">{errors.projectTypes.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-white font-medium mb-2">Project Details *</label>
                <textarea
                  {...register('message')}
                  rows={5}
                  placeholder="Tell us about your project, timeline, and any specific requirements..."
                  className="w-full rounded-lg glass-dark px-4 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-gradient-primary hover:opacity-90 text-white hover-lift disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </div>
                )}
              </Button>

              {/* Success Message */}
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-center"
                >
                  <p className="text-green-400 font-medium">
                    Message sent successfully! We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}