import PropTypes from 'prop-types';

import { ArrowRightCircleIcon } from '@heroicons/react/24/solid';
import { CalendarIcon } from '@heroicons/react/24/solid';
import { ShoppingBagIcon } from '@heroicons/react/24/solid';

const OrdersCard = props => {
  const { totalPrice, totalProducts } = props

  return(
    <div className="flex justify-between items-center m-1.5 border rounded-md  border-violet-900 p-4 w-80" >
        <div className='flex justify-between w-full'>
          <div className='flex flex-col'>
            <div className=' flex items-center mb-1'>
              <CalendarIcon className='h-6 w-6 text-violet-700 mr-1'/>
              <span className='font-light text-base'>01.02.24</span>
            </div>
            <div className=' flex items-center'>
              <ShoppingBagIcon className='h-6 w-6 text-violet-700 mr-1'/>
              <span className='font-light text-base'>{totalProducts} articles</span>
            </div>

          </div>
          <div className=' flex items-center'>
            <span className='font-semibold text-xl'>{totalPrice}$</span>
            <ArrowRightCircleIcon className='h-7 w-7 text-violet-700 cursor-pointer ml-2'/>
          </div>

        </div>
    </div>
  )
};

OrdersCard.propTypes = {
  totalProducts: PropTypes.number,
  totalPrice: PropTypes.number,
}

export default OrdersCard;