import GlassHeader from '../components/GlassHeader'
import PoweredByStratix from '../components/PoweredByStratix'
import Link from 'next/link'

export default function AboutPage() {
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
                <span className="text-gradient">About Our Mosque</span>
              </h1>
              <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
                A beacon of faith, knowledge, and community in West London
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
          {/* History Section */}
          <section id="history" className="mb-20">
            <div className="glass-card-premium rounded-2xl p-10 md:p-12 animate-slide-up">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-8 tracking-tight">
                <span className="text-gradient">Our History</span>
              </h2>
              <div className="prose prose-lg max-w-none text-text-secondary space-y-4">
                <p>
                  Jamia Masjid West Drayton stands as a testament to the vibrant Muslim community in West London. 
                  Established with a vision to serve as both a place of worship and a centre for Islamic education, 
                  our mosque has grown from humble beginnings into a cornerstone of the local Muslim community.
                </p>
                <p>
                  Over the years, we have dedicated ourselves to fostering spiritual growth, providing educational 
                  opportunities, and building bridges within our diverse community. Our commitment to excellence in 
                  religious services, educational programmes, and community outreach has made us a trusted institution 
                  for Muslims across West London and beyond.
                </p>
                <p>
                  Today, Jamia Masjid West Drayton continues to evolve, adapting to the needs of our growing 
                  congregation while maintaining the core values and traditions that have guided us from the beginning. 
                  We remain committed to serving Allah (SWT) and our community with dedication, integrity, and compassion.
                </p>
              </div>
            </div>
          </section>

          {/* Mission & Vision Section */}
          <section id="mission" className="mb-16">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-card rounded-xl p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">Our Mission</h2>
                <div className="space-y-4 text-text-secondary">
                  <p>
                    To provide a welcoming and inclusive environment for worship, learning, and community engagement, 
                    fostering spiritual growth and Islamic values among all members of our congregation.
                  </p>
                  <p>
                    We strive to serve as a beacon of Islamic knowledge, offering comprehensive educational programmes 
                    that encompass Quranic studies, Islamic jurisprudence, and contemporary Islamic thought.
                  </p>
                  <p>
                    Our mission extends beyond the mosque walls, as we actively engage in community outreach, 
                    interfaith dialogue, and charitable initiatives that benefit both our Muslim community and 
                    the wider society.
                  </p>
                </div>
              </div>

              <div className="glass-card rounded-xl p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">Our Vision</h2>
                <div className="space-y-4 text-text-secondary">
                  <p>
                    To be a leading Islamic institution in West London, recognised for excellence in religious services, 
                    education, and community leadership.
                  </p>
                  <p>
                    We envision a future where our mosque serves as a hub for Islamic learning, spiritual development, 
                    and positive community impact, inspiring the next generation of Muslims to live according to Islamic principles.
                  </p>
                  <p>
                    Our vision encompasses creating a sustainable, inclusive, and forward-thinking Islamic centre that 
                    honours traditional values while embracing contemporary approaches to community service and engagement.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Leadership Section */}
          <section id="leadership" className="mb-16">
            <div className="glass-card rounded-xl p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-8">Our Leadership</h2>
              <p className="text-text-secondary mb-8 text-lg">
                Meet the dedicated individuals who guide and serve our community with wisdom, compassion, and commitment.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Director 1 */}
                <div className="glass-nested rounded-lg p-6">
                  <h3 className="text-xl font-bold text-text-primary mb-2">Muhammad Asif Iqbal Chauhdhry</h3>
                  <p className="text-primary font-semibold mb-3">Active Director</p>
                  <div className="space-y-2 text-sm text-text-secondary">
                    <p><span className="font-semibold">Address:</span> 74 High Street, Yiewsley, West Drayton, England, UB7 7DS</p>
                    <p><span className="font-semibold">Nationality:</span> British</p>
                  </div>
                </div>

                {/* Director 2 / Head Imam */}
                <div className="glass-nested rounded-lg p-6">
                  <h3 className="text-xl font-bold text-text-primary mb-2">Hafiz Muhammad Mubasher Iqbal Jamil</h3>
                  <p className="text-primary font-semibold mb-3">Active Director / Head Imam</p>
                  <div className="space-y-2 text-sm text-text-secondary">
                    <p><span className="font-semibold">Address:</span> 149 The Crescent, Slough, England, SL1 2LF</p>
                    <p><span className="font-semibold">Nationality:</span> British</p>
                  </div>
                </div>

                {/* General Secretary */}
                <div className="glass-nested rounded-lg p-6">
                  <h3 className="text-xl font-bold text-text-primary mb-2">Nadeem Mughal</h3>
                  <p className="text-primary font-semibold mb-3">Active General Secretary</p>
                  <div className="space-y-2 text-sm text-text-secondary">
                    <p><span className="font-semibold">Address:</span> 17 Station Road, West Drayton, England, UB7 7BT</p>
                    <p><span className="font-semibold">Nationality:</span> British</p>
                  </div>
                </div>

                {/* Imam / Head Tutor */}
                <div className="glass-nested rounded-lg p-6">
                  <h3 className="text-xl font-bold text-text-primary mb-2">Abdul Wahid Aleemi</h3>
                  <p className="text-primary font-semibold mb-3">Active Imam / Head Tutor</p>
                  <div className="space-y-2 text-sm text-text-secondary">
                    <p><span className="font-semibold">Address:</span> 17 Station Road, West Drayton, England, UB7 7BT</p>
                    <p><span className="font-semibold">Nationality:</span> German</p>
                  </div>
                </div>

                {/* General Manager */}
                <div className="glass-nested rounded-lg p-6">
                  <h3 className="text-xl font-bold text-text-primary mb-2">Khaleelur Rahman Faaz</h3>
                  <p className="text-primary font-semibold mb-3">Active General Manager</p>
                  <div className="space-y-2 text-sm text-text-secondary">
                    <p><span className="font-semibold">Address:</span> 1 Colham Mill Road, West Drayton, UB7 7AD</p>
                    <p><span className="font-semibold">Nationality:</span> Indian</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Facilities Section */}
          <section id="facilities" className="mb-16">
            <div className="glass-card rounded-xl p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">Our Facilities</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-text-primary">Prayer Facilities</h3>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Spacious main prayer hall accommodating large congregations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>State-of-the-art sound system for clear audio during prayers and sermons</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Ablution (Wudu) facilities for both brothers and sisters</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-text-primary">Educational Facilities</h3>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Dedicated classrooms for Quranic and Islamic studies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Library with extensive collection of Islamic literature</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Modern teaching resources and audio-visual equipment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Study areas for students and researchers</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-text-primary">Community Facilities</h3>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Community hall for events, gatherings, and celebrations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Kitchen facilities for community meals and events</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Office space for administrative and counselling services</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Parking facilities for congregants</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-text-primary">Accessibility</h3>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Wheelchair accessible entrances and facilities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Disabled parking spaces</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Accessible ablution facilities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Assistance available for those with special needs</span>
                    </li>
                  </ul>
                </div>
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

