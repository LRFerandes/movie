import React from 'react';
import 'bootswatch/dist/simplex/bootstrap.css';
import axios from 'axios';


export default class CreateMovie extends React.Component {

  state = {

    nome:'',
    genero:''


  }

  create = () => {
    const MovieDto = {
      nome:this.state.nome,
      genero:this.state.genero
    };


    axios.post('http://localhost:8080/Movie', MovieDto,{
      'Content-Type': 'application/json',
    })
    .then(response => {
      alert('Movie criado com sucesso');
    })
    .catch(error => {
      alert('Erro ao criar Movie');
    });
    
  };
  
  render() {
    return (
     
      <div className='main'>
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


