'use client'
import { useState } from 'react'

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const faqs = [
        {
            question: "What age groups do you cater to?",
            answer: "My programs are for all ages! Kids' classes are designed for ages 4-12, with age-specific activities. Adult classes welcome participants 13 and older. I also offer family workshops where different ages can create together."
        },
        {
            question: "Do I need to bring my own materials?",
            answer: "No! All materials and tools are provided for every class and workshop. I supply high-quality wool, macrame cord, paints, brushes, and all other necessary supplies. Just bring your creativity!"
        },
        {
            question: "How long are the classes?",
            answer: "Class duration varies by age group and project type. Kids' classes are typically 30-60 minutes (it depends on age), while adult classes range from 90 minutes to 3 hours depending on the complexity of the project."
        },
        {
            question: "Can I book a private party or group event?",
            answer: "Yes! I’d love to bring the joy of art to your event. I offer customized workshops for private parties and groups, creating memorable, hands-on experiences for all participants."
        },
        {
            question: "What is wool painting exactly?",
            answer: "Wool painting is a unique art form where you create pictures using colored wool fibers instead of paint. You use just your own hands: no needles, no water, no other tools. The wool is layered and felted to create beautiful, textured artwork. It's therapeutic, eco-friendly, and suitable for all skill levels."
        },
        {
            question: "Do you offer beginner-friendly classes?",
            answer: "Absolutely! No prior drawing or crafting experience is needed. My classes are designed for beginners, with step-by-step guidance to ensure everyone feels confident and inspired, no matter their skill level."
        },
        {
            question: "What safety measures do you have for children?",
            answer: "Your child's safety is my top priority. I use only non-toxic, child-safe materials and age-appropriate tools. All classes are fully supervised to ensure a secure environment. My workspace is kept clean and organized, and I’m certified in First Aid and CPR, with supplies always on hand for added peace of mind."
        }
    ]

    return (
        <div className="py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h1>
                    <p className="text-xl text-gray-600">
                        Find answers to common questions about our classes and workshops
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-cream rounded-lg shadow-lg overflow-hidden border border-warm-200">
                            <button
                                className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-warm-50 transition-colors"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <h3 className="text-lg font-semibold text-dark pr-4">{faq.question}</h3>
                                <svg
                                    className={`w-5 h-5 text-primary transition-transform ${
                                        openIndex === index ? 'transform rotate-180' : ''
                                    }`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {openIndex === index && (
                                <div className="px-6 pb-4">
                                    <p className="text-medium">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <div className="bg-warm-100 rounded-lg p-8 border border-warm-300">
                        <h2 className="text-2xl font-semibold text-dark mb-4">Still Have Questions?</h2>
                        <a
                            href="mailto:orlowa.tatiana.lynx@gmail.com"
                            className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors inline-block"
                            aria-label="Email to contact for art classes"
                        >
                            Contact me
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ
