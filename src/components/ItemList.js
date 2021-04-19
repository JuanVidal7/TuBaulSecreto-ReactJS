import React from 'react'
import Item from './Item';

export default function List({ dataInput }) {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3" >
        {
          dataInput.map((data) => {
            return <Item key={data.id} data={data} />
          })
        }
      </div>
    </div>
  )
}