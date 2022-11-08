import { Routes, Route } from "react-router-dom";
import ProtectedLayout from "./components/ProtectedLayout";
import Login from "./components/Login/Login";
import HomeLayout from "./components/HomeLayout";
import Dashboard from "components/Dashboard/Dashboard"

export default function App() {
  return (
    <Routes>
      <Route path="/auth" element={<HomeLayout />}>
        <Route path="/auth/login" element={<Login />} />
      </Route>
      <Route path="/" element={<ProtectedLayout />}>
        <Route index element={< Dashboard/>} />
      </Route>
    </Routes>
  );
}
