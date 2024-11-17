import React from 'react';
//  here we are using react memo for unnecessary re render ==============
//  for check how react.memo works if we do a console.log in app.js was rendering this file too but now after using react.memo this component will render only when needed =========
const ProductList = React.memo(({ products }) => {
    console.log('ProductList rendered', products);
    // if there is no Product will show that to user, for better user experience  =======
    if (products.length === 0) return <p>No products available.</p>;
    return (
        <ul>
            {
                // as we are checking product length we don't need "?." in map ===========
                products.map((product) => (
                    <li key={product.id}>
                        {product?.name} - ${product?.price}
                    </li>
                ))
            }
        </ul>
    );
})

export default ProductList;