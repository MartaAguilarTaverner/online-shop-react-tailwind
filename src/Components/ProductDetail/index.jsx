import { XCircleIcon } from '@heroicons/react/24/solid';
import { useContext } from 'react';

import { ShoppingCartContext } from '../../Context';
import './productDetail.css';


const ProductDetail = () => {
const context = useContext(ShoppingCartContext);

  return (
    <aside className={` ${context.productDetailOpened ? 'flex' : 'hidden'} product-detail scrollable-detail flex flex-col fixed left-0 ml-8 border mt-5 border-purple-300 rounded-lg bg-white`}>
      <div className='flex justify-between items-center mt-2 mr-3 ml-3'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <button className='cursor-pointer' onClick={() => context.closeProductDetail()}>
          <XCircleIcon className='h-7 w-7 text-violet-700'></XCircleIcon>
        </button>
      </div>
      <figure className='flex items-center justify-center'>
        <img className=' h-72 p-3'  src={context.productToShow.image} alt={context.productToShow.title} />
      </figure>
      <p className='flex flex-col p-6'>
        <span className='font-extrabold text-xl mb-2'>{context.productToShow.price}$</span>
        <span className='font-medium text-lg underline mb-1'>{context.productToShow.title}</span>
        <span className='font-normal text-sm'>{context.productToShow.description}</span>
      </p>
    </aside>
  )
};

export default ProductDetail;