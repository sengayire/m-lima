import React from 'react';
import { Form, Icon } from 'semantic-ui-react';
import { Check, Close } from '@material-ui/icons';
import { FormCard, FormInput, FormButton, UserAvatar } from '../commons';
import FormHeader from './FormHeader';

const Company = ({ handleClick }) => (
        <FormCard header={<FormHeader handleClick={handleClick} />}
        contents={
        <Form>
        <div className='form-content'>
        <div className='form-input-container'>
        <FormInput label='Company Name' bordered/>
        <FormInput label='Company Website' bordered/>
        <FormInput icon={<Icon name='attach' />} label='Company Registration Certificate' bordered/>
        <FormInput icon='caret down' label='Company Physical Address District' bordered/>
        <FormInput icon='caret down' label='Company Physical Address Cell' bordered/>
        <FormInput icon='caret down' label='Contact person name' bordered/>
        <FormInput icon='caret down' label='Contact person national ID number' bordered/>
        <FormInput icon={<Icon name='attach' />} label='Copy of ID' bordered/>
        </div>
        <div className='form-input-container'>
        <FormInput label='TIN' bordered />
        <FormInput label='Company Email Address' bordered/>
        <FormInput icon='caret down' label='Company Physical address Province' bordered/>
        <FormInput icon='caret down' label='Company Physical Address Sector' bordered/>
        <FormInput icon='caret down' label='Company physical address Village' bordered/>
        <FormInput label='Contact Person Number' bordered/>
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

export default Company;
