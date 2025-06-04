import { Bell } from "lucide-react"
import { Button } from "./ui/button"
import { useAppSelector } from "@/store/hooks"
import { selectUnreadNotificationsCount } from "@/store/notificationSlice"

const NotificationsButton = () => {
  const count = useAppSelector(selectUnreadNotificationsCount)

  return <Button variant="secondary" size="icon" className="relative">
      <Bell className="" />
      <span className="absolute top-0 right-0 text-xs">{count}</span>
    </Button>
}

export default NotificationsButton