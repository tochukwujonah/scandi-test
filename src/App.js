import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {
  ProductListing, 
  SingleProduct,

} from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={ <ProductListing /> } />
        <Route path='/singleproduct' element={<SingleProduct />} />
        
      </Routes>
    </Router>
  );
}

export default App;
