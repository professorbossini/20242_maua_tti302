import React from 'react'
import Busca from "./Busca"
import env from 'react-dotenv'
// import { createClient } from 'pexels'
import pexelsClient from '../utils/pexelsClient'
import ListaImagens from './ListaImagens'
import PexelsLogo from './PexelsLogo'
export default class App extends React.Component {

  state = {
    pics: []
  }

  // pexelsClient = null
  
  //método de ciclo de vida
  // componentDidMount(){
  //   this.pexelsClient = createClient (env.PEXELS_KEY)
  // }

  // onBuscaRealizada = (query) => {
  //   this.pexelsClient.photos.search({query, per_page: 10}).then((pics) => {
  //     this.setState({pics: pics.photos})
  //   })     
  // }
  onBuscaRealizada = async (query) => {
    const result = await pexelsClient.get('/search', {
      params: {query, per_page: 15}
    })
    // console.log(result)
    this.setState({pics: result.data.photos})
  }
  render(){
    console.log(env.PEXELS_KEY)
    console.log(window.env.PEXELS_KEY)
    return (
      <div className='grid justify-content-center m-auto w-9 border-round border-1 border-400'>
        <div className='col-12'>
          <PexelsLogo />
        </div>
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
          <div className='grid'>
            <ListaImagens 
              pics={this.state.pics}
              imgStyle={'col-12 md:col-6 lg:col-4 xl:col-3'}/>
          </div>
        </div>
      </div>
    )
  }
}