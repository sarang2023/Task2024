
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout';


import Jobs from './Jobs';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
    <Route path=''element={<Layout/>}>
      <Route index element={<Jobs/>}/>
 
    <Route path='jobs'element={<Jobs/>}/>




    </Route>



      </Routes>
      
      
      
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
