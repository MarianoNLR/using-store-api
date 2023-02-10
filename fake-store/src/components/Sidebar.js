import React from "react"
import { useEffect, useState } from 'react'
import NavLink from "react-bootstrap/esm/NavLink";
import Nav from 'react-bootstrap/Nav';


function Sidebar(item){
    const [result, setResult] = useState([])

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        let response = await (
            await fetch('https://fakestoreapi.com/products/categories')).json()
            setResult(response)
    }

    return(
        <Nav defaultActiveKey="/home" className="flex-column">
            
                {result && result.length > 0 ? (
                    result.map((category)=>{
                        return (
                            <NavLink>{category}</NavLink>
                        )
                    })
                ):(
                    <p>No se encontraron categorias</p>
                )}
            
        </Nav>
    )

}
    
export default Sidebar;