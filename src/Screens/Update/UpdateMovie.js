import React from 'react';
import 'bootswatch/dist/simplex/bootstrap.css';
import axios from 'axios';

import { showSuccessMessage, showErrorMessage, showWarningMessage } from '../Components/Toastr';


export default class UpdateMovie extends React.Component {

  state = {

    id:0,
    nome:'',
    genero:''


  }

  create = () => {
    const MovieDto = {
      nome:this.state.nome,
      genero:this.state.genero
    };


    axios.put(`http://localhost:8080/Movie/${this.state.id}`, MovieDto,{
      'Content-Type': 'application/json',
    })
    .then(response => {
      showSuccessMessage("");
    })
    .catch(error => {
      showErrorMessage("");
    });
    
  };
  
  render() {
    return (
     
      <div className='main'>
        <div className="form-group">
          <label className="col-form-label mt-4" for="inputDefault">id</label>
          <input type="number" className="form-control" placeholder="Nome" id="inputDefault" onChange={(e) => {this.setState({id:e.target.value})}}/>
        </div>
        <div className="form-group">
          <label className="col-form-label mt-4" for="inputDefault">Nome</label>
          <input type="text" className="form-control" placeholder="Nome" id="inputDefault" onChange={(e) => {this.setState({nome:e.target.value})}}/>
        </div>
        <div className="form-group">
          <label className="col-form-label mt-4" for="inputDefault">Genero</label>
          <input type="text" className="form-control" placeholder="Genero" id="inputDefault" onChange={(e) => {this.setState({genero:e.target.value})}}/>
        </div>
        <div className='box-button'>
          <button type="submit" class="btn btn-primary" onClick={this.create}>atualizar</button>
        </div>
      </div>
    );
  }
}

