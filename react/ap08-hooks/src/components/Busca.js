import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { InputText } from 'primereact/inputtext'
const Busca = () => {
  //quero uma variável de estado que se chama termoDeBusca e que começa valendo a cadeia vazia
  const [ termoDeBusca, setTermoDeBusca ] = useState('')

  useEffect(() => {
    const fazBusca = async () => {
      const res = await axios.get(
        'https://en.wikipedia.org/w/api.php', {
          params: {
            action: 'query',
            list: 'search',
            format: 'json',
            origin: '*',
            srsearch: termoDeBusca
          }
        }
      )
    }
    fazBusca()
  }, [termoDeBusca])




  return (
    <div>
      <IconField iconPosition='left'>
        <InputIcon className='pi pi-search'/>
        <InputText 
          placeholder='Busque algo'
          onChange={(e) => setTermoDeBusca(e.target.value)}/>
      </IconField>
    </div>
  )
}

export default Busca