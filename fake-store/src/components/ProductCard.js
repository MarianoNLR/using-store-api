import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function ProductCard({product}) {
    return (
        <a href="#">
            <Card style={{ width: '18rem' }} className='product-card'>
                <Card.Img variant="top" src={product.image} width='100px' height='200px'/>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                </Card.Body>
            </Card>
        </a>
    )
}

export default ProductCard