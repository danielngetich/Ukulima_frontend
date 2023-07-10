import { useState } from "react";
import ProductList from "./ProductList";

const Products = ({products}) => {
    const [search, setSearch] = useState('')

    const handleSearch = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
    }

    // const filteredProducts = products.products.filter((product) => product.title.toLowerCase().includes(search.toLowerCase()))

    console.log(products)

    return ( 
        <>
            <div>
                <div>
                    <form onSubmit={handleSearch} className='flex justify-center items-center md:my-12 my-8'>
                        <input 
                            type="search" 
                            value={search}
                            onChange={handleSearch}
                            className="border-2 p-2 rounded-xl outline-none focus-within:border-green-500 w-full" 
                            placeholder="Searching todo..." 
                        />
                    </form>
                </div>
                <div>
                    <ProductList products={products} />
                </div>
            </div>
        </>
     );
}
 
export default Products;