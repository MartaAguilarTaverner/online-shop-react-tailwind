import PropTypes from 'prop-types';

import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const  ShoppingCartProvider = ({children}) => {

  //ShoppingCart Increment Quantity
  const [count, setCount] = useState(0);

  //open/close/is/isn't productDetail open/opened
  const [productDetailOpened, setProductDetailOpened] =useState(false);
  const openProductDetail = () => setProductDetailOpened(true);
  const closeProductDetail = () => setProductDetailOpened(false);

  //productDetail data Product
  const [productToShow, setProductToShow] = useState({});

  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      openProductDetail,
      closeProductDetail,
      productDetailOpened,
      productToShow,
      setProductToShow
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
};

ShoppingCartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};