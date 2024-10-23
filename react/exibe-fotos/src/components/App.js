import React from 'react'
import Busca from "./Busca"
import env from 'react-dotenv'
import { createClient } from 'pexels'
export default class App extends React.Component {

  state = {
    pics: []
  }

  pexelsClient = null
  
  //método de ciclo de vida
  componentDidMount(){
    this.pexelsClient = createClient (env.PEXELS_KEY)
  }

  onBuscaRealizada = (query) => {
    this.pexelsClient.photos.search({query, per_page: 10}).then((pics) => {
      this.setState({pics: pics.photos})
    })     
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
        <div className='col-12'>
          {
            //iterar sobre a coleçaõ de fotos, mostrando uma por uma, use a foto small e também o alt
            this.state.pics.map((pic, key) => (
              <div key={key}>
                  <img src={pic.src.small} alt={pic.alt}/>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}