import {useAuth} from "./Context/AuthContext";
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./Components/ProtectedRoute";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp";

function App() {
    
      const {user} = useAuth();
   
return (
    <Routes>
        <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp/>} />
        
      
        
        <Route
        path="/dashboard" 
        element={
            <ProtectedRoute>
                <Dashboard/>
            </ProtectedRoute>
        }
        />

        <Route 
        path="*"
        element={<Navigate to={user ? "/dashboard" : "/login"}/>} 
        />

    </Routes>
);
}

export default App;
