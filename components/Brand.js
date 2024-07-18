import React from 'react'
import Levi from '../Assets/Image/levi.svg'
import Calvin from '../Assets/Image/calvin.svg'
import Cartier from '../Assets/Image/cartier.svg'
import Lee from '../Assets/Image/lee.svg'
import Tommy from '../Assets/Image/tommy.svg'
import Adidas from '../Assets/Image/adidas.svg'
import Ck from '../Assets/Image/ck.svg'
import Converse from '../Assets/Image/converse.svg'
import Dolce from '../Assets/Image/dolce.svg'
import  Fila from '../Assets/Image/fila.svg'

const Brand = () => {
  return (
    <div>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Trusted by the world’s most innovative Brands
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              alt="Transistor"
              src={Levi}
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <img
              alt="Reform"
              src={Calvin}
              width={158}
              height={48}
              className="col-span-2 max-h-13 w-full object-contain lg:col-span-1"
            />
            <img
              alt="Tuple"
              src={Cartier}
              width={158}
              height={60}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <img
              alt="SavvyCal"
              src={Lee}
              width={158}
              height={60}
              className="col-span-2 max-h-16 w-full object-contain sm:col-start-2 lg:col-span-1"
            />
            <img
              alt="Statamic"
              src={Tommy}
              width={158}
              height={48}
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            />
            <img
              alt="Transistor"
              src={Adidas}
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <img
              alt="Reform"
              src={Ck}
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <img
              alt="Tuple"
              src={Converse}
              width={158}
              height={48}
              className="col-span-2 max-h-14 w-full object-contain lg:col-span-1"
            />
            <img
              alt="SavvyCal"
              src={Dolce}
              width={158}
              height={48}
              className="col-span-2 max-h-16 w-full object-contain sm:col-start-2 lg:col-span-1"
            />
            <img
              alt="Statamic"
              src={Fila}
              width={158}
              height={48}
              className="col-span-2 col-start-2 max-h-16 w-full object-contain sm:col-start-auto lg:col-span-1"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Brand

  
