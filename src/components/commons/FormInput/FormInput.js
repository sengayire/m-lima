import React from 'react';
import { Form, Input } from 'semantic-ui-react';
import './Input.scss';

const FormInput = ({ label, placeholder, icon, bordered, size }) => (
        <div>
            <Form.Field className='input-field'>
                <span>{label}</span>
                <Input size={size} placeholder={placeholder} icon={icon} className={!bordered ? 'form-input' : 'form-input-bordered'}/>
            </Form.Field>
        </div>
);

export default FormInput;
