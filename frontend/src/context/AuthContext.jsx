import { createContext, useContext, useEffect, useState } from "react"
import { getToken } from "../utils/auth";
import { fetchUserFromServer } from "../services/auth";
import { setUser as User } from "../utils/auth";

/////// user current data / updated profile

const AuthContext = createContext();

// provider

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadUser = async () => {
    const token = getToken();
    if (!token) {
      return setLoading(false);
    }
    try {
      const user = await fetchUserFromServer();
      setUser(user)
      User(user); // loacl storage--- utility
    } catch (error) {
      console.log("error in fetching user ", error.message);

    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadUser();
  }, [])


  return (
    <AuthContext.Provider value={{ user, setUser, loading }}  >
      {children}
    </AuthContext.Provider>
  )


}



/// consume
export const useAuthContext = ()=>useContext(AuthContext);
