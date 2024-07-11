import React from 'react';
import Girlshopingpng from '../../images/pngwing.com.png'

export default function SpecialOfferComponent() {
  return (
    <div className='container mx-auto  flex justify-around rounded-md z-0 bg-gray-100  h-96 relative'>
      <div>

       <img src={Girlshopingpng} className='w-60 object-cover  absolute  h-96 '></img>

      </div>
      <div className='flex p-10 space-x-32'>
        <article className='flex flex-col mt-10 space-y-8  '>
            <h1 className='text-4xl text-black font-bold'>Special Offer</h1>
            <p>Be the first to shop our new collection - enjoy <span className='font-semibold text-4xl'>15% </span>off!</p>
        <button className='bg-red-600 hover:bg-red-400 w-fit h-fit p-3 text-white rounded-md text-xl'>Shop now </button>
        </article>
      <div>
        <div className='special_product'>
        <div class="group relative">
        <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
        </div>
     
      </div>
      </div>
        </div>
      </div>
    </div>
  )
}
