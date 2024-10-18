import React from 'react'
import Busca from "./Busca"
import env from 'react-dotenv'

export default class App extends React.Component {

  onBuscaRealizada = (termo) => {
    console.log(termo)
  }
  render(){
    console.log(env.PEXELS_KEY)
    console.log(window.env.PEXELS_KEY)
    return (
      <div className='grid m-auto w-9 border-round border-1 border-400'>
        {/* // div>h1{Exibir uma lista de...} */}
        <div className='col-12'>
          <div>
            <h1>Exibir uma lista de...</h1>
          </div>
        </div>
        <div className='col-12'>
          <Busca onBuscaRealizada={this.onBuscaRealizada}/>
        </div>
      </div>
    )
  }
}