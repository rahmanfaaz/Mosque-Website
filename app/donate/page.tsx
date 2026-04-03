import GlassHeader from '../components/GlassHeader'
import DonationForm from '../components/DonationForm'
import PoweredByStratix from '../components/PoweredByStratix'

export default function DonatePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <GlassHeader />

      <div className="flex flex-1 flex-col surface-over-shader">
      <main className="w-full">
        {/* Hero Section - Full Width */}
        <section className="w-full glass-band py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-4">
                Make a Donation
              </h1>
              <p className="text-lg md:text-xl text-text-secondary">
                Your support helps us continue serving our community
              </p>
            </div>
          </div>
        </section>

        {/* Donation Form Section */}
        <section className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
          <div className="max-w-3xl mx-auto">
            <DonationForm />

            {/* Charity Registration */}
            <div className="mt-8 glass-card-premium rounded-2xl p-8 border-l-4 border-primary">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-text-primary mb-2">Registered Charity</h3>
                  <p className="text-text-secondary mb-3 text-sm">
                    Jamia Masjid West Drayton Trust is a registered charity in England and Wales.
                  </p>
                  <div className="flex flex-wrap items-center gap-4">
                    <div>
                      <span className="text-text-secondary text-sm">Charity Number: </span>
                      <span className="font-semibold text-text-primary">1178127</span>
                    </div>
                    <a 
                      href="https://register-of-charities.charitycommission.gov.uk/en/charity-search/-/charity-details/5121800/charity-overview?_uk_gov_ccew_onereg_charitydetails_web_portlet_CharityDetailsPortlet_organisationNumber=5121800"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-medium text-sm flex items-center gap-1"
                    >
                      View on Charity Commission
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bank Transfer Option */}
            <div className="mt-8 glass-card-premium rounded-2xl p-8">
              <h3 className="text-xl font-bold text-text-primary mb-4">Bank Transfer</h3>
              <p className="text-text-secondary mb-6">
                You can also make a direct bank transfer. Please include your name and donation type in the reference.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex justify-between items-center p-4 glass-nested rounded-lg">
                  <span className="text-text-secondary">Account Holder:</span>
                  <span className="font-semibold text-text-primary">Jamia Masjid West Drayton Trust</span>
                </div>
                <div className="flex justify-between items-center p-4 glass-nested rounded-lg">
                  <span className="text-text-secondary">Account Number:</span>
                  <span className="font-semibold text-text-primary">58734823</span>
                </div>
                <div className="flex justify-between items-center p-4 glass-nested rounded-lg">
                  <span className="text-text-secondary">Sort Code:</span>
                  <span className="font-semibold text-text-primary">04-14-50</span>
                </div>
                <div className="flex justify-between items-center p-4 glass-nested rounded-lg">
                  <span className="text-text-secondary">Financial Institution:</span>
                  <span className="font-semibold text-text-primary">SumUp Payments Limited</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="glass-footer py-8 mt-12">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-center md:text-left text-text-secondary">
              © {new Date().getFullYear()} Jamia Masjid West Drayton. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <span className="text-text-secondary">Registered Charity: 1178127</span>
              <a 
                href="https://register-of-charities.charitycommission.gov.uk/en/charity-search/-/charity-details/5121800/charity-overview?_uk_gov_ccew_onereg_charitydetails_web_portlet_CharityDetailsPortlet_organisationNumber=5121800"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Charity Commission
              </a>
            </div>
          </div>
          <PoweredByStratix className="mt-4" />
        </div>
      </footer>
      </div>
    </div>
  )
}

