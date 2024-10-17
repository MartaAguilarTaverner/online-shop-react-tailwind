import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context'


import Layout from '../../Components/Layout';
import Card from '../../Components/Card';
import ProductDetail from '../../Components/ProductDetail';

import './home.css';

function Home() {
  const context = useContext(ShoppingCartContext)

  /*
  const renderView = () => {
    if(context.searchByTitle?.lenght > 0) {
      if(context.filteredItems?.length > 0) {
        return(
          context.filteredItems?.map(item => (
            <Card key={item.id} data={item} />
          ))
        )
      } else {
        return (
          <div>There are no coincidences</div>
        )
      }

    } else {
      return (
        context.items?.map((item) => (
          <Card key={item.id} item={item} />
        ))
      )
    }
  } */


  const renderView = () => {
    const itemsToRender = context.searchByTitle?.length > 0 ? context.filteredItems : context.items;
    if (itemsToRender?.length > 0) {
      return itemsToRender.map(item =>(
        <Card key={item.id} item={item} />
      ));
    } else {
      return (<p>No Results Found</p>)
    }
  }

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
          {renderView()}
        </div>
        <ProductDetail />
      </Layout>
  );
}

export default Home;