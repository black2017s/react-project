import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import { ProductList } from '../Modules/data.js'
export default class Product extends Component {
    render() {
        return (
            <>
                {
                    ProductList.map((item, index) => {
                        return (
                            <Card className='col-3 h-auto p-5'>
                                <Card.Img
                                    variant="top"
                                    src={item.image}
                                    className='h=25' />
                                <Card.Body>
                                    <Card.Title>{item.namee}</Card.Title>
                                    <Card.Text>
                                        {item.desc}
                                    </Card.Text>
                                    <Button variant='primary'>buy</Button>
                                </Card.Body>
                            </Card>
                        );
                    })
                }
            </>
        );
    }
}

