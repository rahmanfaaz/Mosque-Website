import GlassHeader from '../components/GlassHeader'

export default function EventsPage() {
  const upcomingEvents = [
    {
      title: "Weekly Friday Prayer (Jumu'ah)",
      date: "Every Friday",
      time: "12:30 PM - 1:30 PM",
      description: "Join us for the weekly Jumu'ah prayer with an inspiring Khutbah (sermon) followed by congregational prayer.",
      type: "Weekly"
    },
    {
      title: "Quran Study Circle",
      date: "Every Saturday",
      time: "6:00 PM - 7:30 PM",
      description: "Weekly study circle focusing on Quranic exegesis, Hadith, and contemporary Islamic issues. Open to all.",
      type: "Weekly"
    },
    {
      title: "Islamic Education Classes",
      date: "Every Sunday",
      time: "10:00 AM - 12:00 PM",
      description: "Comprehensive Islamic education for children and adults covering Quran, Arabic, and Islamic studies.",
      type: "Weekly"
    },
    {
      title: "Ramadan Iftar Programme",
      date: "During Ramadan",
      time: "Sunset",
      description: "Daily Iftar (breaking of fast) gatherings during the holy month of Ramadan, fostering community spirit and spiritual reflection.",
      type: "Seasonal"
    },
    {
      title: "Eid Celebrations",
      date: "Eid al-Fitr & Eid al-Adha",
      time: "Morning prayers followed by celebrations",
      description: "Community-wide celebrations for Eid al-Fitr and Eid al-Adha, including special prayers, festivities, and community meals.",
      type: "Annual"
    },
    {
      title: "Islamic Lecture Series",
      date: "Monthly",
      time: "7:00 PM - 8:30 PM",
      description: "Monthly lectures by renowned Islamic scholars covering various topics including spirituality, contemporary issues, and Islamic history.",
      type: "Monthly"
    }
  ]

  return (
    <div className="min-h-screen bg-bg-primary">
      <GlassHeader />
      
      <main className="w-full">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-b from-bg-secondary to-bg-primary py-16 md:py-24 border-b border-border">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto animate-slide-up">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-text-primary mb-6 tracking-tight">
                <span className="text-gradient">Events & Programs</span>
              </h1>
              <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
                Join us for spiritual growth, community engagement, and Islamic learning
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
          {/* Upcoming Events */}
          <section id="upcoming" className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-8">Upcoming Events</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="glass-card-premium rounded-2xl p-8 premium-shadow-lg hover-lift animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-start justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      event.type === 'Weekly' ? 'bg-primary/20 text-primary' :
                      event.type === 'Monthly' ? 'bg-blue-500/20 text-blue-500' :
                      event.type === 'Seasonal' ? 'bg-green-500/20 text-green-500' :
                      'bg-purple-500/20 text-purple-500'
                    }`}>
                      {event.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">{event.title}</h3>
                  <div className="space-y-1 mb-4 text-sm text-text-secondary">
                    <p className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {event.date}
                    </p>
                    <p className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {event.time}
                    </p>
                  </div>
                  <p className="text-text-secondary text-sm">{event.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Weekly Programs */}
          <section id="weekly" className="mb-16">
            <div className="glass-card rounded-xl p-8 shadow-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">Weekly Programs</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold text-text-primary mb-2">Friday - Jumu'ah Prayer</h3>
                  <p className="text-text-secondary mb-2">
                    <strong>Time:</strong> 12:30 PM - 1:30 PM
                  </p>
                  <p className="text-text-secondary">
                    Our weekly congregational Friday prayer includes a comprehensive Khutbah addressing contemporary 
                    issues from an Islamic perspective, followed by the Jumu'ah prayer. All are welcome to attend.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold text-text-primary mb-2">Saturday - Quran Study Circle</h3>
                  <p className="text-text-secondary mb-2">
                    <strong>Time:</strong> 6:00 PM - 7:30 PM
                  </p>
                  <p className="text-text-secondary">
                    An interactive study session focusing on understanding the Quran, Hadith, and their application 
                    in modern life. Suitable for all levels of knowledge.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold text-text-primary mb-2">Sunday - Islamic Education</h3>
                  <p className="text-text-secondary mb-2">
                    <strong>Time:</strong> 10:00 AM - 12:00 PM
                  </p>
                  <p className="text-text-secondary">
                    Structured classes for children and adults covering Quranic recitation, Arabic language, 
                    Islamic history, and jurisprudence. Separate classes available for different age groups.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Ramadan Schedule */}
          <section id="ramadan" className="mb-16">
            <div className="glass-card rounded-xl p-8 shadow-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">Ramadan Schedule</h2>
              <div className="prose prose-lg max-w-none text-text-secondary space-y-4">
                <p>
                  During the blessed month of Ramadan, we offer a comprehensive schedule of spiritual activities, 
                  educational programmes, and community gatherings to help you make the most of this sacred time.
                </p>
                <div className="bg-bg-secondary rounded-lg p-6 mt-6">
                  <h3 className="text-xl font-semibold text-text-primary mb-4">Daily Activities:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-primary mr-3 font-bold">Suhoor:</span>
                      <span>Pre-dawn meal gatherings with spiritual reminders</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3 font-bold">Taraweeh:</span>
                      <span>Special night prayers after Isha, with complete Quran recitation throughout the month</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3 font-bold">Iftar:</span>
                      <span>Community iftar gatherings daily at sunset, fostering unity and brotherhood</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3 font-bold">Qiyam al-Layl:</span>
                      <span>Late-night prayers during the last ten nights, including Laylat al-Qadr</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3 font-bold">Lectures:</span>
                      <span>Daily educational sessions on Ramadan virtues, Quran, and spiritual development</span>
                    </li>
                  </ul>
                </div>
                <p className="mt-4">
                  <strong>Note:</strong> Detailed timings and schedules for Ramadan activities are published closer 
                  to the month. Please check our announcements or contact the mosque for the most current information.
                </p>
              </div>
            </div>
          </section>

          {/* Educational Events */}
          <section id="education" className="mb-16">
            <div className="glass-card rounded-xl p-8 shadow-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">Educational Events</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-bg-secondary rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-text-primary mb-4">Monthly Lecture Series</h3>
                  <p className="text-text-secondary mb-4">
                    Featuring renowned Islamic scholars and speakers addressing contemporary issues, 
                    spiritual development, and Islamic jurisprudence.
                  </p>
                  <p className="text-sm text-text-secondary">
                    <strong>Schedule:</strong> First Saturday of each month at 7:00 PM
                  </p>
                </div>

                <div className="bg-bg-secondary rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-text-primary mb-4">Workshops & Seminars</h3>
                  <p className="text-text-secondary mb-4">
                    Interactive workshops on various topics including family life, youth development, 
                    financial planning in Islam, and community engagement.
                  </p>
                  <p className="text-sm text-text-secondary">
                    <strong>Schedule:</strong> Various dates throughout the year
                  </p>
                </div>

                <div className="bg-bg-secondary rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-text-primary mb-4">Youth Programs</h3>
                  <p className="text-text-secondary mb-4">
                    Special events and activities designed for young Muslims, including sports, 
                    educational trips, and leadership development programmes.
                  </p>
                  <p className="text-sm text-text-secondary">
                    <strong>Schedule:</strong> Regular activities throughout the year
                  </p>
                </div>

                <div className="bg-bg-secondary rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-text-primary mb-4">Sisters' Events</h3>
                  <p className="text-text-secondary mb-4">
                    Exclusive programmes for sisters including Halaqas (study circles), social gatherings, 
                    and educational workshops tailored to women's needs.
                  </p>
                  <p className="text-sm text-text-secondary">
                    <strong>Schedule:</strong> Monthly gatherings and special events
                  </p>
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

