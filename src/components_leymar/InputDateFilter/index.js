import React from 'react';
import dayjs from 'dayjs'

import 'dayjs/locale/es'


dayjs.locale('es')

const InputDateFilter = props => {

    const { date, name, icon, onChangeDate } = props
    /* La prop date que paso es una instancia de dayjs, en este 
    caso Filters.dateFrom o Filters.dateTo que son los datos a manipular */
    const dateFormatted = date.format('YYYY[-]MM[-]DD')

    /* Obtengo los datos del evento change y los subo a el componente Filter
    mediante onChangeDate */ 
    const handleChange = event => {
        const {name, value} = event.target
        onChangeDate({ name, value: dayjs(value) })
    }


    return (
        <div className="field">
          <div className="control has-icons-left">
            <input className="input" type="date" name={name} value={dateFormatted} onChange={handleChange} />
            <span className="icon is-small is-left">
              <i className={`fas fa-${icon}`} />
            </span>
          </div>
        </div>
      )

}
export default InputDateFilter