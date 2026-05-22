import Link from "next/link";

export default function PrivacyPage() {
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
        <h1 className="font-medieval text-4xl font-bold gradient-text mb-8">Privacy Policy</h1>
        
        <div className="prose prose-invert max-w-none">
          <div className="card mb-8">
            <p className="text-gray-300 mb-6">
              Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </p>

            <h2 className="font-medieval text-2xl text-white mb-4">1. Information We Collect</h2>
            <p className="text-gray-400 mb-6">
              When you use EpicCV, we collect the following information:
            </p>
            <ul className="list-disc list-inside text-gray-400 mb-6 space-y-2">
              <li>Your name and email address when you create an account or make a purchase</li>
              <li>Resume content you submit for transformation</li>
              <li>Payment information (processed securely through Stripe)</li>
              <li>Usage data and analytics</li>
            </ul>

            <h2 className="font-medieval text-2xl text-white mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-400 mb-6">
              We use your information to:
            </p>
            <ul className="list-disc list-inside text-gray-400 mb-6 space-y-2">
              <li>Provide and improve our resume transformation service</li>
              <li>Process your payments</li>
              <li>Send you updates about your order</li>
              <li>Respond to your inquiries</li>
            </ul>

            <h2 className="font-medieval text-2xl text-white mb-4">3. Data Security</h2>
            <p className="text-gray-400 mb-6">
              We implement industry-standard security measures to protect your personal information. 
              Your resume content is encrypted in transit and at rest. We do not sell or share your 
              resume content with third parties except as necessary to provide our service.
            </p>

            <h2 className="font-medieval text-2xl text-white mb-4">4. Data Retention</h2>
            <p className="text-gray-400 mb-6">
              We retain your resume content for 30 days after your purchase to allow for revisions. 
              After this period, your content is automatically deleted from our servers. Account 
              information is retained until you request deletion.
            </p>

            <h2 className="font-medieval text-2xl text-white mb-4">5. Your Rights</h2>
            <p className="text-gray-400 mb-6">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-400 mb-6 space-y-2">
              <li>Access your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
            </ul>

            <h2 className="font-medieval text-2xl text-white mb-4">6. Contact Us</h2>
            <p className="text-gray-400">
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:privacy@epiccv.com" className="text-gold-400 hover:underline">
                privacy@epiccv.com
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
