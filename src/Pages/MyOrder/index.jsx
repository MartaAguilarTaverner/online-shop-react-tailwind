import { useContext } from 'react';

import Layout from '../../Components/Layout';
import OrderCard from '../../Components/OrderCard';

import { ShoppingCartContext } from '../../Context';


import './myOrder.css';

function MyOrder() {
  const context = useContext(ShoppingCartContext);

  console.log(context.order.slice(-1))

  return (
      <Layout>
        <div className='font-bold text-xl'>
          My Order
        </div>
        <div className='flex flex-col w-80 '>

          {
            context.order && context.order.length > 0 ? context.order.slice(-1)[0].products.map( product => (
              <OrderCard key={product.id} id={product.id} title={product.title} image={product.image} price={product.price} />
            ))
            : <p className='flex justify-center m-4'>There are no products in the order.</p>
          }
      </div >
      </Layout>
  );
}

export default MyOrder;