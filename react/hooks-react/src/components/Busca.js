import React, { useState, useEffect } from 'react'
import { InputText } from 'primereact/inputtext'
import axios from 'axios'

const Busca = () => {
    const [termoDeBusca, setTermoDeBusca] = useState('')
    
    useEffect(() => {
        //definimos a função
        const fazBusca = async () => {
            await axios.get(
                'https://en.wikipedia.org/w/api.php',{
                    params: {
                        action: 'query',
                        list: 'search',
                        format: 'json',
                        // instruindo o navegador a permitir
                        // conteúdo de qualque origem
                        origin: '*',
                        srsearch: termoDeBusca
                    }
                }
            )
        }
        //chama a função
        fazBusca()
    }, [termoDeBusca])

    return (
        <div>
            <span className="p-input-icon-left">
                <i className="pi pi-search"></i>
                <InputText
                    onChange={(e) => setTermoDeBusca(e.target.value)}
                />
            </span>
        </div>
    )
}
export default Busca