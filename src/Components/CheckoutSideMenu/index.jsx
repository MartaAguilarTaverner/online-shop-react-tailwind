import { XCircleIcon } from '@heroicons/react/24/solid';

import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { ShoppingCartContext } from '../../Context';
import { totalPrice } from '../../Utils';

import OrderCard from '../OrderCard';

import './checkoutSideMenu.css';



const CheckoutSideMenu = () => {
const context = useContext(ShoppingCartContext);

const handleDelete = (id) => {
  const filteredProducts = context.shoppingCartProducts.filter(product => product.id !== id)
  context.setShoppingCartProducts(filteredProducts)
}

const handleCheckOut = () => {
  const orderToAdd = {
    date: '01.02.2024',
    products: context.shoppingCartProducts,
    totalProducts:context.shoppingCartProducts.lenght,
    totalPrice: totalPrice(context.shoppingCartProducts)
  }
  context.setOrder([...context.order, orderToAdd])
  context.setShoppingCartProducts([])
  context.setCount(0);
  context.closeCheckoutSideMenu();
}

  return (
    <aside className={` ${context.checkoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu scrollable-cards flex flex-col fixed right-0 mr-4 border border-purple-300 rounded-lg bg-white`}>
      <div className='flex justify-between items-center mt-2 mr-3 ml-3'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <button className='cursor-pointer' onClick={() => context.closeCheckoutSideMenu()}>
          <XCircleIcon className='h-7 w-7 text-violet-700 cursor-pointer'></XCircleIcon>
        </button>
      </div>
      <div>
      {
        context.shoppingCartProducts.map( product => (
          <OrderCard key={product.id} id={product.id} title={product.title} image={product.image} price={product.price} handleDelete={handleDelete} />
        ))
      }
      </div >
        <div className='mt-5 mb-4 mr-3 ml-3 flex-1'>
          <p className='flex justify-between items-center ml-5 mr-2'>
            <span className='font-semibold text-lg'>Total</span>
            <span className='font-bold text-xl'> {totalPrice(context.shoppingCartProducts)}$ </span>
          </p>
        </div>
        <div className='flex justify-center items-center my-3'>
          <Link className='w-full flex justify-center items-center' to='/my-orders/last'>
            <button onClick={() => handleCheckOut()} className='w-1/2 py-3 text-violet-900 bg-violet-200 hover:bg-violet-300 rounded-md' >Checkout</button>
          </Link>
        </div>
    </aside>
  )
};

export default CheckoutSideMenu;