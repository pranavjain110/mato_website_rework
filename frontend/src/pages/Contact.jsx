function Contact() {
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
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Send us a Message</h3>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full p-3 border rounded-lg"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full p-3 border rounded-lg"
              />
              <textarea 
                placeholder="Your Message" 
                rows="4"
                className="w-full p-3 border rounded-lg"
              ></textarea>
              <button 
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact