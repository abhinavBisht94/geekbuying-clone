// import axios from "axios";
import React, { useState } from "react";

const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState("");

  const handleLogin = async(email, password) => {
    
      let res = await fetch("https://reqres.in/api/login",{
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
              "email": "eve.holt@reqres.in",
              "password": "cityslicka"
          })
      })
      let data=await res.json()
    //  return data.token
  setToken(data.token)
  console.log(data.token)
    //  api request to reqres.in for the token
  };
  const handleLogout = () => {
    //  set token back to " " once logged out
    setToken("")
  };

  const value = { handleLogin, token, handleLogout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
