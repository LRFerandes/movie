import React from 'react';
import 'bootswatch/dist/simplex/bootstrap.css';
import axios from 'axios';

import { showSuccessMessage, showErrorMessage, showWarningMessage } from '../Components/Toastr';


export default class UpdateSession extends React.Component{

    state = {
        id: 0,
        horario:'',
        data:'',
        local:''

    }

    create = () => {
      const SessionDto = {
        horario:this.state.horario,
        data:this.state.data,
        local:this.state.local
      };
  
  
      axios.put(`http://localhost:8080/Session/${this.state.id}`,SessionDto, {
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
              <input type="number" className="form-control" placeholder="horario" id="inputDefault" onChange={(e) => {this.setState({id:e.target.value})}}/>
            </div>
            <div className="form-group">
              <label className="col-form-label mt-4" for="inputDefault">horario</label>
              <input type="text" className="form-control" placeholder="horario" id="inputDefault" onChange={(e) => {this.setState({horario:e.target.value})}}/>
            </div>
            <div className="form-group">
              <label className="col-form-label mt-4" for="inputDefault">data</label>
              <input type="text" className="form-control" placeholder="data" id="inputDefault"
              onChange={(e) => {this.setState({data:e.target.value})}}/>
            </div>
            <div className="form-group">
              <label className="col-form-label mt-4" for="inputDefault">Local</label>
              <input type="text" className="form-control" placeholder="Local" id="inputDefault"
              onChange={(e) => {this.setState({local:e.target.value})}}/>
            </div>
            <div className='box-Button'>
              <button type="submit" class="btn btn-primary" onClick={this.create}>Atualizar</button>
            </div>
          </div>
        );
      }
}
