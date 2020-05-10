import React from 'react';
import { Button } from '@material-ui/core';

const FormButton = ({ background, icon, title, border, color }) => (
        <div>
            <Button startIcon={icon} variant="contained" style={{ background: `${background}`, color: `${color}`, border: `2px solid ${border}` }} >{title}</Button>
        </div>
);

export default FormButton;
