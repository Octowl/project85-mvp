import React from 'react';
import {
  Redirect,
  Route,
  NavLink
} from 'react-router-dom';

import Chemistry from './Chemistry';
import ComingSoon from './ComingSoon';

const IGCSE = ({match}) => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>IGCSE</h2>
      <ul className="course-nav">
        <li><NavLink to={`${match.path}/chemistry`}>Chemistry</NavLink></li>
        <li><NavLink to={`${match.path}/physics`}>Physics</NavLink></li>
        <li><NavLink to={`${match.path}/biology`}>Biology</NavLink></li>
      </ul>
    </div>

    <Route exact path={match.path} render={() => <Redirect to={`${match.path}/chemistry`} />} />
    <Route path={`${match.path}/chemistry`} component={Chemistry}/>
    <Route path={`${match.path}/physics`} component={ComingSoon}/>
    <Route path={`${match.path}/biology`} component={ComingSoon}/>

  </div>
);

export default IGCSE;
