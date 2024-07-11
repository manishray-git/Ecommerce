import React from 'react';
import ProductList from  '../Components/ProductList'
import Footer from '../Components/Footer';
import SpecialOfferComponent from '../Components/website_component/SpecialOfferComponent';

export default function Home() {
  return (
    <>
<div class="relative bg-gradient-to-r from-purple-600 to-blue-600 h-96 text-white overflow-hidden">
  <div class="absolute inset-0">
    <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Background Image" class="object-cover object-center w-full h-full" />
    <div class="absolute inset-0 bg-black opacity-50"></div>
  </div>
  
  <div class="relative z-10 flex flex-col justify-center items-center h-full text-center">
    <h1 class="text-5xl font-bold leading-tight mb-4">Classic Exclusive</h1>
    <p class="text-lg text-gray-300 mb-8">Women's Collection</p>
    <a href="#" class="bg-black text-white  py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Shop Now</a>
  </div>
</div>
<div class="bg-white">
 <ProductList title="Shop by Categories"></ProductList>
 <ProductList title="Our Bestseller"></ProductList>
</div>

<div>
 <SpecialOfferComponent></SpecialOfferComponent>
<Footer/>
</div>
</>

  )
}
