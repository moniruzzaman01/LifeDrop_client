import { useEffect, useState } from "react";
import { auth } from "../../firebase/firebase.config";
import { AuthContext } from "./context";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import axiosInstance from "../../hooks/useAxios";

export default function Provider({ children }) {
  const [user, setUser] = useState(null);
  const [globalLoading, setGlobalLoading] = useState(true);

  const createUser = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const { data } = await axiosInstance.get(`/users/${currentUser.email}`);
        if (data) {
          setUser(data.data);
        }
      }

      setGlobalLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authConfig = {
    user,
    createUser,
    globalLoading,
    loginUser,
    logOut,
  };

  return <AuthContext value={authConfig}>{children} </AuthContext>;
}
