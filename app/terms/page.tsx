import Link from "next/link";

export default function TermsPage() {
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
        <h1 className="font-medieval text-4xl font-bold gradient-text mb-8">Terms of Service</h1>
        
        <div className="prose prose-invert max-w-none">
          <div className="card mb-8">
            <p className="text-gray-300 mb-6">
              Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </p>

            <h2 className="font-medieval text-2xl text-white mb-4">1. Service Description</h2>
            <p className="text-gray-400 mb-6">
              EpicCV provides an AI-powered resume transformation service that converts standard 
              resumes into medieval fantasy-themed versions. By using our service, you agree to 
              these terms.
            </p>

            <h2 className="font-medieval text-2xl text-white mb-4">2. Payment Terms</h2>
            <p className="text-gray-400 mb-6">
              The service costs $29 per resume transformation. Payment is processed securely through 
              Stripe. All prices are in USD. Payment is required before receiving your transformed resume.
            </p>

            <h2 className="font-medieval text-2xl text-white mb-4">3. Refund Policy</h2>
            <p className="text-gray-400 mb-6">
              We offer a 100% satisfaction guarantee. If you are not completely satisfied with your 
              transformed resume, contact us within 7 days of purchase for a full refund. Refunds 
              are processed within 5-10 business days.
            </p>

            <h2 className="font-medieval text-2xl text-white mb-4">4. User Responsibilities</h2>
            <p className="text-gray-400 mb-6">
              You agree to:
            </p>
            <ul className="list-disc list-inside text-gray-400 mb-6 space-y-2">
              <li>Provide accurate information in your resume</li>
              <li>Use the service for legitimate job-seeking purposes</li>
              <li>Not submit content that is illegal, defamatory, or violates third-party rights</li>
              <li>Not attempt to reverse-engineer our AI technology</li>
            </ul>

            <h2 className="font-medieval text-2xl text-white mb-4">5. Intellectual Property</h2>
            <p className="text-gray-400 mb-6">
              You retain ownership of the content you submit. The transformed resume is yours to use 
              as you wish. EpicCV retains ownership of our AI technology, branding, and website content.
            </p>

            <h2 className="font-medieval text-2xl text-white mb-4">6. Disclaimer</h2>
            <p className="text-gray-400 mb-6">
              While we strive to create memorable resumes, we cannot guarantee employment outcomes. 
              The transformed resume is intended to complement, not replace, professional resume 
              advice. Users are responsible for verifying that their resume content is appropriate 
              for their target employers.
            </p>

            <h2 className="font-medieval text-2xl text-white mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-400 mb-6">
              EpicCV shall not be liable for any indirect, incidental, special, or consequential 
              damages arising from your use of the service. Our maximum liability is limited to 
              the amount you paid for the service.
            </p>

            <h2 className="font-medieval text-2xl text-white mb-4">8. Changes to Terms</h2>
            <p className="text-gray-400 mb-6">
              We may update these terms from time to time. Continued use of the service after 
              changes constitutes acceptance of the new terms.
            </p>

            <h2 className="font-medieval text-2xl text-white mb-4">9. Contact</h2>
            <p className="text-gray-400">
              For questions about these Terms of Service, please contact us at{" "}
              <a href="mailto:legal@epiccv.com" className="text-gold-400 hover:underline">
                legal@epiccv.com
              </a>
            </p>
          </div>
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
