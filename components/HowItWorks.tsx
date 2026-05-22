import Link from "next/link";

export default function HowItWorks() {
  const steps: Array<{
    number: string;
    icon: string;
    title: string;
    description: string;
  }> = [
    {
      number: "01",
      icon: "📜",
      title: "Paste Your Resume",
      description:
        "Copy and paste your existing resume text. Don't worry about formatting — our AI handles it all.",
    },
    {
      number: "02",
      icon: "🏰",
      title: "Choose Your Theme",
      description:
        "Select from Knight, Wizard, Ranger, or Royal Court. Each theme brings a unique medieval fantasy flavor.",
    },
    {
      number: "03",
      icon: "⚡",
      title: "AI Transformation",
      description:
        "Our AI wizard works its magic, transforming your mundane text into an epic medieval tale.",
    },
    {
      number: "04",
      icon: "👑",
      title: "Download & Conquer",
      description:
        "Receive your legendary resume in PDF format. Ready to send to any kingdom... err, company!",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy-900"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-gold-500/10 border border-gold-500/30 rounded-full text-gold-400 text-sm font-medium mb-4">
            🗺️ Your Quest
          </span>
          <h2 className="font-medieval text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">How </span>
            <span className="gradient-text">It Works</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Four simple steps to transform your resume into an epic legend
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-500/30 to-transparent transform -translate-y-1/2"></div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="card text-center group hover:border-gold-500/40 transition-all duration-300 h-full">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center text-navy-900 font-bold text-sm">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="text-5xl mb-4 pt-4 transform group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>

                  {/* Title */}
                  <h3 className="font-medieval text-xl font-bold text-white mb-3 group-hover:text-gold-400 transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow (mobile/tablet) */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <svg
                      className="w-6 h-6 text-gold-500/50 transform rotate-90 sm:rotate-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link href="#pricing" className="btn-primary">
            <span className="mr-2">🚀</span>
            Start Your Transformation
          </Link>
        </div>
      </div>
    </section>
  );
}
