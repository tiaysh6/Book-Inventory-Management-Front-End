
import React, { useEffect, useState } from "react";
import { Button, Modal } from "flowbite-react";
import { Card } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";


const Shop = () => {
  const [books, setbooks] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URI}/all-books`).then(res => res.json()).then(data => setbooks(data));
  }, []);

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="mt-28 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center">All these books are available</h2>
      <div className="grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
        {
          books.map(book => (
            <Card className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden dark:bg-gray-800">
              <img src={book.imageURL} alt={book.bookTitle} className="object-contain h-96" />
              <div className="p-4">
                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {book.bookTitle}
                </h5>
                {/* <p className="font-normal text-gray-700 dark:text-gray-400 my-4 leading-relaxed">
                    {book.bookDescription}
                  </p> */}
                <button onClick={() => setOpenModal(true)} className="bg-blue-700 font-semibold text-white py-2 px-4 rounded hover:bg-blue-800 mt-5">
                  Buy now
                </button>
                <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
                  <Modal.Header />
                  <Modal.Body>
                    <div className="text-center">
                      <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                      <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                        Are you sure you want to buy this product?
                      </h3>
                      <div className="flex justify-center gap-4">
                        <Button color="failure" onClick={() => setOpenModal(false)}>
                          {"Yes, I'm sure"}
                        </Button>
                        <Button color="gray" onClick={() => setOpenModal(false)}>
                          No, cancel
                        </Button>
                      </div>
                    </div>
                  </Modal.Body>
                </Modal>
              </div>
            </Card>
          ))
        }
      </div>
    </div>

  );
};

export default Shop;

// div - flex flex <col />

// div div div 60 30 10