import { useContext } from 'react';

import { ShoppingCartContext } from '../../Context';

import { NavLink } from 'react-router-dom';

import './navbar.css';

const NavBar = () => {
  const context = useContext(ShoppingCartContext);

  const activeStyle = 'underline underline-offset-4';
  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavLink to='/'>Shopi</NavLink>
        </li>
        <li>
          <NavLink
            to='/'
            className={({ isActive}) =>
              isActive ? activeStyle : undefined}>
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/men'
            className={({ isActive}) =>
              isActive ? activeStyle : undefined}>
            Men
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/women'
            className={({ isActive}) =>
              isActive ? activeStyle : undefined}>
            Women
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/jewelry'
            className={({ isActive}) =>
              isActive ? activeStyle : undefined}>
            Jewelry
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/electronics'
            className={({ isActive}) =>
              isActive ? activeStyle : undefined}>
            Electronics
          </NavLink>
        </li>
      </ul>
      <ul className='flex items-center gap-3'>
        <li className='text-black/60'>
          marta@platzi.com
        </li>
        <li>
          <NavLink
            to='/my-orders'
            className={({ isActive}) =>
              isActive ? activeStyle : undefined}>
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/my-account'
            className={({ isActive}) =>
              isActive ? activeStyle : undefined}>
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/sign-in'
            className={({ isActive}) =>
              isActive ? activeStyle : undefined}>
            Sign In
          </NavLink>
        </li>
        <li>
          🛒 {context.count}
        </li>
      </ul>
    </nav>
  )
};

export default NavBar;