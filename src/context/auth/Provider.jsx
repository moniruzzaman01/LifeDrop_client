import { AuthContext } from "./context";

export default function Provider({ children }) {
  const authConfig = {};
  return <AuthContext value={authConfig}>{children} </AuthContext>;
}
