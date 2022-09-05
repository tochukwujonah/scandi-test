import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {
  ProductListing
} from './pages/productListing';

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={ <ProductListing /> } >

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
