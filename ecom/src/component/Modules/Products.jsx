import React, { useState } from 'react';
import { Button, Container, Card } from 'react-bootstrap';


const Products = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            product_name: "Product 1",
            price: 999,
            image: "/logo192.png"
        },
        {
            id: 2,
            product_name: "Product 2",
            price: 999,
            image: "/logo192.png"
        },
        {
            id: 3,
            product_name: "Product 3",
            price: 999,
            image: "/logo192.png"
        }
    ]);
    return (
        <Container className='row' style={{ margin:"auto"}}>
            {items.map((elem) => {
                return (
                    <Card className='cols-md-3' style={{ height: "350px", width: "250px" ,margin:"10px"}}>
                        <Card.Img variant="top"
                            style={{ height: "200px", width: "200px" }} src={process.env.PUBLIC_URL + elem.image} />
                        <Card.Body>
                            <Card.Title>{elem.product_name}</Card.Title>
                            <Card.Text>${elem.price}</Card.Text>
                            <Button>Buy Now</Button>
                        </Card.Body>
                    </Card>
                )
            })}
        </Container>

    )
}

export default Products