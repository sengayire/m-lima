import Orders from '../components/Orders';

export default {
  exact: true,
  name: 'Orders',
  protected: false,
  path: '/:id/user_orders',
  component: Orders,
};
