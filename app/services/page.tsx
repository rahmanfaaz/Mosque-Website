import GlassHeader from '../components/GlassHeader'
import PoweredByStratix from '../components/PoweredByStratix'
import Link from 'next/link'

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <GlassHeader />

      <div className="flex flex-1 flex-col surface-over-shader">
      <main className="w-full">
        {/* Hero Section */}
        <section className="w-full glass-hero py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto animate-slide-up">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-text-primary mb-6 tracking-tight">
                <span className="text-gradient">Our Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
                Comprehensive Islamic services for our community
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
          {/* Marriage Services */}
          <section id="marriage" className="mb-20">
            <div className="glass-card-premium rounded-2xl p-10 md:p-12 animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">Marriage Services (Nikah)</h2>
              <div className="prose prose-lg max-w-none text-text-secondary space-y-4">
                <p>
                  We are honoured to facilitate Islamic marriage ceremonies (Nikah) in accordance with Shariah principles. 
                  Our experienced Imams conduct Nikah ceremonies with dignity, respect, and adherence to Islamic traditions.
                </p>
                <div className="glass-nested rounded-lg p-6 mt-6">
                  <h3 className="text-xl font-semibold text-text-primary mb-4">Services Provided:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Nikah ceremony officiation by qualified Imams</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Pre-marriage counselling and guidance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Marriage certificate issuance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Venue facilities for ceremonies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Documentation assistance and verification</span>
                    </li>
                  </ul>
                </div>
                <p className="mt-4">
                  <strong>Booking:</strong> Please contact our office at least two weeks in advance to schedule your Nikah ceremony. 
                  We require all necessary documentation and will guide you through the process.
                </p>
              </div>
            </div>
          </section>

          {/* Funeral Services */}
          <section id="funeral" className="mb-16">
            <div className="glass-card rounded-xl p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">Funeral Services (Janazah)</h2>
              <div className="prose prose-lg max-w-none text-text-secondary space-y-4">
                <p>
                  During times of loss, we provide compassionate and comprehensive funeral services in accordance with 
                  Islamic traditions. Our team is available 24/7 to assist families during their most difficult moments.
                </p>
                <div className="glass-nested rounded-lg p-6 mt-6">
                  <h3 className="text-xl font-semibold text-text-primary mb-4">Services Provided:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Janazah prayer (Funeral Prayer) arrangements</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Ghusl (ritual washing) facilities and guidance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Coordination with burial services and cemeteries</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Emotional and spiritual support for bereaved families</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Guidance on Islamic funeral rites and procedures</span>
                    </li>
                  </ul>
                </div>
                <p className="mt-4">
                  <strong>Emergency Contact:</strong> For immediate assistance, please contact our office. 
                  We understand the urgency of funeral arrangements and are here to support you.
                </p>
              </div>
            </div>
          </section>

          {/* Educational Programs */}
          <section id="education" className="mb-16">
            <div className="glass-card rounded-xl p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">Educational Programs</h2>
              <div className="prose prose-lg max-w-none text-text-secondary space-y-4">
                <p>
                  Our educational programmes are designed to nurture Islamic knowledge and understanding across all age groups. 
                  We offer comprehensive courses in Quranic studies, Arabic language, Islamic jurisprudence, and contemporary 
                  Islamic thought.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="glass-nested rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-text-primary mb-4">Quranic Studies</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Quran memorisation (Hifz) programmes</li>
                      <li>• Tajweed (proper recitation) classes</li>
                      <li>• Tafsir (Quranic exegesis) studies</li>
                      <li>• Children's Quran classes</li>
                    </ul>
                  </div>
                  <div className="glass-nested rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-text-primary mb-4">Islamic Studies</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Fiqh (Islamic jurisprudence)</li>
                      <li>• Hadith studies</li>
                      <li>• Seerah (Prophet's biography)</li>
                      <li>• Aqeedah (Islamic creed)</li>
                    </ul>
                  </div>
                  <div className="glass-nested rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-text-primary mb-4">Arabic Language</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Classical Arabic for Quranic understanding</li>
                      <li>• Modern Arabic conversation</li>
                      <li>• Arabic grammar and syntax</li>
                      <li>• Beginner to advanced levels</li>
                    </ul>
                  </div>
                  <div className="glass-nested rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-text-primary mb-4">Special Programmes</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Weekend Islamic school</li>
                      <li>• Summer intensive courses</li>
                      <li>• Adult education classes</li>
                      <li>• Sisters-only programmes</li>
                    </ul>
                  </div>
                </div>
                <p className="mt-4">
                  <strong>Enrolment:</strong> Registration for classes is available throughout the year. 
                  Please contact our education department for course schedules and registration information.
                </p>
              </div>
            </div>
          </section>

          {/* Counseling Services */}
          <section id="counseling" className="mb-16">
            <div className="glass-card rounded-xl p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">Counseling Services</h2>
              <div className="prose prose-lg max-w-none text-text-secondary space-y-4">
                <p>
                  We provide confidential and compassionate counselling services grounded in Islamic principles. 
                  Our qualified counsellors offer support for various personal, family, and spiritual matters.
                </p>
                <div className="glass-nested rounded-lg p-6 mt-6">
                  <h3 className="text-xl font-semibold text-text-primary mb-4">Areas of Support:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Marriage and family counselling</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Spiritual guidance and support</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Youth counselling and mentorship</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Grief and bereavement support</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Addiction recovery support</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Mental health and wellbeing support</span>
                    </li>
                  </ul>
                </div>
                <p className="mt-4">
                  <strong>Appointments:</strong> Counselling sessions are available by appointment. 
                  All sessions are conducted with strict confidentiality and respect for privacy.
                </p>
              </div>
            </div>
          </section>

          {/* Community Support */}
          <section id="community" className="mb-16">
            <div className="glass-card rounded-xl p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">Community Support</h2>
              <div className="prose prose-lg max-w-none text-text-secondary space-y-4">
                <p>
                  Our community support programmes aim to assist those in need and strengthen the bonds within our 
                  Muslim community. We provide various forms of assistance and support services.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="glass-nested rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-text-primary mb-4">Financial Assistance</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Zakat distribution</li>
                      <li>• Emergency financial aid</li>
                      <li>• Food bank services</li>
                      <li>• Utility bill support</li>
                    </ul>
                  </div>
                  <div className="glass-nested rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-text-primary mb-4">Social Services</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Immigration and visa support</li>
                      <li>• Housing assistance</li>
                      <li>• Employment support</li>
                      <li>• Translation services</li>
                    </ul>
                  </div>
                  <div className="glass-nested rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-text-primary mb-4">Health & Wellbeing</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Health awareness programmes</li>
                      <li>• Support groups</li>
                      <li>• Elderly care support</li>
                      <li>• Disability support services</li>
                    </ul>
                  </div>
                  <div className="glass-nested rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-text-primary mb-4">Integration Support</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• English language classes</li>
                      <li>• Cultural orientation</li>
                      <li>• Citizenship support</li>
                      <li>• Community networking</li>
                    </ul>
                  </div>
                </div>
                <p className="mt-4">
                  <strong>Contact:</strong> For assistance or to learn more about our community support programmes, 
                  please visit our office or contact us directly. All requests are handled with dignity and confidentiality.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="glass-footer py-8 mt-12">
        <div className="container mx-auto flex flex-col gap-3 px-4 md:px-6 lg:px-8">
          <p className="text-center text-text-secondary">
            © {new Date().getFullYear()} Jamia Masjid West Drayton. All rights reserved.
          </p>
          <PoweredByStratix />
        </div>
      </footer>
      </div>
    </div>
  )
}

