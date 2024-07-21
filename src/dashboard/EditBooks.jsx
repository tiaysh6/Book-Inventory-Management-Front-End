import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Textarea } from "flowbite-react";



const EditBooks = () => {
    const { id } = useParams();
    const { bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL } = useLoaderData();
    const bookCategory = [
        "Fiction",
        "Non-Fiction",
        "Mystery ",
        "Programming",
        "Science Fiction",
        "Fantasy",
        "Horror",
        "Autobiography",
        "Historical",
        "Self-help",
        "Memoir",
        "Children",
        "Travel",
        "Religion",
        "Art & Design"
    ]

    const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategory[0]);

    const handleChangeSelectedValue = (event) => {
        setSelectedBookCategory(event.target.value);
    }

    //handle book submissions
    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;

        const bookTitle = form.bookTitle.value;
        const authorName = form.authorName.value;
        const imageURL = form.imageURL.value;
        const category = form.category.value;
        const bookDescription = form.bookDescription.value;
        const bookPDFURL = form.bookPDFURL.value;


        const updateBookObj = {
            bookTitle,
            authorName,
            imageURL,
            category,
            bookDescription,
            bookPDFURL
        }

        //update book data 
        fetch(`${import.meta.env.VITE_BACKEND_URI}/book/${id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(updateBookObj)
        }).then(res => res.json()).then(data => {
            alert("Book is updated successfully!");
        })


    }


    return (
        <div className='px-4 my-12'>
            <h2 className='mb-8 text-3xl font-bold'>Update book data</h2>
            <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
                {/*1st row*/}
                <div className='flex gap-8'>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="bookTitle" value="Book Title" />
                        </div>
                        <TextInput id="bookTitle" name='bookTitle' type="text" placeholder="Book name" required defaultValue={bookTitle} />
                    </div>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="authorName" value="Author's Name" />
                        </div>
                        <TextInput id="authorName" name='authorName' type="text" placeholder="Author's name" defaultValue={authorName} required />
                    </div>
                </div>

                {/*2nd row*/}
                <div className='flex gap-8'>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="imageURL" value="Book Image URL" />
                        </div>
                        <TextInput id="imageURL" name='imageURL' type="text" placeholder="Book image URL" required defaultValue={imageURL} />
                    </div>
                    {/*category*/}
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="inputState" value="Book Category" />
                        </div>

                        <select id='inputState' name='category' className='w-full rounded' value={selectedBookCategory} onChange={handleChangeSelectedValue}>
                            {
                                bookCategory.map((option) => <option key={option} value={option}>{option}</option>)
                            }
                        </select>


                    </div>
                </div>

                {/*bookDescription*/}
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="bookDescription" value="Book Description" />
                    </div>
                    <Textarea id="bookDescription" name='bookDescription' type="text" placeholder="Book description..." required rows={6} className='w-full' defaultValue={bookDescription} />
                </div>

                {/*Book PDF */}
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="bookPDFURL" value="Book Pdf URL" />
                    </div>
                    <TextInput id="bookPDFURL1" name='bookPDFURL' type="text" placeholder="book pdf url" required defaultValue={bookPDFURL} />
                </div>
                <Button type="submit" className='w-1/2'>Update Book</Button>


            </form>

        </div>
    )
}

export default EditBooks