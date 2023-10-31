import React from 'react';
import { useLoaderData } from 'react-router-dom';

const OneProduct = () => {
  const people = useLoaderData();
  return (
    <div>
      OneProduct
      <h4>{people.first_name}</h4>
    </div>
  )
}

export default OneProduct