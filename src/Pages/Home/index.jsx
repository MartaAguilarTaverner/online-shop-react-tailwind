import { useState, useEffect, useRef } from 'react';

import Layout from '../../Components/Layout';
import Card from '../../Components/Card';

import './home.css';

function Home() {
  const [items, setItems] = useState([]);
  const dataFetchRef = useRef(false);

  //TODO FAKESTOREAPI
  const fetchProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();

    setItems(data);
  };

  //TODO PLATZIFAKESTOREAPI
  /*const fetchProducts = async () => {
    const response = await fetch('https://api.escuelajs.co/api/v1/products');
    const data = await response.json();

    setItems(data);
  };*/

  useEffect(() => {
    if (!dataFetchRef.current) {
      dataFetchRef.current = true;

      fetchProducts();
    }
  }, [])

  return (
      <Layout>
        Home
        <div className="grid grid-cols-4 w-full max-w-screen-lg">
          {
            items?.map((item) => (
              <Card key={item.id} item={item} />
            ))
          }
        </div>
      </Layout>
  );
}

export default Home;