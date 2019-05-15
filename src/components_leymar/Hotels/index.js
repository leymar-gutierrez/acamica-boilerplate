import React from 'react'
import HotelCard from '../HotelCard';



const Hotels = props => {

  const { data } = props

  return (
      <section className="section" style={{ marginTop: '3em' }}>
        <div className="container">
          <div className="columns is-multiline">
          
            {
              data.map(hotel => (
              <div className="column is-one-third" key={hotel.slug}>
              <HotelCard 
                slug={hotel.slug} 
                name={hotel.name} 
                photo={hotel.photo} 
                description={hotel.description} 
                availabilityFrom={hotel.availabilityFrom} 
                availabilityTo={hotel.availabilityTo} 
                rooms={hotel.rooms} 
                city={hotel.city} 
                country={hotel.country} 
                price={hotel.price}
              />
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Hotels
