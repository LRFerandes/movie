import React from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";

import CreateMovie from '../Create/CreateMovie';
import CreateSession from '../Create/CreateSession';
import UpdateSession from '../Update/UpdateSession';
import UpdateMovie from "../Update/UpdateMovie";
import DeleteMovie from "../Delete/DeleteMovie";
import DeleteSession from "../Delete/DeleteSession";
import TabelaMovie from "../Read/TabelaMovie";
import TabelaSession from "../Read/TabelaSession";
import login from "../login/login";



function RestrictedRoute( { component: Component, show, ...props } ){
  return (
      <Route exact {...props} render={ (componentProps) => {
          if(show){
              return (
                  <Component {...componentProps} />
              )
          }else{
              return(
                  <Redirect to={ {pathname : '/login', state : { from: componentProps.location } } } />
              )
          }
      }}  />
  )
}

function AppRoutes() {
  return (
    <BrowserRouter>
    <Switch>
  
        <Route component={login} path="/login" />
        <RestrictedRoute component={CreateMovie} path="/CreateMovie" />
        <RestrictedRoute component={CreateSession} path="/CreateSession" />
        <RestrictedRoute component={UpdateSession} path="/UpdateSession" />
        <RestrictedRoute component={UpdateMovie} path="/UpdateMovie" />
        <RestrictedRoute component={DeleteMovie} path="/DeleteMovie" />
        <RestrictedRoute component={DeleteSession} path="/DeleteSession" />
        <RestrictedRoute component={TabelaMovie} path="/tabelaMovie" />
        <RestrictedRoute component={TabelaSession} path="/tabelaSession" />

      </Switch>
    </BrowserRouter>
  );
}

export default AppRoutes;