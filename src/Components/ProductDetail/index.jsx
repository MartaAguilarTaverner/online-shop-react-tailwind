import { XCircleIcon } from '@heroicons/react/24/solid';

import './productDetail.css';

const ProductDetail = () => {
  return (
    <aside className="product-detail flex flex-col fixed right-0 mr-4 border border-purple-300 rounded-lg bg-white ">
      <div className='flex justify-between items-center mt-2 mr-3 ml-3'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <button className=''>
          <XCircleIcon className='h-7 w-7 text-violet-700'></XCircleIcon>
        </button>
      </div>
    </aside>
  )
};

export default ProductDetail;