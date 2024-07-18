import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {

    const params = useParams();
    const [ product, setProduct ] = useState();

    useEffect( () => {
        fetchProduct();
    },[] )

    const fetchProduct = async() => {
        const product = await fetch("http://localhost:3002/products/"+params.id  );
        const productJson = await product.json();
       
        setProduct(productJson);
        
    }

  return (
    <>
    {product && 
    <div className="max-w-md mx-auto py-8 rounded-md overflow-hidden shadow-md hover:shadow-lg">
    <div className="relative">
        <img className="w-full" src={product.images} alt="Product Image"/>
        <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">SALE
        </div>
    </div>
    <div className="p-4">
        <h3 className="text-lg font-medium mb-2">{product.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        <div className="flex items-center justify-between">
            <span className="font-bold text-lg">{"$"+product.price}</span>
            <button className="bg-[#285192] absolute bottom-2 right-2 hover:bg-[#36465f]  text-white font-normal py-1 px-2 border border-gray-300 rounded " alt="added">
  Add to cart
</button>
        </div>
    </div>
</div>
}
</>
  )
}

export default ProductDetails;


