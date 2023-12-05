import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Search from "./pages/Search"
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home  />}/>
        <Route path="/search" element={<Search />}/>
      </Routes>
    </Provider>
  );
}

export default App;
