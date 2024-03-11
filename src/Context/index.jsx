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

  //ProductDetail data Product in productDetail
  const [productToShow, setProductToShow] = useState({});

  //ShoppingCart products added to Cart
  const[shoppingCartProducts, setShoppingCartProducts] = useState([])

  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      openProductDetail,
      closeProductDetail,
      productDetailOpened,
      productToShow,
      setProductToShow,
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