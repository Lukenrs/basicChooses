import React, {Component} from "react"
import "./App.css"

export default class App extends Component{
  state ={
    perfil:[{nome:"camilly", idade:19},{nome:"kennedy", idade0:19},{nome:"carol",idade:"30"},{nome:"paulo", idade:40}],
    moveis:[{nome:"cama", func:"dormir"},{nome:"ventilador", func:"ventilar"}],
    retorna:[]
  }

  retornaPerfil = () =>{
    this.setState({
      retorna: this.state.perfil.map((item)=>(
        <>
        <h2>{item.nome}</h2>
        </>
        
      ))
    })
  }

  retornaMovel = () =>{
    this.setState({
      retorna: this.state.moveis.map((item)=>(
        <>
        <h2>{item.nome}</h2>
        </>
      ))
    })
   
  }
  render(){
    return(
      <div>
        <button className="bot1" onClick={this.retornaPerfil}>Nomes</button>
        <button onClick={this.retornaMovel}>Movel</button>
        <h2>{this.state.retorna}</h2>
      </div>
    )
  }
}