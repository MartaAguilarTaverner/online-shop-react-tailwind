import { XCircleIcon } from '@heroicons/react/24/solid';

import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';

import OrderCard from '../OrderCard';

import './checkoutSideMenu.css';


const CheckoutSideMenu = () => {
const context = useContext(ShoppingCartContext);

console.log('Cart: ', context.shoppingCartProducts);

  return (
    <aside className={` ${context.checkoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu scrollable-cards flex flex-col fixed right-0 mr-4 border border-purple-300 rounded-lg bg-white`}>
      <div className='flex justify-between items-center mt-2 mr-3 ml-3'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <button className='cursor-pointer' onClick={() => context.closeCheckoutSideMenu()}>
          <XCircleIcon className='h-7 w-7 text-violet-700'></XCircleIcon>
        </button>
      </div>
      <div>
      {
        context.shoppingCartProducts.map( product => (
          <OrderCard key={product.id} title={product.title} image={product.image} price={product.price} />
        ))
      }
      </div>

    </aside>
  )
};

export default CheckoutSideMenu;