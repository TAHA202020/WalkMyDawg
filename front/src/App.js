import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logout from "./components/Logout/Logout";
import ProtectedDashboard from "./components/ProtectedRoute.js/ProtectedDashboard";
import ProtectedProfile from "./components/ProtectedRoute.js/ProtectedProfile";
import AddDawg from "./components/Profile/AddDawg";
import EditProfile from "./components/Profile/EditProfile";
import MyDawgs from "./components/Profile/MyDawgs";

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProtectedDashboard/>} />
        <Route path="/logout" element={<Logout/>} />
        <Route path="/profile" element= {<ProtectedProfile/>}>
          <Route path="" element={<MyDawgs/>}/>
          <Route path="edit" element={<EditProfile/>}/>
          <Route path="add-dawg" element={<AddDawg/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App