import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({children})
{
   
    const[isAuthenticated , setAuthenticated] = useState();
    const [username, setUsername] = useState("");
    const [token, setToken] = useState("");

    return(
        <AuthContext.Provider value={{  isAuthenticated , setAuthenticated , username ,setUsername , token , setToken }}>
            {children}
        </AuthContext.Provider>
    )
}