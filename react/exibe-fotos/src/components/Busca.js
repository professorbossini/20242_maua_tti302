import React from 'react'
import { Button } from 'primereact/button'
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { InputText } from 'primereact/inputtext'
export default class Busca extends React.Component{

  state = {
    termoDeBusca: ''
  }

  
  render(){
    return (
      // div.flex.flex-column
      <div className='flex flex-column'>
        {/* InputIcon>(InputIcon+InputText) */}
        {/* <IconField iconPosition="left">
          <InputIcon className="pi pi-search"> </InputIcon>
          <InputText placeholder={this.props.dica} />
        </IconField> */}
      </div>
    )
  }
}

Busca.defaultProps = {
  dica: "O que você quer ver?"
}