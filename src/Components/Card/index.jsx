import { CheckCircleIcon, ShoppingCartIcon } from '@heroicons/react/24/solid';

import PropTypes from 'prop-types';

import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";


const Card = ({ item }) => {
  const context = useContext(ShoppingCartContext)

  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.setProductToShow(productDetail);
  }

  const addProductsToCart = (event, productData) => {
    event.stopPropagation();
    context.setCount(context.count + 1);
    context.setShoppingCartProducts([...context.shoppingCartProducts, productData]);
    context.openCheckoutSideMenu();
    context.closeProductDetail();
  }

  const updateIcon = (id) => {
    const isInCart = context.shoppingCartProducts.filter(product => product.id === id).length > 0
    if (isInCart) {
      return (
        <button className="absolute top-0 right-0 flex justify-center items-center w-6 h-6 rounded-full p-1">
          <div className='mb-1'>
            <CheckCircleIcon className='h6 w-6 text-green-700' ></CheckCircleIcon>
          </div>

        </button>

      )
    } else {
      return (
        <button className="absolute top-0 right-0 flex justify-center items-center w-6 h-6 rounded-full p-1" onClick={(event) =>  addProductsToCart(event,item)}>
          <div className='mb-1'>
            <ShoppingCartIcon className='h5 w-5 text-violet-700'></ShoppingCartIcon>
          </div>
        </button>

      )
    }
  }

  return(
    <div
      className="bg-white border border-slate-300 hover:border-purple-300 cursor-pointer w-60 h-80 rounded-lg m-2 p-4"
      onClick={() =>showProduct(item)}>

      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-purple-300/50 rounded-lg text-black text-xs m-2 px-3 py-0.5">{item.category}</span>
        <img className="w-full h-full object-scale-down rounded-lg" src={item.image} alt={item.title}/>
            {updateIcon(item.id)}
      </figure>

      <p className="flex justify-between">
        <span className="text-sm font-light truncate hover:text-clip p-3 bx-2">{item.title}...</span>
        <span className="text-lg font-semibold p-2 bx-2">{item.price}$</span>
      </p>

    </div>
  )
};

Card.propTypes = {
  item: PropTypes.object,
}

export default Card;
