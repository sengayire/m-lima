import React from 'react';
import ItemStatus from './ItemStatus';
import { ItemsTable, SearchBar } from '../commons';
import Actions from './Actions';

const columns = [
  {
    id: 'orderNumber',
    label: '# Order No.',
    minWidth: 150,
  },
  {
    id: 'dateOfOrder',
    label: 'Date of order',
    minWidth: 150,
  },
  {
    id: 'productName',
    label: 'Product name',
    minWidth: 150,
  },
  {
    id: 'productType',
    label: 'Types',
    minWidth: 150,
  },
  {
    id: 'orderQty',
    label: 'Order quantity',
    minWidth: 50,
  },
  {
    id: 'deliveryAddress',
    label: 'Delivery address',
    minWidth: 50,
  },
  {
    id: 'orderStatus',
    label: 'Order status',
    minWidth: 50,
  },
  {
    id: 'action',
    label: 'Action',
    minWidth: 50,
  },
];
const createData = (
  orderNumber,
  dateOfOrder,
  productName,
  productType,
  orderQty,
  deliveryAddress,
  orderStatus,
  action,
) => ({
  orderNumber,
  dateOfOrder,
  productName,
  productType,
  orderQty,
  deliveryAddress,
  orderStatus,
  action,
});

const rows = [
  createData(
    'xxxxx',
    'dd-mm-yyyy',
    'xxxxxx',
    'xxxxx',
    'xxxxx',
    'City-Country or District',
    <ItemStatus status="delivered" color="white" bg="#05c46b" />,
    <Actions type="order" />,
  ),
];
const AllOrders = () => (
  <div>
    <div className="seller-dashboard-header">
      <h1>Orders</h1>
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

export default AllOrders;
