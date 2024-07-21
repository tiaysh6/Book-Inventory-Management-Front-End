import React, { useEffect, useState } from "react";
import BookCards from "../components/BookCards";

const OtherBooks = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URI}/all-books`)
      .then((res) => res.json())
      .then((data) => setBooks(data.slice(2, 12)));
  }, []);
  return (
    <div>
      <BookCards books={books} headline="Other Books" />
    </div>
  );
};

export default OtherBooks;
