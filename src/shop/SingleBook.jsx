import { Card } from "flowbite-react";
import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleBook = () => {
  const { _id, bookTitle, imageURL, bookDescription, category } = useLoaderData();
  return (

    <div className='flex justify-start items-center min-h-screen'>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
        <div>
          <Card className="max-w-sm p-6 bg-white shadow-lg rounded-lg overflow-hidden dark:bg-gray-800 py-10">
            <img src={imageURL} alt="Book Image" className="h-full w-full mb-4" />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
              {bookTitle}
            </h5>
            <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">
              <span className="font-semibold text-gray-800 dark:text-white">Category: </span>{category}
            </h3>
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded transition duration-300 ease-in-out">
              Buy now
            </button>
          </Card>
        </div>


      </div>
    </div>

  );
};

export default SingleBook;

