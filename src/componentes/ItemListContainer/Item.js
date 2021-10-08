import React from 'react'
import {Card, Button} from 'react-bootstrap'


export const Item = ( {id, title, description, price, pictureUrl} ) => {
    return (
        <Card style={{ width: '18rem' }} className="m-2">
            <Card.Img variant="top" src={pictureUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>Precio: ${price}</Card.Text>
                <Button variant="primary">Comprar</Button>
            </Card.Body>
        </Card>
    )
}
