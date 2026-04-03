import type { DropdownNavItem } from '@/components/ui/dropdown-navigation'
import {
  BookMarked,
  BookOpen,
  Building2,
  Calendar,
  CalendarClock,
  CalendarDays,
  Clock,
  Download,
  FolderOpen,
  GraduationCap,
  HandHeart,
  Heart,
  History,
  Info,
  LayoutGrid,
  MessageCircle,
  Moon,
  Target,
  Users,
} from 'lucide-react'

export const mosqueNavItems: DropdownNavItem[] = [
  {
    id: 1,
    label: 'About',
    subMenus: [
      {
        title: 'About',
        items: [
          { label: 'About Us', href: '/about', description: 'Learn about our mosque', icon: Info },
          { label: 'History', href: '/about#history', description: "Our mosque's journey and heritage", icon: History },
          { label: 'Mission & Vision', href: '/about#mission', description: 'Our goals and values', icon: Target },
          { label: 'Leadership', href: '/about#leadership', description: 'Meet our team', icon: Users },
          { label: 'Facilities', href: '/about#facilities', description: 'Our mosque facilities', icon: Building2 },
        ],
      },
    ],
  },
  {
    id: 2,
    label: 'Services',
    subMenus: [
      {
        title: 'Services',
        items: [
          { label: 'All Services', href: '/services', description: 'View all our services', icon: LayoutGrid },
          { label: 'Marriage Services', href: '/services#marriage', description: 'Nikah and wedding services', icon: Heart },
          { label: 'Funeral Services', href: '/services#funeral', description: 'Janazah and burial services', icon: BookOpen },
          { label: 'Educational Programs', href: '/services#education', description: 'Quran and Islamic studies', icon: GraduationCap },
          { label: 'Counseling', href: '/services#counseling', description: 'Spiritual and family counseling', icon: MessageCircle },
          { label: 'Community Support', href: '/services#community', description: 'Community assistance programs', icon: HandHeart },
        ],
      },
    ],
  },
  {
    id: 3,
    label: 'Events',
    subMenus: [
      {
        title: 'Events',
        items: [
          { label: 'All Events', href: '/events', description: 'View all events and programs', icon: Calendar },
          { label: 'Upcoming Events', href: '/events#upcoming', description: 'View all upcoming events', icon: CalendarDays },
          { label: 'Weekly Programs', href: '/events#weekly', description: 'Regular weekly activities', icon: CalendarClock },
          { label: 'Ramadan Schedule', href: '/events#ramadan', description: 'Ramadan programs and timings', icon: Moon },
          { label: 'Educational Events', href: '/events#education', description: 'Lectures and workshops', icon: BookOpen },
        ],
      },
    ],
  },
  {
    id: 4,
    label: 'Resources',
    subMenus: [
      {
        title: 'Resources',
        items: [
          { label: 'Prayer Times', href: '/', description: 'Daily prayer schedule', icon: Clock },
          { label: 'All Resources', href: '/resources', description: 'View all resources', icon: FolderOpen },
          { label: 'Islamic Calendar', href: '/resources#calendar', description: 'Hijri calendar and important dates', icon: Calendar },
          { label: 'Quran & Hadith', href: '/resources#quran', description: 'Islamic resources and links', icon: BookMarked },
          { label: 'Downloads', href: '/resources#downloads', description: 'Educational materials', icon: Download },
        ],
      },
    ],
  },
  { id: 5, label: 'Contact', link: '/contact' },
]
