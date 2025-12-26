'use client'

import { useState, useEffect } from 'react'
import salahTimings from '@/Salah_Timings.json'

interface PrayerTime {
  Date: string
  Fajr: string
  "Fajr_Jama'at": string
  Sunrise: string
  Dhuhr: string
  "Dhuhr_Jama'at": string
  Asr: string
  "Asr_Jama'at": string
  Sunset: string
  Maghrib: string
  "Maghrib_Jama'at": string
  Isha: string
  "Isha_Jama'at": string
  "Tahajjud Start": string
  "Tahajjud End": string
  "Juma'1": string
  "Juma'2": string
  "Juma'3": string
}

export default function PrayerTimesWidget() {
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [startDateFull, setStartDateFull] = useState('')
  const [endDateFull, setEndDateFull] = useState('')
  const [prayerData, setPrayerData] = useState<PrayerTime[]>([])
  const [selectedDate, setSelectedDate] = useState('')
  const [todayDate, setTodayDate] = useState('')

  // Date range restrictions - dynamic based on current year
  const getDateRange = () => {
    const currentYear = new Date().getFullYear()
    const minYear = currentYear - 1
    const maxYear = currentYear + 1
    return {
      min: `${minYear}-01-01`,
      max: `${maxYear}-12-31`
    }
  }
  
  const dateRange = getDateRange()
  const MIN_DATE = dateRange.min
  const MAX_DATE = dateRange.max

  // Convert "MMM/DD" to a comparable number (day of year)
  const dateToNumber = (dateStr: string): number => {
    const [month, day] = dateStr.split('/')
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const monthIndex = monthNames.indexOf(month)
    const daysInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let dayOfYear = parseInt(day)
    for (let i = 0; i < monthIndex; i++) {
      dayOfYear += daysInMonth[i]
    }
    return dayOfYear
  }

  // Compare two dates in "MMM/DD" format
  const compareDates = (date1: string, date2: string): number => {
    return dateToNumber(date1) - dateToNumber(date2)
  }

  // Generate all dates between start and end (YYYY-MM-DD format)
  const generateDateRange = (start: string, end: string): string[] => {
    const dates: string[] = []
    const startDate = new Date(start)
    const endDate = new Date(end)
    
    const currentDate = new Date(startDate)
    while (currentDate <= endDate) {
      dates.push(currentDate.toISOString().split('T')[0])
      currentDate.setDate(currentDate.getDate() + 1)
    }
    
    return dates
  }

  // Convert YYYY-MM-DD to MMM/DD format
  const convertToJsonFormat = (dateStr: string): string => {
    const [year, month, day] = dateStr.split('-').map(Number)
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return `${monthNames[month - 1]}/${String(day).padStart(2, '0')}`
  }

  // Find prayer time data for a given MMM/DD format
  const findPrayerData = (jsonDate: string): PrayerTime | null => {
    const found = salahTimings.find((item: any) => item.Date === jsonDate && item.Date !== '') as PrayerTime | undefined
    return found || null
  }

  useEffect(() => {
    const today = new Date()
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    
    const minDateObj = new Date(MIN_DATE)
    const maxDateObj = new Date(MAX_DATE)
    const defaultDate = today < minDateObj ? minDateObj : (today > maxDateObj ? maxDateObj : today)
    
    const defaultFormatted = `${monthNames[defaultDate.getMonth()]}/${String(defaultDate.getDate()).padStart(2, '0')}`
    const defaultFullDate = defaultDate.toISOString().split('T')[0]
    
    const formattedDate = `${dayNames[defaultDate.getDay()]}, ${monthNames[defaultDate.getMonth()]} ${defaultDate.getDate()}, ${defaultDate.getFullYear()}`
    setTodayDate(formattedDate)
    setSelectedDate(defaultFormatted)

    if (!startDate) {
      setStartDate(defaultFormatted)
      setEndDate(defaultFormatted)
      setStartDateFull(defaultFullDate)
      setEndDateFull(defaultFullDate)
    }
  }, [])

  useEffect(() => {
    if (!startDateFull || !endDateFull) return

    // Generate all dates in the selected range
    const dateRange = generateDateRange(startDateFull, endDateFull)
    
    // For each date, convert to MMM/DD and find corresponding prayer times
    const dataToShow: PrayerTime[] = []
    
    for (const dateStr of dateRange) {
      const jsonFormat = convertToJsonFormat(dateStr)
      const prayerTime = findPrayerData(jsonFormat)
      
      if (prayerTime) {
        // Create a copy with the actual date for display
        dataToShow.push({
          ...prayerTime,
          Date: jsonFormat // Keep MMM/DD format for consistency
        })
      }
    }

    setPrayerData(dataToShow)
    
    // Update the MMM/DD format dates for single date view
    if (startDateFull === endDateFull) {
      const jsonFormat = convertToJsonFormat(startDateFull)
      setStartDate(jsonFormat)
      setEndDate(jsonFormat)
      setSelectedDate(jsonFormat)
    } else {
      setStartDate(convertToJsonFormat(startDateFull))
      setEndDate(convertToJsonFormat(endDateFull))
      setSelectedDate(convertToJsonFormat(startDateFull))
    }
  }, [startDateFull, endDateFull])

  const formatDateDisplay = (dateStr: string, fullDate?: string) => {
    const [month, day] = dateStr.split('/')
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    
    // If we have full date, use it to get the correct year
    if (fullDate) {
      const date = new Date(fullDate)
      const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      return `${dayNames[date.getDay()]}, ${month} ${day}, ${date.getFullYear()}`
    }
    
    // Otherwise use current year
    const monthIndex = monthNames.indexOf(month)
    const currentYear = new Date().getFullYear()
    const date = new Date(currentYear, monthIndex, parseInt(day))
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    return `${dayNames[date.getDay()]}, ${month} ${day}`
  }

  const formatDateForInput = (dateStr: string, fullDate?: string) => {
    if (fullDate) {
      return fullDate
    }
    
    if (!dateStr) return ''
    const [month, day] = dateStr.split('/')
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const monthIndex = monthNames.indexOf(month)
    if (monthIndex === -1) return ''
    
    const currentYear = new Date().getFullYear()
    const monthNum = (monthIndex + 1).toString().padStart(2, '0')
    const dayNum = day.padStart(2, '0')
    return `${currentYear}-${monthNum}-${dayNum}`
  }

  const parseInputDate = (inputDate: string): string => {
    if (!inputDate) return ''
    const [year, month, day] = inputDate.split('-').map(Number)
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return `${monthNames[month - 1]}/${String(day).padStart(2, '0')}`
  }

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    const parsed = parseInputDate(inputValue)
    if (parsed) {
      setStartDate(parsed)
      setStartDateFull(inputValue)
      if (!endDateFull || inputValue > endDateFull) {
        setEndDate(parsed)
        setEndDateFull(inputValue)
      }
    }
  }

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    const parsed = parseInputDate(inputValue)
    if (parsed && inputValue >= startDateFull) {
      setEndDate(parsed)
      setEndDateFull(inputValue)
    }
  }

  const handleClearFilter = () => {
    const today = new Date()
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const todayFormatted = `${monthNames[today.getMonth()]}/${String(today.getDate()).padStart(2, '0')}`
    const todayFullDate = today.toISOString().split('T')[0]
    setStartDate(todayFormatted)
    setEndDate(todayFormatted)
    setStartDateFull(todayFullDate)
    setEndDateFull(todayFullDate)
  }

  const prayers = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'] as const
  const isSingleDate = startDateFull === endDateFull

  // Get today's date in JSON format for highlighting
  const getTodayDate = () => {
    const today = new Date()
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return `${monthNames[today.getMonth()]}/${String(today.getDate()).padStart(2, '0')}`
  }

  // Generate full dates array for display
  const getFullDatesArray = (): string[] => {
    if (!startDateFull || !endDateFull) return []
    return generateDateRange(startDateFull, endDateFull)
  }

  // Export to PDF function
  const exportToPDF = async () => {
    if (prayerData.length === 0) return

    // Dynamic import for client-side only
    const { default: jsPDF } = await import('jspdf')
    const autoTable = (await import('jspdf-autotable')).default

    const doc = new jsPDF('landscape', 'mm', 'a4')
    
    // Masjid Header
    doc.setFontSize(24)
    doc.setTextColor(0, 0, 0)
    doc.setFont('helvetica', 'bold')
    doc.text('Jamia Masjid West Drayton', 148, 20, { align: 'center' })
    
    doc.setFontSize(14)
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(100, 100, 100)
    doc.text('Prayer Times Schedule', 148, 28, { align: 'center' })
    
    // Date range info
    let dateRangeText = ''
    if (isSingleDate && prayerData.length > 0) {
      const date = new Date(startDateFull)
      dateRangeText = date.toLocaleDateString('en-GB', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })
    } else {
      const start = new Date(startDateFull)
      const end = new Date(endDateFull)
      dateRangeText = `${start.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })} - ${end.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}`
    }
    
    doc.setFontSize(12)
    doc.setTextColor(0, 0, 0)
    doc.text(dateRangeText, 148, 35, { align: 'center' })
    
    // Prepare table data
    const tableData: any[] = []
    
    if (isSingleDate) {
      // Single date view - show all prayers in columns
      const prayer = prayerData[0]
      const row: any[] = ['Prayer', 'Start Time', 'Jama\'at Time']
      
      prayers.forEach((prayerName) => {
        const timeKey = prayerName as keyof PrayerTime
        const jamaatKey = `${prayerName}_Jama'at` as keyof PrayerTime
        const time = prayer[timeKey] as string
        const jamaat = prayer[jamaatKey] as string
        const jamaatTime = jamaat !== 'Variable Check with Masjid ' ? jamaat : 'Check with Masjid'
        
        tableData.push([prayerName, time, jamaatTime])
      })
      
      // Add Jumu'ah, Tahajjud, Sunrise, Sunset
      const jumaTimes = [
        prayer["Juma'1"],
        prayer["Juma'2"],
        prayer["Juma'3"]
      ].filter(time => time && time !== '').join(', ')
      
      if (jumaTimes) {
        tableData.push(['Jumu\'ah', jumaTimes, '-'])
      }
      
      const tahajjudStart = prayer["Tahajjud Start"]
      const tahajjudEnd = prayer["Tahajjud End"]
      if (tahajjudStart && tahajjudEnd) {
        tableData.push(['Tahajjud', `${tahajjudStart} - ${tahajjudEnd}`, '-'])
      }
      
      tableData.push(['Sunrise', prayer.Sunrise, '-'])
      tableData.push(['Sunset', prayer.Sunset, '-'])
      
      autoTable(doc, {
        head: [['Prayer', 'Time', 'Jama\'at']],
        body: tableData,
        startY: 42,
        theme: 'grid',
        headStyles: { fillColor: [0, 0, 0], textColor: [255, 255, 255], fontStyle: 'bold' },
        styles: { fontSize: 10, cellPadding: 3 },
        columnStyles: {
          0: { cellWidth: 50 },
          1: { cellWidth: 60, halign: 'center' },
          2: { cellWidth: 60, halign: 'center' }
        }
      })
    } else {
      // Date range view - show table with dates
      const fullDates = getFullDatesArray()
      const tableRows: any[] = []
      
      fullDates.forEach((fullDate) => {
        const dateObj = new Date(fullDate)
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        const dateStr = `${monthNames[dateObj.getMonth()]}/${String(dateObj.getDate()).padStart(2, '0')}`
        
        const prayer = salahTimings.find(p => p.Date === dateStr)
        if (prayer) {
          const row: any[] = [
            dateObj.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }),
            prayer.Fajr,
            prayer["Fajr_Jama'at"] !== 'Variable Check with Masjid ' ? prayer["Fajr_Jama'at"] : '-',
            prayer.Dhuhr,
            prayer["Dhuhr_Jama'at"] !== 'Variable Check with Masjid ' ? prayer["Dhuhr_Jama'at"] : '-',
            prayer.Asr,
            prayer["Asr_Jama'at"] !== 'Variable Check with Masjid ' ? prayer["Asr_Jama'at"] : '-',
            prayer.Maghrib,
            prayer["Maghrib_Jama'at"] !== 'Variable Check with Masjid ' ? prayer["Maghrib_Jama'at"] : '-',
            prayer.Isha,
            prayer["Isha_Jama'at"] !== 'Variable Check with Masjid ' ? prayer["Isha_Jama'at"] : '-'
          ]
          tableData.push(row)
        }
      })
      
      autoTable(doc, {
        head: [['Date', 'Fajr', 'Jama\'at', 'Dhuhr', 'Jama\'at', 'Asr', 'Jama\'at', 'Maghrib', 'Jama\'at', 'Isha', 'Jama\'at']],
        body: tableData,
        startY: 42,
        theme: 'grid',
        headStyles: { fillColor: [0, 0, 0], textColor: [255, 255, 255], fontStyle: 'bold' },
        styles: { fontSize: 7, cellPadding: 2 },
        columnStyles: {
          0: { cellWidth: 25 },
          1: { cellWidth: 20, halign: 'center' },
          2: { cellWidth: 20, halign: 'center' },
          3: { cellWidth: 20, halign: 'center' },
          4: { cellWidth: 20, halign: 'center' },
          5: { cellWidth: 20, halign: 'center' },
          6: { cellWidth: 20, halign: 'center' },
          7: { cellWidth: 20, halign: 'center' },
          8: { cellWidth: 20, halign: 'center' },
          9: { cellWidth: 20, halign: 'center' },
          10: { cellWidth: 20, halign: 'center' }
        }
      })
    }
    
    // Footer
    const pageCount = doc.getNumberOfPages()
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i)
      doc.setFontSize(10)
      doc.setTextColor(150, 150, 150)
      doc.text(
        `Page ${i} of ${pageCount} | Jamia Masjid West Drayton - www.jamiamasjidwestdrayton.com`,
        148,
        200,
        { align: 'center' }
      )
    }
    
    // Generate filename
    const filename = isSingleDate 
      ? `Prayer-Times-${startDateFull}.pdf`
      : `Prayer-Times-${startDateFull}-to-${endDateFull}.pdf`
    
    doc.save(filename)
  }

  return (
    <div className="glass-card-premium rounded-2xl p-4 sm:p-6 md:p-10 premium-shadow-lg hover-lift w-full animate-slide-up">
      {/* Header with Date Picker */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 md:mb-10 gap-4 md:gap-6">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-2 md:mb-3 tracking-tight refined-spacing">
            <span className="text-gradient">Prayer Times</span>
          </h2>
          {isSingleDate && prayerData.length > 0 && (
            <p className="text-xs sm:text-sm md:text-base text-text-secondary">{todayDate}</p>
          )}
          {!isSingleDate && prayerData.length > 0 && (
            <p className="text-xs sm:text-sm md:text-base text-text-secondary">
              Showing {prayerData.length} day{prayerData.length !== 1 ? 's' : ''}
            </p>
          )}
        </div>
        
        {/* Date Range Picker */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 bg-bg-secondary rounded-lg p-4 md:p-6">
          {/* Date Inputs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-1">
            <div className="flex items-center gap-2 flex-1">
              <label htmlFor="start-date" className="text-sm font-medium text-text-secondary whitespace-nowrap">
                From:
              </label>
              <input
                type="date"
                id="start-date"
                value={startDateFull || (startDate ? formatDateForInput(startDate) : '')}
                onChange={handleStartDateChange}
                min={MIN_DATE}
                max={MAX_DATE}
                className="flex-1 px-3 py-2 rounded-lg border border-border bg-bg-primary text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>
            <div className="flex items-center gap-2 flex-1">
              <label htmlFor="end-date" className="text-sm font-medium text-text-secondary whitespace-nowrap">
                To:
              </label>
              <input
                type="date"
                id="end-date"
                value={endDateFull || (endDate ? formatDateForInput(endDate) : '')}
                onChange={handleEndDateChange}
                min={startDateFull || (startDate ? formatDateForInput(startDate) : MIN_DATE)}
                max={MAX_DATE}
                className="flex-1 px-3 py-2 rounded-lg border border-border bg-bg-primary text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>
          </div>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:flex-shrink-0">
            <button
              onClick={handleClearFilter}
              className="px-4 py-2.5 rounded-lg bg-bg-primary border border-border text-text-primary text-sm font-medium hover:bg-bg-secondary hover:border-primary transition-all whitespace-nowrap text-center"
            >
              Reset to Today
            </button>
            {prayerData.length > 0 && (
              <button
                onClick={exportToPDF}
                className="px-4 py-2.5 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-all whitespace-nowrap flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Export PDF
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Single Date View (1 Day Grid) */}
      {isSingleDate && prayerData.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-3 sm:gap-4 mb-6">
          {/* Main Prayers */}
          {prayers.map((prayerName) => {
            const prayer = prayerData[0]
            const timeKey = prayerName as keyof PrayerTime
            const jamaatKey = `${prayerName}_Jama'at` as keyof PrayerTime
            const time = prayer[timeKey] as string
            const jamaat = prayer[jamaatKey] as string
            const jamaatTime = jamaat !== 'Variable Check with Masjid ' ? jamaat : null

            return (
                <div
                  key={prayerName}
                  className="p-3 sm:p-4 rounded-xl bg-bg-secondary hover:bg-bg-tertiary transition-all duration-300 text-center hover-lift premium-border"
                >
                <h3 className="font-semibold text-text-primary text-sm sm:text-base mb-2">{prayerName}</h3>
                <div className="mb-2">
                  <p className="text-xs text-text-secondary mb-1">Start</p>
                  <p className="text-base sm:text-lg md:text-xl font-bold text-primary">{time}</p>
                </div>
                {jamaatTime ? (
                  <div>
                    <p className="text-xs text-text-secondary mb-1">Jama'at</p>
                    <p className="text-base sm:text-lg md:text-xl font-bold text-primary">{jamaatTime}</p>
                  </div>
                ) : (
                  <div>
                    <p className="text-xs text-text-muted italic">Check with Masjid</p>
                  </div>
                )}
              </div>
            )
          })}

          {/* Jumu'ah Times */}
          <div className="p-3 sm:p-4 md:p-5 rounded-xl bg-bg-secondary hover:bg-bg-tertiary transition-all duration-300 text-center hover-lift premium-border min-w-0">
            <h3 className="font-semibold text-text-primary text-sm sm:text-base mb-2 sm:mb-3">Jumu'ah</h3>
            {(() => {
              const prayer = prayerData[0]
              const jumaTimes = [
                prayer["Juma'1"],
                prayer["Juma'2"],
                prayer["Juma'3"]
              ].filter(time => time && time !== '')
              
              if (jumaTimes.length > 0) {
                return (
                  <div className="flex flex-wrap justify-center gap-1">
                    {jumaTimes.map((time, index) => (
                      <div key={index} className="flex-1 min-w-[60px]">
                        <p className="text-xs text-text-secondary mb-1">J{index + 1}</p>
                        <p className="text-sm sm:text-base md:text-lg font-bold text-primary break-words">{time}</p>
                      </div>
                    ))}
                  </div>
                )
              }
              return <p className="text-xs text-text-muted italic">-</p>
            })()}
          </div>

          {/* Tahajjud Times */}
          <div className="p-3 sm:p-4 md:p-5 rounded-xl bg-bg-secondary hover:bg-bg-tertiary transition-all duration-300 text-center hover-lift premium-border min-w-0">
            <h3 className="font-semibold text-text-primary text-sm sm:text-base mb-2 sm:mb-3">Tahajjud</h3>
            {(() => {
              const prayer = prayerData[0]
              const tahajjudStart = prayer["Tahajjud Start"]
              const tahajjudEnd = prayer["Tahajjud End"]
              
              if (tahajjudStart && tahajjudStart !== '' && tahajjudEnd && tahajjudEnd !== '') {
                return (
                  <div className="space-y-2 sm:space-y-3">
                    <div>
                      <p className="text-xs text-text-secondary mb-1">Start</p>
                      <p className="text-sm sm:text-base md:text-lg font-bold text-primary break-words">{tahajjudStart}</p>
                    </div>
                    <div>
                      <p className="text-xs text-text-secondary mb-1">End</p>
                      <p className="text-sm sm:text-base md:text-lg font-bold text-primary break-words">{tahajjudEnd}</p>
                    </div>
                  </div>
                )
              }
              return <p className="text-xs text-text-muted italic">-</p>
            })()}
          </div>

          {/* Sunrise & Sunset Combined */}
          <div className="p-3 sm:p-4 md:p-5 rounded-xl bg-bg-secondary hover:bg-bg-tertiary transition-all duration-300 text-center hover-lift premium-border min-w-0">
            <h3 className="font-semibold text-text-primary text-xs sm:text-sm mb-2 sm:mb-3 whitespace-nowrap">Dawn & Dusk</h3>
            <div className="space-y-2 sm:space-y-3">
              <div>
                <p className="text-xs text-text-secondary mb-1">Sunrise</p>
                <p className="text-sm sm:text-base md:text-lg font-bold text-primary break-words">{prayerData[0].Sunrise}</p>
              </div>
              <div>
                <p className="text-xs text-text-secondary mb-1">Sunset</p>
                <p className="text-sm sm:text-base md:text-lg font-bold text-primary break-words">{prayerData[0].Sunset}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Date Range View (Table Format) - Shows ALL selected dates */}
      {!isSingleDate && prayerData.length > 0 && (
        <div className="overflow-x-auto max-h-[600px] overflow-y-auto">
          <div className="min-w-full">
            <table className="w-full">
              <thead className="sticky top-0 bg-bg-secondary z-10">
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-text-secondary font-semibold text-sm">Date</th>
                  {prayers.map((prayer) => (
                    <th key={prayer} className="text-center py-3 px-2 text-text-secondary font-semibold text-sm">
                      {prayer}
                    </th>
                  ))}
                  <th className="text-center py-3 px-2 text-text-secondary font-semibold text-sm">Jumu'ah</th>
                  <th className="text-center py-3 px-2 text-text-secondary font-semibold text-sm">Tahajjud</th>
                </tr>
              </thead>
              <tbody>
                {(() => {
                  const fullDates = getFullDatesArray()
                  return prayerData.map((day, index) => {
                    const fullDate = fullDates[index]
                    const todayDateStr = new Date().toISOString().split('T')[0]
                    const isToday = fullDate === todayDateStr
                    
                    return (
                      <tr key={index} className={`border-b border-border hover:bg-bg-secondary transition-colors ${isToday ? 'bg-primary/10' : ''}`}>
                        <td className="py-3 px-4">
                          <div className="font-medium text-text-primary">{formatDateDisplay(day.Date, fullDate)}</div>
                          {isToday && <span className="text-xs text-primary font-semibold">Today</span>}
                        </td>
                        {prayers.map((prayerName) => {
                          const timeKey = prayerName as keyof PrayerTime
                          const jamaatKey = `${prayerName}_Jama'at` as keyof PrayerTime
                          const time = day[timeKey] as string
                          const jamaat = day[jamaatKey] as string
                          const jamaatTime = jamaat !== 'Variable Check with Masjid ' ? jamaat : null

                          return (
                            <td key={prayerName} className="text-center py-3 px-2">
                              <div className="text-sm font-semibold text-text-primary">{time}</div>
                              {jamaatTime && (
                                <div className="text-xs text-text-secondary mt-1">{jamaatTime}</div>
                              )}
                            </td>
                          )
                        })}
                        {/* Jumu'ah Column */}
                        <td className="text-center py-3 px-2">
                          {(() => {
                            const jumaTimes = [
                              day["Juma'1"],
                              day["Juma'2"],
                              day["Juma'3"]
                            ].filter(time => time && time !== '')
                            
                            if (jumaTimes.length > 0) {
                              return (
                                <div className="space-y-1">
                                  {jumaTimes.map((time, idx) => (
                                    <div key={idx} className="text-xs">
                                      <span className="text-text-secondary">J{idx + 1}:</span>
                                      <span className="font-semibold text-text-primary ml-1">{time}</span>
                                    </div>
                                  ))}
                                </div>
                              )
                            }
                            return <span className="text-xs text-text-muted">-</span>
                          })()}
                        </td>
                        {/* Tahajjud Column */}
                        <td className="text-center py-3 px-2">
                          {(() => {
                            const tahajjudStart = day["Tahajjud Start"]
                            const tahajjudEnd = day["Tahajjud End"]
                            
                            if (tahajjudStart && tahajjudStart !== '' && tahajjudEnd && tahajjudEnd !== '') {
                              return (
                                <div className="space-y-1">
                                  <div className="text-xs">
                                    <span className="text-text-secondary">Start:</span>
                                    <span className="font-semibold text-text-primary ml-1">{tahajjudStart}</span>
                                  </div>
                                  <div className="text-xs">
                                    <span className="text-text-secondary">End:</span>
                                    <span className="font-semibold text-text-primary ml-1">{tahajjudEnd}</span>
                                  </div>
                                </div>
                              )
                            }
                            return <span className="text-xs text-text-muted">-</span>
                          })()}
                        </td>
                      </tr>
                    )
                  })
                })()}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {prayerData.length === 0 && startDateFull && (
        <div className="text-center py-8 text-text-secondary">
          <p>No prayer times found for the selected date range.</p>
          <p className="text-sm mt-2">Please check if the dates are within the available range.</p>
        </div>
      )}
    </div>
  )
}
