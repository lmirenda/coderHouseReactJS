import React from 'react'
import {Card, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'


export const Item = ( {id, title, description, price, pictureUrl, category} ) => {
    return (
        <Card style={{ width: '18rem' }} className="m-2">
            <Card.Img variant="top" src={pictureUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>Precio: ${price}</Card.Text>
                <Card.Text>Categoria: {category}</Card.Text>
                <Link to={`/detail/${id}`}>
                    <Button variant="primary">Detalle</Button>
                </Link>
                
            </Card.Body>
        </Card>
    )
}
