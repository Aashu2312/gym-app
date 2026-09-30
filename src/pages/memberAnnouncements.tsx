import { useNavigate } from "react-router-dom"
import { Card, CloseButton } from "@heroui/react"
import { getAnnouncements } from "../data/announcements"

function MemberAnnouncements() {
  const navigate = useNavigate()
  const announcements = getAnnouncements()

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-end mb-4">
          <CloseButton aria-label="Back to dashboard" className="size-8 rounded-full bg-default text-muted hover:bg-default-hover hover:text-foreground active:scale-95" onPress={() => navigate("/member")} />
        </div>

        <div className="mb-8">
          <p className="text-gray-500">Gym Updates</p>
          <h1 className="text-3xl font-bold">Announcements</h1>
          <p className="text-gray-500 mt-2">Stay updated with announcements from your gym.</p>
        </div>

        {announcements.length === 0 ? (
          <Card className="p-6">
            <p className="text-gray-500">No announcements available.</p>
          </Card>
        ) : (
          <div className="flex flex-col gap-5">
            {announcements.map((announcement) => (
              <Card key={announcement.id} className="p-6">
                <h2 className="text-xl font-semibold">{announcement.title}</h2>
                <p className="text-gray-600 mt-2">{announcement.message}</p>
                <p className="text-sm text-gray-400 mt-4">{announcement.date}</p>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default MemberAnnouncements