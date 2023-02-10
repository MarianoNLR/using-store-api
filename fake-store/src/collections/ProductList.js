import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';

function ProductList(props) {
    const [result, setResult] = useState([])
    //const [filter, setFilter] = useState(props.filter)
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products").then(response=> response.json()).then(data=>setResult(data))  
    },[])

    useEffect(()=>{
        if(props.filter != ""){
            fetch("https://fakestoreapi.com/products/category/".concat(props.filter)).then(response=> response.json()).then(data=>setResult(data))
        }else{
            return;
        }
        //fetch("https://fakestoreapi.com/products/category/${props.filter}").then(response=> response.json()).then(data=>setResult(data))
    },[[],props.filter])

    /* const fetchData = async () => {

        if(filter == ""){
            let response = await (  
                await fetch('https://fakestoreapi.com/products')).json()
                setResult(response)
                console.log(filter)
            return;
        }else{
            let response = await(  
                await fetch('https://fakestoreapi.com/products/category/${filter}'))
                console.log("HOLAAAAAAAAAAAAAAAA")
                setResult(response)
            return;
        }
        
    } */

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

