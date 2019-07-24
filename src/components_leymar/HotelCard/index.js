import React from 'react'
import dayjs from 'dayjs'

import 'dayjs/locale/es'


dayjs.locale('es')

const HotelCard = props => {
  const { name, 
          photo, 
          description, 
          availabilityFrom, 
          availabilityTo, 
          rooms, 
          city, 
          country, 
          price
          } = props
  

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={photo} alt={name} />
        </figure>
      </div>
      <div className="card-content">
        <p className="title is-4">{name}</p>
        <p><strong>Desde: {dayjs(availabilityFrom).format('dddd[,] D [de] MMMM [de] YYYY')}</strong></p>
        <p><strong>Hasta: {dayjs(availabilityTo).format('dddd[,] D [de] MMMM [de] YYYY')} </strong></p>
        <br></br>
        <p>{description}</p>
        <br></br>
        <div className="field is-grouped is-grouped-multiline" style={{ marginTop: '2em' }}>
          <div className="control">
            <div className="tags has-addons">
              <span className="tag is-medium is-info">
                <i className="fas fa-map-marker" />
              </span>
              <span className="tag is-medium">
                {city}, {country}
              </span>
            </div>
          </div>
          <div className="control">
            <div className="tags has-addons">
              <span className="tag is-medium is-info">
                <i className="fas fa-bed" />
              </span>
              <span className="tag is-medium">{rooms} Habitaciones</span>
            </div>
          </div>
          <div className="control">
            <div className="tags">
              <span className="tag is-medium is-info">
              {Array.from({ length: 4 }, (_, index) => (
                  <i
                    key={index}
                    className="fas fa-dollar-sign"
                    style={{ margin: '0 .125em', opacity: `${index + 1 <= price ? '1' : '0.25'}` }}
                  />
                ))}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <a href="#0" className="card-footer-item has-background-primary has-text-white has-text-weight-bold">
          Reservar
        </a>
      </div>
    </div>
  )
}


export default HotelCard
