import React from "react";

function LoadMitra(props) {
  return (
    <>
      <div className="md:w-1/4 sm:w-2/4 w-full py-3 px-2">
        <div className="bg-white  w-full p-5 rounded-lg  transition duration-150 hover:shadow-lg">
          <div className="bg-gray-200 w-full h-6 rounded-md animate-pulse"></div>
          <div className="mt-5 bg-gray-200 w-4/5 h-6 rounded-md animate-pulse"></div>
        </div>
      </div>
    </>
  );
}

export default LoadMitra;
