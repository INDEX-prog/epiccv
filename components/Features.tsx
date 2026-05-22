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
        "Our advanced AI analyzes your resume and rewrites it with epic medieval fantasy flair while keeping all your real achievements intact.",
    },
    {
      icon: "⚡",
      title: "Instant Results",
      description:
        "No waiting around. Get your transformed resume in under 2 minutes. Time is gold, adventurer!",
    },
    {
      icon: "🎯",
      title: "ATS-Friendly",
      description:
        "Despite the fantasy styling, your resume remains parseable by Applicant Tracking Systems. Best of both worlds!",
    },
    {
      icon: "🎨",
      title: "Multiple Themes",
      description:
        "Choose from Knight, Wizard, Ranger, or Royal Court themes. Each brings a unique flavor to your professional tale.",
    },
    {
      icon: "📝",
      title: "Easy Editing",
      description:
        "Download in multiple formats and easily tweak any section. Your epic story, your rules.",
    },
    {
      icon: "💎",
      title: "Unforgettable Impact",
      description:
        "Make recruiters smile and remember you. Stand out from thousands of boring, templated resumes.",
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
            ✨ Features
          </span>
          <h2 className="font-medieval text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Your </span>
            <span className="gradient-text">Legendary Arsenal</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Every tool you need to craft a resume worthy of the halls of Valhalla
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
      </div>
    </section>
  );
}
