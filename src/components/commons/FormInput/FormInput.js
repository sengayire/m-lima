import React from 'react';
import { Form, Input } from 'semantic-ui-react';
import './Input.scss';

const FormInput = ({ label, placeholder, icon, bordered, size, type, onChange, name }) => (
  <div>
    <Form.Field className="input-field">
      <span>{label}</span>
      <Input
        name={name}
        type={type}
        size={size}
        placeholder={placeholder}
        icon={icon}
        className={!bordered ? 'form-input' : 'form-input-bordered'}
        onChange={onChange}
      />
    </Form.Field>
  </div>
);

export default FormInput;
