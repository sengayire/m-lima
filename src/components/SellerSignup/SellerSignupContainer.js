import React from 'react';
import { Form } from 'semantic-ui-react';
import { Check, Close } from '@material-ui/icons';
import { FormCard, FormInput, FormButton, UserAvatar } from '../commons';
import './SellerSignup.scss';
import FormHeader from './FormHeader';

const SellerSignupContainer = () => (
        <div className='seller-signup-container'>
            <FormCard header={<FormHeader />}
            contents={
            <Form>
            <div className='form-content no-bg'>
            <div className='form-input-container'>
            <FormInput label='National identification number' bordered/>
            <FormInput label='Last name' bordered/>
            <FormInput label='First name' bordered/>
            <FormInput icon='caret down' label='Gender' bordered/>
            <FormInput icon='caret down' label='Authorization document' bordered/>
            <FormInput icon='caret down' label='Copy of ID' bordered/>
            </div>
            <div className='form-input-container'>
            <FormInput label='Phone No.' bordered />
            <FormInput icon='caret down' label='Province' bordered/>
            <FormInput icon='caret down' label='District' bordered/>
            <FormInput icon='caret down' label='Sector' bordered/>
            <FormInput icon='caret down' label='Cell' bordered/>
            <FormInput icon='caret down' label='Province' bordered/>

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
        </div>
);

export default SellerSignupContainer;
