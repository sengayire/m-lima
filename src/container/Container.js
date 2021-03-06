import React from 'react';
import './Container.scss';

const Container = ({ header, content }) => (
  <div className="container">
    <div className="header">{header}</div>
    <div className="content">{content}</div>
  </div>
);

export default Container;
