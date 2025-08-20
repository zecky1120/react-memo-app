import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function useAuthContext() {
  const auth = useContext(AuthContext);
  return auth;
}
