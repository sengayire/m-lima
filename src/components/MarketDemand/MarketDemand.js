import React from 'react';
import { Form } from 'semantic-ui-react';
import { TextareaAutosize } from '@material-ui/core';
import { Send, Close } from '@material-ui/icons';
import { FormCard, FormInput, FormButton, Header } from '../commons';
import DashboardContainer from '../DashboardContainer';
import Container from '../../container';
import './MarketDemand.scss';

const manageMenu = () => (
<div className='market-demand-container'>
        <FormCard header='Demand details'
         contents={
         <Form>
         <div className='form-content no-bg'>
         <div className='form-input-container'>
         <FormInput label='Product name' bordered/>
         <FormInput label='Quantity' bordered/>
         <FormInput label='Unit of measure' bordered/>
         <FormInput label='Total price' bordered/>
         <FormInput icon='calendar alternate outline' label='expected date' bordered/>
         </div>
         <div className='form-input-container'>
             <label>Terms and conditions</label>
         <TextareaAutosize style={{ height: '100%', borderRadius: 10}}/>
         </div>
          <div>
         </div>
         </div>
     <div className='form-bottom-container'>
             <div></div>
         <div className='form-button-container'>
            <FormButton icon={<Send className='publish-icon'/>} background='#1e90ff' title='Publish'/>
            <FormButton icon={<Close />} background='#a4b0be' title='Cancel'/>
         </div>
     </div>
     </Form>
 }/>
     </div>);

const Marketdemand = () => (
    <Container
  header={<Header isAuth={true}/>}
  content={<DashboardContainer manageMenu={manageMenu}/>}
/>
);

export default Marketdemand;
