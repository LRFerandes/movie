import React from 'react';
import 'bootswatch/dist/simplex/bootstrap.css';
import axios from 'axios';

import { showSuccessMessage, showErrorMessage, showWarningMessage } from '../Components/Toastr';


export default class DeleteMovie extends React.Component {

  state = {

    id:0



  }

  delete = () => {

    axios.delete(`http://localhost:8080/Movie/${this.state.id}`,
    )
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
        <div className='box-button'>
          <button type="submit" class="btn btn-primary" onClick={this.delete}>deletar</button>
        </div>
      </div>
    );
  }
}