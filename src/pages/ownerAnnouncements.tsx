import { useState } from "react"
import { Card, Button, Input, TextArea, Label, TextField } from "@heroui/react"
import { getAnnouncements, saveAnnouncements } from "../data/announcements"

function OwnerAnnouncements() {
  const [title, setTitle] = useState("")
  const [message, setMessage] = useState("")

  function handlePublish() {
    if (title.trim() === "" || message.trim() === "") {
      alert("Please enter a title and message")
      return
    }

    const newAnnouncement = { id: Date.now(), title, message, date: new Date().toLocaleDateString() }
    saveAnnouncements([...getAnnouncements(), newAnnouncement])
    setTitle("")
    setMessage("")
    alert("Announcement published!")
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <p className="text-gray-500">Gym Management</p>
          <h1 className="text-3xl font-bold">Announcements</h1>
          <p className="text-gray-500 mt-2">Share important updates with your gym members.</p>
        </div>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-6">Create Announcement</h2>

          <div className="flex flex-col gap-5">
            <TextField isRequired>
              <Label>Title</Label>
              <Input placeholder="Enter announcement title" value={title} onChange={(event) => setTitle(event.target.value)} />
            </TextField>

            <TextField isRequired>
              <Label>Message</Label>
              <TextArea placeholder="Write your announcement..." value={message} onChange={(event) => setMessage(event.target.value)} />
            </TextField>

            <Button variant="primary" onPress={handlePublish}>Publish Announcement</Button>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default OwnerAnnouncements