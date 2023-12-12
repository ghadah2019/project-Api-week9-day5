import React from 'react';
import Nav from './Nav';

function Favoorites() {
  const storedBooks = localStorage.getItem('favoritebook');
  const favoriteBooks = JSON.parse(storedBooks);

  return (
    <div className='bg-[#c4af938f]'>
         <Nav></Nav>
      <h1 className='text-center text-4xl'>Favorite Books</h1>
      <div className='grid grid-cols-4 p-[2rem] gap-7'>
      {favoriteBooks.map((item) => (
        <div className='border border-[#b09876]' key={item.rank}>
            <img className='h-[20rem] w-[14rem] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 m-[3rem] rounded-lg' src={item.book_image} alt="" />
          {/* Render your favorite book content here */}
        </div>
      ))}
    </div>
    </div>
  );
}

export default Favoorites;