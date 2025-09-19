function FAQ() {
  const faqs = [
    {
      question: "What are your lead times for custom orders?",
      answer: "Lead times vary depending on the complexity and quantity of the order. Typically, custom orders take 2-4 weeks from approval to delivery."
    },
    {
      question: "What quality certifications do you have?",
      answer: "We are ISO-9001 certified and maintain strict quality control processes including 100% in-process inspection using SPC Edge software."
    },
    {
      question: "Can you work with custom specifications?",
      answer: "Yes, we specialize in custom manufacturing and can work with your specific requirements and engineering drawings."
    },
    {
      question: "What materials do you work with?",
      answer: "We specialize in copper alloys, bronze, and gun metal components for various industrial applications."
    }
  ]

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h1>
        <p className="text-lg text-gray-600 mb-8">
          Common questions about our products and services
        </p>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-600">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQ