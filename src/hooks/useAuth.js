import { use } from "react";
import { AuthContext } from "../context/auth/context";

const useAuth = () => {
  return use(AuthContext);
};

export default useAuth;
