import Layout from '../../Components/Layout';

import './notFound.css';

function NotFound() {

  return (
      <Layout>
        <div className='text-red-500 text-xl font-bold'>Error, not found!</div>
      </Layout>
  );
}

export default NotFound;