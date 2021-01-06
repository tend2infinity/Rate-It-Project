import React, { useContext, useState, useEffect } from "react"
import { Firebase } from "../firebase/firebase.prod";

const AuthContext = React.createContext()


export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {

  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function signup(email, password) {
    return Firebase.auth().createUserWithEmailAndPassword(email, password)
  }

  function signin(email, password) {
    return Firebase.auth().signInWithEmailAndPassword(email, password)
  }

  function logout() {
    return Firebase.auth().signOut()
  }

  function resetPassword(email) {
    return Firebase.auth().sendPasswordResetEmail(email)
  }


  useEffect(() => {
      
    const unsubscribe = Firebase.auth().onAuthStateChanged((user) => {
        if(user)
        {
        setCurrentUser(user)
        console.log("this is working")
        } else {
            setCurrentUser(null);
        }
        setLoading(false)
      
    })

    return () => unsubscribe() 
  }, [])

  const value = {
    currentUser,
    signin,
    signup,
    logout,
    resetPassword,
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}