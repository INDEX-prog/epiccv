import Link from "next/link";

export default function FreeTrial() {
  const trialSteps: Array<{
    icon: string;
    title: string;
    description: string;
  }> = [
    {
      icon: "📝",
      title: "Sign Up Free",
      description:
        "Create your account in seconds — no credit card required to start.",
    },
    {
      icon: "⚔️",
      title: "Get Your Preview",
      description:
        "Upload your resume and see a preview of your epic medieval transformation.",
    },
    {
      icon: "👑",
      title: "Unlock Full Access",
      description:
        "Love what you see? Pay $29 to download your complete legendary resume.",
    },
  ];

  return (
    <section id="free-trial" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-800 via-navy-900 to-navy-800"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"></div>
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold-400/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm font-medium mb-4">
            <span>🎁</span>
            <span>Try Before You Buy</span>
          </span>
          <h2 className="font-medieval text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Start Your Quest </span>
            <span className="gradient-text">For Free</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Not sure if EpicCV is right for you? Try our free trial and see your resume 
            transformed before committing. No credit card required!
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Free Trial Card */}
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-gold-400/20 to-green-500/10 rounded-3xl blur-xl"></div>
            
            <div className="relative bg-navy-800 border-2 border-green-500/30 rounded-3xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-green-500/20 via-green-400/10 to-green-500/20 p-8 text-center border-b border-green-500/30">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/20 rounded-full text-green-400 text-sm font-medium mb-4">
                  <span>✨</span>
                  <span>Free Trial</span>
                </div>
                <h3 className="font-medieval text-2xl font-bold text-white mb-2">
                  Preview Your Epic Resume
                </h3>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl md:text-6xl font-bold text-green-400">$0</span>
                  <span className="text-gray-400">to start</span>
                </div>
                <p className="text-gray-400 text-sm mt-2">No credit card required</p>
              </div>

              {/* Features */}
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-0.5">✓</span>
                    <span className="text-gray-300">See a preview of your transformed resume</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-0.5">✓</span>
                    <span className="text-gray-300">Try all 4 medieval fantasy themes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-0.5">✓</span>
                    <span className="text-gray-300">No commitment, cancel anytime</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-0.5">✓</span>
                    <span className="text-gray-300">Upgrade only when you&apos;re ready</span>
                  </li>
                </ul>

                {/* CTA Button */}
                <Link
                  href="/checkout?plan=trial"
                  className="w-full inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-navy-900 bg-gradient-to-r from-green-400 to-green-600 rounded-lg shadow-lg shadow-green-500/25 hover:from-green-300 hover:to-green-500 transform hover:scale-105 transition-all duration-300"
                >
                  <span className="mr-2">🎁</span>
                  Start Free Trial
                </Link>

                {/* Note */}
                <p className="text-gray-500 text-xs text-center mt-4">
                  Pay $29 only when you&apos;re ready to download
                </p>
              </div>
            </div>
          </div>

          {/* Right: How It Works */}
          <div>
            <h3 className="font-medieval text-2xl font-bold text-white mb-8">
              How the Free Trial Works
            </h3>
            
            <div className="space-y-6">
              {trialSteps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-navy-900 font-bold">
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pb-6 border-b border-gold-500/20 last:border-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{step.icon}</span>
                      <h4 className="font-medieval text-lg font-bold text-white">
                        {step.title}
                      </h4>
                    </div>
                    <p className="text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Guarantee */}
            <div className="mt-8 p-4 bg-navy-800/50 border border-gold-500/20 rounded-xl flex items-start gap-3">
              <span className="text-2xl">🛡️</span>
              <div>
                <p className="text-white font-medium">Risk-Free Guarantee</p>
                <p className="text-gray-400 text-sm">
                  Try the preview completely free. Only pay when you&apos;re 100% satisfied with your epic transformation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-4">
            Ready to see your resume become legendary?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/checkout?plan=trial" className="btn-secondary">
              <span className="mr-2">🎁</span>
              Start Free Trial
            </Link>
            <span className="text-gray-500">or</span>
            <Link href="#pricing" className="text-gold-400 hover:text-gold-300 transition-colors font-medium">
              Skip to full purchase →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
