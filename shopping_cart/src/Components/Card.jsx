import React from 'react';
import '../Styles/Card.css';

const Card = ({item, handleClick}) => {
    const {author, id, img, price, title} = item;


  return (
    <div className='Cards'>
        <div className='image-box'>
            <img src={img} alt='book'/>
        </div>
        <div className='book-details'>
            <p>{title}</p>
            <p>{author}</p>
            <p>Price - {String.fromCharCode(8377)}{price}</p>
            <button onClick={()=> handleClick(item)}>Add to Cart</button>
        </div>
    </div>
  )
}

export default Card
