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

  //Cart options
  const [shoppingCart, setShoppingCart] = useState([]);
  const addToShoppingCart = (product, item) => {
    const productInCart = shoppingCart.findIndex(item.id === product.id)
    if (productInCart >= 0) {
      const newShoppingCart = structuredClone(shoppingCart)
      newShoppingCart[productInCart].quantity += 1
      newShoppingCart[productInCart].totalQuantityPrice = newShoppingCart[productInCart].price * newShoppingCart[productInCart].quantity
      setShoppingCart(newShoppingCart)

      } else {
        setShoppingCart(prevState => ([
          ...prevState,
          {
            ...product,
            quantity: 1,
            totalQuantityPrice: product.price
          }
        ]))
      }
  }

  const checkProductInShoppingCart = (product, item) => {
    return shoppingCart.some(item.id === product.id)
  }

  const removeOneProductInShoppingCart = (product, item) => {
    const productInCart = shoppingCart.findIndex(item.id === product.id)
    if (productInCart >= 0) {
      const newShoppingCart = structuredClone(shoppingCart)
        if (newShoppingCart[productInCart].quantity !== 1) {
          newShoppingCart[productInCart].quantity -= 1
          newShoppingCart[productInCart].totalQuantityPrice = newShoppingCart[productInCart].price * newShoppingCart[productInCart].quantity
          setShoppingCart(newShoppingCart);
        }
    }
  }

  const removeFromShoppingCart = (product) => {
    setShoppingCart(prevState => prevState.filter(item => item.id !== product.id))
  }

  const clearShoppingCart = () => {
    setShoppingCart()
  }

  const totalPrice = shoppingCart.reduce((sum, product) => sum + product.totalQuantityPrice, 0);


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
      setShoppingCartProducts,
      shoppingCart,
      addToShoppingCart,
      checkProductInShoppingCart,
      removeOneProductInShoppingCart,
      removeFromShoppingCart,
      clearShoppingCart,
      totalPrice



    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
};

ShoppingCartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};