import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Select from 'react-select'
import { useNavigate } from "react-router-dom";
import { TiDeleteOutline } from "react-icons/ti";


const Search = () => {
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState();
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleClear = () => {
        setSearch('');
        setSearchResults(null);
        setErrorMessage('');
    }

    const searchHandler = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URI}/search?key=${search}`);
            const result = await response.json();
            setSearchResults(result);

            {
                if (!result || result?.length === 0) {
                    setErrorMessage('No books found with the given title.');
                }
            }

        } catch (error) {
            console.error('Error:', error); // Handle and log any errors
            setErrorMessage('An error occurred while searching for books.');
        }
    }






    return (
        <div>
            <div className='  search-box'>
                <input className='search-input ' placeholder='search by book title...' value={search} onChange={(e) => { setSearch(e.target.value) }} type="text" />
                <div className='flex items-center'>
                    <div className={`w-7 ${(search || searchResults) ? "" : "hidden-dis"}`}>
                        <TiDeleteOutline className='clear-button' onClick={handleClear} />

                    </div>

                    <button disabled={!search} onClick={searchHandler} className='px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 duration-200' >Search</button>
                </div>



            </div>

            <div className={`h-48 w-1/2 bg-gray-200 rounded-b-lg scrollable-container ${(searchResults || errorMessage) ? "" : "hidden-dis"}`} >
                {searchResults && searchResults.map(book => (
                    <div className='search-stub'>
                        <Link to={`/book/${book._id}`}>
                            <div key={book._id} >

                                <h3>{book.bookTitle}</h3>

                            </div>
                        </Link>
                    </div>
                ))
                }
                {
                    errorMessage && (
                        <div className='text-red-500 text-center'>
                            {errorMessage}
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Search