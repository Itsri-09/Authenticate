import { createContext, useEffect, useState } from "react";

export const LoginDetails = createContext();

const AuthenContext = ({ children }) => {
  const [authen, setAuthen] = useState(false);
  const [token, setToken] = useState(
    localStorage.getItem("AuthenToken") || null
  );

  useEffect(() => {
    if (token) {
      setAuthen(true);
    } else {
      setAuthen(false);
    }
  }, [token]);

  const login = (newToken) => {
    setAuthen(true);
    setToken(newToken);
    localStorage.setItem("AuthenToken", newToken);
  };

  const logOut = () => {
    setAuthen(false);
    setToken(null);
    localStorage.removeItem("AuthenToken");
  };
  return (
    <LoginDetails.Provider value={{ authen, login, logOut }}>
      {children}
    </LoginDetails.Provider>
  );
};

export default AuthenContext;
