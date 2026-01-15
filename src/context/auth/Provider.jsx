import { useEffect, useState } from "react";
import { auth } from "../../firebase/firebase.config";
import { AuthContext } from "./context";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default function Provider({ children }) {
  const [user, setUser] = useState(null);
  const [globalLoading, setGlobalLoading] = useState(true);

  const createUser = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
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
  };

  return <AuthContext value={authConfig}>{children} </AuthContext>;
}
