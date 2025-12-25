import GlassHeader from './components/GlassHeader'
import HeaderBanner from './components/HeaderBanner'
import PrayerTimesWidget from './components/PrayerTimesWidget'
import DonationForm from './components/DonationForm'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <GlassHeader />
      <HeaderBanner />
      
      <main className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        {/* Prayer Times Widget */}
        <section id="prayer-times" className="mb-12 md:mb-16 w-full">
          <PrayerTimesWidget />
        </section>

        {/* Section Divider */}
        <div className="section-divider my-16 md:my-24"></div>

        {/* Donation Section */}
        <section id="donate" className="mb-16 md:mb-24 w-full animate-slide-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4 tracking-tight">
              <span className="text-gradient">Support Our Community</span>
            </h2>
            <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Your generous donations help us maintain our facilities, support educational programs, and serve our community.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="animate-scale-in">
              <DonationForm />
            </div>

            {/* Charity Registration */}
            <div className="mt-8 glass-card-premium rounded-2xl p-6 premium-shadow-lg hover-lift border-l-4 border-primary">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <div className="flex-1">
                  <p className="text-sm text-text-secondary">
                    <span className="font-semibold text-text-primary">Registered Charity</span> - Charity Number: 1178127
                  </p>
                </div>
                <Link 
                  href="/donate" 
                  className="text-xs text-primary hover:underline font-medium"
                >
                  View Details →
                </Link>
              </div>
            </div>

            {/* Bank Transfer Option */}
            <div className="mt-6 glass-card-premium rounded-2xl p-8 premium-shadow-lg hover-lift">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-text-primary">Bank Transfer</h3>
                <Link 
                  href="/donate" 
                  className="text-sm text-primary hover:underline font-medium"
                >
                  View Full Details →
                </Link>
              </div>
              <p className="text-text-secondary mb-4 text-sm">
                You can also make a direct bank transfer. Please include your name and donation type in the reference.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-text-secondary block mb-1">Account Holder:</span>
                  <span className="font-semibold text-text-primary">Jamia Masjid West Drayton Trust</span>
                </div>
                <div>
                  <span className="text-text-secondary block mb-1">Account Number:</span>
                  <span className="font-semibold text-text-primary">58734823</span>
                </div>
                <div>
                  <span className="text-text-secondary block mb-1">Sort Code:</span>
                  <span className="font-semibold text-text-primary">04-14-50</span>
                </div>
                <div>
                  <span className="text-text-secondary block mb-1">Financial Institution:</span>
                  <span className="font-semibold text-text-primary">SumUp Payments Limited</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-bg-secondary py-8">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <p className="text-center text-text-secondary">
            © {new Date().getFullYear()} Jamia Masjid West Drayton. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

