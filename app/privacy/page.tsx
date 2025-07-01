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
            <h2 className="text-2xl font-medium text-white mb-4">1. Overview</h2>
            <p>
              This Privacy Policy describes how our WhatsApp AI healthcare bot collects, uses, and protects your health
              information when connecting patients with healthcare professionals. We are committed to protecting your
              medical privacy and complying with applicable healthcare privacy laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">2. Health Information We Collect</h2>
            <div className="space-y-4">
              <p>
                <strong className="text-white">From Patients:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Symptoms, medical concerns, and health conditions shared via WhatsApp</li>
                <li>Medical history, current medications, and allergies</li>
                <li>Treatment preferences and healthcare goals</li>
                <li>Emergency contact information</li>
                <li>Insurance information (when provided)</li>
                <li>Location data for finding nearby healthcare providers</li>
              </ul>

              <p className="mt-6">
                <strong className="text-white">From Healthcare Professionals:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Medical license numbers and verification documents</li>
                <li>Specialty certifications and professional credentials</li>
                <li>Professional identification photos and documents</li>
                <li>Practice location, contact information, and availability</li>
                <li>Educational background and professional experience</li>
                <li>Malpractice insurance information</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">3. WhatsApp Integration and Message Processing</h2>
            <div className="space-y-4">
              <p>Our AI bot processes WhatsApp messages to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Understand patient symptoms and healthcare needs</li>
                <li>Match patients with appropriate healthcare professionals</li>
                <li>Facilitate appointment scheduling and communication</li>
                <li>Provide health information and guidance</li>
              </ul>
              <p>
                All conversations are encrypted end-to-end through WhatsApp's security protocols and stored in our
                HIPAA-compliant database infrastructure.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">4. Location Data</h2>
            <p>
              We collect and process location information to match patients with nearby healthcare providers. Location
              data is used to calculate distances, provide location-based recommendations, and enable emergency services
              when necessary. You can opt-out of location sharing, though this may limit our ability to find nearby
              providers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">5. How We Use Your Health Information</h2>
            <div className="space-y-4">
              <p>We use your health information to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Connect patients with qualified healthcare professionals</li>
                <li>Facilitate medical consultations and appointments</li>
                <li>Provide AI-powered health guidance and information</li>
                <li>Verify healthcare professional credentials and qualifications</li>
                <li>Improve our matching algorithms and service quality</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Provide customer support and technical assistance</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">6. Information Sharing and Disclosure</h2>
            <div className="space-y-4">
              <p>
                <strong className="text-white">
                  We share your health information only in the following circumstances:
                </strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>With Healthcare Providers:</strong> Patient information is shared with matched doctors to
                  facilitate medical consultations
                </li>
                <li>
                  <strong>Emergency Situations:</strong> We may disclose information to emergency services when there's
                  an immediate threat to health or safety
                </li>
                <li>
                  <strong>Legal Requirements:</strong> We may disclose information when required by law, court order, or
                  regulatory authority
                </li>
                <li>
                  <strong>With Your Consent:</strong> We may share information with insurance providers or other parties
                  with your explicit written consent
                </li>
              </ul>
              <p className="mt-4">
                <strong className="text-red-400">We never sell your health information to third parties.</strong>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">7. Healthcare Compliance</h2>
            <div className="space-y-4">
              <p>Our platform complies with:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>HIPAA:</strong> Health Insurance Portability and Accountability Act privacy and security rules
                </li>
                <li>
                  <strong>State Medical Privacy Laws:</strong> Applicable state regulations for medical information
                  protection
                </li>
                <li>
                  <strong>International Standards:</strong> GDPR and other international health data protection
                  regulations where applicable
                </li>
                <li>
                  <strong>Medical Licensing Requirements:</strong> State and federal requirements for healthcare
                  professional verification
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">8. Data Security and Protection</h2>
            <div className="space-y-4">
              <p>We implement comprehensive security measures including:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>End-to-end encryption for all WhatsApp communications</li>
                <li>HIPAA-compliant database infrastructure with encryption at rest</li>
                <li>Multi-factor authentication for healthcare provider accounts</li>
                <li>Regular security audits and penetration testing</li>
                <li>Employee training on healthcare privacy and security</li>
                <li>Secure backup and disaster recovery procedures</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">9. Data Retention</h2>
            <div className="space-y-4">
              <p>We retain your information as follows:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Medical Records:</strong> Patient health information is retained for 7 years as required by
                  medical record laws
                </li>
                <li>
                  <strong>Conversation Data:</strong> WhatsApp conversations are stored for 3 years for quality
                  assurance and legal compliance
                </li>
                <li>
                  <strong>Healthcare Provider Credentials:</strong> Professional verification documents are retained as
                  long as the provider is active on our platform
                </li>
                <li>
                  <strong>Location Data:</strong> Location information is retained for 1 year unless you request earlier
                  deletion
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">10. Your Rights and Choices</h2>
            <div className="space-y-4">
              <p>Under healthcare privacy laws, you have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Access:</strong> Request a copy of your health information we maintain
                </li>
                <li>
                  <strong>Correction:</strong> Request correction of inaccurate health information
                </li>
                <li>
                  <strong>Restriction:</strong> Request restrictions on how we use or disclose your health information
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your health information (subject to legal retention
                  requirements)
                </li>
                <li>
                  <strong>Portability:</strong> Request a copy of your health information in a portable format
                </li>
                <li>
                  <strong>Opt-out:</strong> Opt-out of location sharing and non-essential communications
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">11. Breach Notification</h2>
            <p>
              In the event of a data breach involving your health information, we will notify you and relevant
              authorities within 72 hours as required by law. We will provide details about the breach, steps we're
              taking to address it, and recommendations for protecting your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">12. Children's Privacy</h2>
            <p>
              Our service is not intended for children under 13. For minors aged 13-17, we require parental consent
              before collecting any health information. Parents have the right to access, modify, or delete their
              child's health information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">13. International Data Transfers</h2>
            <p>
              If you are located outside the United States, your health information may be transferred to and processed
              in the United States where our servers are located. We ensure appropriate safeguards are in place for
              international transfers of health data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">14. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy to reflect changes in our practices or legal requirements. We will
              notify you of material changes via WhatsApp message and email at least 30 days before the changes take
              effect. Your continued use of our service after changes become effective constitutes acceptance of the
              updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">15. Contact Us</h2>
            <div className="space-y-4">
              <p>
                For questions about this Privacy Policy, to exercise your privacy rights, or to report privacy concerns,
                please contact us:
              </p>
              <div className="bg-[#111] p-6 rounded">
                <p>
                  <strong className="text-white">Privacy Officer:</strong> Luis Loreto
                </p>
                <p>
                  <strong className="text-white">Email:</strong> loretoleg@gmail.com
                </p>
                <p>
                  <strong className="text-white">Subject Line:</strong> Privacy Policy Inquiry
                </p>
                <p>
                  <strong className="text-white">Response Time:</strong> We will respond to privacy requests within 30
                  days
                </p>
              </div>
              <p className="text-sm text-[#666] mt-4">
                If you believe we have violated your privacy rights, you also have the right to file a complaint with
                the U.S. Department of Health and Human Services Office for Civil Rights.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
