import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Mainlayout from "./components/Layout/MainLayout";
import Home from "./pages/Home/Home";
import Category from "./pages/Category/Category";
import NoPage from "./pages/NoPage/NoPage";
import Detail from "./pages/Detail/Detail";
import About from "./pages/About/About";
import ApiContext from "./contexts/ApiContext";
import useFetch from "./hooks/useFetch";

function App() {
  const { loading, dataApi,internetControl } = useFetch(
    "https://api.escuelajs.co/api/v1/products"
  );

  return (
    <>
      <ApiContext.Provider value={{ loading, dataApi,internetControl }}>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Mainlayout />}>
                <Route index element={<Home />}></Route>
                <Route path="about" element={<About />}></Route>
                <Route path="categories" element={<Category />}></Route>
                <Route path=":category/:title" element={<Detail />}></Route>
                <Route path="*" element={<NoPage />}></Route>
              </Route>
          </Routes>
        </BrowserRouter>
      </ApiContext.Provider>
    </>
  );
}

export default App;
