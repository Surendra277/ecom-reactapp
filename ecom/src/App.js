
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './component/Layout/Layout';
import Homes from './component/Pages/Homes';
import Abouts from './component/Pages/Abouts';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './component/Pages/Login';
import LearnHooks from './component/Modules/LearnHooks';



function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
          <Route index element={<Homes />} />
          <Route path="/About" element={<Abouts />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/LearnHooks" element={<LearnHooks />} />
         </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
