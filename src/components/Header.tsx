import NotificationsButton from "./NotificationsButton"

const Header = () => {
  return (
    <header className="px-2 py-1.5 flex items-center justify-between h-12 bg-slate-900">
        <span>Redux Notifications</span>
        <NotificationsButton /> 
    </header>
  )
}

export default Header