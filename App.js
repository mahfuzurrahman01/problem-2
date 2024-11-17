import AddProductForm from './AddProductForm';
import './App.css';
import { useState } from 'react';
import ProductList from './ProductList';

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "apple", price: 1 },
    { id: 2, name: "banana", price: 2 }
  ])
  const addProduct = (product) => {
    // 1. here instead of adding id as calculating everytime the length instead we can go for unique id everytime, otherwise it can be create issue if we remove any product. 
    // 2. BUT still as there is no removing functionality I'm leaving it like this ======= otherwise I'll go for using UUid or Date.now() as unique Id.
    // 3. Instead of directly spread the product list we can use a functional update pattern 
    setProducts((prevProducts) => [...prevProducts, { ...product, id: products?.length + 1 }]);
  }

  return (
    <div>
      <h1>Product List</h1>
      <AddProductForm addProduct={addProduct} />
      <ProductList products={products} />
    </div>
  );
}

export default App;
