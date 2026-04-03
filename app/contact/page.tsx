'use client'

import { useState } from 'react'
import GlassHeader from '../components/GlassHeader'
import PoweredByStratix from '../components/PoweredByStratix'

const MOSQUE_ADDRESS_LINE = '1 Colham Mill Rd, Yiewsley, West Drayton UB7 7AD'
const MOSQUE_ADDRESS_LINES = [
  'Jamia Masjid West Drayton',
  '1 Colham Mill Rd',
  'Yiewsley, West Drayton',
  'UB7 7AD',
  'United Kingdom'
] as const
const MOSQUE_PHONE_DISPLAY = '07496 346711'
const MOSQUE_PHONE_TEL = '+447496346711'
const GOOGLE_MAPS_QUERY = encodeURIComponent(
  'Jamia Masjid West Drayton, 1 Colham Mill Rd, Yiewsley, West Drayton UB7 7AD'
)
const GOOGLE_MAPS_EMBED_SRC = `https://maps.google.com/maps?q=${GOOGLE_MAPS_QUERY}&z=16&output=embed`
const GOOGLE_MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${GOOGLE_MAPS_QUERY}`

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your message. We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

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
                <span className="text-gradient">Contact Us</span>
              </h1>
              <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
                We're here to help and answer any questions you may have
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <div className="glass-card-premium rounded-2xl p-10 mb-6 animate-slide-up">
                <h2 className="text-3xl font-bold text-text-primary mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">Address</h3>
                    <address className="text-text-secondary not-italic">
                      {MOSQUE_ADDRESS_LINES.map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < MOSQUE_ADDRESS_LINES.length - 1 ? <br /> : null}
                        </span>
                      ))}
                    </address>
                    <a
                      href={GOOGLE_MAPS_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      Open in Google Maps
                    </a>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">Phone</h3>
                    <p className="text-text-secondary">
                      <a
                        href={`tel:${MOSQUE_PHONE_TEL}`}
                        className="hover:text-primary transition-colors font-medium"
                      >
                        {MOSQUE_PHONE_DISPLAY}
                      </a>
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">Email</h3>
                    <p className="text-text-secondary">
                      <a href="mailto:info@jamiamasjidwestdrayton.com" className="hover:text-primary transition-colors">
                        info@jamiamasjidwestdrayton.com
                      </a>
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">Office Hours</h3>
                    <p className="text-text-secondary">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday - Sunday: 10:00 AM - 2:00 PM<br />
                      <span className="text-sm text-text-muted">(Closed during prayer times)</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card-premium rounded-2xl p-6 md:p-10 animate-slide-up">
                <h3 className="text-xl font-semibold text-text-primary mb-2">Location</h3>
                <p className="text-sm text-text-secondary mb-4">{MOSQUE_ADDRESS_LINE}</p>
                <div className="relative w-full overflow-hidden rounded-xl glass-nested aspect-[4/3] min-h-[240px] md:min-h-[320px]">
                  <iframe
                    title="Jamia Masjid West Drayton on Google Maps"
                    src={GOOGLE_MAPS_EMBED_SRC}
                    className="absolute inset-0 h-full w-full border-0"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <p className="mt-4 text-center text-sm text-text-muted">
                  <a
                    href={GOOGLE_MAPS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    View larger map
                  </a>
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="glass-card-premium rounded-2xl p-10 animate-slide-up">
                <h2 className="text-3xl font-bold text-text-primary mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-text-primary mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border glass-input text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-text-primary mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border glass-input text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-text-primary mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border glass-input text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="e.g. 07496 346711"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-text-primary mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border glass-input text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="prayer">Prayer Times</option>
                      <option value="events">Events & Programs</option>
                      <option value="services">Services</option>
                      <option value="donation">Donation</option>
                      <option value="education">Education</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-text-primary mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-border glass-input text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full premium-gradient text-white py-5 rounded-xl font-semibold text-lg hover:opacity-90 transition-all duration-300 premium-shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:scale-95"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
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

