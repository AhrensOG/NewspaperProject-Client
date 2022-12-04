import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { auth } from "../firebase/config";

const context = createContext()

export const useAuth = () => {
  const authContext = useContext(context);
  if(!context) throw new Error('There is not context provider.')
  return authContext;
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signUp = async (email, password) => {
    const data = await createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = async (email, password) => {
    const data = await signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => signOut(auth)

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
  }, [])

  return (
    <context.Provider value={{ signUp, signIn, logOut, user }}>{children}</context.Provider>
  )
}