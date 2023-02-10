import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';

function ProductList(props) {
    const [result, setResult] = useState([])


    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        let response = await (
            await fetch('https://fakestoreapi.com/products')).json()
            setResult(response)
    }

    return(
        <>
            {result && result.length > 0 ?(
                result.map((product)=>{
                    return(
                        <>
                            {<ProductCard product={product}></ProductCard>}
                        </>
                    )
                })
            ):(
                <a>No hay elementos</a>
            )}
        </>
    )
}

export default ProductList

