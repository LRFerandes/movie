import React from 'react';
import './App.css';
import Logo from "./img/sala-cinema.jpg";


export default class app extends React.Component{

      state = {

        filme:"",
        genero:"",
        horario:"",
        data:"",
        local: ""
      }

      print = () => {
        alert("Filme: " + this.state.filme + "\n genero: " + this.state.genero + "\n horario: " + this.state.horario + "\n data: " + this.state.data + "\n local: " + this.state.local)
      }

    render() {

      

      const estiloDoFundo = {
        backgroundImage: `url(${Logo})`, 
        backgroundSize: 'cover',                 
        backgroundRepeat: 'no-repeat',
                

      };
      
      return (

        <div className='main' style={estiloDoFundo}>
          <div className='boxForm'>
            <form className='form'>
              
              <input type='text' id='name' placeholder='Filme' onChange={(e) => {this.setState({filme: e.target.value})}}></input>
              
              <input type='text'  id='genero' placeholder='Genero' onChange={(e) => {this.setState({genero: e.target.value})}}></input>
              
              <input type='time'  id='horario' placeholder='Horario' onChange={(e) => {this.setState({horario: e.target.value})}}></input>
            
              <input type='date' id='data' placeholder='Data' onChange={(e) => {this.setState({data: e.target.value})}}></input>
            
              <input type='text' id='local' placeholder='Local' onChange={(e) => {this.setState({local: e.target.value})}}></input>
              
            </form>
            <button className='button' onClick={this.print} >
                Create
              </button>
          </div>
    
        </div>
      );
    }
}