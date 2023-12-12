import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Nav from './Nav';

function AllBooks() {
  const [info, setInfo] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=mTYZmPcLnU6oaeR61YlQJaHN0On9XdWz'
      )
      .then((response) => {
        setInfo(response.data);
        console.log(response.data);
      });
  }, []);


  const handleFavorite = (selecterBook) => {
    const storedFavrotes = JSON.parse(localStorage.getItem("favoritebook")) || [];
localStorage.setItem("favoritebook", JSON.stringify([...storedFavrotes, selecterBook]))

  }


  const readingBookslist = (readBook) => {
    const storedreading = JSON.parse(localStorage.getItem("listbook")) || [];
localStorage.setItem("listbook", JSON.stringify([...storedreading, readBook]))

  }

  useEffect(() => {
    if (searchTerm && info.results?.books) {
      const filtered = info.results.books.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredBooks(filtered);
    } else {
      setFilteredBooks(info.results?.books || []);
    }
  }, [searchTerm, info.results?.books]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
   
    <div className='bg-[#c4af938f]'>
         <Nav></Nav>
      <h1 className="text-4xl font-bold mb-4 text-center ">All Books</h1>
      <div className="mb-4 flex justify-center">
        <input
          type="text"
          placeholder="Search books"
          value={searchTerm}
          onChange={handleSearch}
          className="border border-gray-300 px-4 py-2 rounded-md w-64 items-center flex justify-center"
        />
      </div>
      <div className="grid grid-cols-4 gap-5 m-[5rem] ">
        {filteredBooks.map((book) => (
          <div
            key={book.rank}
            className="text-center border border-[#b09876]"
          >
<Link to={`/BooksDetails/${book.primary_isbn10}`}>
            <img
              src={book.book_image}
              alt={book.title}
              className="mx-auto h-[20rem] w-[14rem] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 m-[3rem] rounded-lg"
            /> </Link>
            <p className="mt-2">{book.title}</p>
         
           <Link to="/Favoorites">
           
           <button className='bg-[#b09876] text-[white] p-1 rounded-lg w-[12rem] mb-[1rem] hover:bg-[#7a6240]' onClick={()=> {handleFavorite(book)}}> Favorites</button>
           </Link>

           <Link to="/ReadinBooks">
           
           <button className='bg-[#b09876] text-[white] p-1 rounded-lg w-[12rem] mb-[1rem] hover:bg-[#7a6240]' onClick={()=> {readingBookslist(book)}}> Read</button>
           </Link>
           
         
          </div>

        
        ))}
      </div>
    </div>
  );
}

export default AllBooks;