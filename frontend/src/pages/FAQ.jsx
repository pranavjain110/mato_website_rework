import { useState, useMemo } from 'react'
import { Card, Section, Typography, Icon } from '../components/ui'

// FAQ data - moved outside component to prevent re-creation on every render
const faqsData = [
    {
      category: "Product Specifications & Capabilities",
      items: [
        {
          question: "What are your lead times for custom orders?",
          answer: "Lead times vary depending on the complexity and quantity of the order. Typically, custom orders take 2-4 weeks from approval to delivery. Rush orders may be accommodated based on current capacity."
        },
        {
          question: "What materials do you work with?",
          answer: "We specialize in copper alloys, bronze, and gun metal components for various industrial applications. Our material expertise includes bronze bushings, thrust washers, and custom copper alloy components manufactured to exact specifications."
        },
        {
          question: "What are your manufacturing capabilities?",
          answer: "Our capabilities include sand casting, gravity die casting, precision machining with VMC and CNC Lathe, and complete quality control. We can handle both prototype and production quantities."
        },
        {
          question: "What size ranges can you manufacture?",
          answer: "We can manufacture components from small precision parts to larger industrial components. Our machining centers and casting capabilities allow for a wide range of sizes to meet diverse industrial requirements."
        }
      ]
    },
    {
      category: "Quality Processes & Certifications",
      items: [
        {
          question: "What quality certifications do you have?",
          answer: "We are ISO-9001 certified and maintain strict quality control processes including 100% in-process inspection using SPC Edge software. Our quality system ensures consistent, reliable manufacturing."
        },
        {
          question: "What quality control equipment do you use?",
          answer: "Our quality equipment includes CMM (Coordinate Measuring Machine), Contracer, Spectrometer, and SPC Edge software for statistical process control. We maintain digital work instructions and real-time monitoring."
        },
        {
          question: "Do you provide quality documentation?",
          answer: "Yes, we provide comprehensive quality documentation including material certificates, dimensional reports, CP/CPK analysis, and inspection reports. All documentation follows industry standards."
        },
        {
          question: "What is your quality inspection process?",
          answer: "We implement 100% in-process inspection with statistical process control. Every component is measured and documented using our advanced quality equipment before shipment."
        }
      ]
    },
    {
      category: "Ordering & Lead Times",
      items: [
        {
          question: "How do I request a quote?",
          answer: "You can request a quote through our contact form, email, or phone. Please provide drawings, specifications, quantities, and timeline requirements for the most accurate quotation."
        },
        {
          question: "What information do you need for quoting?",
          answer: "We need technical drawings or specifications, material requirements, quantity needed, tolerance requirements, and desired delivery timeline. The more detailed information you provide, the more accurate our quote will be."
        },
        {
          question: "Do you offer expedited services?",
          answer: "Yes, we can accommodate rush orders based on current capacity and part complexity. Contact us to discuss your urgent requirements and we'll work to meet your timeline."
        },
        {
          question: "What are your minimum order quantities?",
          answer: "We work with both prototype quantities and production runs. Minimum quantities depend on the part complexity and manufacturing process required. Contact us to discuss your specific needs."
        }
      ]
    },
    {
      category: "Custom Manufacturing",
      items: [
        {
          question: "Can you work with custom specifications?",
          answer: "Yes, we specialize in custom manufacturing and can work with your specific requirements and engineering drawings. Our engineering team can also assist with design optimization for manufacturability."
        },
        {
          question: "Do you offer design assistance?",
          answer: "Our experienced engineering team can provide design assistance and recommendations for manufacturability, material selection, and cost optimization while maintaining your performance requirements."
        },
        {
          question: "Can you reverse engineer existing parts?",
          answer: "Yes, we can reverse engineer existing components using our advanced measurement equipment including CMM and Contracer. We can create detailed drawings and specifications from sample parts."
        },
        {
          question: "Do you handle proprietary designs?",
          answer: "Absolutely. We maintain strict confidentiality for all customer designs and proprietary information. Non-disclosure agreements are available upon request to protect your intellectual property."
        }
      ]
    }
  ]

function FAQ() {
  const [openItems, setOpenItems] = useState(new Set())
  const [searchQuery, setSearchQuery] = useState('')

  // Flatten all FAQ items for searching
  const allFaqItems = useMemo(() => {
    return faqsData.flatMap(category => 
      category.items.map(item => ({
        ...item,
        category: category.category,
        id: `${category.category}-${item.question}`
      }))
    )
  }, [])

  // Filter FAQs based on search query
  const filteredFaqs = useMemo(() => {
    if (!searchQuery.trim()) return faqsData

    const searchLower = searchQuery.toLowerCase()
    const matchingItems = allFaqItems.filter(item => 
      item.question.toLowerCase().includes(searchLower) ||
      item.answer.toLowerCase().includes(searchLower) ||
      item.category.toLowerCase().includes(searchLower)
    )

    // Group matching items back by category
    const groupedResults = matchingItems.reduce((acc, item) => {
      const existingCategory = acc.find(cat => cat.category === item.category)
      if (existingCategory) {
        existingCategory.items.push(item)
      } else {
        acc.push({
          category: item.category,
          items: [item]
        })
      }
      return acc
    }, [])

    return groupedResults
  }, [searchQuery, allFaqItems])

  const toggleItem = (categoryIndex, itemIndex) => {
    const itemId = `${categoryIndex}-${itemIndex}`
    const newOpenItems = new Set(openItems)
    
    if (newOpenItems.has(itemId)) {
      newOpenItems.delete(itemId)
    } else {
      newOpenItems.add(itemId)
    }
    
    setOpenItems(newOpenItems)
  }

  const isItemOpen = (categoryIndex, itemIndex) => {
    return openItems.has(`${categoryIndex}-${itemIndex}`)
  }

  return (
    <>
      <Section padding="xl">
        <Section.Header 
          title="Frequently Asked Questions"
          subtitle="Common Questions"
          description="Find answers to common questions about our products, services, and processes"
          centered
        />
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Icon 
              name="search" 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-stone-400" 
            />
            <input
              type="text"
              placeholder="Search FAQ questions and answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all duration-200"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-stone-400 hover:text-stone-600 transition-colors"
              >
                <Icon name="times" />
              </button>
            )}
          </div>
          {searchQuery && (
            <Typography variant="caption" className="mt-2 text-center block">
              {filteredFaqs.reduce((total, category) => total + category.items.length, 0)} results found
            </Typography>
          )}
        </div>

        {/* FAQ Categories */}
        <div className="max-w-4xl mx-auto space-y-8">
          {filteredFaqs.length === 0 ? (
            <Card padding="lg" className="text-center">
              <Icon name="search" size="xl" color="muted" className="mb-4" />
              <Typography variant="h4" className="mb-2">No results found</Typography>
              <Typography variant="body" color="muted">
                Try adjusting your search terms or browse all categories below.
              </Typography>
            </Card>
          ) : (
            filteredFaqs.map((category, categoryIndex) => (
              <div key={category.category} className="space-y-4">
                <Typography variant="h3" className="text-stone-800 border-b border-stone-200 pb-2">
                  {category.category}
                </Typography>
                
                <div className="space-y-3">
                  {category.items.map((faq, itemIndex) => {
                    const isOpen = isItemOpen(categoryIndex, itemIndex)
                    
                    return (
                      <Card key={itemIndex} padding="none" shadow="sm" className="overflow-hidden">
                        <button
                          onClick={() => toggleItem(categoryIndex, itemIndex)}
                          className="w-full p-6 text-left hover:bg-stone-50 focus:bg-stone-50 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-inset transition-all duration-200"
                        >
                          <div className="flex items-center justify-between">
                            <Typography variant="h5" className="text-stone-800 pr-4">
                              {faq.question}
                            </Typography>
                            <Icon 
                              name={isOpen ? "chevron-up" : "chevron-down"} 
                              className="text-stone-400 transition-transform duration-200 flex-shrink-0"
                            />
                          </div>
                        </button>
                        
                        {isOpen && (
                          <div className="px-6 pb-6 animate-in slide-in-from-top-2 duration-300">
                            <Typography variant="body" color="muted" className="leading-relaxed">
                              {faq.answer}
                            </Typography>
                          </div>
                        )}
                      </Card>
                    )
                  })}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Contact CTA */}
        <div className="max-w-2xl mx-auto mt-16 text-center">
          <Card variant="primary" padding="lg">
            <Typography variant="h4" className="mb-4">Still have questions?</Typography>
            <Typography variant="body" className="mb-6">
              Can't find what you're looking for? Our team is here to help with any specific questions about our products and services.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors duration-200 font-medium"
              >
                <Icon name="envelope" className="mr-2" />
                Contact Us
              </a>
              <a 
                href="tel:+15551234567"
                className="inline-flex items-center justify-center px-6 py-3 border border-yellow-600 text-yellow-600 rounded-lg hover:bg-yellow-50 transition-colors duration-200 font-medium"
              >
                <Icon name="phone" className="mr-2" />
                Call Us
              </a>
            </div>
          </Card>
        </div>
      </Section>
    </>
  )
}

export default FAQ