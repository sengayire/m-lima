import React from 'react';
import { NavBar } from '../commons';
import './Contents.scss';

const Contents = ({ contents, isAuth, profile }) => (
  <div className="content-container">
    <div className="nav-bar">
      <NavBar profile={profile} isAuth={isAuth} />
    </div>
    <div className="items-container">{contents}</div>
  </div>
);

export default Contents;
