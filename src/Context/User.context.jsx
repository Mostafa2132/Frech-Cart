
import { createContext, useState } from "react";


export let userContext = createContext(null);

// eslint-disable-next-line react/prop-types
export default function UserProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));

  function Logout() {
    setToken(null);
    localStorage.removeItem("token");
  }





  return (
    <userContext.Provider value={{ token, setToken, Logout  }}>
      {children}
    </userContext.Provider>
  );
}
