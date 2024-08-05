import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap'
import Product from './Product'

export default class Productlist extends Component {
    render() {
        return (
            <div className='p-5'>
                <Container>
                    <Row className='gap-3 justify-content-center'>
                        <h2 className='text-center'>Our Product</h2>
                        <Product />
                    </Row>
                </Container>
            </div>
        )
    }
}
