import React from 'react';
import { Form, Input } from 'semantic-ui-react';
import './Input.scss';

const FormInput = ({ label, placeholder, icon }) => (
        <div>
            <Form.Field className='input-field'>
                <span>{label}</span>
                <Input placeholder={placeholder} icon={icon} />
            </Form.Field>
        </div>
);

export default FormInput;
