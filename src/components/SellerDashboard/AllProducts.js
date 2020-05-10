import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { ItemsTable, SearchBar } from '../commons';
import Actions from './Actions';


const columns = [
  { id: 'productCode', label: '# Product code', minWidth: 150 },
  { id: 'productName', label: 'Product name', minWidth: 150 },
  {
    id: 'productTypes',
    label: 'Product types',
    minWidth: 150,
  },
  {
    id: 'productDescription',
    label: 'Product description',
    minWidth: 150,
  },
  {
    id: 'status',
    label: 'Status',
    minWidth: 50,

  },
  {
    id: 'action',
    label: 'Action',
    minWidth: 50,

  },
];
const createData = (
  productCode,
  productName,
  productTypes,
  productDescription,
  status,
  action
) => ({ productCode, productName, productTypes, productDescription, status, action });

const rows = [
  createData('India', 'IN', 1324171354, 3287263, 1324171354, <Actions />),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767),
];


const AllProducts = ({ handleClick }) => (
        <div>
            <div className='seller-dashboard-header'>
            <h1>Products</h1>
          </div>
          <div className='seller-search-new'>
            <div className='seller-search-input'>
              <span>Search</span>
              <SearchBar bordered={true} placeHolder='' size='sm' />
            </div>
            <div>
              <Button name='newProduct' primary onClick={() => handleClick('newProduct')}> <Icon name='add' />New</Button>
            </div>
          </div>
          <ItemsTable columns={columns} rows={rows}/>
        </div>
);

export default AllProducts;
