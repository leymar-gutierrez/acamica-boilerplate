import React from 'react';
import dayjs from 'dayjs'
import nanoid from 'nanoid'

import 'dayjs/locale/es'


dayjs.locale('es')

const InputOptionFilter = props => {

    /* La prop data contiene los elemento del objeto filters que quiero pasar
    como filters.country, filters.price, filter.rooms */
    const { options, name, icon, selected, onChangeOption } = props

    /* Obtengo los datos del evento change y los subo al componente Filter
    mediante onChangeOption */ 
    const handleChange = event => {
        const {name, value} = event.target
        onChangeOption({ name, value })
    }
    

    
    return (
      <div className="field">
        <div className="control has-icons-left">
          <div className="select" style={{ width: '100%' }}>
            <select style={{ width: '100%' }} name={name} value={selected} onChange={handleChange}>
              {options.map(option => (
                <option key={nanoid()} value={option.value}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
          <div className="icon is-small is-left">
            <i className={`fas fa-${icon}`} />
          </div>
        </div>
      </div>
      )

}
export default InputOptionFilter