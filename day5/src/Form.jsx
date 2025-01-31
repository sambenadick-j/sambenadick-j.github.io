// import { useInView } from "react-intersection-observer";
// import { motion, useAnimation } from "framer-motion";

// import { useState } from "react";

function Form() {

  return (
    <div className="justify-center w-[450px] h-[450px] justify-items-center justify-self-center bg-green-400">
      
        <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center font-sans">Sign Up</h1>
    
    <form action="#" method="POST">
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" required
className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500" />
      </div>

    
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required
          className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500" />
      </div>

      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" required
          className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500" />
      </div>

      
      <div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Submit
        </button>
      </div>
    </form>
    <div/>
    </div>
  );
}

export default Form;
