import React, { useState } from 'react';

const AddProductForm = ({ addProduct }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [error, setError] = useState('');

    const checkValidNameAndPrice = () => {
        if (!name.trim() || !price) {
            if (!name.trim() && price) return "Invalid Name";
            if (name.trim() && !price) return "Invalid Price";
            if (!name.trim() && !price) return "Invalid Name & Price";
        }
        if (isNaN(price) || parseFloat(price) <= 0) {
            return "Price must be a positive number.";
        }
        return "";
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        // we have integrate a strict validation with this function, that will check for valid name and price =======
        const isValidNamePrice = checkValidNameAndPrice()
        if (isValidNamePrice) {
            setError(isValidNamePrice);
            return;
        }
        // =========
        //  here we have implement a 2nd condition that will check if name and price is a valid.
        //   ========
        if (name && price) {
            addProduct({ name, price: parseFloat(price) });
            setName('');
            setPrice('');
            setError('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder='Product Name'
                value={name}
                // also clearing the state for error when onchange triggered=========
                onChange={(e) => { setName(e.target.value); setError("") }}
                style={{
                    borderColor: error.includes("Name") ? "red" : "",
                }}
            />
            <input
                type="number"
                placeholder='Product price'
                value={price}
                onChange={(e) => { setPrice(e.target.value); setError("") }}
                style={{
                    borderColor: error.includes("Price") ? "red" : "",
                }}
            />
            <button type="submit">
                Add Product
            </button>

        </form>
    );
};

export default AddProductForm;