import { createContext, useState } from "react"


const AuthContext = createContext();

export const AuthProvider = ({children})=>{
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);



  
}
