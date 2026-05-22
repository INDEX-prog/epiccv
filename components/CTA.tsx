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

        {/* Launch Discount Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gold-500/20 to-gold-400/10 border border-gold-500/40 rounded-full mb-6 animate-pulse-slow">
          <span className="text-gold-400 text-sm font-bold">🔥 20% LAUNCH DISCOUNT — Limited Time!</span>
        </div>

        {/* Heading */}
        <h2 className="font-medieval text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          <span className="text-white">Ready to Forge Your </span>
          <span className="gradient-text text-shadow-gold">Legend?</span>
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
          Recent grad or creative job seeker? Transform your boring resume into an 
          <span className="text-gold-400 font-semibold"> unforgettable medieval fantasy epic</span>. 
        </p>

        {/* MVP Value Prop */}
        <p className="text-gray-400 text-base max-w-xl mx-auto mb-8">
          Simple process: Paste your text → Choose your theme → See your epic preview free → Download when ready
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <Link href="https://epiccv.vercel.app" className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-navy-900 bg-gradient-to-r from-green-400 to-green-600 rounded-lg shadow-lg shadow-green-500/25 hover:from-green-300 hover:to-green-500 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto">
            <span className="mr-2">🎁</span>
            Try Free Preview
          </Link>
          <Link href="https://epiccv.vercel.app" className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto">
            <span className="mr-2">⚔️</span>
            <span className="line-through text-gray-500 mr-2">$29</span>
            <span className="text-gold-400 font-bold">$23</span>
          </Link>
        </div>

        {/* Free Preview Note */}
        <p className="text-gray-400 text-sm mb-4">
          ✨ No credit card required for preview • See your transformation first
        </p>

        {/* Urgency/Scarcity */}
        <p className="text-gray-400 text-sm">
          ⏰ <span className="text-gold-400 font-medium">Launch pricing ends soon</span> — Price returns to $29!
        </p>
      </div>
    </section>
  );
}
