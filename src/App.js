import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import Sidebarcontent from "./components/Sidebarcontent";
import LoginPage from "./components/Login1";

function App() {
  return (
    <>
      <LoginPage></LoginPage>
      {/* <Sidebar></Sidebar> */}
      {/* <Sidebarcontent></Sidebarcontent> */}
      {/* <Login></Login> */}
      {/* <Dashboard></Dashboard> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}>
            <Route index element={<Login />} />
            <Route path="Dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
