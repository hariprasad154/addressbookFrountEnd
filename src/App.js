import logo from './logo.svg';
import './App.css';
import { Route,Routes,Link } from 'react-router-dom';
import Checkout from './Component/Checkout';
import Home from './Component/Home';
import SignUp from './Component/SignUp';
import SignIn from './Component/SignIn';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signin' element={<SignIn/>}></Route> *
        <Route path='/signup' element={<SignUp/>}></Route> *
        
        <Route path='/checkout' element={<Checkout/>}></Route>
      </Routes>
      
    </div>

  );
}
export default App
