import { create } from "zustand";

interface AuthStore {
    user: string,
    Login: (username: string)=> void,
    Logout: () => void,

}

const useAuthStore= create<AuthStore>(set => ({
    user: '',
    Login: (username) => set(()=> ({user: username})),
    Logout: ()=> set(()=> ({user: ''})),

}));
export default useAuthStore;