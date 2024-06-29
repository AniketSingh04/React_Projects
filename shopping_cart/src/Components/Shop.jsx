import React from 'react';
import list from '../list';
import Card from './Card';

const Shop = () => {
  return (
    <section className='cards-container'>
        {list.map((items)=>{
           return <Card item={items} key={items.id}/>
        })}
    </section>
  )
}

export default Shop
