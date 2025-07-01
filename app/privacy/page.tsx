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
            <h2 className="text-2xl font-medium text-white mb-4">1. About Our Services</h2>
            <p>
              loretoleg provides AI consulting services and develops custom artificial intelligence solutions for
              businesses across various industries including healthcare, retail, finance, and automation. We specialize
              in creating tailored AI applications, machine learning models, and intelligent systems that meet specific
              business requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">2. Our Data Protection Commitment</h2>
            <div className="bg-[#111] p-6 rounded border-l-4 border-white">
              <p className="text-white font-medium mb-2">Core Privacy Principles:</p>
              <ul className="list-disc list-inside space-y-2">
                <li className="text-white">
                  We never sell, trade, or monetize client data from any applications we develop
                </li>
                <li className="text-white">All custom solutions are built with privacy-by-design principles</li>
                <li className="text-white">Industry-specific compliance requirements are integrated from the start</li>
                <li className="text-white">Client data ownership and control remain with the client at all times</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">3. Information We Collect</h2>
            <div className="space-y-4">
              <p>
                <strong className="text-white">During Consultations and Project Development:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Business information and project requirements</li>
                <li>Technical specifications and system preferences</li>
                <li>Contact information for project communication</li>
                <li>Industry-specific needs and compliance requirements</li>
                <li>Existing system information and integration needs</li>
              </ul>

              <p className="mt-6">
                <strong className="text-white">Through Our Website:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Contact form submissions and inquiry details</li>
                <li>Email communications and project discussions</li>
                <li>Basic website analytics (anonymized)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">4. How We Use Your Information</h2>
            <div className="space-y-4">
              <p>We use collected information solely to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide AI consulting services and technical support</li>
                <li>Develop and deliver custom AI solutions</li>
                <li>Communicate about project progress and requirements</li>
                <li>Ensure compliance with industry-specific regulations</li>
                <li>Improve our consulting methodologies and service quality</li>
                <li>Fulfill legal and contractual obligations</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">5. Custom Application Development</h2>
            <div className="space-y-4">
              <p>
                <strong className="text-white">For all applications and systems we develop:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Data Ownership:</strong> All data generated or processed by your application remains entirely
                  under your ownership and control
                </li>
                <li>
                  <strong>No Data Mining:</strong> We do not collect, analyze, or benefit from user data in applications
                  we build for clients
                </li>
                <li>
                  <strong>Industry Compliance:</strong> We implement appropriate security measures and compliance
                  frameworks (HIPAA, GDPR, SOX, etc.) based on your industry
                </li>
                <li>
                  <strong>Transparent Architecture:</strong> No backdoors, hidden data collection, or undisclosed
                  functionality
                </li>
                <li>
                  <strong>Client Control:</strong> You maintain full administrative control over your deployed systems
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">6. Project Confidentiality</h2>
            <div className="space-y-4">
              <p>All client projects and information are treated with strict confidentiality. We do not share:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Business strategies, requirements, or proprietary information</li>
                <li>Technical implementations, code, or system architectures</li>
                <li>User data or analytics from deployed applications</li>
                <li>Client identity or project details (unless explicitly authorized)</li>
                <li>Performance metrics or usage statistics from client systems</li>
              </ul>
              <p className="mt-4">
                Non-disclosure agreements (NDAs) are available upon request for additional legal protection.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">7. Data Security Measures</h2>
            <div className="space-y-4">
              <p>We implement comprehensive security practices including:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Encrypted communication channels for all project discussions</li>
                <li>Secure development environments with access controls</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Industry-standard encryption for data at rest and in transit</li>
                <li>Secure code practices and penetration testing</li>
                <li>Compliance with relevant security frameworks and standards</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">8. Information Sharing</h2>
            <div className="space-y-4">
              <p>We may share information only in these limited circumstances:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>With Your Consent:</strong> When you explicitly authorize us to share specific information
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law, court order, or regulatory authority
                </li>
                <li>
                  <strong>Service Providers:</strong> With trusted third-party services (hosting, analytics) under
                  strict confidentiality agreements
                </li>
                <li>
                  <strong>Business Transfer:</strong> In the event of a merger or acquisition, with advance notice to
                  clients
                </li>
              </ul>
              <p className="mt-4 text-red-400 font-medium">
                We never sell client information or project data to third parties for marketing or commercial purposes.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">9. Industry-Specific Compliance</h2>
            <div className="space-y-4">
              <p>We ensure compliance with relevant regulations based on your industry:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Healthcare:</strong> HIPAA, HITECH, and state medical privacy laws
                </li>
                <li>
                  <strong>Financial Services:</strong> SOX, PCI DSS, and financial data protection regulations
                </li>
                <li>
                  <strong>International:</strong> GDPR, CCPA, and other regional privacy laws
                </li>
                <li>
                  <strong>Education:</strong> FERPA and student data protection requirements
                </li>
                <li>
                  <strong>Government:</strong> FedRAMP, FISMA, and government security standards
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">10. Data Retention</h2>
            <div className="space-y-4">
              <p>We retain information as follows:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Project Communications:</strong> Retained for 3 years after project completion for support
                  purposes
                </li>
                <li>
                  <strong>Technical Documentation:</strong> Retained as long as necessary to provide ongoing support
                </li>
                <li>
                  <strong>Business Information:</strong> Retained according to legal requirements and business needs
                </li>
                <li>
                  <strong>Client Applications:</strong> Data retention policies are defined by the client and
                  implemented accordingly
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">11. Your Rights</h2>
            <div className="space-y-4">
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access information we hold about you and your projects</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information (subject to legal retention requirements)</li>
                <li>Restrict processing of your information</li>
                <li>Data portability for information you've provided</li>
                <li>Object to processing for marketing purposes</li>
                <li>Withdraw consent where processing is based on consent</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">12. International Data Transfers</h2>
            <p>
              If you are located outside the United States, your information may be transferred to and processed in the
              United States where our services are operated. We ensure appropriate safeguards are in place for
              international transfers, including standard contractual clauses and adequacy decisions where applicable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">13. Updates to This Policy</h2>
            <p>
              We may update this Privacy Policy to reflect changes in our practices, services, or legal requirements. We
              will notify clients of material changes via email at least 30 days before changes take effect. Continued
              use of our services after changes become effective constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">14. Contact Us</h2>
            <div className="space-y-4">
              <p>
                For questions about this Privacy Policy, to exercise your privacy rights, or to discuss project-specific
                privacy requirements, please contact us:
              </p>
              <div className="bg-[#111] p-6 rounded">
                <p>
                  <strong className="text-white">AI Consultant:</strong> Luis Loreto
                </p>
                <p>
                  <strong className="text-white">Email:</strong> loretoleg@gmail.com
                </p>
                <p>
                  <strong className="text-white">Website:</strong> loretoleg.github.io
                </p>
                <p>
                  <strong className="text-white">Response Time:</strong> We respond to privacy inquiries within 48 hours
                </p>
              </div>
              <p className="text-sm text-[#666] mt-4">
                For project-specific privacy questions or to request an NDA, please include "Privacy Inquiry" in your
                subject line.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
