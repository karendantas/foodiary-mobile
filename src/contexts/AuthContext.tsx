import { createContext, ReactNode, useState } from "react";


interface AuthContextType {
    isLoggedIn: boolean
    isLoading: boolean
}
export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({children}: {children: ReactNode}){
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    return (
        <AuthContext.Provider value={{isLoggedIn, isLoading}}>
            {children}
        </AuthContext.Provider>
    )
}