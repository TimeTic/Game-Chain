import { auth } from "../FirebaseConfig";
import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  //sign up
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  //log in
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  //log out

  function logout() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      return () => {
        unsubscribe();
      };
    });
  }, []);

  return (
    <userAuthContext.Provider value={{ signUp, login, logout, user }}>
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
