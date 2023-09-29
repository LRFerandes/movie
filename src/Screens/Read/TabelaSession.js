import React, { Component } from 'react'
import axios from 'axios';


import 'bootswatch/dist/simplex/bootstrap.css';

class TabelaSession extends Component {

    state = {

        Movie: []
    
    
      }

      componentDidMount() {
        this.buscarUsuarios(); 
      }

      buscarUsuarios() {
        axios.get('http://localhost:8080/Session')
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
      <div className='main'>
        <h2>Session</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>data</th>
            <th>horario</th>
            <th>local</th>
       
            {/* Outras colunas */}
          </tr>
        </thead>
        <tbody>
          {Movie.map(Movie => (
            <tr className="table-warning" key={Movie.id}>
              <td>{Movie.id}</td>
              <td>{Movie.data}</td>
              <td>{Movie.horario}</td>
              <td>{Movie.local}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/*<button type="submit" className="btn btn-primary" onClick={() => this.buscarUsuarios()}>Atualizar Tabela</button>*/}
      </div>
    );
  }
}

export default TabelaSession;