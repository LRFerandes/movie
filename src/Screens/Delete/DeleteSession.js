import React from 'react';
import 'bootswatch/dist/simplex/bootstrap.css';
import axios from 'axios';

import { showSuccessMessage, showErrorMessage, showWarningMessage } from '../Components/Toastr';
import SessionApiService from '../../Service/SessionApiService';


export default class DeleteSession extends React.Component {

  state = {

    id:0

  }

  constructor(){
    super();
    this.service = new SessionApiService();
}

  delete = () => {

    const errors = this.validate();

      if(errors.length > 0){
        errors.forEach( (message, index) => {
            showErrorMessage(message);
        } );
        return false;
    }

    this.service.delete(this.state.id)
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

    return errors;

  }

  render() {
    return (
     
      <div className='main'>
        <h1>Delete Session</h1>
        <div className="form-group">
          <label className="col-form-label mt-4" for="inputDefault">id</label>
          <input type="number" className="form-control" placeholder="id" id="inputDefault" onChange={(e) => {this.setState({id:e.target.value})}}/>
        </div>
        <div className='box-button'>
          <button type="submit" class="btn btn-primary" onClick={this.delete}>deletar</button>
        </div>
      </div>
    );
  }
}

