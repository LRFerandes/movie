import React from 'react';
import 'bootswatch/dist/simplex/bootstrap.css';

import { withRouter  } from 'react-router-dom';

import { showSuccessMessage, showErrorMessage, showWarningMessage } from '../Components/Toastr';

import { AuthContext  } from '../main/SessionProvider';

class login extends React.Component {

  state = {

    email:'',
    password:''


  }

  constructor(){
    super();
}

  Login = () => {

    this.context.login(
        this.state.email,
        this.state.password
  ).then(user =>  
    {
      if(user){
        showSuccessMessage(`Bem vindo, ${user.name}`);
        this.props.history.push('/CreateMovie');
      }else{
        showErrorMessage('Login inválido!');
      }
    }
  ).catch( error => 
    {
      showErrorMessage('Erro processando autenticação: ', error);
    }
  );
  };

  validate = () => {
    const errors = [];

    if(!this.state.nome){
        errors.push('Campo email é obrigatório!');
    }

    if(!this.state.genero){
        errors.push('Campo password é obrigatório!');
    }

    return errors;
}
  
  render() {
    return (
     
      <div className='main'>
        <h1>Create Movie</h1>
        <div className="form-group">
          <label className="col-form-label mt-4" for="inputDefault">email</label>
          <input type="text" className="form-control" placeholder="email" id="inputDefault" onChange={(e) => {this.setState({email:e.target.value})}}/>
        </div>
        <div className="form-group">
          <label className="col-form-label mt-4" for="inputDefault">password</label>
          <input type="text" className="form-control" placeholder="password" id="inputDefault" onChange={(e) => {this.setState({password:e.target.value})}}/>
        </div>
        <div className='box-button'>
          <button type="submit" class="btn btn-primary" onClick={this.Login}>Criar</button>
        </div>
      </div>
    );
  }
}

login.contextType = AuthContext;
export default withRouter (login);

