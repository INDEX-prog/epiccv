"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface FormData {
  email: string;
  name: string;
}

type PlanType = "trial" | "full";

export default function CheckoutPage() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    name: "",
  });
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [step, setStep] = useState<number>(1);
  const [selectedPlan, setSelectedPlan] = useState<PlanType>("full");

  useEffect(() => {
    // Check URL params for plan selection
    const params = new URLSearchParams(window.location.search);
    const plan = params.get("plan");
    if (plan === "trial") {
      setSelectedPlan("trial");
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate processing
    setTimeout(() => {
      setStep(2);
      setIsProcessing(false);
    }, 1500);
  };

  const isTrial = selectedPlan === "trial";

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
                  {isTrial ? "Free Trial" : "Order Summary"}
                </h2>

                {/* Plan Selection Toggle */}
                <div className="mb-6 p-4 bg-navy-900/50 rounded-lg border border-gold-500/20">
                  <p className="text-gray-400 text-sm mb-3">Select your plan:</p>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedPlan("trial")}
                      className={`p-3 rounded-lg border-2 transition-all text-center ${
                        isTrial
                          ? "border-green-500 bg-green-500/10"
                          : "border-gold-500/30 hover:border-gold-500/50"
                      }`}
                    >
                      <span className="block text-lg mb-1">🎁</span>
                      <span className={`block font-semibold ${isTrial ? "text-green-400" : "text-gray-300"}`}>
                        Free Trial
                      </span>
                      <span className={`text-xs ${isTrial ? "text-green-400/70" : "text-gray-500"}`}>
                        Preview first
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedPlan("full")}
                      className={`p-3 rounded-lg border-2 transition-all text-center ${
                        !isTrial
                          ? "border-gold-500 bg-gold-500/10"
                          : "border-gold-500/30 hover:border-gold-500/50"
                      }`}
                    >
                      <span className="block text-lg mb-1">⚔️</span>
                      <span className={`block font-semibold ${!isTrial ? "text-gold-400" : "text-gray-300"}`}>
                        Full Access
                      </span>
                      <span className={`text-xs ${!isTrial ? "text-gold-400/70" : "text-gray-500"}`}>
                        $29 one-time
                      </span>
                    </button>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className={`flex items-start gap-4 p-4 bg-navy-900/50 rounded-lg border ${
                    isTrial ? "border-green-500/20" : "border-gold-500/20"
                  }`}>
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl flex-shrink-0 ${
                      isTrial 
                        ? "bg-gradient-to-br from-green-400 to-green-600" 
                        : "bg-gradient-to-br from-gold-400 to-gold-600"
                    }`}>
                      {isTrial ? "🎁" : "⚔️"}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold">
                        {isTrial ? "Free Trial Preview" : "Epic Resume Transformation"}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {isTrial 
                          ? "Preview your epic resume transformation" 
                          : "AI-powered medieval fantasy resume"
                        }
                      </p>
                    </div>
                    <span className={`font-bold ${isTrial ? "text-green-400" : "text-gold-400"}`}>
                      {isTrial ? "Free" : "$29"}
                    </span>
                  </div>
                </div>

                <div className="border-t border-gold-500/20 pt-4 space-y-2">
                  <div className="flex justify-between text-gray-400">
                    <span>Subtotal</span>
                    <span>{isTrial ? "$0.00" : "$29.00"}</span>
                  </div>
                  <div className="flex justify-between text-white font-bold text-lg">
                    <span>Total {isTrial && <span className="text-sm font-normal text-gray-400">(today)</span>}</span>
                    <span className={isTrial ? "text-green-400" : "gradient-text"}>
                      {isTrial ? "$0.00" : "$29.00"}
                    </span>
                  </div>
                </div>

                {/* What's Included */}
                <div className="mt-6 pt-6 border-t border-gold-500/20">
                  <h4 className="text-white font-semibold mb-3">
                    {isTrial ? "Free Trial Includes:" : "What's Included:"}
                  </h4>
                  {isTrial ? (
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li className="flex items-center gap-2">
                        <span className="text-green-400">✓</span>
                        Preview of your transformed resume
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-400">✓</span>
                        Try all 4 medieval themes
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-400">✓</span>
                        No credit card required
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-400">✓</span>
                        Upgrade anytime for $29
                      </li>
                    </ul>
                  ) : (
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
                  )}
                </div>

                {/* Trust Badges */}
                <div className="mt-6 flex items-center justify-center gap-4 text-gray-500 text-sm">
                  {isTrial ? (
                    <span className="flex items-center gap-1">
                      🎁 No payment required
                    </span>
                  ) : (
                    <>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                        Secure
                      </span>
                      <span className="flex items-center gap-1">
                        🛡️ 7-day guarantee
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="order-1 lg:order-2">
              <div className="card">
                <h2 className="font-medieval text-2xl font-bold text-white mb-6">
                  {isTrial ? "Start Your Free Trial" : "Complete Your Quest"}
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

                  {/* Payment Section - Only show for full plan */}
                  {!isTrial && (
                    <div className="p-4 bg-navy-900/50 border border-gold-500/30 rounded-lg">
                      <p className="text-gray-400 text-sm text-center">
                        💳 Stripe payment integration ready
                      </p>
                      <p className="text-gray-500 text-xs text-center mt-1">
                        Set NEXT_PUBLIC_STRIPE_KEY and STRIPE_SECRET_KEY in environment variables
                      </p>
                    </div>
                  )}

                  {/* Free Trial Info */}
                  {isTrial && (
                    <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">🎁</span>
                        <div>
                          <p className="text-green-400 font-medium text-sm">No payment required</p>
                          <p className="text-gray-400 text-xs mt-1">
                            Start your free trial now. You&apos;ll only pay $29 when you&apos;re ready to download your full resume.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isProcessing}
                    className={`w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ${
                      isTrial
                        ? "text-navy-900 bg-gradient-to-r from-green-400 to-green-600 shadow-green-500/25 hover:from-green-300 hover:to-green-500"
                        : "btn-primary"
                    }`}
                  >
                    {isProcessing ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Processing...
                      </span>
                    ) : isTrial ? (
                      <>
                        <span className="mr-2">🎁</span>
                        Start Free Trial
                      </>
                    ) : (
                      <>
                        <span className="mr-2">⚔️</span>
                        Pay $29 & Begin Quest
                      </>
                    )}
                  </button>
                </form>

                <p className="text-gray-500 text-xs text-center mt-4">
                  By {isTrial ? "starting your free trial" : "completing this purchase"}, you agree to our{" "}
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
              <div className="text-6xl mb-6">{isTrial ? "🎁" : "🎉"}</div>
              <h2 className="font-medieval text-3xl font-bold gradient-text mb-4">
                {isTrial ? "Trial Activated!" : "Quest Accepted!"}
              </h2>
              <p className="text-gray-300 mb-6">
                {isTrial ? (
                  <>
                    Welcome, brave adventurer! Your free trial has been activated. 
                    Check your email at <span className="text-green-400">{formData.email}</span> for 
                    instructions to start your epic resume transformation preview.
                  </>
                ) : (
                  <>
                    Thank you, brave adventurer! Your payment has been received. 
                    Check your email at <span className="text-gold-400">{formData.email}</span> for 
                    instructions to begin your epic resume transformation.
                  </>
                )}
              </p>

              <div className={`p-4 bg-navy-900/50 rounded-lg border mb-6 ${
                isTrial ? "border-green-500/30" : "border-gold-500/30"
              }`}>
                <p className="text-sm text-gray-400">
                  <span className={`font-medium ${isTrial ? "text-green-400" : "text-gold-400"}`}>Next Step:</span>{" "}
                  {isTrial 
                    ? "Upload your current resume and see a preview of your transformation. Pay $29 only when you're ready to download!"
                    : "You will receive an email with a link to upload your current resume and select your medieval theme."
                  }
                </p>
              </div>

              {isTrial && (
                <div className="p-4 bg-gold-500/10 border border-gold-500/30 rounded-lg mb-6">
                  <p className="text-sm text-gold-400">
                    💡 <span className="font-medium">Tip:</span> Love your preview? Upgrade to full access for just $29 to download your complete legendary resume.
                  </p>
                </div>
              )}

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
            © {new Date().getFullYear()} EpicCV. {!isTrial && "Secure payment powered by Stripe."}
          </p>
        </div>
      </footer>
    </div>
  );
}
