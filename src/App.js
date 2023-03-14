import { useState } from "react";
import ProductTable from "./ProductTable";
import AddProductForm from "./AddProductForm";
import "./index.css";

function App() {
  const [products, setProducts] = useState([]);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-medium mb-4">Product Catalog</h1>
      <AddProductForm onAddProduct={handleAddProduct} />
      <ProductTable products={products} />
    </div>
  );
}

export default App;
