import React from "react";
import monica from "./assets/monica.jpeg";
import ross from "./assets/ross.jpeg";
import phoebe from "./assets/phoebe.jpeg";
import joey from "./assets/joey.jpeg";
import rachel from "./assets/rachel.jpeg";
import chandler from "./assets/chandler.jpeg";

function Question() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
        {/* Soru Başlığı */}
        <p className="text-2xl font-bold text-center mb-6">Who is this?</p>
        
        {/* Resim */}
        <div className="flex justify-center mb-8">
          <img 
            className="w-64 h-64 object-cover rounded-md" 
            src={rachel} 
            alt="Question" 
          />
        </div>

        {/* Butonlar */}
        <div className="grid grid-cols-2 gap-6">
          <button className="bg-blue-500 text-white py-4 px-6 text-lg rounded hover:bg-blue-600">
            Monica
          </button>
          <button className="bg-green-500 text-white py-4 px-6 text-lg rounded hover:bg-green-600">
            Rachel
          </button>
          <button className="bg-yellow-500 text-white py-4 px-6 text-lg rounded hover:bg-yellow-600">
            Phoebe
          </button>
          <button className="bg-red-500 text-white py-4 px-6 text-lg rounded hover:bg-red-600">
            Ross
          </button>
        </div>
      </div>
    </div>
  );
}

export default Question;
