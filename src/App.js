import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <Login></Login>
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
