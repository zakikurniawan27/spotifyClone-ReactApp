import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Search from "./pages/Search"
import { useState } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  const tokenLocalStorage = localStorage.getItem("token")
  const [token, setToken] = useState(tokenLocalStorage)
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home token={token} setToken={setToken} tokenLocalStorage={tokenLocalStorage} />}/>
        <Route path="/search" element={<Search />}/>
      </Routes>
    </Provider>
  );
}

export default App;
