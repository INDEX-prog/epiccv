export default function Features() {
  const features: Array<{
    icon: string;
    title: string;
    description: string;
  }> = [
    {
      icon: "🧙‍♂️",
      title: "AI-Powered Transformation",
      description:
        "Our magical AI transforms your plain resume text into an epic medieval fantasy tale — while keeping all your real achievements intact.",
    },
    {
      icon: "⚡",
      title: "Instant Epic Preview",
      description:
        "See your transformation in seconds. Preview completely free — no credit card needed. Pay only when you&apos;re ready to download!",
    },
    {
      icon: "🏰",
      title: "Medieval Fantasy Themes",
      description:
        "Choose from Knight, Wizard, Ranger, or Royal Court themes. Each brings a unique legendary flavor to your professional tale.",
    },
    {
      icon: "🎯",
      title: "Perfect for Standing Out",
      description:
        "Recent grad or creative job seeker? Make hiring managers remember YOUR name with a resume that tells an unforgettable story.",
    },
    {
      icon: "📝",
      title: "Simple Paste & Transform",
      description:
        "Just paste your resume text, pick a fantasy theme, and watch the magic happen. No complicated formatting or uploads needed.",
    },
    {
      icon: "💎",
      title: "Unforgettable Impact",
      description:
        "Stand out from thousands of boring, templated resumes. Your epic legend makes recruiters smile and remember you.",
    },
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-gold-500/10 border border-gold-500/30 rounded-full text-gold-400 text-sm font-medium mb-4">
            ✨ Why EpicCV?
          </span>
          <h2 className="font-medieval text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Your </span>
            <span className="gradient-text">Legendary Arsenal</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Transform your boring resume into a medieval fantasy masterpiece that gets noticed
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card group hover:border-gold-500/40 hover:bg-navy-700/50 transition-all duration-300"
            >
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="font-medieval text-xl font-bold text-white mb-3 group-hover:text-gold-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Target Audience Callout */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-navy-800/50 border border-gold-500/20 rounded-xl">
            <span className="text-3xl">🎓</span>
            <div className="text-left">
              <p className="text-white font-medium">Built for Recent Grads & Creative Job Seekers</p>
              <p className="text-gray-400 text-sm">Stand out from the crowd with a resume that tells YOUR epic story</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
