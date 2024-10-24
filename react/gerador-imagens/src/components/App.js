import React, {Component} from 'react'
import Busca from "./Busca"
import env from 'react-dotenv'
import { createClient } from 'pexels'

export default class App extends Component{

    pexelsCliente = null

    componentDidMount(){
        this.pexelsCliente = createClient(env.PEXELS_KEY)
    }

    state = {pics: []}
    onBuscaRealizada = (termo) => {
        //console.log(termo)
        this.pexelsCliente.photos.search({
            query: termo
        })
        .then(pics => this.setState({pics:pics.photos}))
    }

    render(){
        console.log(env.PEXELS_KEY)
        console.log(window.env.PEXELS_KEY)
        return(
            <div className="grid justify-content-center m-auto w-9 borderround border-1 border-400">
                <div className='col-12'>
                    <h1>Exibir uma lista de...</h1>
                </div>
                <div className="col-8">
                    <Busca onBuscaRealizada = {this.onBuscaRealizada}/>
                </div>
                <div className="col-8">
                {
                    this.state.pics.map((pic, key) => (
                        <div key={key}>
                            <img src={pic.src.small}/>
                        </div>
                    ))
                }
                </div>
            </div>
        )
    }
}