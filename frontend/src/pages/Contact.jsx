import { useState } from 'react'
import { Button } from '../components/ui'

function Contact() {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  
  // Form validation errors
  const [errors, setErrors] = useState({})
  
  // Submission state
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [submitType, setSubmitType] = useState('') // 'success' or 'error'

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  // Validate form
  const validateForm = () => {
    const newErrors = {}
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }
    
    return newErrors
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate form
    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    
    // Start submission
    setIsSubmitting(true)
    setSubmitMessage('')
    setErrors({})
    
    try {
      // Simulate API call (replace with actual backend integration)
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Success
      setSubmitType('success')
      setSubmitMessage('Thank you for your message! We\'ll get back to you soon.')
      setFormData({ name: '', email: '', message: '' })
    } catch {
      // Error
      setSubmitType('error')
      setSubmitMessage('Sorry, there was an error sending your message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Input field styling helper
  const getInputStyles = (fieldName) => {
    const baseStyles = "w-full p-3 border rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
    const errorStyles = errors[fieldName] ? "border-red-500 bg-red-50" : "border-gray-300 focus:border-yellow-500"
    return `${baseStyles} ${errorStyles}`
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>
        <p className="text-lg text-gray-600 mb-6">
          Get in touch with our team for inquiries and support
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div>
                <span className="font-medium">Email:</span>
                <span className="ml-2 text-gray-600">info@matoindustries.com</span>
              </div>
              <div>
                <span className="font-medium">Phone:</span>
                <span className="ml-2 text-gray-600">+1 (555) 123-4567</span>
              </div>
              <div>
                <span className="font-medium">Address:</span>
                <span className="ml-2 text-gray-600">123 Industrial Way, Manufacturing District, IN 46202</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Send us a Message</h3>
            
            {/* Success/Error Message */}
            {submitMessage && (
              <div className={`mb-4 p-4 rounded-lg ${
                submitType === 'success' 
                  ? 'bg-green-50 text-green-800 border border-green-200' 
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}>
                {submitMessage}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input 
                  id="name"
                  name="name"
                  type="text" 
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name" 
                  className={getInputStyles('name')}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input 
                  id="email"
                  name="email"
                  type="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email" 
                  className={getInputStyles('email')}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message" 
                  rows="4"
                  className={getInputStyles('message')}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-sm text-red-600">{errors.message}</p>
                )}
              </div>
              
              <Button 
                type="submit"
                variant="primary"
                size="lg"
                loading={isSubmitting}
                disabled={isSubmitting}
                fullWidth
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact