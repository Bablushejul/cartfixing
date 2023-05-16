import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart'
import Layout from './components/Layout/Layout'
import Product from './components/Shop/Product';
import { useEffect } from 'react';

function App() {

const showCart=useSelector((state)=>!state.ui.cartIsVisible)

const cart = useSelector((state)=>state.cart)

useEffect(()=>{
  fetch("https://cartfixing-default-rtdb.firebaseio.com/cart.json",{
    method:'PUT',
    body:JSON.stringify(cart)
  })
},[cart])

  return (
    <Layout>
      {showCart&&<Cart />}
      <Product />
    </Layout>
  );
}

export default App;