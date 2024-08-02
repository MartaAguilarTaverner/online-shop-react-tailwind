
import { XCircleIcon } from '@heroicons/react/24/solid';

import PropTypes from 'prop-types';


const OrderCard = ({ id, image, title, price, handleDelete }) => {
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
        <XCircleIcon onClick={() => handleDelete(id)} className='h6 w-6 text-red-900' ></XCircleIcon>
      </div>
    </div>
  )
};

OrderCard.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  handleDelete: PropTypes.bool,
}

export default OrderCard;