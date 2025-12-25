export default function Logo() {
  return (
    <div className="flex items-center space-x-3">
      {/* Mosque Icon/Logo */}
      <div className="relative flex-shrink-0">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-primary"
        >
          {/* Crescent Moon */}
          <path
            d="M20 10C14.4772 10 10 14.4772 10 20C10 25.5228 14.4772 30 20 30C22.7614 30 25.2614 28.8807 27.0711 27.0711C25.1307 28.8807 22.3693 30 19.375 30C13.507 30 8.75 25.243 8.75 19.375C8.75 13.507 13.507 8.75 19.375 8.75C22.3693 8.75 25.1307 9.86929 27.0711 11.6789C25.2614 10.1193 22.7614 9 20 9Z"
            fill="currentColor"
          />
          {/* Star */}
          <path
            d="M25 15L25.618 16.618L27.236 17.236L25.618 17.854L25 19.472L24.382 17.854L22.764 17.236L24.382 16.618L25 15Z"
            fill="currentColor"
          />
        </svg>
      </div>
      
      {/* Text */}
      <div className="flex flex-col">
        <span className="text-lg md:text-xl font-bold text-text-primary leading-tight">
          Jamia Masjid
        </span>
        <span className="text-xs md:text-sm text-text-secondary leading-tight">
          West Drayton
        </span>
      </div>
    </div>
  )
}

