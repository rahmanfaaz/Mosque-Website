'use client'

import { useState } from 'react'
import { sumupLinks } from '@/app/config/sumup-links'

export default function DonationForm() {
  const [amount, setAmount] = useState('')
  const [donationType, setDonationType] = useState('general')
  const [isRecurring, setIsRecurring] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const donationTypes = [
    { value: 'general', label: 'General Donation (Masjid Maintenance)' },
    { value: 'sadaqah', label: 'Sadaqah' },
    { value: 'zakat', label: 'Zakat' },
    { value: 'ramadan', label: 'Ramadan Fund' },
    { value: 'other', label: 'Other' },
  ]

  const presetAmounts = [10, 20, 50, 100]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Get the appropriate SumUp payment link
    let paymentLink = ''
    
    if (donationType === 'general') {
      // For General Donation, check if amount matches a preset
      const amountNum = parseFloat(amount)
      const amountStr = amountNum.toString() as '10' | '20' | '50' | '100'
      if (presetAmounts.includes(amountNum) && sumupLinks.general.preset[amountStr]) {
        // Use preset link
        paymentLink = sumupLinks.general.preset[amountStr]
      } else {
        // Use variable link for custom amounts
        paymentLink = sumupLinks.general.variable
      }
    } else {
      // For all other donation types, use variable link
      paymentLink = sumupLinks[donationType as keyof typeof sumupLinks].variable
    }
    
    // Redirect to SumUp payment page
    if (paymentLink) {
      window.location.href = paymentLink
    } else {
      console.error('Payment link not found for donation type:', donationType)
      alert('Error: Payment link not configured. Please contact the mosque.')
    }
  }

  return (
    <div className="glass-card-premium rounded-2xl p-8 md:p-10 ">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4 tracking-tight">
        <span className="text-gradient">Support Our Mosque</span>
      </h2>
      <p className="text-lg text-text-secondary mb-10 leading-relaxed">
        Your generous donations help us maintain our facilities, support educational programs, and serve our community.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Donation Type */}
        <div>
          <label htmlFor="donation-type" className="block text-sm font-semibold text-text-primary mb-2">
            Donation Type
          </label>
          <select
            id="donation-type"
            value={donationType}
            onChange={(e) => setDonationType(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-border glass-input text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            required
          >
            {donationTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        {/* Amount */}
        <div>
          <label htmlFor="amount" className="block text-sm font-semibold text-text-primary mb-2">
            Amount (£)
          </label>
          
          {/* Preset Amounts */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-3">
            {presetAmounts.map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => setAmount(preset.toString())}
                className={`px-4 py-2 rounded-lg border transition-all ${
                  amount === preset.toString()
                    ? 'bg-primary text-white border-primary'
                    : 'glass-nested text-text-primary border-border hover:border-primary'
                }`}
              >
                £{preset}
              </button>
            ))}
          </div>

          {/* Custom Amount */}
          <input
            type="number"
            id="amount"
            min="1"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter custom amount"
            className="w-full px-4 py-3 rounded-lg border border-border glass-input text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            required
          />
        </div>

        {/* Recurring Donation */}
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            id="recurring"
            checked={isRecurring}
            onChange={(e) => setIsRecurring(e.target.checked)}
            className="w-5 h-5 text-primary border-border rounded focus:ring-primary"
          />
          <label htmlFor="recurring" className="text-text-primary">
            Make this a recurring monthly donation
          </label>
        </div>

        {/* Donor Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-text-primary mb-2">
              Name (Optional)
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-lg border border-border glass-input text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-text-primary mb-2">
              Email (Optional)
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              className="w-full px-4 py-3 rounded-lg border border-border glass-input text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-text-primary mb-2">
            Message (Optional)
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Any special instructions or notes..."
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-border glass-input text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full premium-gradient text-white py-5 rounded-xl font-semibold text-lg hover:opacity-90 transition-all duration-300 premium-shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:scale-95"
        >
          Donate £{amount || '0.00'}
        </button>

        <p className="text-xs text-text-secondary text-center">
          Your donation is secure and will be processed through our payment gateway.
        </p>
      </form>
    </div>
  )
}

