import React, { useEffect, useState } from 'react';
import { userInfo } from 'os';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Grid from '../grid/grid';
import Tabular from '../tabular';


function Navbar() {
    return (
    <Router>
        <div>
            <nav>
                <ul>
                    <li>
                    <Link to="/grid">Grid View</Link>
                    </li>
                    <li>
                    <Link to="/tabular">Table View</Link>
                    </li>
                </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
                <Route path="/grid">
                <Grid />
                </Route>
                <Route path="/tabular">
                    <Tabular />
                </Route>
            </Switch>
        </div>
    </Router>
  )};
  
  export default Navbar;