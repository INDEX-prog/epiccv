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
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/30 rounded-full mb-8">
          <span className="text-gold-400 text-sm font-medium">✨ AI-Powered Resume Magic</span>
        </div>

        {/* Main Heading */}
        <h1 className="font-medieval text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="text-white">Transform Your Resume Into a</span>
          <br />
          <span className="gradient-text text-shadow-gold">Medieval Fantasy Masterpiece</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
          Stand out in a saturated job market. Our AI rewrites your ordinary CV into an 
          <span className="text-gold-400 font-semibold"> epic tale</span> that employers cannot ignore.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <Link href="/checkout?plan=trial" className="btn-primary w-full sm:w-auto">
            <span className="mr-2">🎁</span>
            Start Free Trial
          </Link>
          <Link href="#how-it-works" className="btn-secondary w-full sm:w-auto">
            See How It Works
          </Link>
        </div>

        {/* Free Trial Note */}
        <p className="text-gray-400 text-sm mb-12">
          No credit card required • Preview first, pay later ($29)
        </p>

        {/* Social Proof */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 border-2 border-navy-900 flex items-center justify-center text-xs">🧙</div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-300 to-gold-500 border-2 border-navy-900 flex items-center justify-center text-xs">🗡️</div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-500 to-gold-700 border-2 border-navy-900 flex items-center justify-center text-xs">🏹</div>
            </div>
            <span>Join 500+ Epic Job Seekers</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-gold-400">★★★★★</span>
            <span>Rated 4.9/5</span>
          </div>
        </div>

        {/* Preview Card */}
        <div className="mt-16 relative max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-gold-500/20 via-gold-400/10 to-gold-500/20 rounded-2xl blur-xl"></div>
          <div className="relative card overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400"></div>
            <div className="grid md:grid-cols-2 gap-8 p-4 md:p-8">
              {/* Before */}
              <div className="text-left">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-red-400 text-xl">📄</span>
                  <span className="text-gray-400 font-medium">Before</span>
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
                  <span className="text-gold-400 font-medium">After — Epic Version</span>
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
