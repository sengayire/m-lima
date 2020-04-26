import React, { Component } from 'react';
import { Table, Radio, Button } from 'semantic-ui-react';
import './Delivery.scss';


const DeliveryTable = () => (
            <div className='delivery-table'>
          <div className='delivery-user-address'><b>Deliver to <a>user_address</a></b></div>
          <div><b>Delivery method</b></div>
             <div>

           <Table definition>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell className='radio-btn' />
                  <Table.HeaderCell>Estimated days</Table.HeaderCell>
                  <Table.HeaderCell>Cost</Table.HeaderCell>
                  <Table.HeaderCell>Agency</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell className='radio-btn'>
                    <Radio />
                </Table.Cell>
                <Table.Cell>x-y days</Table.Cell>
                <Table.Cell>Frw x</Table.Cell>
                <Table.Cell>Agency_name</Table.Cell>
              </Table.Row>
              <Table.Row>
                  <Table.Cell className='radio-btn'><Radio checked /></Table.Cell>
                  <Table.Cell>x-y days</Table.Cell>
                  <Table.Cell>Frw x</Table.Cell>
                  <Table.Cell>Agency_name</Table.Cell>
              </Table.Row>
              <Table.Row>
                  <Table.Cell className='radio-btn'><Radio /></Table.Cell>
                  <Table.Cell>x-y days</Table.Cell>
                  <Table.Cell>Frw x</Table.Cell>
                  <Table.Cell>Agency_name</Table.Cell>
              </Table.Row>
              <Table.Row>
                  <Table.Cell className='radio-btn'><Radio /></Table.Cell>
                  <Table.Cell>x-y days</Table.Cell>
                  <Table.Cell>Frw x</Table.Cell>
                  <Table.Cell>Agency_name</Table.Cell>
              </Table.Row>
              <Table.Row>
                  <Table.Cell className='radio-btn'><Radio /></Table.Cell>
                  <Table.Cell>x-y days</Table.Cell>
                  <Table.Cell>Frw x</Table.Cell>
                  <Table.Cell>Agency_name</Table.Cell>
              </Table.Row>
            <Table.Row>
                <Table.Cell className='radio-btn'><Radio /></Table.Cell>
                <Table.Cell>x-y days</Table.Cell>
                <Table.Cell>Frw x</Table.Cell>
                <Table.Cell>Agency_name</Table.Cell>
            </Table.Row>
            </Table.Body>
                  </Table>
                  <div><center><Button size='tiny' primary content='Apply' /></center></div>
                </div>
            </div>
);

export default DeliveryTable;
