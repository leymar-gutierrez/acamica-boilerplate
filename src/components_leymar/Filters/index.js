import React, { Component } from 'react'
import InputOptionFilter from '../InputOptionFilter'
import InputDateFilter from '../InputDateFilter'

  const countryOptions = [
    { value: undefined, name: 'Todos los países' },
    { value: 'Argentina', name: 'Argentina' },
    { value: 'Brasil', name: 'Brasil' },
    { value: 'Chile', name: 'Chile' },
    { value: 'Uruguay', name: 'Uruguay' },
  ]
  
  const priceOptions = [
    { value: undefined, name: 'Cualquier precio' },
    { value: 1, name: '$' },
    { value: 2, name: '$$' },
    { value: 3, name: '$$$' },
    { value: 4, name: '$$$$' },
  ]
  
  const roomOptions = [
    { value: undefined, name: 'Cualquier tamaño' },
    { value: 10, name: 'Hotel pequeño' },
    { value: 20, name: 'Hotel mediano' },
    { value: 30, name: 'Hotel grande' },
  ]


class Filter extends Component{
  
  /* Me llega un objeto con el evento de change
   de InputDateFilter y InputOptionFilter "objectWithEvent" */
  handleChange = objetWithEvent => {

      const{name, value} = objetWithEvent
      const {filters, onChangeFilter} = this.props

      /* Creo un nuevo objeto de filters que contenga los datos del
      objetWithEvent */
      const newFilters = { ...filters, [name]:value }
      onChangeFilter(newFilters)

  } 


render() {

    const {filters} = this.props

    
    return (
        <nav className="navbar is-info" style={{ justifyContent: 'center' }}>
        <div className="navbar-item">
          <InputDateFilter
            onChangeDate={this.handleChange}
            name="dateFrom"
            date={filters.dateFrom}
            icon="sign-in-alt"
          />
        </div>
        <div className="navbar-item">
          <InputDateFilter 
          onChangeDate={this.handleChange} 
          name="dateTo" 
          date={filters.dateTo} 
          icon="sign-out-alt" />
        </div>

        <div className="navbar-item">
          <InputOptionFilter
            onChangeOption={this.handleChange}
            name="country"
            options={countryOptions}
            selected={filters.country}
            icon="globe"
          />
        </div>
        <div className="navbar-item">
          <InputOptionFilter
            onChangeOption={this.handleChange}
            name="price"
            options={priceOptions}
            selected={filters.price}
            icon="dollar-sign"
          />
        </div>
        <div className="navbar-item">
          <InputOptionFilter
            onChangeOption={this.handleChange}
            name="rooms"
            options={roomOptions}
            selected={filters.rooms}
            icon="bed"
          />
        </div>
      </nav>
    )
  }
}

export default Filter