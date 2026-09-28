import { useState } from "react"
import {
  getAnnouncements,
  saveAnnouncements
} from "../data/announcements"

function OwnerAnnouncements() {
  const [title, setTitle] = useState("")
  const [message, setMessage] = useState("")

  function handlePublish() {
    if (title === "" || message === "") {
      alert("Please enter a title and message")
      return
    }

    const newAnnouncement = {
      id: Date.now(),
      title: title,
      message: message,
      date: new Date().toLocaleDateString()
    }

    const currentAnnouncements = getAnnouncements()

    saveAnnouncements([
      ...currentAnnouncements,
      newAnnouncement
    ])

    setTitle("")
    setMessage("")

    alert("Announcement published!")
  }

  return (
    <div>
      <h1>Manage Announcements</h1>

      <input
        type="text"
        placeholder="Announcement title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <textarea
        placeholder="Announcement message"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />

      <button onClick={handlePublish}>
        Publish
      </button>
    </div>
  )
}

export default OwnerAnnouncements