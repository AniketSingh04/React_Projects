import React from 'react';
import list from '../list';
import Card from './Card';

const Shop = ({handleClick}) => {
  return (
    <section className='cards-container'>
        {list.map((items)=>{
           return <Card item={items} key={items.id} handleClick={handleClick}/>
        })}
    </section>
  )
}

export default Shop
