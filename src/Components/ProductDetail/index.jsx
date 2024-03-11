import { XCircleIcon } from '@heroicons/react/24/solid';
import { useContext } from 'react';

import { ShoppingCartContext } from '../../Context';
import './productDetail.css';


const ProductDetail = () => {
const context = useContext(ShoppingCartContext);

  return (
    <aside className={` ${context.productDetailOpened ? 'flex' : 'hidden'} product-detail flex flex-col fixed right-0 mr-4 border border-purple-300 rounded-lg bg-white`}>
      <div className='flex justify-between items-center mt-2 mr-3 ml-3'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <button onClick={() => context.closeProductDetail()}>
          <XCircleIcon className='h-7 w-7 text-violet-700'></XCircleIcon>
        </button>
      </div>
    </aside>
  )
};

export default ProductDetail;