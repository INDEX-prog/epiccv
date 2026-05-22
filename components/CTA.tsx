import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy-900"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-gold-500/10 via-transparent to-gold-500/10"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Decorative Elements */}
        <div className="flex justify-center gap-4 mb-8">
          <span className="text-4xl animate-float">⚔️</span>
          <span className="text-5xl animate-float" style={{ animationDelay: "0.5s" }}>👑</span>
          <span className="text-4xl animate-float" style={{ animationDelay: "1s" }}>🛡️</span>
        </div>

        {/* Heading */}
        <h2 className="font-medieval text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          <span className="text-white">Ready to Write Your </span>
          <span className="gradient-text text-shadow-gold">Legend?</span>
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
          Join hundreds of creative professionals who transformed their boring resumes into 
          <span className="text-gold-400 font-semibold"> unforgettable epic tales</span>. 
          Your next career adventure awaits!
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <Link href="/checkout?plan=trial" className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-navy-900 bg-gradient-to-r from-green-400 to-green-600 rounded-lg shadow-lg shadow-green-500/25 hover:from-green-300 hover:to-green-500 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto">
            <span className="mr-2">🎁</span>
            Start Free Trial
          </Link>
          <Link href="#pricing" className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto">
            <span className="mr-2">⚔️</span>
            Buy Now — $29
          </Link>
        </div>

        {/* Free Trial Note */}
        <p className="text-gray-400 text-sm mb-4">
          No credit card required for free trial • Preview your transformation first
        </p>

        {/* Urgency/Scarcity */}
        <p className="text-gray-400 text-sm">
          🔥 <span className="text-gold-400 font-medium">Limited time offer</span> — Price increases to $49 soon!
        </p>
      </div>
    </section>
  );
}
