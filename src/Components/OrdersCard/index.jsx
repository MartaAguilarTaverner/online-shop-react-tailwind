import PropTypes from 'prop-types';


const OrdersCard = props => {
  const { totalPrice, totalProducts } = props


  return(
    <div className="flex justify-between items-center mt-4 mb-4 mr-4 ml-4 border border-violet-900" >
      <div>
        <p>
          <span>01.02.24</span>
          <span>{totalProducts}</span>
          <span>{totalPrice}$</span>
        </p>
      </div>
    </div>
  )
};

OrdersCard.propTypes = {
  totalProducts: PropTypes.string,
  totalPrice: PropTypes.number,
}

export default OrdersCard;