import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {  Radio, RadioGroup } from '@headlessui/react'

import { StarIcon } from '@heroicons/react/20/solid'

const details = {
  name: 'Basic Tee 6-Pack ',
  price: '$192',
  rating: 3.9,
  reviewCount: 117,
  href: '#',
  imageSrc: 'https://tailwindui.com/img/ecommerce-images/details-quick-preview-02-detail.jpg',
  imageAlt: 'Two each of gray, white, and black shirts arranged on table.',
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: true },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: 'XXL', inStock: true },
    { name: 'XXXL', inStock: false },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Card() {
  const [open, setOpen] = useState(false)
  const [selectedColor, setSelectedColor] = useState(details.colors[0])
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
    {
        product &&   
      // <div className="fixed inset-0  overflow-hidden bg-white">
        <div className="bg-white pt-36 ">
          
            <div className="mx-auto min-h-3 border border-rounded max-w-4xl shadow-2xl   sm:px-6 sm:py-24 lg:px-2 lg:py-2 lg:max-w-6xl ">
            

              <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                  <img alt="" src={product.images[0]} className="object-cover object-center" />
                </div>
                <div className="sm:col-span-8 lg:col-span-7">
                  <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{product.title}</h2>

                  <section aria-labelledby="information-heading" className="mt-2">
                    <h3 id="information-heading" className="sr-only">
                      details information
                    </h3>

                    <p className="text-2xl text-gray-900">{"$"+product.price}</p>

                    {/* Reviews */}
                    <div className="mt-6">
                      <h4 className="sr-only">Reviews</h4>
                      <div className="flex items-center">
                        <div className="flex items-center">
                          {[0, 1, 2, 3, 4].map((rating) => (
                            <StarIcon
                              key={rating}
                              aria-hidden="true"
                              className={classNames(
                                details.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                                'h-5 w-5 flex-shrink-0',
                              )}
                            />
                          ))}
                        </div>
                        <p className="sr-only">{details.rating} out of 5 stars</p>
                        <a href="#" className="ml-3 text-sm font-medium text-[#285192] hover:text-[#36465f]">
                          {details.reviewCount} reviews
                        </a>
                      </div>
                    </div>
                  </section>

                  <section aria-labelledby="options-heading" className="mt-10">
                    <h3 id="options-heading" className="sr-only">
                      details options
                    </h3>

                    <form>
                      {/* Colors */}
                      <fieldset aria-label="Choose a color">
                        <legend className="text-sm font-medium text-gray-900">Color</legend>

                        <RadioGroup
                          value={selectedColor}
                          onChange={setSelectedColor}
                          className="mt-4 flex items-center space-x-3"
                        >
                          {details.colors.map((color) => (
                            <Radio
                              key={color.name}
                              value={color}
                              aria-label={color.name}
                              className={classNames(
                                color.selectedClass,
                                'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none data-[checked]:ring-2 data-[focus]:data-[checked]:ring data-[focus]:data-[checked]:ring-offset-1',
                              )}
                            >
                              <span
                                aria-hidden="true"
                                className={classNames(
                                  color.class,
                                  'h-8 w-8 rounded-full border border-black border-opacity-10',
                                )}
                              />
                            </Radio>
                          ))}
                        </RadioGroup>
                      </fieldset>

                      {/* Sizes */}
                      <div  className="mt-10">
                        
                          <div className="text-sm font-medium text-gray-900">Description</div>
                          <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                        
                      </div>

                      <button
                        type="submit"
                        className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-[#285192] px-8 py-3 text-base font-medium text-white hover:bg-[#36465f] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Add to bag
                      </button>
                    </form>
                  </section>
                </div>
              </div>
             </div>
     </div>
      // </div>
     
        
     
  }
    </>
  )
}
