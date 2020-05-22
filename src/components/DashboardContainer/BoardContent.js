import React from 'react';

const BoardContent = ({ cases }) => {
  const manageActiveItem = (cases) => cases;
  return <div className="board-content">{manageActiveItem(cases)}</div>;
};

export default BoardContent;
