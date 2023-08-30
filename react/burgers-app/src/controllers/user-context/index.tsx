import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useState, useEffect, ReactNode } from "react"

const UserContext = createContext<User | null>(null);

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        // --FIREBASE
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (data) => {
            setUser(data)
        });
        return () => unsubscribe();
        // --FIREBASE        
    }, []);

    return <UserContext.Provider value={user}>
        {children}
    </UserContext.Provider>
}

export const useUserContext = () => useContext(UserContext);