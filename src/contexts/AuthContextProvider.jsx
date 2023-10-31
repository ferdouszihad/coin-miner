import { createContext } from "react";

export const AuthContext = createContext(null);
const AuthContextProvider = (props = {}) => {
  const { children } = props || {};
  const info = 1;

  return (
    <>
      <AuthContext.Provider value={info}>{children}</AuthContext.Provider>
    </>
  );
};
export default AuthContextProvider;
