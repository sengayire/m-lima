import React from 'react';
import { Button } from '@material-ui/core';

const FormButton = ({ background, icon, title }) => (
        <div>
            <Button startIcon={icon} variant="contained" style={{ background: `${background}`, color: 'white' }} >{title}</Button>
        </div>
);

export default FormButton;
