import PropTypes from 'prop-types';

import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const  ShoppingCartProvider = ({children}) => {
  const [count, setCount] = useState(0);

  //open/close/is/isn't productDetail open/opened
  const [productDetailOpened, setProductDetailOpened] =useState(false);
  const openProductDetail = () => setProductDetailOpened(true);
  const closeProductDetail = () => setProductDetailOpened(false);

  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      openProductDetail,
      closeProductDetail,
      productDetailOpened
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
};

ShoppingCartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};