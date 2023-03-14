import { useState } from "react";

const AddProductForm = ({ onAddProduct }) => {
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [supplier, setSupplier] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      productId: Math.floor(Math.random() * 10000),
      productName,
      productCategory,
      supplier,
      price,
    };
    onAddProduct(product);
    setProductName("");
    setProductCategory("");
    setSupplier("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit} className="my-8">
      <h2 className="text-lg font-medium mb-4">Add Product</h2>
      <div className="flex flex-col mb-4">
        <label htmlFor="productName" className="mb-2 font-medium">
          Product Name
        </label>
        <input
          type="text"
          id="productName"
          name="productName"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="border border-gray-300 p-2"
          required
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="productCategory" className="mb-2 font-medium">
          Product Category
        </label>
        <input
          type="text"
          id="productCategory"
          name="productCategory"
          value={productCategory}
          onChange={(e) => setProductCategory(e.target.value)}
          className="border border-gray-300 p-2"
          required
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="supplier" className="mb-2 font-medium">
          Supplier
        </label>
        <input
          type="text"
          id="supplier"
          name="supplier"
          value={supplier}
          onChange={(e) => setSupplier(e.target.value)}
          className="border border-gray-300 p-2"
          required
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="price" className="mb-2 font-medium">
          Price
        </label>
        <input
          type="number"
          id="price"
          name="price"
          min="0"
          step="0.01"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border border-gray-300 p-2"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Add Product
      </button>
    </form>
  );
};

export default AddProductForm;
