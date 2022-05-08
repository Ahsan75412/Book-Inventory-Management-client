import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/login" element={<Login></Login>} />
        

        {/* <Route path="*" element={<NotFound></NotFound>} />  */}
        
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
