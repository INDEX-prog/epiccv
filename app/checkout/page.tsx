"use client";

import { useState } from "react";
import Link from "next/link";

interface FormData {
  email: string;
  name: string;
}

export default function CheckoutPage() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    name: "",
  });
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [step, setStep] = useState<number>(1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    // In production, this would create a Stripe checkout session
    setTimeout(() => {
      setStep(2);
      setIsProcessing(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-navy-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-pattern"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold-400/5 rounded-full blur-3xl"></div>

      {/* Header */}
      <header className="relative z-10 border-b border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                <span className="text-navy-900 font-medieval font-bold text-xl">E</span>
              </div>
              <span className="font-medieval text-xl gradient-text font-bold">EpicCV</span>
            </Link>
            <Link href="/" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">
              ← Back to Home
            </Link>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {step === 1 ? (
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Order Summary */}
            <div className="order-2 lg:order-1">
              <div className="card">
                <h2 className="font-medieval text-2xl font-bold text-white mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-4 p-4 bg-navy-900/50 rounded-lg border border-gold-500/20">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-2xl flex-shrink-0">
                      ⚔️
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold">Epic Resume Transformation</h3>
                      <p className="text-gray-400 text-sm">AI-powered medieval fantasy resume</p>
                    </div>
                    <span className="text-gold-400 font-bold">$29</span>
                  </div>
                </div>

                <div className="border-t border-gold-500/20 pt-4 space-y-2">
                  <div className="flex justify-between text-gray-400">
                    <span>Subtotal</span>
                    <span>$29.00</span>
                  </div>
                  <div className="flex justify-between text-white font-bold text-lg">
                    <span>Total</span>
                    <span className="gradient-text">$29.00</span>
                  </div>
                </div>

                {/* What's Included */}
                <div className="mt-6 pt-6 border-t border-gold-500/20">
                  <h4 className="text-white font-semibold mb-3">What&apos;s Included:</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-center gap-2">
                      <span className="text-gold-400">✓</span>
                      Full AI-powered transformation
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-gold-400">✓</span>
                      Choice of 4 medieval themes
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-gold-400">✓</span>
                      ATS-compatible formatting
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-gold-400">✓</span>
                      PDF download
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-gold-400">✓</span>
                      7-day revision period
                    </li>
                  </ul>
                </div>

                {/* Trust Badges */}
                <div className="mt-6 flex items-center justify-center gap-4 text-gray-500 text-sm">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    Secure
                  </span>
                  <span className="flex items-center gap-1">
                    🛡️ 7-day guarantee
                  </span>
                </div>
              </div>
            </div>

            {/* Payment Form */}
            <div className="order-1 lg:order-2">
              <div className="card">
                <h2 className="font-medieval text-2xl font-bold text-white mb-6">
                  Complete Your Quest
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-navy-900/50 border border-gold-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 transition-colors"
                      placeholder="Sir Lancelot du Lac"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-navy-900/50 border border-gold-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 transition-colors"
                      placeholder="knight@roundtable.com"
                    />
                  </div>

                  {/* Stripe Placeholder */}
                  <div className="p-4 bg-navy-900/50 border border-gold-500/30 rounded-lg">
                    <p className="text-gray-400 text-sm text-center">
                      💳 Stripe payment integration ready
                    </p>
                    <p className="text-gray-500 text-xs text-center mt-1">
                      Set NEXT_PUBLIC_STRIPE_KEY and STRIPE_SECRET_KEY in environment variables
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isProcessing ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <>
                        <span className="mr-2">⚔️</span>
                        Pay $29 & Begin Quest
                      </>
                    )}
                  </button>
                </form>

                <p className="text-gray-500 text-xs text-center mt-4">
                  By completing this purchase, you agree to our{" "}
                  <Link href="/terms" className="text-gold-400 hover:underline">Terms of Service</Link>
                  {" "}and{" "}
                  <Link href="/privacy" className="text-gold-400 hover:underline">Privacy Policy</Link>.
                </p>
              </div>
            </div>
          </div>
        ) : (
          /* Success State */
          <div className="max-w-lg mx-auto text-center">
            <div className="card">
              <div className="text-6xl mb-6">🎉</div>
              <h2 className="font-medieval text-3xl font-bold gradient-text mb-4">
                Quest Accepted!
              </h2>
              <p className="text-gray-300 mb-6">
                Thank you, brave adventurer! Your payment has been received. 
                Check your email at <span className="text-gold-400">{formData.email}</span> for 
                instructions to begin your epic resume transformation.
              </p>

              <div className="p-4 bg-navy-900/50 rounded-lg border border-gold-500/30 mb-6">
                <p className="text-sm text-gray-400">
                  <span className="text-gold-400 font-medium">Next Step:</span> You will receive an email 
                  with a link to upload your current resume and select your medieval theme.
                </p>
              </div>

              <Link href="/" className="btn-secondary inline-flex">
                Return to Homepage
              </Link>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gold-500/20 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} EpicCV. Secure payment powered by Stripe.
          </p>
        </div>
      </footer>
    </div>
  );
}
