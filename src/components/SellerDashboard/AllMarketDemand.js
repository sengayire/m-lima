import React from 'react';
import ItemStatus from './ItemStatus';
import { ItemsTable, SearchBar } from '../commons';
import Actions from './Actions';

const columns = [
  {
    id: 'demandID',
    label: '#',
    minWidth: 20,
  },
  {
    id: 'newDemand',
    label: '',
    minWidth: 30,
  },
  {
    id: 'productName',
    label: 'Product name',
    minWidth: 150,
  },
  {
    id: 'quantity',
    label: 'Quantity',
    minWidth: 150,
  },
  {
    id: 'unitMeasure',
    label: 'Unity of measure',
    minWidth: 50,
  },
  {
    id: 'description',
    label: 'Description',
    minWidth: 50,
  },
  {
    id: 'expectedDate',
    label: 'Expected Date',
    minWidth: 50,
  },
  {
    id: 'action',
    label: 'Action',
    minWidth: 50,
  },
];
const createData = (
  demandID,
  newDemand,
  productName,
  quantity,
  unitMeasure,
  description,
  expectedDate,
  action,
) => ({
  demandID,
  newDemand,
  productName,
  quantity,
  unitMeasure,
  description,
  expectedDate,
  action,
});

const rows = [
  createData(
    '1',
    <ItemStatus status="new" bg="red" color="white" />,
    'ibirayi',
    '10kg',
    'xxxx',
    'Description',
    'dd-mm-yyyy',
    <Actions />,
  ),
];
const AllMarketDemand = () => (
  <div>
    <div className="seller-dashboard-header">
      <h1>Market demand from buyer</h1>
    </div>
    <div className="seller-search-new">
      <div className="seller-search-input">
        <span>Search</span>
        <SearchBar bordered placeHolder="" size="sm" />
      </div>
    </div>
    <ItemsTable columns={columns} rows={rows} />
  </div>
);

export default AllMarketDemand;
