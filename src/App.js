import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Search from "./pages/Search"
import { useState } from "react";

function App() {
  const tokenLocalStorage = localStorage.getItem("token")
  const [token, setToken] = useState(tokenLocalStorage)
  return (
    <Routes>
      <Route path="/" element={<Home token={token} setToken={setToken} tokenLocalStorage={tokenLocalStorage} />}/>
      <Route path="/search" element={<Search />}/>
    </Routes>
  );
}

export default App;
