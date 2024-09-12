import { ArrowLeftCircleIcon } from '@heroicons/react/24/solid';

import { useContext } from 'react';
import { Link } from 'react-router-dom';

import Layout from '../../Components/Layout';
import OrderCard from '../../Components/OrderCard';

import { ShoppingCartContext } from '../../Context';


import './myOrder.css';

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)

  if (index === 'last') {
    index = context?.order.length - 1
  }

  return (
      <Layout>
        <div className='flex items-center justify-between w-80 mb-3 '>
          <Link to='/my-orders' className='left-0'>
            <ArrowLeftCircleIcon className='h-7 w-7 text-violet-700 cursor-pointer'></ArrowLeftCircleIcon>
          </Link>
          <div className='font-bold text-xl mr-9'>
            My Order
          </div>
        </div>
        <div className='flex flex-col w-80 '>
          {
            context.order?.[index]?.products.map(product => <OrderCard key={product.id} id={product.id} title={product.title} image={product.image} price={product.price} />)
          }
      </div >
      </Layout>
  );
}

export default MyOrder;