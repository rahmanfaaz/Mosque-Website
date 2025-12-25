'use client'

import LiveClock from './LiveClock'

export default function HeaderBanner() {
  return (
    <div className="w-full bg-gradient-to-b from-bg-primary via-bg-secondary/30 to-bg-primary border-b border-border [data-theme='dark']:via-bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Mosque Description - Left Side */}
          <div className="flex-1 max-w-2xl">
            <p className="text-text-primary text-base md:text-lg leading-relaxed text-balance">
              Jamia Masjid West Drayton is a registered mosque under UK government, dedicated to serving the Muslim community 
              in West London. We provide a welcoming space for prayer, education, and community engagement, fostering 
              spiritual growth and unity among our diverse congregation. As a registered charity (1178127), we are committed 
              to excellence in Islamic worship, education, and community service.
            </p>
          </div>
          
          {/* Live Clock Widget - Right Side */}
          <div className="w-full md:w-auto md:max-w-md md:flex-shrink-0">
            <LiveClock />
          </div>
        </div>
      </div>
    </div>
  )
}

