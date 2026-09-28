import { getAnnouncements } from "../data/announcements"

function MemberAnnouncements() {
  const announcements = getAnnouncements()

  return (
    <div>
      <h1>Announcements</h1>

      {announcements.map((announcement) => (
        <div key={announcement.id}>
          <h2>{announcement.title}</h2>

          <p>{announcement.message}</p>

          <p>{announcement.date}</p>
        </div>
      ))}
    </div>
  )
}

export default MemberAnnouncements