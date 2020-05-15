import React from 'react';
import { Form, Input } from 'semantic-ui-react';
import './Input.scss';

const FormInput = ({ label, placeholder, icon, bordered, size, type, onChange, name, error }) => (
  <div>
    <Form.Field className="input-field">
      <span>{label}</span>
      <Input
        name={name}
        type={type}
        size={size}
        placeholder={placeholder}
        icon={icon}
        className={!bordered ? 'form-input' : `form-input-bordered ${error && 'error'}`}
        onChange={onChange}
      />
    </Form.Field>
  </div>
);

export default FormInput;
