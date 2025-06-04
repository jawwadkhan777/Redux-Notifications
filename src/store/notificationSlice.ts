import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import type { NotificationItem } from '@/Type'

// Define a type for the slice state
interface NotificationsState {
  notificationsList: NotificationItem[]
}

// Define the initial state using that type
const initialState: NotificationsState = {
  notificationsList: [
    {text: "Notification first",
      read: false,
      id: "abc123"
    },
    {text: "Notification second",
      read: false,
      id: "abc12355"
    },
    {text: "Notification third",
      read: true,
      id: "abc12377"
    },
  ],
}

export const notificationsSlice = createSlice({
  name: 'notifications',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
    markAsRead: (state, action: PayloadAction<string>) => {
      state.notificationsList.forEach((item)=> {
        const targetId = action.payload;
        if(item.id === targetId) {
          item.read = true;
        }
      })
    }
  },
})

export const { markAsRead } = notificationsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectNotifications = (state: RootState) => state.notifications.notificationsList;

export const selectUnreadNotificationsCount = (state: RootState) => {
    const unreadItems = state.notifications.notificationsList.filter((item)=> {
        return !item.read;
    });
    return unreadItems.length;
}

export default notificationsSlice.reducer