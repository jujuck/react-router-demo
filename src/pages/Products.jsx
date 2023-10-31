import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';

const Products = () => {
  const peoples = useLoaderData()

  return (
    <div>
      Products
      { peoples.map(people => {
        return <div key={people.id}>
          <Link to={`/products/${people.id}`}>
            <h3>{people.first_name}</h3>
          </Link>
        </div>
      })}
    </div>
  )
}

export default Products