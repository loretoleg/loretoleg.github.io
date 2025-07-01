import Link from "next/link"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#030303] text-white">
      <div className="container mx-auto px-6 py-20 max-w-4xl">
        <div className="mb-8">
          <Link href="/" className="text-[#888] hover:text-white transition-colors mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-[#888]">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="space-y-8 text-[#aaa] leading-relaxed">
          <section>
            <h2 className="text-2xl font-medium text-white mb-4">1. Information We Collect</h2>
            <div className="space-y-4">
              <p>We collect information you provide directly to us when you:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Fill out contact forms on our website</li>
                <li>Send us emails or messages</li>
                <li>Request consultations or services</li>
              </ul>
              <p>
                This may include your name, email address, phone number, company information, and any messages you send
                us.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">2. How We Use Your Information</h2>
            <div className="space-y-4">
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Provide AI consulting services and custom solutions</li>
                <li>Send you information about our services (only if you've requested it)</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">3. Information Sharing</h2>
            <div className="space-y-4">
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties. We may share
                your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>With your explicit consent</li>
                <li>To comply with legal requirements</li>
                <li>To protect our rights and safety</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">4. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information against unauthorized
              access, alteration, disclosure, or destruction. However, no method of transmission over the internet is
              100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">5. Cookies and Tracking</h2>
            <p>
              Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can
              control cookie settings through your browser preferences.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">6. Your Rights</h2>
            <div className="space-y-4">
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">7. Third-Party Services</h2>
            <p>
              Our website may contain links to third-party websites or services. We are not responsible for the privacy
              practices of these external sites. We encourage you to review their privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">9. Contact Us</h2>
            <div className="space-y-4">
              <p>If you have any questions about this Privacy Policy or our privacy practices, please contact us:</p>
              <div className="bg-[#111] p-6 rounded">
                <p>
                  <strong className="text-white">Email:</strong> loretoleg@gmail.com
                </p>
                <p>
                  <strong className="text-white">Website:</strong> loretoleg.github.io
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
