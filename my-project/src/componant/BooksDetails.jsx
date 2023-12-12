import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Nav from './Nav';

function BooksDetails() {
  const { id } = useParams();
  const [bookDetails, setBookDetails] = useState(null);
  const [urlDetails, seturlDetails] = useState('')

  useEffect(() => {
    axios
      .get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=mTYZmPcLnU6oaeR61YlQJaHN0On9XdWz`)
      .then((response) => {
        const book = response.data.results.books.find(
          (book) => book.primary_isbn10 === id
        );
        setBookDetails(book);
        seturlDetails(book.buy_links[0].url)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (!bookDetails) {
    return <div>Loading book details...</div>;
  }

  

  return (
    <div>
   
      <div>

      <div className=" flex bg-cover bg-center sm:h-auto sm:min-h-[60rem]  h-[57rem] justify-center items-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/4207791/pexels-photo-4207791.jpeg?auto=compress&cs=tinysrgb&w=800')" }}> 

            <div className='bg-[#b9b9c67e] flex flex-col justify-center items-center w-[40%] p-[4rem] rounded-3xl justify-around '>

        <img className='h-[25rem] w-[16rem] rounded-md' src={bookDetails.book_image} alt={bookDetails.title} />
        <h2 className='text-3xl font-[bold]' >{bookDetails.title}</h2>
        <p>Description: <span className='font-[bold]'></span> {bookDetails.description}</p>
        <p>AuthorName: {bookDetails.author}</p>
        <p>{urlDetails}</p>

        </div>

        </div>
      
     

     

        
      </div>
    </div>
  );
}

export default BooksDetails;