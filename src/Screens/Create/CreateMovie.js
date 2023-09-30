import React from 'react';
import 'bootswatch/dist/simplex/bootstrap.css';
import axios from 'axios';

import { showSuccessMessage, showErrorMessage, showWarningMessage } from '../Components/Toastr';

export default class CreateMovie extends React.Component {

  state = {

    nome:'',
    genero:''


  }

  create = () => {

    const errors = this.validate();

    if(errors.length > 0){
      errors.forEach( (message, index) => {
          showErrorMessage(message);
      } );
      return false;
  }

    const MovieDto = {
      nome:this.state.nome,
      genero:this.state.genero
    };


    axios.post('http://localhost:8080/Movie', MovieDto,{
      'Content-Type': 'application/json',
    })
    .then(response => {
      showSuccessMessage("");
    })
    .catch(error => {
      showErrorMessage("");
    });
    
  };

  validate = () => {
    const errors = [];

    if(!this.state.nome){
        errors.push('Campo Nome é obrigatório!');
    }

    if(!this.state.genero){
        errors.push('Campo Genero é obrigatório!');
    }

    return errors;
}
  
  render() {
    return (
     
      <div className='main'>
        <h1>Create Movie</h1>
        <div className="form-group">
          <label className="col-form-label mt-4" for="inputDefault">Nome</label>
          <input type="text" className="form-control" placeholder="Nome" id="inputDefault" onChange={(e) => {this.setState({nome:e.target.value})}}/>
        </div>
        <div className="form-group">
          <label className="col-form-label mt-4" for="inputDefault">Genero</label>
          <input type="text" className="form-control" placeholder="Genero" id="inputDefault" onChange={(e) => {this.setState({genero:e.target.value})}}/>
        </div>
        <div className='box-button'>
          <button type="submit" class="btn btn-primary" onClick={this.create}>Criar</button>
        </div>
      </div>
    );
  }
}


