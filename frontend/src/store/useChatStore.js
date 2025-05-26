import toast from "react-hot-toast";
import { create } from "zustand";
import api from "../lib/api";
import { useAuthStore } from "./useAuthStore";

export const useChatStore = create((set, get) => ({
    messages: [],
    users: [],
    selectedUser: null,
    isUsersLoading: false,
    isMessagesLoading: false,

      getUsers: async () => {
        set({ isUsersLoading: true });
        try {
          const res = await api.get("/api/messages/users");
          set({ users: res.data });
        } catch (error) {
          toast.error(error.response?.data?.message || "Failed to fetch users");
        } finally {
          set({ isUsersLoading: false });
        }
      },
      
      getMessages: async (userId) => {
        set({ isMessagesLoading: true });
        try {
          const res = await api.get(`/api/messages/${userId}`);
          set({ messages: res.data });
        } catch (error) {
          toast.error(error.response?.data?.message || "Failed to fetch messages");
        } finally {
          set({ isMessagesLoading: false });
        }
      },

      sendMessage: async (messageData) => {
          const { selectedUser, messages }  = get();
          try {
            const res = await api.post(`/api/messages/send/${selectedUser._id}`, messageData);
            set({messages: [...messages, res.data]});
          } catch (error) {
             toast.error(error.response?.data?.message || "Failed to send message");
          }
      },

      subscribeToMessages: () => {
        const { selectedUser } = get();
        if (!selectedUser) return;
    
        const socket = useAuthStore.getState().socket;
        if (!socket) return;
    
        socket.on("newMessage", (newMessage) => {
          const isMessageSentFromSelectedUser = newMessage.senderId === selectedUser._id;
          if (!isMessageSentFromSelectedUser) return;
    
          set({
            messages: [...get().messages, newMessage],
          });
        });
      },
    
      unsubscribeFromMessages: () => {
        const socket = useAuthStore.getState().socket;
        if (socket) {
          socket.off("newMessage");
        }
      },

      setSelectedUser: (selectedUser) => set({ selectedUser }),

}));