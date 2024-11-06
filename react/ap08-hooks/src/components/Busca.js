import React, { useState, useEffect } from 'react'
import axios from 'axios'
import striptags from 'striptags'
import { Button } from 'primereact/button'
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { InputText } from 'primereact/inputtext'
const Busca = () => {
  //quero uma variável de estado que se chama termoDeBusca e que começa valendo a cadeia vazia
  const [ termoDeBusca, setTermoDeBusca ] = useState('React')
  const [ resultados, setResultados ] = useState([])

  useEffect(() => {
    const fazBusca = async () => {
      const { data } = await axios.get(
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
      setResultados(data?.query?.search)
    }
    if(termoDeBusca && !resultados.length){
      fazBusca()
    }
    else{
      const timeoutID = setTimeout(() => {
        if(termoDeBusca)
          fazBusca()
      }, 1000)
      return () => {
        clearTimeout(timeoutID)
      }
    }

  }, [termoDeBusca])




  return (
    <div>
      <IconField iconPosition='left'>
        <InputIcon className='pi pi-search'/>
        <InputText 
          placeholder='Busque algo'
          value={termoDeBusca}
          onChange={(e) => setTermoDeBusca(e.target.value)}/>
      </IconField>
      {
        resultados.map(resultado =>(
          <div
            key={resultado.pageid}
            className='my-2 border border-1 border-400'>
              <div
                className='border-bottom-1 border-400 p-2 text-center font-bold'>
                {resultado.title}
                <span>
                  <Button 
                    icon="pi pi-send"
                    className='ml-2 p-button-rounded p-button-secondary'
                    onClick={() => window.open(`https://en.wikipedia.org?curid=${resultado.pageid}`)}/>
                </span>
              </div>
              <div className='p-2'>
                {striptags(resultado.snippet)}
              </div>
          </div>
        ))
      }
    </div>
  )
}

export default Busca