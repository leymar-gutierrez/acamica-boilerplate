import React from 'react'
import dayjs from 'dayjs'

import 'dayjs/locale/es'


dayjs.locale('es')

const Hero = props => {
    /* Obtengo el objeto que contiene el state del App que se le pasa por props */
  const { filters } = props
    /* Datos de options */
  const countryText = filters.country ? `en ${filters.country}` : ''
  const priceText = filters.price ? `por $${filters.price}` : ''
  const roomsText = filters.rooms ? `de hasta ${filters.rooms} habitaciones` : ''
    /* Datos de fechas */
  const dateFrom = filters.dateFrom.format('dddd[,] D [de] MMMM [de] YYYY')
  const dateTo = filters.dateTo.format('dddd[,] D [de] MMMM [de] YYYY')

  return (
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Hoteles</h1>
          <h2 className="subtitle">
            Desde el <strong>{dateFrom}</strong>  hasta el <strong>{dateTo}</strong> {countryText}{' '}
            {priceText} {roomsText}.
          </h2>
        </div>
      </div>
    </section>
  )
}

export default Hero




