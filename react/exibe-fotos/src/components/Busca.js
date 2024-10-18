import React from 'react'
import { Button } from 'primereact/button'
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { InputText } from 'primereact/inputtext'
export default class Busca extends React.Component{

  state = {
    termoDeBusca: ''
  }

  // exercício
  //fazer com que o cmoponente textual exiba sempre letras maiúsculas
  //feito em aula

  onTermoAlterado = (event) => {
    // console.log(event.target.value)
    //não faça isso, caso contrário a tela não vai atualizar
    // this.state.termoDeBusca = event.target.value
    this.setState({termoDeBusca: event.target.value})
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    this.props.onBuscaRealizada(this.state.termoDeBusca)
  }
  
  render(){
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className='flex flex-column'>
          {/* InputIcon>(InputIcon+InputText) */}
          <IconField iconPosition="left">
            <InputIcon className="pi pi-search"> </InputIcon>
            <InputText 
              placeholder={this.props.dica}
              className='w-full'
              onChange={this.onTermoAlterado}
              value={this.state.termoDeBusca}/>
          </IconField>
          <Button 
            label='OK'
            className='p-button-outlined mt-2'
          />
        </div>
      </form>
      // div.flex.flex-column
    )
  }
}

Busca.defaultProps = {
  dica: "O que você quer ver?"
}