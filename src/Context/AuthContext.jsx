  import { createContext, useContext, useState} from "react";

  const AuthContext = createContext();

  function AuthProvider({children}){
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user" )) || null
    );

    function login(userData, token){
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(userData));
        setUser(userData)
    }
 function logout(){
    localStorage.clear();
    setUser(null);
 }

 return(
    <AuthContext.Provider value={{user,login,logout}}>
        {children}
    </AuthContext.Provider>
 );
  }

  function useAuth(){
    return useContext(AuthContext);
  }

    export {AuthProvider,useAuth};