import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import CreateMovie from '../Create/CreateMovie';
import CreateSession from '../Create/CreateSession';
import UpdateSession from '../Update/UpdateSession';
import UpdateMovie from "../Update/UpdateMovie";
import DeleteMovie from "../Delete/DeleteMovie";
import DeleteSession from "../Delete/DeleteSession";
import TabelaMovie from "../Read/TabelaMovie";
import TabelaSession from "../Read/TabelaSession";


function AppRoutes() {
  return (
    <BrowserRouter>
        <Route component={CreateMovie} path="/CreateMovie" />
        <Route component={CreateSession} path="/CreateSession" />
        <Route component={UpdateSession} path="/UpdateSession" />
        <Route component={UpdateMovie} path="/UpdateMovie" />
        <Route component={DeleteMovie} path="/DeleteMovie" />
        <Route component={DeleteSession} path="/DeleteSession" />
        <Route component={TabelaMovie} path="/tabelaMovie" />
        <Route component={TabelaSession} path="/tabelaSession" />
    </BrowserRouter>
  );
}

export default AppRoutes;