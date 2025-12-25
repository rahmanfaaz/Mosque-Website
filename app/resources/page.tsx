import GlassHeader from '../components/GlassHeader'
import Link from 'next/link'

export default function ResourcesPage() {
  const currentYear = new Date().getFullYear()
  const hijriYear = currentYear - 622 // Approximate conversion

  return (
    <div className="min-h-screen bg-bg-primary">
      <GlassHeader />
      
      <main className="w-full">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-b from-bg-secondary to-bg-primary py-16 md:py-24 border-b border-border">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto animate-slide-up">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-text-primary mb-6 tracking-tight">
                <span className="text-gradient">Resources</span>
              </h1>
              <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
                Islamic knowledge, calendars, and educational materials
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
          {/* Islamic Calendar */}
          <section id="calendar" className="mb-16">
            <div className="glass-card rounded-xl p-8 shadow-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">Islamic Calendar (Hijri)</h2>
              <div className="prose prose-lg max-w-none text-text-secondary space-y-4">
                <p>
                  The Islamic calendar, also known as the Hijri calendar, is a lunar calendar consisting of 12 months 
                  in a year of 354 or 355 days. It is used to determine the proper days of Islamic holidays and rituals.
                </p>
                <div className="bg-bg-secondary rounded-lg p-6 mt-6">
                  <h3 className="text-xl font-semibold text-text-primary mb-4">Current Islamic Year</h3>
                  <p className="text-2xl font-bold text-primary mb-4">
                    {hijriYear} AH (After Hijrah)
                  </p>
                  <p className="text-sm text-text-secondary mb-4">
                    The Islamic calendar began with the migration (Hijrah) of Prophet Muhammad (PBUH) from Mecca to Medina 
                    in 622 CE. This event marks the beginning of the Islamic era.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-4">Important Islamic Months</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="text-primary mr-2 font-bold">Muharram:</span>
                        <span>First month, includes Ashura (10th day)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2 font-bold">Safar:</span>
                        <span>Second month of the Islamic year</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2 font-bold">Rabi' al-Awwal:</span>
                        <span>Birth month of Prophet Muhammad (PBUH)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2 font-bold">Rajab:</span>
                        <span>One of the four sacred months</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2 font-bold">Sha'ban:</span>
                        <span>Month preceding Ramadan</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2 font-bold">Ramadan:</span>
                        <span>Month of fasting, the holiest month</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2 font-bold">Shawwal:</span>
                        <span>Month of Eid al-Fitr</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2 font-bold">Dhul-Qi'dah:</span>
                        <span>One of the four sacred months</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2 font-bold">Dhul-Hijjah:</span>
                        <span>Month of Hajj and Eid al-Adha</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-4">Key Dates & Observances</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="text-primary mr-2 font-bold">1st Muharram:</span>
                        <span>Islamic New Year</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2 font-bold">10th Muharram:</span>
                        <span>Day of Ashura</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2 font-bold">12th Rabi' al-Awwal:</span>
                        <span>Mawlid an-Nabi (Prophet's Birthday)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2 font-bold">27th Rajab:</span>
                        <span>Isra and Mi'raj (Night Journey)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2 font-bold">15th Sha'ban:</span>
                        <span>Laylat al-Bara'ah (Night of Forgiveness)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2 font-bold">1st Ramadan:</span>
                        <span>Beginning of Ramadan</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2 font-bold">27th Ramadan:</span>
                        <span>Laylat al-Qadr (Night of Power)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2 font-bold">1st Shawwal:</span>
                        <span>Eid al-Fitr</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2 font-bold">10th Dhul-Hijjah:</span>
                        <span>Eid al-Adha</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quran & Hadith */}
          <section id="quran" className="mb-16">
            <div className="glass-card rounded-xl p-8 shadow-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">Quran & Hadith Resources</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-bg-secondary rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-text-primary mb-4">Online Quran Resources</h3>
                  <ul className="space-y-2 text-sm text-text-secondary">
                    <li>• Quran.com - Complete Quran with translations</li>
                    <li>• QuranExplorer.com - Interactive Quran study</li>
                    <li>• Al-Quran.info - Multiple translations and tafsir</li>
                    <li>• Bayyinah Institute - Comprehensive Quranic education</li>
                    <li>• Quranic Arabic Corpus - Linguistic analysis</li>
                  </ul>
                </div>

                <div className="bg-bg-secondary rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-text-primary mb-4">Hadith Collections</h3>
                  <ul className="space-y-2 text-sm text-text-secondary">
                    <li>• Sahih al-Bukhari - Authentic Hadith collection</li>
                    <li>• Sahih Muslim - Second most authentic collection</li>
                    <li>• Sunan Abu Dawud - Comprehensive Hadith collection</li>
                    <li>• Jami' at-Tirmidhi - Classified Hadith collection</li>
                    <li>• Sunan an-Nasa'i - Detailed Hadith compilation</li>
                  </ul>
                </div>

                <div className="bg-bg-secondary rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-text-primary mb-4">Tafsir (Quranic Exegesis)</h3>
                  <ul className="space-y-2 text-sm text-text-secondary">
                    <li>• Tafsir Ibn Kathir - Classical comprehensive tafsir</li>
                    <li>• Tafsir al-Jalalayn - Concise commentary</li>
                    <li>• Tafsir al-Qurtubi - Detailed jurisprudential tafsir</li>
                    <li>• Tafsir al-Tabari - Historical and linguistic tafsir</li>
                  </ul>
                </div>

                <div className="bg-bg-secondary rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-text-primary mb-4">Islamic Learning Platforms</h3>
                  <ul className="space-y-2 text-sm text-text-secondary">
                    <li>• SeekersGuidance - Free Islamic courses</li>
                    <li>• Al-Maghrib Institute - Weekend seminars</li>
                    <li>• Islamic Online University - Degree programmes</li>
                    <li>• Yaqeen Institute - Research and education</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Downloads */}
          <section id="downloads" className="mb-16">
            <div className="glass-card rounded-xl p-8 shadow-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">Downloads & Educational Materials</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-bg-secondary rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-text-primary mb-4">Prayer Times</h3>
                  <p className="text-sm text-text-secondary mb-4">
                    Download prayer times calendars and schedules for the year.
                  </p>
                  <Link 
                    href="/" 
                    className="text-primary hover:underline font-medium text-sm"
                  >
                    View Prayer Times →
                  </Link>
                </div>

                <div className="bg-bg-secondary rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-text-primary mb-4">Islamic Calendar</h3>
                  <p className="text-sm text-text-secondary mb-4">
                    Download printable Islamic calendar with important dates and observances.
                  </p>
                  <button className="text-primary hover:underline font-medium text-sm">
                    Download Calendar →
                  </button>
                </div>

                <div className="bg-bg-secondary rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-text-primary mb-4">Educational Guides</h3>
                  <p className="text-sm text-text-secondary mb-4">
                    Access guides on Islamic practices, fiqh, and daily Islamic living.
                  </p>
                  <button className="text-primary hover:underline font-medium text-sm">
                    View Guides →
                  </button>
                </div>

                <div className="bg-bg-secondary rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-text-primary mb-4">Quran Recitation</h3>
                  <p className="text-sm text-text-secondary mb-4">
                    Download audio files of Quran recitation by renowned Qaris.
                  </p>
                  <button className="text-primary hover:underline font-medium text-sm">
                    Access Audio →
                  </button>
                </div>

                <div className="bg-bg-secondary rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-text-primary mb-4">Sermons & Lectures</h3>
                  <p className="text-sm text-text-secondary mb-4">
                    Download or stream Friday sermons and educational lectures.
                  </p>
                  <button className="text-primary hover:underline font-medium text-sm">
                    Listen Now →
                  </button>
                </div>

                <div className="bg-bg-secondary rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-text-primary mb-4">Children's Resources</h3>
                  <p className="text-sm text-text-secondary mb-4">
                    Educational materials, worksheets, and activities for children.
                  </p>
                  <button className="text-primary hover:underline font-medium text-sm">
                    View Resources →
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-bg-secondary py-8 mt-12">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <p className="text-center text-text-secondary">
            © {new Date().getFullYear()} Jamia Masjid West Drayton. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

