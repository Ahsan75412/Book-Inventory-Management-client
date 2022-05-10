import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Blogs from './Pages/Blogs/Blogs';
import Footer from './Pages/Shared/Footer/Footer';
import ProductDetail from './Pages/productDetail/ProductDetail';
import Inventory from './Pages/Inventory/Inventory';


function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/inventory/:productId" element = {<ProductDetail></ProductDetail>}/>
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="/blogs" element={<Blogs></Blogs>} />

        <Route path="/inventory" element={<Inventory></Inventory>} />



       
        

        {/* <Route path="*" element={<NotFound></NotFound>} />  */}
        
      </Routes>
      
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </>
  );
}

export default App;
