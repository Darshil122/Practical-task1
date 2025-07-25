import {Route, Routes, useNavigate} from "react-router-dom";
import UserLogin from "./Auth/UserLogin";
import AdminDash from "./Admin/AdminDash";
import Home from "./Home";

function App() {
  const navigate = useNavigate();
  
  const userData = JSON.parse(localStorage.getItem("userData"));
    if(!userData){
        navigate("/login");
    }

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/AdminDash" element={<AdminDash/>}/>
      <Route path="/login" element={<UserLogin/>}/>
    </Routes>
    
   
  )
}

export default App
