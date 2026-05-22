"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "Will my resume still be taken seriously?",
      answer:
        "Absolutely! While your resume will have medieval fantasy flair, we ensure all your real qualifications, experience, and achievements remain clearly visible and ATS-compatible. Think of it as professional content with a memorable presentation. Many hiring managers appreciate creativity, especially in creative industries!",
    },
    {
      question: "How long does the transformation take?",
      answer:
        "Our AI wizard works fast! Most resumes are transformed in under 2 minutes. You'll receive your epic resume immediately after the AI completes its magic.",
    },
    {
      question: "Can I edit the result?",
      answer:
        "Yes! You'll receive your transformed resume in editable PDF format. You can tweak any section to perfectly match your voice and needs.",
    },
    {
      question: "What if I don't like the result?",
      answer:
        "We offer a 100% satisfaction guarantee. If you're not completely happy with your epic resume, contact us within 7 days for a full refund. No questions asked!",
    },
    {
      question: "Which industries is this best for?",
      answer:
        "EpicCV shines brightest in creative industries: gaming, design, writing, marketing, entertainment, and tech startups. However, we've seen success across many fields where showing personality is valued!",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes! We use industry-standard encryption and never share your personal information. Your resume data is processed securely and only used to generate your transformation.",
    },
  ];

  const toggleFAQ = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"></div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-gold-500/10 border border-gold-500/30 rounded-full text-gold-400 text-sm font-medium mb-4">
            ❓ FAQ
          </span>
          <h2 className="font-medieval text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Questions From </span>
            <span className="gradient-text">Fellow Adventurers</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Everything you need to know before embarking on your quest
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="card p-0 overflow-hidden hover:border-gold-500/40 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-white pr-4">
                  {faq.question}
                </span>
                <span
                  className={`text-gold-400 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-6 text-gray-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
