import React from 'react'
import { Link } from 'react-router-dom';
import { UseDispatch, useDispatch } from 'react-redux';
import { addtoCart } from '../utils/cartSlice';

const Product = (props) => {
   
    const { id, title,images, price,} = props.product;
    const dispatch = useDispatch()
    // const image = JSON.parse(images)
    
  return (
    <>
    
      <div className="card  bg-white relative tracking-tight  px-2 py-2  dark:{#f2f2f2} dark:{#f2f2f2}">
      <Link className='link' to={ '/products/'+id } >
        <a href="#"><img className=" hover:opacity-75 rounded" src={images} alt="product image" /></a>
        </Link>
        <div className="py-2">
        <Link className='link' to={ '/products/'+id } >
            <a href="#"><h6 className="text-lg font-normal tracking-tight text-gray-400 dark:text-gray-500">{title}</h6></a>
         </Link>
        <div className="flex items-center  mt-2.5 mb-5">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
<svg className="w-2.5 h-2.5 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
</svg>
<svg className="w-2.5 h-2.5 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
</svg>
<svg className="w-2.5 h-2.5  text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
</svg>
<svg className="w-2.5 h-2.5  text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
</svg>
<svg className="w-2.5 h-2.5  text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
</svg>
            </div>
{/* <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span> */}
        </div>
        <div className="flex items-center justify-between py-2">
        <span className=" text-xl absolute bottom-2 left-2 font-medium text-gray-900 dark:text-gray-900">${price}</span>  
        <button className="bg-[#285192] absolute bottom-2 right-2 hover:bg-[#36465f]  text-white font-normal py-1 px-2 border border-gray-300 rounded " onClick={()=>dispatch(addtoCart({id, title,images, price}))} alt="added">
  Add to cart
</button>
    </div>
</div>
 </div>
 
 </>
  )
}

export const SaleProduct = (Product) => {
    return (props) => {
       
        return (
            <>
            <span className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10 absolute top-0 left-0">
       50% Sale
      </span>
            <Product { ...props } />
            </>            
        )
    }
}

export default Product
