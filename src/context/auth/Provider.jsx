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
      try {
        if (currentUser) {
          const { data: response } = await axiosInstance.post(
            "/auth/generate-token",
            {
              email: currentUser.email,
            },
          );
          if (response.data) {
            const { user: loggedInUser, token } = response.data;
            localStorage.setItem("token", token);
            setUser(loggedInUser);
          }
        } else {
          localStorage.removeItem("token");
          setUser(null);
        }
      } catch (error) {
        logOut();
        localStorage.removeItem("token");
      } finally {
        setGlobalLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const authConfig = {
    user,
    setUser,
    createUser,
    globalLoading,
    loginUser,
    logOut,
  };

  return <AuthContext value={authConfig}>{children} </AuthContext>;
}
