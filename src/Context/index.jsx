import PropTypes from 'prop-types';

import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const  ShoppingCartProvider = ({children}) => {

  //ShoppingCart Increment Quantity
  const [count, setCount] = useState(0);

  //ProductDetail open/close/is/isn't productDetail open/opened
  const [productDetailOpened, setProductDetailOpened] =useState(false);
  const openProductDetail = () => setProductDetailOpened(true);
  const closeProductDetail = () => setProductDetailOpened(false);

    //CheckoutSideMenu open/close/is/isn't productDetail open/opened
    const [checkoutSideMenuOpen, setCheckoutSideMenuOpen] =useState(false);
    const openCheckoutSideMenu = () => setCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setCheckoutSideMenuOpen(false);

  //ProductDetail data Product in productDetail
  const [productToShow, setProductToShow] = useState({});

  //ShoppingCart products added to Cart
  const[shoppingCartProducts, setShoppingCartProducts] = useState([]);




  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      productDetailOpened,
      openProductDetail,
      closeProductDetail,
      productToShow,
      setProductToShow,
      checkoutSideMenuOpen,
      openCheckoutSideMenu,
      closeCheckoutSideMenu,
      shoppingCartProducts,
      setShoppingCartProducts
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
};

ShoppingCartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};