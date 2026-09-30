type Announcement = {
  id: number
  title: string
  message: string
  date: string
}

const defaultAnnouncements: Announcement[] = []

export function getAnnouncements(): Announcement[] {
  const storedAnnouncements = localStorage.getItem("announcements")
  if (storedAnnouncements) return JSON.parse(storedAnnouncements)
  localStorage.setItem("announcements", JSON.stringify(defaultAnnouncements))
  return defaultAnnouncements
}

export function saveAnnouncements(announcements: Announcement[]) {
  localStorage.setItem("announcements", JSON.stringify(announcements))
}