import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../../Firebase/firebase.init";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // === Register ===
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // === Login ===
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // === Google Login ===
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // === Logout ===
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // === User Observer ===
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      try {
        if (currentUser?.email) {
          // === Get MongoDB User ===
          const res = await fetch(
            `http://localhost:5000/user/${currentUser.email}`
          );

          const dbUser = await res.json();

          // === Merge Firebase + MongoDB User ===
          const mergedUser = {
            uid: currentUser.uid,
            email: currentUser.email,
            ...dbUser,
          };

          setUser(mergedUser);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Failed to fetch MongoDB user:", error);

        setUser({
          uid: currentUser?.uid,
          email: currentUser?.email,
        });
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);
  
  // === Context Data ===
  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    googleLogin,
    logOut,
    setUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;