
document.addEventListener('DOMContentLoaded', function() {
    const jsonUrl = './Time_Table_File/Salah_Timings.json';

        // Get and display the current system date in Day–Mon–Year format
        function displayCurrentDate() {
            const today = new Date();
            const day = String(today.getDate()).padStart(2, '0');
            const month = today.toLocaleString('en-US', { month: 'long' }); // Get abbreviated month (e.g., "Oct")
            const year = today.getFullYear();
            const formattedDate = `${day}–${month}–${year}`;
    
            // Display the date in the designated element
            document.getElementById('prayer-date').textContent = formattedDate;
        }

        function displayClock() {
            setInterval(() => {
                const now = new Date().toLocaleString("en-GB", {
                    timeZone: "Europe/London",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: true
                });
        
                document.getElementById('current-time').textContent = now;
            }, 1000); // Update every second
        }
        
    

    let intervalId;
    function getLondonTimeNow() {
        const now = new Date();
        // Format the current date as London time using Intl.DateTimeFormat, which respects DST
        const londonTimeString = new Intl.DateTimeFormat("en-GB", {
            timeZone: "Europe/London",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            year: "numeric",
            month: "numeric",
            day: "numeric"
        }).formatToParts(now);
    
        // Extract individual date parts
        const year = londonTimeString.find(part => part.type === "year").value;
        const month = londonTimeString.find(part => part.type === "month").value - 1; // JS months are 0-based
        const day = londonTimeString.find(part => part.type === "day").value;
        const hour = londonTimeString.find(part => part.type === "hour").value;
        const minute = londonTimeString.find(part => part.type === "minute").value;
        const second = londonTimeString.find(part => part.type === "second").value;
    
        return new Date(year, month, day, hour, minute, second);
    }
    
    // You can use this function as-is with the rest of the `getNextJamaatTime` and `startCountdown` logic
    
    function getNextJamaatTime(todayTimings) {
        const now = getLondonTimeNow();
        const today = now.getDay();
        const isFriday = (today === 5);
    
        const jamaatTimes = [
            { name: 'Fajr', time: todayTimings["Fajr_Jama'at"] || '5:00 AM' },
            { name: isFriday ? "Juma'1" : 'Dhuhr', time: isFriday ? todayTimings["Juma'1"] : todayTimings["Dhuhr_Jama'at"] || '12:30 PM' },
            { name: isFriday ? "Juma'2" : 'Asr', time: isFriday ? todayTimings["Juma'2"] : todayTimings["Asr_Jama'at"] || '3:30 PM' },
            { name: 'Maghrib', time: todayTimings["Maghrib_Jama'at"] || '5:45 PM' },
            { name: 'Isha', time: todayTimings["Isha_Jama'at"] || '7:00 PM' }
        ];
    
        function timeToLondonDateObject(timeString) {
            if (!timeString) return null;
            const [time, modifier] = timeString.trim().split(' ');
            let [hours, minutes] = time.split(':').map(Number);
    
            if (isNaN(hours) || isNaN(minutes)) {
                console.log(`Invalid time format: ${timeString}`);
                return null;
            }
    
            if (modifier === 'PM' && hours !== 12) hours += 12;
            if (modifier === 'AM' && hours === 12) hours = 0;
    
            const londonDateObject = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes, 0);
            console.log(`Converted time "${timeString}" to London Date object: ${londonDateObject}`);
            return londonDateObject;
        }
    
        for (const jamaat of jamaatTimes) {
            const jamaatTime = timeToLondonDateObject(jamaat.time);
            if (jamaatTime && jamaatTime > now) {
                console.log(`Next Jamaat: ${jamaat.name} at ${jamaatTime}`);
                return { name: jamaat.name, targetTime: jamaatTime };
            }
        }
    
        const fajrTimeTomorrow = timeToLondonDateObject(todayTimings["Fajr_Jama'at"]);
        if (fajrTimeTomorrow) {
            fajrTimeTomorrow.setDate(fajrTimeTomorrow.getDate() + 1);
            console.log(`Next Jamaat: Fajr at ${fajrTimeTomorrow} (tomorrow)`);
            return { name: 'Fajr', targetTime: fajrTimeTomorrow };
        }
        console.log("No valid Jamaat times found.");
        return null;
    }
    
    function startCountdown(jamaatInfo) {
        const countdownElement = document.getElementById('next-jamaat-time');
        if (intervalId) clearInterval(intervalId);
    
        intervalId = setInterval(() => {
            const now = getLondonTimeNow();
            if (!jamaatInfo || !jamaatInfo.targetTime || isNaN(jamaatInfo.targetTime)) {
                countdownElement.textContent = "Invalid time";
                clearInterval(intervalId);
                console.log("Countdown stopped due to invalid target time.");
                return;
            }
    
            const timeLeftInMs = jamaatInfo.targetTime - now;
            if (timeLeftInMs <= 0) {
                clearInterval(intervalId);
                countdownElement.textContent = `${jamaatInfo.name} Jamaat is now!`;
                return;
            }
    
            const hours = Math.floor(timeLeftInMs / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeftInMs % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeftInMs % (1000 * 60)) / 1000);
    
            countdownElement.textContent = `${jamaatInfo.name} Jamaat in ${String(hours).padStart(2, '0')}h ${String(minutes).padStart(2, '0')}m ${String(seconds).padStart(2, '0')}s`;
        }, 1000);
    }
    
    
    async function loadSalahTimings() {
        try {
            const response = await fetch(jsonUrl);
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            const data = await response.json();
            const today = new Date();
            const month = today.toLocaleString('en-US', { month: 'short' });
            const day = String(today.getDate()).padStart(2, '0');
            const todayKey = `${month}/${day}`;
            const todayTimings = data.find(entry => entry.Date === todayKey);

            if (todayTimings) {
                console.log("Today's Timings:", todayTimings);
                if (document.getElementById('fajr-azan')) document.getElementById('fajr-azan').textContent = todayTimings.Fajr || 'N/A';
                if (document.getElementById('fajr-jamaat')) document.getElementById('fajr-jamaat').textContent = todayTimings["Fajr_Jama'at"] || 'N/A';
                if (document.getElementById('sunrise-time')) document.getElementById('sunrise-time').textContent = todayTimings.Sunrise || 'N/A';
                if (document.getElementById('sunset-time')) document.getElementById('sunset-time').textContent = todayTimings.Sunset || 'N/A';
                if (document.getElementById('tahajjud-start')) document.getElementById('tahajjud-start').textContent = todayTimings["Tahajjud Start"] || 'N/A';
                if (document.getElementById('tahajjud-end')) document.getElementById('tahajjud-end').textContent = todayTimings["Tahajjud End"] || 'N/A';
                if (document.getElementById('dhuhr-azan')) document.getElementById('dhuhr-azan').textContent = todayTimings.Dhuhr || 'N/A';
                if (document.getElementById('dhuhr-jamaat')) document.getElementById('dhuhr-jamaat').textContent = todayTimings["Dhuhr_Jama'at"] || 'N/A';
                if (document.getElementById('asr-azan')) document.getElementById('asr-azan').textContent = todayTimings.Asr || 'N/A';
                if (document.getElementById('asr-jamaat')) document.getElementById('asr-jamaat').textContent = todayTimings["Asr_Jama'at"] || 'N/A';
                if (document.getElementById('maghrib-azan')) document.getElementById('maghrib-azan').textContent = todayTimings.Maghrib || 'N/A';
                if (document.getElementById('maghrib-jamaat')) document.getElementById('maghrib-jamaat').textContent = todayTimings["Maghrib_Jama'at"] || 'N/A';
                if (document.getElementById('isha-azan')) document.getElementById('isha-azan').textContent = todayTimings.Isha || 'N/A';
                if (document.getElementById('isha-jamaat')) document.getElementById('isha-jamaat').textContent = todayTimings["Isha_Jama'at"] || 'N/A';
                if (document.getElementById('juma-1')) document.getElementById('juma-1').textContent = todayTimings["Juma'1"] || 'N/A';
                if (document.getElementById('juma-2')) document.getElementById('juma-2').textContent = todayTimings["Juma'2"] || 'N/A';
                if (document.getElementById('jamaat-time-status')) document.getElementById('jamaat-time-status').textContent = todayTimings["Jama'at Time Status"] || 'N/A';

                const jamaatInfo = getNextJamaatTime(todayTimings);
                if (jamaatInfo) {
                    startCountdown(jamaatInfo);
                } else {
                    document.getElementById('next-jamaat-time').textContent = "No valid Jamaat times available.";
                }
            } else {
                document.getElementById('next-jamaat-time').textContent = "No Jamaat times available for today.";
            }
        } catch (error) {
            console.error("Error loading Salah timings:", error);
        }
    }

    displayCurrentDate();
    displayClock();
    loadSalahTimings();
});
