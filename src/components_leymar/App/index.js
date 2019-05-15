import React, { Component } from 'react'
import Hero from '../Hero'
import Filters from '../Filters'
import Hotels from '../../components_leymar/Hotels';
import dayjs from 'dayjs'
import 'dayjs/locale/es'


dayjs.locale('es')
const API_URL = "https://wt-8a099f3e7c73b2d17f4e018b6cfd6131-0.sandbox.auth0-extend.com/acamica"

class App extends Component {

    constructor() {
      super()

      this.state = {
        filters: {
          dateFrom: dayjs(),
          dateTo: dayjs(),
          country: '',
          price: 0,
          rooms: 0,
        },
        hotelsBackup: [],
        hotelsFiltered: [],
        message: 'No se han encontrado hoteles que coincidan con los parámetros de búsqueda.'
      }
    }



    async componentDidMount() {
      try {
        const response = await fetch(API_URL)
        const data = await response.json()

        this.setState({hotelsBackup: data, hotelsFiltered: data })

      } catch (error) {
        //console.log(error)
      }
    }
    
    /* Obtengo la información del newFilter del componente Filter
    y con esto seteo el state de App para hacer dinamica la data */

    /* SET STATE RECIBE COMO PARAMETRO EL STATE QUE VA A SETEAR Y APARTE UNA 
    FUNCIÓN ANONIMA DONDE TIENES EL VALOR O DATO YA DINAMICO ASEGURANDO QUE 
    EL STATE ESTA SETEADO CORRECTAMENTE */

     handleChange = newFilter => {this.setState({ filters:newFilter }, () => {
      this.handleHotelFilter()
     })
    } 

     handleHotelFilter = () => {
       const {hotelsBackup, filters} = this.state

       /* HAGO VALIDACIONES PARA LOS FILTROS */ 
       const hotelsFiltered = hotelsBackup
       .filter(hotel => dayjs(hotel.availabilityFrom).isAfter(filters.dateFrom))
       .filter(hotel => dayjs(hotel.availabilityTo).isBefore(filters.dateTo))
       .filter(hotel => {
         if (filters.country === '' || filters.country === 'Todos los países') return true
         if (filters.country === hotel.country) return true
 
         return false
       })
       .filter(hotel => {
         const filterPrice = Number(filters.price)
 
         if (filterPrice === 0 || filterPrice === 'Cualquier precio') return true
         if (filterPrice === hotel.price) return true
 
         return false
       })
       .filter(hotel => {
         if (filters.rooms === 0 || filters.rooms === 'Cualquier tamaño') return true
         if (hotel.rooms >= filters.rooms) return true
 
         return false
        })

 
     this.setState({ hotelsFiltered })

     }
    

  render() {
    
    const {filters, hotelsFiltered, message} = this.state


    /*const countrys = hotels.map(hotel => hotel.country)
    const countryUnrepeated = new Set(countrys)
    const countryInApi = [...countryUnrepeated] */
    

    return (
        <div className="container">
          <Hero filters={filters} />
          <Filters filters={filters} onChangeFilter={this.handleChange}/>
          <Hotels data={hotelsFiltered} />
          {
            Object.values(hotelsFiltered).length === 0 &&
            <article className="message is-warning">
              <div className="message-body">
                  <p>{message}</p>
              </div>
            </article>
          }
          
        </div>
        )
      }
    }
    
    export default App
    
