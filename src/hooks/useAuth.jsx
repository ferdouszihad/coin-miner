import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContextProvider";

const useAuth = () => {
  const data = useContext(AuthContext);
  return data;
};
export default useAuth;
