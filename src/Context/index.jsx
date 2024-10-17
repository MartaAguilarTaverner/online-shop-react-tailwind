import PropTypes from 'prop-types';

import { createContext, useState, useEffect, useRef } from "react";

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

  //CheckoutSideMenu Order
  const[order, setOrder] = useState([])

  //GetProducts
  const [items, setItems] = useState([]);
  const dataFetchRef = useRef(false);

  const fetchProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();

    setItems(data);
  };

  useEffect(() => {
    if (!dataFetchRef.current) {
      dataFetchRef.current = true;

      fetchProducts();
    }

    return () => {
      dataFetchRef.current = null
    }
  }, [])

  //GetProductsByTitle
  const [searchByTitle, setSearchByTitle] = useState('');

  const search = (event) => {
    setSearchByTitle(event.target.value)
  }
  //GetProductsFiltered
  const[filteredItems, setFilteredItems] = useState([]);

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  useEffect(() => {
    if(searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle))
  }, [items, searchByTitle])

  //GetProductsByCategory
  const[searchByCategory, setSearchByCategory] = useState('')


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
      order,
      setOrder,
      items,
      setItems,
      searchByTitle,
      search,
      filteredItems,
      searchByCategory,
      setSearchByCategory
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
};

ShoppingCartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

/*
const [items, setItems] = useState([]);
  const dataFetchRef = useRef(false);


  const fetchProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();

    setItems(data);
  }; */