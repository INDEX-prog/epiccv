export default function Testimonials() {
  const testimonials: Array<{
    name: string;
    role: string;
    avatar: string;
    quote: string;
    rating: number;
  }> = [
    {
      name: "Sarah Chen",
      role: "Game Designer",
      avatar: "🧝‍♀️",
      quote:
        "I sent my EpicCV resume to three gaming studios. Got callbacks from ALL of them! The hiring manager at one studio said it was the most memorable resume they'd ever seen.",
      rating: 5,
    },
    {
      name: "Marcus Johnson",
      role: "UX Designer",
      avatar: "🧙‍♂️",
      quote:
        "Finally, a way to show my personality while still being professional. My resume now tells my career story like an epic adventure. Landed my dream job at a creative agency!",
      rating: 5,
    },
    {
      name: "Emma Rodriguez",
      role: "Copywriter",
      avatar: "🏹",
      quote:
        "As a writer, I appreciate good storytelling. EpicCV turned my boring bullet points into a compelling narrative. The Wizard theme was perfect for my brand!",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy-900"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gold-400/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-gold-500/10 border border-gold-500/30 rounded-full text-gold-400 text-sm font-medium mb-4">
            💬 Testimonials
          </span>
          <h2 className="font-medieval text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Tales From </span>
            <span className="gradient-text">Successful Adventurers</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real stories from job seekers who embarked on the EpicCV quest
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card group hover:border-gold-500/40 transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-gold-400">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 leading-relaxed mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-gold-500/20">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gold-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
