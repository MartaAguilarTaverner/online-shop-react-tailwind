import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context'


import Layout from '../../Components/Layout';
import Card from '../../Components/Card';
import ProductDetail from '../../Components/ProductDetail';

import './home.css';

function Home() {
  const context = useContext(ShoppingCartContext)

  return (
      <Layout>
        <div className=' mb-4'>
            <input className='font-normal text-lg w-80 border border-violet-700 rounded-lg py-1 px-2' type='text' placeholder='Search a product...' />
          </div>
        <div className="grid grid-cols-4 w-full max-w-screen-lg">
          {
            context.items?.map((item) => (
              <Card key={item.id} item={item} />
            ))
          }
        </div>
        <ProductDetail />
      </Layout>
  );
}

export default Home;