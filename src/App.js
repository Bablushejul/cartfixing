import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart'
import Layout from './components/Layout/Layout'
import Product from './components/Shop/Product';

function App() {

const showCart=useSelector((state)=>!state.ui.cartIsVisible)

  return (
    <Layout>
      {showCart&&<Cart />}
      <Product />
    </Layout>
  );
}

export default App;