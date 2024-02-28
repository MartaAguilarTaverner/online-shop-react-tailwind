import PropTypes from 'prop-types';

import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const Card = ({ item }) => {
  const context = useContext(ShoppingCartContext)

  return(
    <div className="bg-white border border-slate-300 hover:border-purple-300 cursor-pointer w-60 h-80 rounded-lg m-2 p-4">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-purple-300/50 rounded-lg text-black text-xs m-2 px-3 py-0.5">{item.category}</span>
        <img className="w-full h-full object-scale-down rounded-lg" src={item.image} alt={item.title}/>
        <button className="absolute top-0 right-0 flex justify-center items-center bg-purple-200 w-6 h-6 rounded-full p-1" onClick={() => context.setCount(context.count + 1)}>+</button>
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