"use client";

import { useState } from "react";

export default function Pricing() {
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const handleCheckout = async (): Promise<void> => {
    setIsProcessing(true);
    setTimeout(() => {
      window.location.href = "https://epiccv.vercel.app";
    }, 500);
  };

  const features: string[] = [
    "Full AI-powered medieval fantasy rewrite",
    "Choice of fantasy themes (Knight, Wizard, Ranger, Royal Court)",
    "Preview your transformation before paying",
    "Download your epic resume",
    "Perfect for recent grads & creative job seekers",
    "Stand out in any application",
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
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gold-500/20 to-gold-400/10 border border-gold-500/40 rounded-full text-gold-400 text-sm font-bold mb-4 animate-pulse-slow">
            🔥 LAUNCH SPECIAL: 20% OFF — Limited Time Only!
          </span>
          <h2 className="font-medieval text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">One Quest, </span>
            <span className="gradient-text">One Epic Price</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            No subscriptions. No hidden fees. Preview free, pay only when you love it.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-lg mx-auto">
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-gold-500/20 via-gold-400/30 to-gold-500/20 rounded-3xl blur-xl"></div>
            
            <div className="relative bg-navy-800 border-2 border-gold-500/50 rounded-3xl overflow-hidden">
              {/* Launch Discount Banner */}
              <div className="bg-gradient-to-r from-gold-500 to-gold-600 py-2 px-4 text-center">
                <p className="text-navy-900 text-sm font-bold">
                  ⏰ LIMITED LAUNCH OFFER — Save 20% Today!
                </p>
              </div>
              
              {/* Header */}
              <div className="bg-gradient-to-r from-gold-500/20 via-gold-400/10 to-gold-500/20 p-8 text-center border-b border-gold-500/30">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/20 rounded-full text-green-400 text-sm font-medium mb-4">
                  <span>🎁</span>
                  <span>Free Preview Included</span>
                </div>
                <h3 className="font-medieval text-2xl font-bold text-white mb-4">
                  Epic Resume Transformation
                </h3>
                <div className="flex items-baseline justify-center gap-3">
                  <span className="text-2xl text-gray-500 line-through">$29</span>
                  <span className="text-5xl md:text-6xl font-bold gradient-text">$23</span>
                  <span className="text-gray-400">/ resume</span>
                </div>
                <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 bg-gold-500/20 rounded-full">
                  <span className="text-gold-400 text-sm font-medium">You save $6 with launch discount!</span>
                </div>
                <p className="text-gray-400 text-sm mt-3">One-time payment • Preview first, pay later</p>
              </div>

              {/* Features */}
              <div className="p-8">
                <p className="text-gray-400 text-sm mb-4 text-center">
                  <span className="text-gold-400">How it works:</span> Paste your resume text → Choose a medieval fantasy theme → See your epic preview free → Pay to download
                </p>
                
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
                      <span className="mr-2">🎁</span>
                      Start Free Preview — Pay Later
                    </>
                  )}
                </button>

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
                    No Card for Preview
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
              <p className="text-gray-400 text-sm">Preview free. Pay only when you&apos;re ready to download.</p>
            </div>
          </div>
        </div>

        {/* Urgency Note */}
        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">
            ⚠️ Launch pricing ends soon — <span className="text-gold-400 font-medium">Price returns to $29</span> after launch period
          </p>
        </div>
      </div>
    </section>
  );
}
