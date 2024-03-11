import { ShoppingCartIcon } from '@heroicons/react/24/solid';

import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import { NavLink } from 'react-router-dom';

import './navbar.css';

const NavBar = () => {
  const context = useContext(ShoppingCartContext);

  const activeStyle = 'underline underline-offset-4';
  return (
    <nav className='className flex justify-between items-center fixed z-10 top-0 w-full py-1 px-5 text-sm font-light className'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavLink to='/'>
              <img src='../../../public/logo-shop.png' className='img-logo' alt='Shoppy' />
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/'
            id='word-navbar'
            className={({ isActive}) =>
              isActive ? activeStyle : undefined}>
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/men'
            id='word-navbar'
            className={({ isActive}) =>
              isActive ? activeStyle : undefined}>
            Men
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/women'
            id='word-navbar'
            className={({ isActive}) =>
              isActive ? activeStyle : undefined}>
            Women
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/jewelry'
            id='word-navbar'
            className={({ isActive}) =>
              isActive ? activeStyle : undefined}>
            Jewelry
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/electronics'
            id='word-navbar'
            className={({ isActive}) =>
              isActive ? activeStyle : undefined}>
            Electronics
          </NavLink>
        </li>
      </ul>
      <ul className='flex items-center gap-3'>
        <li className='text-black/60 font-medium'>
          marta@platzi.com
        </li>
        <li>
          <NavLink
            to='/my-orders'
            id='word-navbar'
            className={({ isActive}) =>
              isActive ? activeStyle : undefined}>
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/my-account'
            id='word-navbar'
            className={({ isActive}) =>
              isActive ? activeStyle : undefined}>
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/sign-in'
            id='word-navbar'
            className={({ isActive}) =>
              isActive ? activeStyle : undefined}>
            Sign In
          </NavLink>
        </li>
        <li className='flex items-center'>
          <ShoppingCartIcon className='h-6 w-6 text-violet-900'></ShoppingCartIcon> <div>{context.count}</div>
        </li>
      </ul>
    </nav>
  )
};

export default NavBar;