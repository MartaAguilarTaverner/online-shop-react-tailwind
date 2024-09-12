import { useContext } from 'react';
import { Link } from 'react-router-dom';

import Layout from '../../Components/Layout';
import OrdersCard from '../../Components/OrdersCard';

import { ShoppingCartContext } from '../../Context';

import './myOrders.css';


function MyOrders() {
  const context = useContext(ShoppingCartContext);

  return (
      <Layout>
        <div className='font-bold text-xl mb-4'>
            My Orders
          </div>
        {
          context.order.map((order, index) => (
            <Link key={index} to={`/my-orders/${index}`}>
              <OrdersCard totalPrice={order.totalPrice} totalProducts={order.totalProducts} />
            </Link>
          ))
        }
      </Layout>
  );
}

export default MyOrders;