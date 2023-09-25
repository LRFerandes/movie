import React from 'react';
import 'bootswatch/dist/simplex/bootstrap.css';
import axios from 'axios';


export default class DeleteMovie extends React.Component {

  state = {

    id:0



  }

  delete = () => {

    axios.delete(`http://localhost:8080/Movie/${this.state.id}`,
    )
    .then(response => {
      alert('Delete realizado');
    })
    .catch(error => {
      alert('Erro');
    });
    
  };
  
  render() {
    return (
     
      <div className='main'>
        <div className="form-group">
          <label className="col-form-label mt-4" for="inputDefault">id</label>
          <input type="number" className="form-control" placeholder="Nome" id="inputDefault" onChange={(e) => {this.setState({id:e.target.value})}}/>
        </div>
        <div className='box-button'>
          <button type="submit" class="btn btn-primary" onClick={this.delete}>deletar</button>
        </div>
      </div>
    );
  }
}