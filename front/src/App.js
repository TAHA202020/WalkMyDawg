import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Logout from "./components/Logout/Logout";

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard/>} />
        <Route path="/logout" element={<Logout/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App