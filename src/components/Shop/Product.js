import ProductItem from './ProductItem';
import classes from './Product.module.css';



const DUMMYPRODUCTS=[
  {
  id:'m1',
  price:50,
  title:'my first book',
  description:'experience as a golden life'
},
{
  id:'m2',
  price:500,
  title:'my second book',
  description:'experience as a terror life'
},
{
  id:'m3',
  price:345,
  title:'my third book',
  description:'experience as a ambitious life'
},
{
  id:'m4',
  price:456,
  title:'my fourth book',
  description:'experience as a aimful life'
},
{
  id:'m5',
  price:522,
  title:'my fifth book',
  description:'experience as a goal of life',
  

}
]
const Products = (props) => {



  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMYPRODUCTS.map((product)=>(
 <ProductItem
 key={product.id}
 id={product.id}
 title={product.title}
 price={product.price}
 description={product.description}
 
/>
        ))
       
}
      </ul>
    </section>
  );
};

export default Products;