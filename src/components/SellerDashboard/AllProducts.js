import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { ItemsTable, SearchBar } from '../commons';
import Actions from './Actions';
import ItemStatus from './ItemStatus';

const columns = [
  {
    id: 'productCode',
    label: '# Product code',
    minWidth: 150,
  },
  {
    id: 'productName',
    label: 'Product name',
    minWidth: 150,
  },
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
  action,
) => ({
  productCode,
  productName,
  productTypes,
  productDescription,
  status,
  action,
});

const AllProducts = ({ handleClick, products, loading }) => {
  let rows = [];
  if (products) {
    rows = products.map(({ name, description, id }) =>
      createData(
        '#0000',
        name,
        1324171354,
        description,
        <ItemStatus status="delivered" color="white" bg="#05c46b" />,
        <Actions id={id} handleClick={handleClick} />,
      ),
    );
  }

  return (
    <div>
      <div className="seller-dashboard-header">
        <h1>Products</h1>
      </div>
      <div className="seller-search-new">
        <div className="seller-search-input">
          <span>Search</span>
          <SearchBar bordered placeHolder="" size="sm" />
        </div>
        <div>
          <Button name="newProduct" primary onClick={() => handleClick('newProduct')}>
            {' '}
            <Icon name="add" />
            New
          </Button>
        </div>
      </div>
      <ItemsTable loading={loading} columns={columns} rows={rows} />
    </div>
  );
};

export default AllProducts;
