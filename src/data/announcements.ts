type Announcement = {
  id: number
  title: string
  message: string
  date: string
}

const defaultAnnouncements: Announcement[] = [
  {
    id: 1,
    title: "Gym Closed on Sunday",
    message: "The gym will remain closed this Sunday for maintenance.",
    date: "28 September 2026"
  },
  {
    id: 2,
    title: "New Workout Plans",
    message: "New workout plans have been uploaded for all members.",
    date: "27 September 2026"
  }
]

export function getAnnouncements(): Announcement[] {
  const storedAnnouncements = localStorage.getItem("announcements")

  if (storedAnnouncements) {
    return JSON.parse(storedAnnouncements)
  }

  localStorage.setItem(
    "announcements",
    JSON.stringify(defaultAnnouncements)
  )

  return defaultAnnouncements
}

export function saveAnnouncements(
  announcements: Announcement[]
) {
  localStorage.setItem(
    "announcements",
    JSON.stringify(announcements)
  )
}