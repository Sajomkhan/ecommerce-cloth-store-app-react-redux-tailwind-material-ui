import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CategoryPage from "./pages/CategoryPage";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductPage from "./pages/ProductPage";
import Register from "./pages/Register";


const Router = () => {
  return (
    <BrowserRouter>
        <Navbar />        
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/product' element={<ProductPage />}/>
            <Route path='/category-page' element={<CategoryPage />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/*' element={<Error />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router