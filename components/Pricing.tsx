"use client";

import { useState } from "react";

export default function Pricing() {
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const handleCheckout = async (): Promise<void> => {
    setIsProcessing(true);
    // In production, this would redirect to Stripe Checkout
    // For MVP, we'll simulate a redirect delay
    setTimeout(() => {
      // Redirect to Stripe checkout (placeholder URL)
      window.location.href = "/checkout";
    }, 500);
  };

  const features: string[] = [
    "Full AI-powered resume transformation",
    "Choice of 4 medieval fantasy themes",
    "ATS-compatible formatting",
    "PDF download",
    "Unlimited revisions for 7 days",
    "Priority support via email",
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-gold-500/10 border border-gold-500/30 rounded-full text-gold-400 text-sm font-medium mb-4">
            💰 Simple Pricing
          </span>
          <h2 className="font-medieval text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">One Quest, </span>
            <span className="gradient-text">One Price</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            No subscriptions. No hidden fees. Just pay once and receive your epic resume.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-lg mx-auto">
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-gold-500/20 via-gold-400/30 to-gold-500/20 rounded-3xl blur-xl"></div>
            
            <div className="relative bg-navy-800 border-2 border-gold-500/50 rounded-3xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-gold-500/20 via-gold-400/10 to-gold-500/20 p-8 text-center border-b border-gold-500/30">
                {/* Launch Offer Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gold-500/30 to-gold-400/30 border border-gold-400 rounded-full text-gold-300 text-sm font-bold mb-4 animate-pulse-slow">
                  <span>🏰</span>
                  <span>Launch Offer: 20% Off for a Limited Time!</span>
                </div>
                <h3 className="font-medieval text-2xl font-bold text-white mb-2">
                  Epic Resume Transformation
                </h3>
                <div className="flex items-baseline justify-center gap-3">
                  <span className="text-2xl md:text-3xl font-bold text-gray-500 line-through">$29</span>
                  <span className="text-5xl md:text-6xl font-bold gradient-text">$23</span>
                  <span className="text-gray-400">/ resume</span>
                </div>
                <p className="text-gold-400 text-sm mt-2 font-medium">One-time payment — Save $6 today!</p>
              </div>

              {/* Features */}
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-gold-400 mt-0.5">✓</span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={handleCheckout}
                  disabled={isProcessing}
                  className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isProcessing ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <>
                      <span className="mr-2">⚔️</span>
                      Claim Your Discount — Begin Now!
                    </>
                  )}
                </button>

                {/* Urgency Text */}
                <p className="text-center text-gold-400 text-sm mt-4 font-medium">
                  ⏳ This quest awaits only the swift — offer ends soon!
                </p>

                {/* Trust Badges */}
                <div className="flex items-center justify-center gap-4 mt-6 text-gray-500 text-sm">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    Secure Payment
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Instant Access
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-navy-800/50 border border-gold-500/20 rounded-full">
            <span className="text-2xl">🛡️</span>
            <div className="text-left">
              <p className="text-white font-medium">100% Satisfaction Guarantee</p>
              <p className="text-gray-400 text-sm">Not happy? Full refund within 7 days.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
