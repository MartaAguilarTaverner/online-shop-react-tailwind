import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context'


import Layout from '../../Components/Layout';
import Card from '../../Components/Card';
import ProductDetail from '../../Components/ProductDetail';

import './home.css';

const renderItemsToCard = (itemsToRender) => itemsToRender.map(item => <Card key={item.id} item={item} />)

const renderView = (itemsToRender) => {
  let result = <p>No Results Found</p>

  if (itemsToRender?.length > 0) {
    result = renderItemsToCard(itemsToRender)
  }

  return result
}


function Home() {
  const context = useContext(ShoppingCartContext)

  const itemsToRender = context.searchByTitle?.length > 0 ? context.filteredItems : context.items;

  return (
      <Layout>
        <div className=' mb-4'>
            <input
            className='font-normal text-lg w-80 border border-violet-700 rounded-lg py-1 px-2 focus:outline-none'
            type='text'
            placeholder='Search a product...'
            onChange={context.search}/>
          </div>
        <div className="grid grid-cols-4 w-full max-w-screen-lg">
          {renderView(itemsToRender)}
        </div>
        <ProductDetail />
      </Layout>
  );
}

export default Home;