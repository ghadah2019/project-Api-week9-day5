import React from 'react'


function ReadinBooks() {
    const storedredBooks = localStorage.getItem('listbook');
    const readBooks = JSON.parse(storedredBooks);
  return (
    <div>
         {readBooks.map((item) => (
        <div key={item.rank}>
            <img src={item.book_image} alt="" />
        
        </div>
      ))}
    </div>

  
  )
}

export default ReadinBooks