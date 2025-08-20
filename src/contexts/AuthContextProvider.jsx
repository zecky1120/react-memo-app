import { useState } from "react";
import { AuthContext } from "./AuthContext";

export default function AuthContextProvider({ children }) {
  const [login, setLogin] = useState(false);
  const handleLogin = () => {
    setLogin(!login);
  };
  const AuthValue = { login, handleLogin };
  return (
    <AuthContext.Provider value={AuthValue}>{children}</AuthContext.Provider>
  );
}
