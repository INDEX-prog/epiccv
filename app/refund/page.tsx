import Link from "next/link";

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-navy-900">
      {/* Header */}
      <header className="border-b border-gold-500/20">
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

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-medieval text-4xl font-bold gradient-text mb-8">Refund Policy</h1>
        
        <div className="prose prose-invert max-w-none">
          <div className="card mb-8">
            <div className="flex items-center gap-4 mb-6 p-4 bg-gold-500/10 border border-gold-500/30 rounded-lg">
              <span className="text-4xl">🛡️</span>
              <div>
                <h2 className="font-medieval text-xl text-white mb-1">100% Satisfaction Guarantee</h2>
                <p className="text-gray-400 text-sm">We want you to be completely happy with your epic resume!</p>
              </div>
            </div>

            <h2 className="font-medieval text-2xl text-white mb-4">Our Commitment</h2>
            <p className="text-gray-400 mb-6">
              At EpicCV, we stand behind the quality of our service. If you&apos;re not satisfied with 
              your transformed resume for any reason, we offer a full refund within 7 days of purchase.
            </p>

            <h2 className="font-medieval text-2xl text-white mb-4">How to Request a Refund</h2>
            <p className="text-gray-400 mb-6">
              To request a refund, simply:
            </p>
            <ol className="list-decimal list-inside text-gray-400 mb-6 space-y-2">
              <li>Email us at <a href="mailto:support@epiccv.com" className="text-gold-400 hover:underline">support@epiccv.com</a></li>
              <li>Include your order confirmation number</li>
              <li>Let us know why you&apos;re not satisfied (optional, but helps us improve)</li>
            </ol>

            <h2 className="font-medieval text-2xl text-white mb-4">Refund Timeline</h2>
            <p className="text-gray-400 mb-6">
              Once we receive your refund request:
            </p>
            <ul className="list-disc list-inside text-gray-400 mb-6 space-y-2">
              <li>We&apos;ll process your refund within 24-48 hours</li>
              <li>Your refund will appear on your statement within 5-10 business days</li>
              <li>The timeframe depends on your bank or credit card company</li>
            </ul>

            <h2 className="font-medieval text-2xl text-white mb-4">Eligibility</h2>
            <p className="text-gray-400 mb-6">
              Refunds are available for purchases made within the last 7 days. After 7 days, 
              we may offer partial refunds or credits on a case-by-case basis.
            </p>

            <h2 className="font-medieval text-2xl text-white mb-4">Before Requesting a Refund</h2>
            <p className="text-gray-400 mb-6">
              If you&apos;re not happy with your transformed resume, consider these options first:
            </p>
            <ul className="list-disc list-inside text-gray-400 mb-6 space-y-2">
              <li><strong className="text-gold-400">Free Revisions:</strong> We offer unlimited revisions within 7 days of purchase</li>
              <li><strong className="text-gold-400">Try Another Theme:</strong> Sometimes a different medieval theme better fits your style</li>
              <li><strong className="text-gold-400">Contact Support:</strong> Our team can help adjust specific sections</li>
            </ul>

            <h2 className="font-medieval text-2xl text-white mb-4">Questions?</h2>
            <p className="text-gray-400">
              If you have any questions about our refund policy, please don&apos;t hesitate to contact us at{" "}
              <a href="mailto:support@epiccv.com" className="text-gold-400 hover:underline">
                support@epiccv.com
              </a>
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/#pricing" className="btn-primary">
            <span className="mr-2">⚔️</span>
            Start Your Quest Risk-Free
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gold-500/20 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} EpicCV. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
