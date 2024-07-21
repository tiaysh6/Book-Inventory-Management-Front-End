import React, { useEffect, useState } from 'react'
import { Table } from "flowbite-react";
import { Link } from 'react-router-dom';


const ManageBooks = () => {
    const [allBooks, setAllBooks] = useState([]);
    useEffect(() => {
        fetch(`${import.meta.env.VITE_BACKEND_URI}/all-books`).then(res => res.json()).then(data => setAllBooks(data));
    }, [])
    //delete boooks from manage section
    const handleDelete = (id) => {
        fetch(`${import.meta.env.VITE_BACKEND_URI}/book/${id}`, {
            method: 'DELETE',
        }).then(res => res.json()).then(data => {
            alert("Book deleted successfully!")
            setAllBooks((allBooks) => {
                return allBooks.filter(book => book._id !== id);
            })
        });


    }
    return (
        <div className='px-4 my-12 '>
            <h2 className='mb-8 text-3xl font-bold'>Manage your books</h2>
            <Table className='lg:w-[1180px] '>
                <Table.Head>
                    <Table.HeadCell>id</Table.HeadCell>
                    <Table.HeadCell>Book Name</Table.HeadCell>
                    <Table.HeadCell>Author name</Table.HeadCell>
                    <Table.HeadCell>Category</Table.HeadCell>
                    <Table.HeadCell>Price</Table.HeadCell>
                    <Table.HeadCell>

                    </Table.HeadCell>
                    <Table.HeadCell>

                    </Table.HeadCell>
                </Table.Head>

                {
                    allBooks.map((book, index) => <Table.Body className="divide-y" key={book._id}>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {index + 1}
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {book.bookTitle}
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {book.authorName}
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{book.category}</Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Rs.300</Table.Cell>
                            <Table.Cell></Table.Cell>
                            <Table.Cell>
                                <Link className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 " to={`/admin/dashboard/edit-books/${book._id}`}>
                                    Edit
                                </Link>

                            </Table.Cell>
                            <Table.Cell>

                                <button className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600' onClick={() => handleDelete(book._id)}>Delete</button>
                            </Table.Cell>
                        </Table.Row>


                    </Table.Body>)
                }

            </Table>
        </div>
    )
}

export default ManageBooks