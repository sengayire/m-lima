import React from 'react';
import { Button } from '@material-ui/core';

const FormButton = ({ background, icon, title, border, color, onClick }) => (
  <div>
    <Button
      startIcon={icon}
      variant="contained"
      style={{ background: `${background}`, color: `${color}`, border: `2px solid ${border}` }}
      onClick={onClick}
    >
      {title}
    </Button>
  </div>
);

export default FormButton;
