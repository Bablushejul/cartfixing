import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart'
import Layout from './components/Layout/Layout'
import Product from './components/Shop/Product';
import Notification from './components/UI/Notification'
import { Fragment, useEffect } from 'react';
import { uiActions } from './store/ui-slice';


function App() {

  const dispatch=useDispatch()

const showCart=useSelector((state)=>!state.ui.cartIsVisible)

const cart = useSelector((state)=>state.cart)

const notification=useSelector(state=>state.ui.notification)

useEffect(()=>{

const sendCartData=async()=>{

  dispatch(uiActions.showNotification({
    status:'pending',
    title:'Sending...',
    message:'Sending data to cart'
  }))

 const response =await fetch("https://cartfixing-default-rtdb.firebaseio.com/cart.json",{
    method:'PUT',
    body:JSON.stringify(cart)
  })

  if(!response.ok){

    throw new Error('Sending cart data is failed')
  }


  dispatch(uiActions.showNotification({
    status:'succes',
    title:'Success',
    message:'Sent data to cart Successfully'
  }))

}


sendCartData().catch((error)=>{
  dispatch(uiActions.showNotification({
    status:'error',
    title:'Error',
    message:'Sending cart data is failed'
  }))

})
  
},[cart,dispatch])

  return (
    <Fragment>
     {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />} 
    <Layout>
      {showCart&&<Cart />}
      <Product />
    </Layout>
    </Fragment>
  );
}

export default App;