import { useEffect, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import '../App.css'





function Menu(props) {

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
    <Dropdown.Menu show>
        {result && result.length > 0 ? (
                    result.map((category)=>{
                        return (
                            <Dropdown.Item className='item-navbar' onClick={(e)=>FilterByCategory({category})}>{category}</Dropdown.Item>
                        )
                        })
                    
                ):(
                    <p>No se encontraron categorias</p>
                )}
    </Dropdown.Menu>
  );
}

export default Menu;