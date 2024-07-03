import React from 'react'

export default function Footer() {

    return(
 
  <div class="bg-white mt-32 ">
 
    <div class="relative z-40 lg:hidden" role="dialog" aria-modal="true">
  
      <div class="fixed inset-0 bg-black bg-opacity-25" aria-hidden="true"></div>
  
      <div class="fixed inset-0 z-40 flex">
     
        <div class="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
          <div class="flex px-4 pb-2 pt-5">
            <button type="button" class="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400">
              <span class="absolute -inset-0.5"></span>
              <span class="sr-only">Close menu</span>
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
  

          <div class="mt-2">
            <div class="border-b border-gray-200">
              <div class="-mb-px flex space-x-8 px-4" aria-orientation="horizontal" role="tablist">
                {/* <!-- Selected: "border-indigo-600 text-indigo-600", Not Selected: "border-transparent text-gray-900" --> */}
                <button id="tabs-1-tab-1" class="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900" aria-controls="tabs-1-panel-1" role="tab" type="button">Women</button>
                {/* <!-- Selected: "border-indigo-600 text-indigo-600", Not Selected: "border-transparent text-gray-900" --> */}
                <button id="tabs-1-tab-2" class="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900" aria-controls="tabs-1-panel-2" role="tab" type="button">Men</button>
              </div>
            </div>
  
            {/* <!-- 'Women' tab panel, show/hide based on tab state. --> */}
            <div id="tabs-1-panel-1" class="space-y-10 px-4 pb-8 pt-10" aria-labelledby="tabs-1-tab-1" role="tabpanel" tabindex="0">
              <div class="grid grid-cols-2 gap-x-4">
                <div class="group relative text-sm">
                  <div class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                    <img src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg" alt="Models sitting back to back, wearing Basic Tee in black and bone." class="object-cover object-center"/>
                  </div>
                  <a href="#" class="mt-6 block font-medium text-gray-900">
                    <span class="absolute inset-0 z-10" aria-hidden="true"></span>
                    New Arrivals
                  </a>
                  <p aria-hidden="true" class="mt-1">Shop now</p>
                </div>
                <div class="group relative text-sm">
                  <div class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                    <img src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg" alt="Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees." class="object-cover object-center"/>
                  </div>
                  <a href="#" class="mt-6 block font-medium text-gray-900">
                    <span class="absolute inset-0 z-10" aria-hidden="true"></span>
                    Basic Tees
                  </a>
                  <p aria-hidden="true" class="mt-1">Shop now</p>
                </div>
              </div>
              <div>
                <p id="women-clothing-heading-mobile" class="font-medium text-gray-900">Clothing</p>
                <ul role="list" aria-labelledby="women-clothing-heading-mobile" class="mt-6 flex flex-col space-y-6">
                  <li class="flow-root">
                    <a href="#" class="-m-2 block p-2 text-gray-500">Tops</a>
                  </li>
                  <li class="flow-root">
                    <a href="#" class="-m-2 block p-2 text-gray-500">Dresses</a>
                  </li>
                  <li class="flow-root">
                    <a href="#" class="-m-2 block p-2 text-gray-500">Pants</a>
                  </li>
                  <li class="flow-root">
                    <a href="#" class="-m-2 block p-2 text-gray-500">Denim</a>
                  </li>
                  <li class="flow-root">
                    <a href="#" class="-m-2 block p-2 text-gray-500">Sweaters</a>
                  </li>
                  <li class="flow-root">
                    <a href="#" class="-m-2 block p-2 text-gray-500">T-Shirts</a>
                  </li>
                  <li class="flow-root">
                    <a href="#" class="-m-2 block p-2 text-gray-500">Jackets</a>
                  </li>
                  <li class="flow-root">
                    <a href="#" class="-m-2 block p-2 text-gray-500">Activewear</a>
                  </li>
                  <li class="flow-root">
                    <a href="#" class="-m-2 block p-2 text-gray-500">Browse All</a>
                  </li>
                </ul>
              </div>
              <div>
                <p id="women-accessories-heading-mobile" class="font-medium text-gray-900">Accessories</p>
                <ul role="list" aria-labelledby="women-accessories-heading-mobile" class="mt-6 flex flex-col space-y-6">
                  <li class="flow-root">
                    <a href="#" class="-m-2 block p-2 text-gray-500">Watches</a>
                  </li>
                  <li class="flow-root">
                    <a href="#" class="-m-2 block p-2 text-gray-500">Wallets</a>
                  </li>
                  <li class="flow-root">
                    <a href="#" class="-m-2 block p-2 text-gray-500">Bags</a>
                  </li>
                  <li class="flow-root">
                    <a href="#" class="-m-2 block p-2 text-gray-500">Sunglasses</a>
                  </li>
                  <li class="flow-root">
                    <a href="#" class="-m-2 block p-2 text-gray-500">Hats</a>
                  </li>
                  <li class="flow-root">
                    <a href="#" class="-m-2 block p-2 text-gray-500">Belts</a>
                  </li>
                </ul>
              </div>
              <div>
                <p id="women-brands-heading-mobile" class="font-medium text-gray-900">Brands</p>
                <ul role="list" aria-labelledby="women-brands-heading-mobile" class="mt-6 flex flex-col space-y-6">
                  <li class="flow-root">
                    <a href="#" class="-m-2 block p-2 text-gray-500">Full Nelson</a>
                  </li>
                  <li class="flow-root">
                    <a href="#" class="-m-2 block p-2 text-gray-500">My Way</a>
                  </li>
                  <li class="flow-root">
                    <a href="#" class="-m-2 block p-2 text-gray-500">Re-Arranged</a>
                  </li>
                  <li class="flow-root">
                    <a href="#" class="-m-2 block p-2 text-gray-500">Counterfeit</a>
                  </li>
                  <li class="flow-root">
                    <a href="#" class="-m-2 block p-2 text-gray-500">Significant Other</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- 'Men' tab panel, show/hide based on tab state. --> */}
            <div id="tabs-1-panel-2" class="space-y-10 px-4 pb-8 pt-10" aria-labelledby="tabs-1-tab-2" role="tabpanel" tabindex="0">
              <div class="grid grid-cols-2 gap-x-4">
                <div class="group relative text-sm">
                  <div class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                    <img src="https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg" alt="Drawstring top with elastic loop closure and textured interior padding." class="object-cover object-center"/>
                  </div>
                  <a href="#" class="mt-6 block font-medium text-gray-900">
                    <span class="absolute inset-0 z-10" aria-hidden="true"></span>
                    New Arrivals
                  </a>
                  <p aria-hidden="true" class="mt-1">Shop now</p>
                </div>
                <div class="group relative text-sm">
                  <div class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                    <img src="https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg" alt="Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt." class="object-cover object-center"/>
                  </div>
                  <a href="#" class="mt-6 block font-medium text-gray-900">
                    <span class="absolute inset-0 z-10" aria-hidden="true"></span>
                    Artwork Tees
                  </a>
                  <p aria-hidden="true" class="mt-1">Shop now</p>
                </div>
              </div>
              <div>
                <p id="men-clothing-heading-mobile" class="font-medium text-gray-900">Clothing</p>
                <ul role="list" aria-labelledby="men-clothing-heading-mobile" class="mt-6 flex flex-col space-y-6">
                  <li class="flow-root">
                    <a href="#" class="-m-2 block p-2 text-gray-500">Tops</a>
                  </li>
                  <li class="flow-root">
                    <a href="#" class="-m-2 block p-2 text-gray-500">Pants</a>
                  </li>
                  <li class="flow-root">
                    <a href="#" class="-m-2 block p-2 text-gray-500">Sweaters</a>
                  </li>
                  <li class="flow-root">
                    <a href="#" class="-m-2 block p-2 text-gray-500">T-Shirts</a>
                  </li>
                  <li class="flow-root">
                    <a href="#" class="-m-2 block p-2 text-gray-500">Jackets</a>
                  </li>
                  <li class="flow-root">
                    <a href="#" class="-m-2 block p-2 text-gray-500">Activewear</a>
                  </li>
                  <li class="flow-root">
                    <a href="#" class="-m-2 block p-2 text-gray-500">Browse All</a>
                  </li>
                </ul>
              </div>
              <div>
                <p id="men-accessories-heading-mobile" class="font-medium text-gray-900">Accessories</p>
                <ul role="list" aria-labelledby="men-accessories-heading-mobile" class="mt-6 flex flex-col space-y-6">
                  <li class="flow-root">
                    <a href="#" class="-m-2 block p-2 text-gray-500">Watches</a>
                  </li>
                  <li class="flow-root">
                    <a href="#" class="-m-2 block p-2 text-gray-500">Wallets</a>
                  </li>
                  <li class="flow-root">
                    <a href="#" class="-m-2 block p-2 text-gray-500">Bags</a>
                  </li>
                  <li class="flow-root">
                    <a href="#" class="-m-2 block p-2 text-gray-500">Sunglasses</a>
                  </li>
                  <li class="flow-root">
                    <a href="#" class="-m-2 block p-2 text-gray-500">Hats</a>
                  </li>
                  <li class="flow-root">
                    <a href="#" class="-m-2 block p-2 text-gray-500">Belts</a>
                  </li>
                </ul>
              </div>
              <div>
                <p id="men-brands-heading-mobile" class="font-medium text-gray-900">Brands</p>
                <ul role="list" aria-labelledby="men-brands-heading-mobile" class="mt-6 flex flex-col space-y-6">
                  <li class="flow-root">
                    <a href="#" class="-m-2 block p-2 text-gray-500">Re-Arranged</a>
                  </li>
                  <li class="flow-root">
                    <a href="#" class="-m-2 block p-2 text-gray-500">Counterfeit</a>
                  </li>
                  <li class="flow-root">
                    <a href="#" class="-m-2 block p-2 text-gray-500">Full Nelson</a>
                  </li>
                  <li class="flow-root">
                    <a href="#" class="-m-2 block p-2 text-gray-500">My Way</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
  
          <div class="space-y-6 border-t border-gray-200 px-4 py-6">
            <div class="flow-root">
              <a href="#" class="-m-2 block p-2 font-medium text-gray-900">Company</a>
            </div>
            <div class="flow-root">
              <a href="#" class="-m-2 block p-2 font-medium text-gray-900">Stores</a>
            </div>
          </div>
  
          <div class="space-y-6 border-t border-gray-200 px-4 py-6">
            <div class="flow-root">
              <a href="#" class="-m-2 block p-2 font-medium text-gray-900">Sign in</a>
            </div>
            <div class="flow-root">
              <a href="#" class="-m-2 block p-2 font-medium text-gray-900">Create account</a>
            </div>
          </div>
  
          <div class="border-t border-gray-200 px-4 py-6">
            <a href="#" class="-m-2 flex items-center p-2">
              <img src="https://tailwindui.com/img/flags/flag-canada.svg" alt="" class="block h-auto w-5 flex-shrink-0"/>
              <span class="ml-3 block text-base font-medium text-gray-900">CAD</span>
              <span class="sr-only">, change currency</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  
    <header class="relative bg-white">
  
      <nav aria-label="Top" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="border-b border-gray-200">
          <div class="flex h-16 items-center">
           
            <button type="button" class="relative rounded-md bg-white p-2 text-gray-400 lg:hidden">
              <span class="absolute -inset-0.5"></span>
              <span class="sr-only">Open menu</span>
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
  
      
            <div class="ml-4 flex lg:ml-0">
              <a href="#">
                <span class="sr-only">Your Company</span>
              </a>
            </div>
  
     
            <div class="hidden lg:ml-8 lg:block lg:self-stretch">
              <div class="flex h-full space-x-8">
                <div class="flex">
                  <div class="relative flex">
                    <button type="button" class="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800" aria-expanded="false">Women</button>
                  </div>
  
                  <div class="absolute inset-x-0 top-full text-sm text-gray-500">
                    <div class="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"></div>
  
                    <div class="relative bg-white">
                      <div class="mx-auto max-w-7xl px-8">
                        <div class="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                          <div class="col-start-2 grid grid-cols-2 gap-x-8">
                            <div class="group relative text-base sm:text-sm">
                              <div class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                <img src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg" alt="Models sitting back to back, wearing Basic Tee in black and bone." class="object-cover object-center"/>
                              </div>
                              <a href="#" class="mt-6 block font-medium text-gray-900">
                                <span class="absolute inset-0 z-10" aria-hidden="true"></span>
                                New Arrivals
                              </a>
                              <p aria-hidden="true" class="mt-1">Shop now</p>
                            </div>
                            <div class="group relative text-base sm:text-sm">
                              <div class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                <img src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg" alt="Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees." class="object-cover object-center"/>
                              </div>
                              <a href="#" class="mt-6 block font-medium text-gray-900">
                                <span class="absolute inset-0 z-10" aria-hidden="true"></span>
                                Basic Tees
                              </a>
                              <p aria-hidden="true" class="mt-1">Shop now</p>
                            </div>
                          </div>
                          <div class="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                            <div>
                              <p id="Clothing-heading" class="font-medium text-gray-900">Clothing</p>
                              <ul role="list" aria-labelledby="Clothing-heading" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                <li class="flex">
                                  <a href="#" class="hover:text-gray-800">Tops</a>
                                </li>
                                <li class="flex">
                                  <a href="#" class="hover:text-gray-800">Dresses</a>
                                </li>
                                <li class="flex">
                                  <a href="#" class="hover:text-gray-800">Pants</a>
                                </li>
                                <li class="flex">
                                  <a href="#" class="hover:text-gray-800">Denim</a>
                                </li>
                                <li class="flex">
                                  <a href="#" class="hover:text-gray-800">Sweaters</a>
                                </li>
                                <li class="flex">
                                  <a href="#" class="hover:text-gray-800">T-Shirts</a>
                                </li>
                                <li class="flex">
                                  <a href="#" class="hover:text-gray-800">Jackets</a>
                                </li>
                                <li class="flex">
                                  <a href="#" class="hover:text-gray-800">Activewear</a>
                                </li>
                                <li class="flex">
                                  <a href="#" class="hover:text-gray-800">Browse All</a>
                                </li>
                              </ul>
                            </div>
                            <div>
                              <p id="Accessories-heading" class="font-medium text-gray-900">Accessories</p>
                              <ul role="list" aria-labelledby="Accessories-heading" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                <li class="flex">
                                  <a href="#" class="hover:text-gray-800">Watches</a>
                                </li>
                                <li class="flex">
                                  <a href="#" class="hover:text-gray-800">Wallets</a>
                                </li>
                                <li class="flex">
                                  <a href="#" class="hover:text-gray-800">Bags</a>
                                </li>
                                <li class="flex">
                                  <a href="#" class="hover:text-gray-800">Sunglasses</a>
                                </li>
                                <li class="flex">
                                  <a href="#" class="hover:text-gray-800">Hats</a>
                                </li>
                                <li class="flex">
                                  <a href="#" class="hover:text-gray-800">Belts</a>
                                </li>
                              </ul>
                            </div>
                            <div>
                              <p id="Brands-heading" class="font-medium text-gray-900">Brands</p>
                              <ul role="list" aria-labelledby="Brands-heading" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                <li class="flex">
                                  <a href="#" class="hover:text-gray-800">Full Nelson</a>
                                </li>
                                <li class="flex">
                                  <a href="#" class="hover:text-gray-800">My Way</a>
                                </li>
                                <li class="flex">
                                  <a href="#" class="hover:text-gray-800">Re-Arranged</a>
                                </li>
                                <li class="flex">
                                  <a href="#" class="hover:text-gray-800">Counterfeit</a>
                                </li>
                                <li class="flex">
                                  <a href="#" class="hover:text-gray-800">Significant Other</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex">
                  <div class="relative flex">
                    <button type="button" class="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800" aria-expanded="false">Men</button>
                  </div>
  
                  <div class="absolute inset-x-0 top-full text-sm text-gray-500">
                    <div class="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"></div>
  
                    <div class="relative bg-white">
                      <div class="mx-auto max-w-7xl px-8">
                        <div class="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                          <div class="col-start-2 grid grid-cols-2 gap-x-8">
                            <div class="group relative text-base sm:text-sm">
                              <div class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                <img src="https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg" alt="Drawstring top with elastic loop closure and textured interior padding." class="object-cover object-center"/>
                              </div>
                              <a href="#" class="mt-6 block font-medium text-gray-900">
                                <span class="absolute inset-0 z-10" aria-hidden="true"></span>
                                New Arrivals
                              </a>
                              <p aria-hidden="true" class="mt-1">Shop now</p>
                            </div>
                            <div class="group relative text-base sm:text-sm">
                              <div class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                <img src="https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg" alt="Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt." class="object-cover object-center"/>
                              </div>
                              <a href="#" class="mt-6 block font-medium text-gray-900">
                                <span class="absolute inset-0 z-10" aria-hidden="true"></span>
                                Artwork Tees
                              </a>
                              <p aria-hidden="true" class="mt-1">Shop now</p>
                            </div>
                          </div>
                          <div class="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                            <div>
                              <p id="Clothing-heading" class="font-medium text-gray-900">Clothing</p>
                              <ul role="list" aria-labelledby="Clothing-heading" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                <li class="flex">
                                  <a href="#" class="hover:text-gray-800">Tops</a>
                                </li>
                                <li class="flex">
                                  <a href="#" class="hover:text-gray-800">Pants</a>
                                </li>
                                <li class="flex">
                                  <a href="#" class="hover:text-gray-800">Sweaters</a>
                                </li>
                                <li class="flex">
                                  <a href="#" class="hover:text-gray-800">T-Shirts</a>
                                </li>
                                <li class="flex">
                                  <a href="#" class="hover:text-gray-800">Jackets</a>
                                </li>
                                <li class="flex">
                                  <a href="#" class="hover:text-gray-800">Activewear</a>
                                </li>
                                <li class="flex">
                                  <a href="#" class="hover:text-gray-800">Browse All</a>
                                </li>
                              </ul>
                            </div>
                            <div>
                              <p id="Accessories-heading" class="font-medium text-gray-900">Accessories</p>
                              <ul role="list" aria-labelledby="Accessories-heading" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                <li class="flex">
                                  <a href="#" class="hover:text-gray-800">Watches</a>
                                </li>
                                <li class="flex">
                                  <a href="#" class="hover:text-gray-800">Wallets</a>
                                </li>
                                <li class="flex">
                                  <a href="#" class="hover:text-gray-800">Bags</a>
                                </li>
                                <li class="flex">
                                  <a href="#" class="hover:text-gray-800">Sunglasses</a>
                                </li>
                                <li class="flex">
                                  <a href="#" class="hover:text-gray-800">Hats</a>
                                </li>
                                <li class="flex">
                                  <a href="#" class="hover:text-gray-800">Belts</a>
                                </li>
                              </ul>
                            </div>
                            <div>
                              <p id="Brands-heading" class="font-medium text-gray-900">Brands</p>
                              <ul role="list" aria-labelledby="Brands-heading" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                <li class="flex">
                                  <a href="#" class="hover:text-gray-800">Re-Arranged</a>
                                </li>
                                <li class="flex">
                                  <a href="#" class="hover:text-gray-800">Counterfeit</a>
                                </li>
                                <li class="flex">
                                  <a href="#" class="hover:text-gray-800">Full Nelson</a>
                                </li>
                                <li class="flex">
                                  <a href="#" class="hover:text-gray-800">My Way</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  
                <a href="#" class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Company</a>
                <a href="#" class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Stores</a>
              </div>
            </div>
  
          </div>
        </div>
      </nav>
    </header>
  </div>
  
  )
}
