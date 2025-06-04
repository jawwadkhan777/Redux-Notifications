import type { NotificationItem } from "@/Type"
import { Button } from "./ui/button"
import { Circle } from "lucide-react"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { markAsRead, selectNotifications } from "@/store/notificationSlice"

const Notifications = () => {
  const notifications: NotificationItem[] = useAppSelector(selectNotifications);
  const dispatch = useAppDispatch();

  return (
    <div className="max-w-lg mx-auto">
        <ul className="flex flex-col gap-4 my-10">
          {notifications.map((notificationItem)=> {
            return <li key={notificationItem.id} className="border rounded-md border-white flex px-3 py-2 justify-between items-center">
              <div className="flex flex-col">
                <h3>{notificationItem.text}</h3>
              </div>
              <Button onClick={()=> {dispatch(markAsRead(notificationItem.id))}} variant="secondary" size="icon" className={notificationItem.read ? 'invisible' : 'visible'}>
                <Circle />
              </Button>
            </li>
          })}
        </ul>
    </div>
  )
}

export default Notifications