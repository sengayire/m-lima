import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import FormInput from '../FormInput';

const AddressForm = ({ placeholder }) => (
        <Form style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '30%' }}>
          <FormInput label={'name'} placeholder={placeholder}/>
          <FormInput icon='caret down' label={'Country'} placeholder={placeholder}/>
          <FormInput label={'City/District'} placeholder={placeholder}/>
          <FormInput label={'Zip Code'} placeholder={placeholder}/>
        </div>
        <div style={{ width: '30%' }} >
          <FormInput label={'Phone number'} placeholder={placeholder}/>
          <FormInput label={'State/Province'} placeholder={placeholder}/>
          <FormInput label={'Full address'} placeholder={placeholder}/>
        </div>
        <div></div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
        <div style={{ marginTop: '20px' }}>
        <Form.Field>
         <Checkbox label='Set as default' />
        </Form.Field>
        </div>
        <div>
            <Button type='submit' size='tiny' primary>Confirm</Button>
            <Button size='tiny' type='submit'>Cancel</Button>
        </div>
      </div>
   </Form>
);

export default AddressForm;
