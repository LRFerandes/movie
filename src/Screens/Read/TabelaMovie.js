import React, { Component } from 'react';
import axios from 'axios';


import 'bootswatch/dist/simplex/bootstrap.css';

class TabelaMovie extends Component {

    state = {

        Movie: []
    
    
      }

      componentDidMount() {
        this.buscarUsuarios(); 
      }

      buscarUsuarios() {
        axios.get('http://localhost:8080/Movie')
          .then(response => {
            const Movies = response.data;
            this.setState({ Movie:Movies });
            
          })
          .catch(error => {
            console.error('Erro ao buscar os dados:', error);
          });
      }
  render() {

    const { Movie } = this.state;

    return (
      <div>
        <h2>Movies</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>genero</th>
            {/* Outras colunas */}
          </tr>
        </thead>
        <tbody>
          {Movie.map(Movie => (
            <tr className="table-warning" key={Movie.id}>
              <td>{Movie.id}</td>
              <td>{Movie.nome}</td>
              <td>{Movie.genero}</td>
            </tr>
          ))}
        </tbody>
      </table>
     {/* <button type="submit" className="btn btn-primary" onClick={() => this.buscarUsuarios()}>Atualizar Tabela</button> */}
      </div>
    );
  }
}

export default TabelaMovie;