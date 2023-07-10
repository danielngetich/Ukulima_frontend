import Products from "../components/Shop/Products";
import ShopHero from "../components/Shop/ShopHero";

const Shop = ({products}) => {
    return ( 
        <>
           <ShopHero />
           <Products products={products} />
        </>
     );
}
 
export default Shop;