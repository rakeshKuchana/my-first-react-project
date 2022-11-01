import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import NewServiceOrder from './pages/NewServiceOrder';
import ServiceOrders from './pages/ServiceOrders';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home/>} />
        <Route path='/service-orders' element={<ServiceOrders/>}></Route>
        <Route path='/new-service-order' element={<NewServiceOrder/>}></Route>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>

    </Layout>
  );
}

export default App;
