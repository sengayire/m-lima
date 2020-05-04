import React from 'react';
import { Form, Icon } from 'semantic-ui-react';
import { Check, Close } from '@material-ui/icons';
import { FormCard, FormInput, FormButton, UserAvatar } from '../commons';
import FormHeader from './FormHeader';

const Cooperative = ({ handleClick, name }) => (
        <FormCard header={<FormHeader name={name} handleClick={handleClick}/>}
        contents={
        <Form>
        <div className='form-content no-bg'>
        <div className='form-input-container'>
        <FormInput label='Cooperative Name' bordered/>
        <FormInput icon={<Icon name='attach' />}label='Cooperative Registration Certificate' bordered/>
        <FormInput icon='caret down' label='Cooperative Registration District' bordered/>
        <FormInput icon='caret down' label='Cooperative Physical Address Cell' bordered/>
        <FormInput label='Contact Person name' bordered/>
        <FormInput label='Contact Person National ID' bordered/>
        <FormInput icon={<Icon name='attach' />} label='Copy of ID' bordered/>
        </div>
        <div className='form-input-container'>
        <FormInput label='Registration Number' bordered />
        <FormInput icon='caret down' label=' Cooperative Physical Address Province' bordered/>
        <FormInput icon='caret down' label='Cooperative Physical Address Sector' bordered/>
        <FormInput icon='caret down' label='Cooperative Physical Address Village' bordered/>
        <FormInput label='Contact Person Phone Number' bordered/>
        <FormInput label='Contact Person Email' bordered/>

        </div>
         <div>
         <UserAvatar size='large' upload={'Upload profile picture'}/>
        </div>
        </div>
    <div className='form-bottom-container'>
        <div className='form-button-container'>
           <FormButton icon={<Check />} background='#1e90ff' title='Submit'/>
           <FormButton icon={<Close />} background='#a4b0be' title='Cancel'/>
        </div>
    </div>
    </Form>
     }/>
);

export default Cooperative;
