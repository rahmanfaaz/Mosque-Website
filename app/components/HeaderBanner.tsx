'use client'

import LiveClock from './LiveClock'

export default function HeaderBanner() {
  return (
    <div className="w-full bg-transparent">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 pb-8 pt-2 md:pb-10 md:pt-3">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8 lg:gap-10">
          {/* Mosque Description — uses remaining width so lines aren’t squeezed next to a huge empty gap */}
          <div className="min-w-0 flex-1 md:pr-2">
            <p className="text-pretty text-text-primary text-base md:text-[1.0625rem] font-bold leading-relaxed">
              Jamia Masjid West Drayton is a registered mosque under UK government, dedicated to serving the Muslim community
              in West London. We provide a welcoming space for prayer, education, and community engagement, fostering
              spiritual growth and unity among our diverse congregation. As a registered charity (1178127), we pursue
              excellence in Islamic worship and religious education, and we support our neighbours through practical
              community outreach and pastoral care.
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

