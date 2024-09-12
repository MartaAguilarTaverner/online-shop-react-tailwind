import { ArrowLeftCircleIcon } from '@heroicons/react/24/solid';

import { useContext } from 'react';
import { Link } from 'react-router-dom';

import Layout from '../../Components/Layout';
import OrderCard from '../../Components/OrderCard';

import { ShoppingCartContext } from '../../Context';


import './myOrder.css';

function MyOrder() {
  const context = useContext(ShoppingCartContext);

  console.log(context.order.slice(-1))

  return (
      <Layout>
        <div className='flex items-center justify-between w-80 '>
          <Link to='/my-orders' className='left-0'>
            <ArrowLeftCircleIcon className='h-7 w-7 text-violet-700 cursor-pointer'></ArrowLeftCircleIcon>
          </Link>
          <div className='font-bold text-xl mr-9'>
            My Order
          </div>
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