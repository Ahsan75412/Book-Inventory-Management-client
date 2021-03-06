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
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import AddItem from './Pages/AddItem/AddItem';
import ManageItem from './Pages/ManageItem/ManageItem';
import AddReview from './Pages/AddReview/AddReview';
import MyItems from './Pages/MyItems/MyItems';


function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="/blogs" element={<Blogs></Blogs>} />
        <Route path="/inventory" element={<Inventory></Inventory>} />
        <Route path="/review" element={<AddReview></AddReview>} />

        <Route path="/inventory/:productId" element = {
            <RequireAuth>
             <ProductDetail></ProductDetail>
            </RequireAuth>
        }></Route>

        <Route path="/add" element = {
            <RequireAuth>
             <AddItem></AddItem>
            </RequireAuth>
        }></Route>

        <Route path="/manage" element = {
            <RequireAuth>
             <ManageItem></ManageItem>
            </RequireAuth>
        }></Route>

        <Route path="/items" element = {
            <RequireAuth>
              <MyItems></MyItems>
            </RequireAuth>
        }></Route>


      
        

        <Route path="*" element={<NotFound></NotFound>} /> 
        
      </Routes>
      
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </>
  );
}

export default App;
