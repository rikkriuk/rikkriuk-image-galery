import React from "react";

const Navbar = () => {
   return (
      <header className="flex items-center justify-around py-4 px-6 shadow-md">
         <div className="flex items-center gap-2">
            <div className="bg-gray-600 px-3 py-2 rounded-md">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
               </svg>
            </div>

            <h1 className="text-xl font-semibold">Rikkriuk</h1>
         </div>

         <div className="flex items-center gap-2 w-1/2 px-4 relative">
            <input type="text" className="border border-gray-300 h-11 rounded-md px-2 py-1 w-full focus:outline-none focus:border-red-500" placeholder="Cari..." />
            <button className="absolute right-7">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
               </svg>
            </button>
         </div>

         <button className="button-custom">Gabung</button>
      </header>
   )
}

export default Navbar;