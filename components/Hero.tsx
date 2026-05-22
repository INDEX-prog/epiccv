import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-pattern"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold-400/5 rounded-full blur-3xl"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 text-gold-500/20 text-6xl animate-float">⚔️</div>
      <div className="absolute top-40 right-20 text-gold-500/20 text-5xl animate-float" style={{ animationDelay: "1s" }}>🛡️</div>
      <div className="absolute bottom-40 left-20 text-gold-500/20 text-5xl animate-float" style={{ animationDelay: "2s" }}>🏰</div>
      <div className="absolute bottom-20 right-10 text-gold-500/20 text-6xl animate-float" style={{ animationDelay: "1.5s" }}>👑</div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Launch Discount Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gold-500/20 to-gold-400/10 border border-gold-500/40 rounded-full mb-4 animate-pulse-slow">
          <span className="text-gold-400 text-sm font-bold">🔥 LAUNCH SPECIAL: 20% OFF — Limited Time!</span>
        </div>

        {/* Free Preview Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-8">
          <span className="text-green-400 text-sm font-medium">🎁 Free Preview — See Your Epic Transformation First</span>
        </div>

        {/* Main Heading */}
        <h1 className="font-medieval text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="text-white">Turn Your Boring Resume Into a</span>
          <br />
          <span className="gradient-text text-shadow-gold">Medieval Fantasy Legend</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-4 leading-relaxed">
          Recent grad? Creative job seeker? Stand out from the crowd!
          <br className="hidden sm:block" />
          <span className="text-gold-400 font-semibold"> Paste your resume → Choose a fantasy theme → Get an epic rewrite preview</span>
        </p>

        {/* MVP Scope Clarification */}
        <p className="text-gray-400 text-base max-w-2xl mx-auto mb-8">
          Simple & magical: Transform your plain text into a legendary tale that hiring managers will remember.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
          <Link href="https://epiccv.vercel.app" className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-navy-900 bg-gradient-to-r from-green-400 to-green-600 rounded-lg shadow-lg shadow-green-500/25 hover:from-green-300 hover:to-green-500 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto">
            <span className="mr-2">🎁</span>
            Try Free Preview
          </Link>
          <Link href="https://epiccv.vercel.app" className="btn-secondary w-full sm:w-auto">
            <span className="mr-2">⚔️</span>
            <span className="line-through text-gray-500 mr-2">$29</span>
            <span className="text-gold-400 font-bold">$23</span>
            <span className="text-xs ml-1 text-gold-400">(20% OFF)</span>
          </Link>
        </div>

        {/* Free Preview Note */}
        <p className="text-gray-400 text-sm mb-12">
          ✨ No credit card required • See your transformation before you pay • Limited launch pricing
        </p>

        {/* Social Proof */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 border-2 border-navy-900 flex items-center justify-center text-xs">🧙</div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-300 to-gold-500 border-2 border-navy-900 flex items-center justify-center text-xs">🗡️</div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-500 to-gold-700 border-2 border-navy-900 flex items-center justify-center text-xs">🏹</div>
            </div>
            <span>Perfect for Recent Grads & Creative Seekers</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-gold-400">★★★★★</span>
            <span>Stand Out Guaranteed</span>
          </div>
        </div>

        {/* Preview Card */}
        <div className="mt-16 relative max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-gold-500/20 via-gold-400/10 to-gold-500/20 rounded-2xl blur-xl"></div>
          <div className="relative card overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400"></div>
            
            {/* Preview Label */}
            <div className="bg-gradient-to-r from-green-500/20 to-green-400/10 py-2 px-4 border-b border-green-500/30">
              <p className="text-green-400 text-sm font-medium text-center">
                🎁 Free Preview — What You&apos;ll See Before Paying
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 p-4 md:p-8">
              {/* Before */}
              <div className="text-left">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-red-400 text-xl">📄</span>
                  <span className="text-gray-400 font-medium">Your Plain Resume Text</span>
                </div>
                <div className="bg-navy-900/50 rounded-lg p-4 border border-gray-700">
                  <p className="text-gray-400 text-sm leading-relaxed">
                    <span className="text-gray-500">Job Title:</span> Software Developer<br/>
                    <span className="text-gray-500">Experience:</span> 3 years of coding<br/>
                    <span className="text-gray-500">Skills:</span> JavaScript, React, Node.js<br/>
                    <span className="text-gray-500">Summary:</span> I am a dedicated developer looking for new opportunities...
                  </p>
                </div>
              </div>
              {/* After */}
              <div className="text-left">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-gold-400 text-xl">⚔️</span>
                  <span className="text-gold-400 font-medium">Epic Fantasy Rewrite</span>
                </div>
                <div className="bg-navy-900/50 rounded-lg p-4 border border-gold-500/30">
                  <p className="text-gold-100 text-sm leading-relaxed font-medieval">
                    <span className="text-gold-400">Title:</span> Code Sorcerer & Digital Realm Architect<br/>
                    <span className="text-gold-400">Quests:</span> 3 winters battling bugs & crafting spells<br/>
                    <span className="text-gold-400">Arsenal:</span> JavaScript Enchantments, React Alchemy<br/>
                    <span className="text-gold-400">Legend:</span> A battle-tested warrior of the digital realm, seeking new kingdoms to conquer...
                  </p>
                </div>
              </div>
            </div>
            
            {/* How It Works Mini */}
            <div className="bg-navy-900/30 py-4 px-6 border-t border-gold-500/20">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm">
                <div className="flex items-center gap-2 text-gray-400">
                  <span className="w-6 h-6 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-400 text-xs font-bold">1</span>
                  <span>Paste your text</span>
                </div>
                <span className="hidden sm:inline text-gold-500/50">→</span>
                <div className="flex items-center gap-2 text-gray-400">
                  <span className="w-6 h-6 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-400 text-xs font-bold">2</span>
                  <span>Pick fantasy theme</span>
                </div>
                <span className="hidden sm:inline text-gold-500/50">→</span>
                <div className="flex items-center gap-2 text-gray-400">
                  <span className="w-6 h-6 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-400 text-xs font-bold">3</span>
                  <span>See epic preview!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
