import React from 'react';
import 'bootswatch/dist/simplex/bootstrap.css';
import axios from 'axios';

import { showSuccessMessage, showErrorMessage, showWarningMessage } from '../Components/Toastr';
import MovieApiService from '../../Service/MovieApiService';


export default class UpdateMovie extends React.Component {

  state = {

    id:0,
    nome:'',
    genero:''


  }

  constructor(){
    super();
    this.service = new MovieApiService();
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


   // axios.put(`http://localhost:8080/Movie/${this.state.id}`, MovieDto,{
   //   'Content-Type': 'application/json',
   // })
   this.service.update(this.state.id, MovieDto)
    .then(response => {
      showSuccessMessage("");
    })
    .catch(error => {
      showErrorMessage("");
    });
    
  };

  validate = () => {

    const errors = [];

    if(!this.state.id){
        errors.push('Campo id é obrigatório!');
    }

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
        <h1>Update Movie</h1>
        <div className="form-group">
          <label className="col-form-label mt-4" for="inputDefault">id</label>
          <input type="number" className="form-control" placeholder="id" id="inputDefault" onChange={(e) => {this.setState({id:e.target.value})}}/>
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



