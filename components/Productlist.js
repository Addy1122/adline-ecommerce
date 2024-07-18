import React, { useEffect, useState } from 'react'
import Product, { SaleProduct } from './Product'


const Productlist = () => {

    const [products, setProducts] = useState([]);
    const [ categories, setCategoryList ] = useState([]);
    const [ filteredProducts, setFilteredProducts ] = useState([]);

    const WithDiscount = SaleProduct(Product);
    useEffect(()=>{
        fetchProducts();
    },[])

    const fetchProducts = async()=>{

        const products = await fetch('http://localhost:3002/products')

        const productsJson = await products.json();
        setProducts(productsJson)
        

    }


    useEffect( () => {
          
        fetchCategories();
    },[] )
    
     const fetchCategories = async() => {
      const categories = await fetch('http://localhost:3002/category');
      const categoriesJson = await categories.json();
      setCategoryList(categoriesJson);
      console.log(categoriesJson);
    }

    const handleClick = (name)=>{

        const filteredProducts = products.filter ( (product) => product.category.name === name);
        console.log(filteredProducts)
        setFilteredProducts(filteredProducts);
        
    }
    return (
        <>
        <div className="mt-24">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900  mx-auto max-w-xl px-4  py-2 sm:px-22sm:py-2 lg:max-w-7xl lg:px-8">Shop by Category</h2>
        <div  className="grid grid-cols-2 gap-20 mx-auto max-w-1xl px-2 sm:px-4 sm:grid-cols-2 sm:py-10 lg:grid-cols-5 lg:max-w-7xl lg:px-4 ">
        {categories.filter((category, index) => index !== 5).map((category) => (
        <div key={category.id} onClick={() => handleClick(category.name)} className="flex flex-col items-center justify-center">
          <a href={category.href}>
           <img className="hover:opacity-75 w-25% border rounded-full" src={category.image} alt="product image" />
          </a>
        <button  href={category.href} className=''>
          <h6 className="text-lg font-normal tracking-tight text-center text-gray-400 dark:text-gray-500">{category.name}</h6>
        </button>
        </div>
))}

         </div>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900  mx-auto max-w-xl px-4  py-2 sm:px-22sm:py-2 lg:max-w-7xl lg:px-8">New Arrivals</h2>
        <div className="grid grid-cols-2 gap-3 mx-auto max-w-2xl px-4 sm:px-6 sm:grid-cols-2 sm:py-10 lg:grid-cols-4 lg:max-w-7xl lg:px-8 ">
            
           {filteredProducts.length > 0 ? filteredProducts.map( (product) => <Product key={product.id} product={ product } /> ) :
           products.map( (product) => (
            product.category.name === "Clothes" ? <WithDiscount key={product.id} product={ product } /> : <Product key={product.id} product={ product } />
          )  ) }
           
        </div>
        </div>

        </>

    )
}

export default Productlist
