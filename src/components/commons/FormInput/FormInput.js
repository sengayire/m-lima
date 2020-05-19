import React from 'react';
import { Form, Input, Select } from 'semantic-ui-react';
import './Input.scss';

const FormInput = ({
  label,
  placeholder,
  icon,
  bordered,
  size,
  type,
  onChange,
  name,
  error,
  select,
  options,
  loading,
}) => (
  <div>
    <Form.Field className="input-field">
      <span>{label}</span>
      {(select && (
        <Select
          name={name}
          loading={loading}
          onChange={onChange}
          placeholder={placeholder}
          options={options}
        />
      )) || (
        <Input
          name={name}
          type={type}
          size={size}
          placeholder={placeholder}
          icon={icon}
          className={!bordered ? 'form-input' : `form-input-bordered ${error && 'error'}`}
          onChange={onChange}
        />
      )}
    </Form.Field>
  </div>
);

export default FormInput;
