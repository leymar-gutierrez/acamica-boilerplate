import React from 'react'

import Hotel from '../Hotel'

const Hotels = ({ data }) => {
  return (
    <section className="section" style={{ marginTop: '3em' }}>
      <div className="container">
        <div className="columns is-multiline">
          {data.map(hotel => (
            <div className="column is-one-third" key={hotel.slug}>
              <Hotel {...hotel} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hotels
