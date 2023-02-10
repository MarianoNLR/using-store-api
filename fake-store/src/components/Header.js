import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import NavLink from "react-bootstrap/esm/NavLink";
import Home from '../pages/Home'

function Header(props){

    const [result, setResult] = useState([])
    const [filter, setFilter] = useState("")
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        let response = await (
            await fetch('https://fakestoreapi.com/products/categories')).json()
            setResult(response)
    }

    const FilterByCategory = async (e) =>{
        setFilter(e.category)
        props.changeValue(filter);
        console.log(filter)
    }

    return (
        <>
            <Navbar sticky="top" bg="dark" variant="dark">
                <Navbar.Brand href="localhost:3000/">
                    <img
                    alt=""
                    src="https://cdn-icons-png.flaticon.com/128/3081/3081559.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '}
                    Fake Shop
                </Navbar.Brand>
                
                
            </Navbar>
        </>
    )
}


export default Header