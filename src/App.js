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
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { modalTheme } from "./redux/modalProductSlice";
import { Button, Modal } from "react-bootstrap";

function App() {
  const { loading, dataApi,internetControl } = useFetch(
    "https://api.escuelajs.co/api/v1/products"
  );


  const modalProductParam = useSelector(state=> state.modalProduct.isModal)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(modalTheme())
  },[dispatch])
 

   const handleClose = () => {
    dispatch(modalTheme());
  };

  return (
    <>
    <Modal show={modalProductParam} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title>Welcome!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         Stay tuned for campaigns and new opportunities.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
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
