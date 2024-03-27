
import { XCircleIcon } from '@heroicons/react/24/solid';

import PropTypes from 'prop-types';


const OrderCard = ({ image, title, price }) => {
  return(
    <div className="flex justify-between items-center mt-4 mb-4 mr-4 ml-4" >
      <div className=" flex flex-col item-center ">
        <figure className="h-20 w-20">
          <img className="w-full h-full rounded-lg " src={image} alt={title} />
        </figure>
        <span className="text-sm font-light mt-1">{title}</span>
      </div>
      <div className="flex items-center ">
        <span className="text-lg font-medium mr-1">{price}$</span>
        <XCircleIcon className='h6 w-6 text-violet-700' ></XCircleIcon>
      </div>
    </div>
  )
};

OrderCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
}

export default OrderCard;